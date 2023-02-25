import Employees from '../models/employees.model.js';
import { Sequelize, DataTypes } from "sequelize"

import Fs from 'fs';
import Csv from 'fast-csv';

export const createUmbrella = async (req, res) => {
    const { isAvailable, lastUmbrellaTerminalLocation, lastRentedBy, lastTimeRented } = req.body;
    try {
        const umbrella = await Umbrella.create({
            isAvailable: isAvailable,
            lastUmbrellaTerminalId: lastUmbrellaTerminalLocation,
            lastRentedBy: lastRentedBy,
            lastTimeRented: lastTimeRented
        });
        res.status(201).json({ msg: `Umbrella ${umbrella.umbrellaId} has been successfully created` });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const getAllUmbrella = async (req, res) => {
    try {
        const response = await Umbrella.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const deleteUmbrella = async (req, res) => {
    const umbrella = await Umbrella.findOne({
        where: {
            umbrellaId: req.params.id
        }
    });
    if (!umbrella) return res.status(404).json({ msg: "Umbrella Terminal Not Found" });
    try {
        await Umbrella.destroy({
            where: {
                umbrellaId: umbrella.umbrellaId
            }
        });
        res.status(201).json({ msg: `Umbrella ${umbrella.umbrellaId} has been successfully deleted.` });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const uploadUmbrellas = async (req, res) => {
    try {
        if (req.file == undefined) {
            return res.status(400).send("Please upload a CSV File!");
        }

        let umbrellas = [];
        let path = "./resources/static/assets/uploads/" + req.file.filename;
        Fs.createReadStream(path)
            .pipe(Csv.parse({ headers: true }))
            .on("error", (error) => {
                throw error.message;
            })
            .on("data", (row) => {
                row['lastTimeRented'] = "1970-01-01 00:00:00"
                if (row['isAvailable'] === "TRUE") {
                    row['isAvailable'] = true
                } else {
                    row['isAvailable'] = false
                }
                delete row[''];
                umbrellas.push(row)
            })
            .on("end", () => {
                Umbrella.bulkCreate(umbrellas)
                    .then(() => {
                        res.status(200).send({
                            message: "Uploaded the file successfully: " + req.file.originalname,
                        });
                    })
                    .catch((error) => {
                        res.status(500).send({
                            message: "Fail to import data into database!",
                            error: error.message,
                        });
                    });
            });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Could not upload the file: " + req.file.originalname,
        });
    }
}