import express from 'express';
import Employees from '../models/employees.model.js';
import { generateAccessToken, authenticateToken } from '../jwt.js';
import bcrypt from 'bcryptjs';

export const loginUser = async (req, res) => {

    const employeeID = req.body.employeeID;
    const password = req.body.password;

    // Check if user exists
    const employee = await Employees.findOne({ where: { employeeId: employeeID } });
    if (employee == null) {
        console.log("employeeId not found")
    } else {
        // Check password
        const isMatch = await bcrypt.compare(password, employee.passwordHash);

        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        } else {
            const token = generateAccessToken(employee);
            res.status(200).json({ token: token, status: "success" });
        }
    }


    try {

    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const registerUser = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;

    // Check if username exists
    const user = await Employees.findOne({ where: { username: username } });
    if (user != null) {
        return res.status(400).json({ msg: "Username already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create new user
    try {
        const newUser = await Employees.create({
            username: username,
            passwordHash: passwordHash,
            firstName: firstName,
            lastName: lastName,
            age: age
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}