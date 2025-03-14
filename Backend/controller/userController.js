import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { createTokenAndSaveCookie } from "../jwtToken/generateToken.js"

export const signup = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password does not match",
            })
        }
        // check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exist",
            })
        }



        // secure password 
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10/*no. of round to hashed*//*callback function*/)
        }
        catch (err) {
            return res.status(400).json({
                success: false,
                message: "error in hashing password",
            })
        }

        // store entry in DB 
        const user = await User.create({
            name, email, password: hashedPassword
        });


        // generating token 
        createTokenAndSaveCookie(user._id, res);
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        })
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered,please try again.....",
        })
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(401).json({
                success: false,
                message: "Please fill all the details",
            });
        }

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(401).json({
                success: false,
                message: "User does not exist",
            });
        }


        try {
            if (await bcrypt.compare(password, existingUser.password)) {
                // Password matched
                createTokenAndSaveCookie(existingUser._id, res);
                res.status(200).json({
                    success: true,
                    message: "User logged in successfully",
                    user: {
                        _id: existingUser._id,
                        name: existingUser.name,
                        email: existingUser.email
                    }
                })


            } else {
                return res.status(403).json({
                    success: false,
                    message: "Incorrect password",
                });
            }
        } catch (err) {
            console.log("password", password);
            console.log("DB password", existingUser.password);
            return res.status(400).json({
                success: false,
                message: "Error verifying password",
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be logged in, please try again.",
        });
    }
};


export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt");

        res.status(200).json({
            success: true,
            message: "User logged out successfully",
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be logged out, please try again.",
        });
    }
};
