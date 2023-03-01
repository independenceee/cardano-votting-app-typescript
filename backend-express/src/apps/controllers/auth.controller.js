import prisma from "../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export async function register(request, response) {
    try {
        const { firstName, lastName, email, password } = request.body;
        const checkEmail = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (checkEmail) {
            response.status(404).json({
                message: "User already exists",
            });
            return;
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        const user = await prisma.user.create({
            data: {
                email: email,
                hash: hashPassword,
                firstName: firstName,
                lastName: lastName,
            },
        });

        response.status(200).json({
            message: "User has been created",
        });
    } catch (error) {
        response.status(400).json({
            message: error,
        });
    }
}

export async function login(request, response) {
    try {
        const { email, password } = request.body;
        const checkEmail = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        console.log(checkEmail);

        if (!checkEmail) {
            response.status(404).json({
                message: "User not found",
            });
            return;
        }
        const checPassword = bcrypt.compareSync(password, checkEmail.hash);
        if (!checPassword) {
            return response.status(404).json("Wrong password or email");
        }

        const token = jwt.sign({ id: checkEmail.id }, process.env.SECRET_KEY);
        const { hash, ...other } = checkEmail;
        response
            .cookie("accessToken", token, {
                httpOnly: true,
            })
            .status(200)
            .json({
                other,
                asset_token: token,
            });
    } catch (error) {
        response.status(404).json({
            message: error,
        });
    }
}

export async function logout(request, response) {
    try {
        response
            .clearCookie("accessToken", {
                secure: true,
                sameSite: "none",
            })
            .status(200)
            .json({
                message: "User has been logout.",
            });
    } catch (error) {
        response.status(404).json({
            message: error,
        });
    }
}
