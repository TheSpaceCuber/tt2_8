import express from 'express';
import Employees from '../models/employees.model.js';
import { generateAccessToken, authenticateToken } from '../jwt.js';

export const loginUser = async(req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    // Check if user exists
    const user = await Employees.findOne({ where: { username: username } });
    console.log(user);
    if (user == null) {
        console.log("Username not found")
    } else {
        // Check password
        const isMatch = await bcrypt.compare(password, user.passwordHash);

        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        } else {
            const token = generateAccessToken(user);
            res.status(200).json({ token: token, status: "success" });
        }
    }


    try {

    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const registerUser = async(req, res) => {
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