import InsuranceClaims from '../models/claims.model.js';
import { Sequelize, DataTypes } from "sequelize"

// import Fs from 'fs';
// import Csv from 'fast-csv';

export const createInsuranceClaim = async(req, res) => {
    const { insuranceId, firstName, lastName, expenseDate,amount,purpose, followUp, previousClaimId} = req.body;
    try {
        const insuranceclaim = await InsuranceClaims.create({
            
            insuranceId: insuranceId,
            firstName: firstName,
            lastName: lastName,
            expenseDate: expenseDate,
            amount: amount,
            purpose: purpose,
            followUp: followUp,
            previousClaimId: previousClaimId,
            status: "Pending",
            lastEditedClaimDate: new Date().toString()

        });
        res.status(201).json({ msg: `Insurance Claim${insuranceclaim.claimId} has been successfully created` });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

// export const getAllUmbrella = async(req, res) => {
//     try {
//         const response = await Umbrella.findAll();
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({ msg: error.message });
//     }
// }

// export const deleteUmbrella = async(req, res) => {
//     const umbrella = await Umbrella.findOne({
//         where: {
//             umbrellaId: req.params.id
//         }
//     });
//     if (!umbrella) return res.status(404).json({ msg: "Umbrella Terminal Not Found" });
//     try {
//         await Umbrella.destroy({
//             where: {
//                 umbrellaId: umbrella.umbrellaId
//             }
//         });
//         res.status(201).json({ msg: `Umbrella ${umbrella.umbrellaId} has been successfully deleted.` });
//     } catch (error) {
//         res.status(500).json({ msg: error.message });
//     }
// }

// export const uploadUmbrellas = async(req, res) => {
//     try {
//         if (req.file == undefined) {
//             return res.status(400).send("Please upload a CSV File!");
//         }

//         let umbrellas = [];
//         let path = "./resources/static/assets/uploads/" + req.file.filename;
//         Fs.createReadStream(path)
//             .pipe(Csv.parse({ headers: true }))
//             .on("error", (error) => {
//                 throw error.message;
//             })
//             .on("data", (row) => {
//                 row['lastTimeRented'] = "1970-01-01 00:00:00"
//                 if (row['isAvailable'] === "TRUE") {
//                     row['isAvailable'] = true
//                 } else {
//                     row['isAvailable'] = false
//                 }
//                 delete row[''];
//                 umbrellas.push(row)
//             })
//             .on("end", () => {
//                 Umbrella.bulkCreate(umbrellas)
//                     .then(() => {
//                         res.status(200).send({
//                             message: "Uploaded the file successfully: " + req.file.originalname,
//                         });
//                     })
//                     .catch((error) => {
//                         res.status(500).send({
//                             message: "Fail to import data into database!",
//                             error: error.message,
//                         });
//                     });
//             });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             message: "Could not upload the file: " + req.file.originalname,
//         });
//     }
// }