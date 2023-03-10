import prisma from "../models/index.model";
import bcrypt from "bcrypt";
import { acessToken,refreshToken } from "../../configs/token.config"

const register = async function(request, response) {
        try {
            const {email, password, firstName, lastName} = request.body;
           
            const checkEmail = prisma.user.findUnique({
                where: {
                    email: email,
                }
            })

            console.log(checkEmail);

            if(!checkEmail) {
                response.status(404).json({
                    message: "Email already exists"
                })

                return 
            }
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt);


            const user = await prisma.user.create({
                data: {
                    email: email,
                    password: hashedPassword,
                    firstName: firstName,
                    lastName: lastName,
                }
            })
            response.status(200).json({
                message: "User has been created"
            })

        } catch(error) {
            response.status(404).json({
                message: error,
            });
        }
}


const login = async function( request, response ) {
    try {
        const {email, password} = request.body;
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            }
        })

        if(!user) {
            response.sattus(404).json({
                message: "Email does not exist",
            })
        }

        const validatorPassword = await bcrypt.compare(password, user.password);
        if(!validatorPassword) {
            response.status(404).json({
                message: "Invalid password",
            });
        }

        if(user && validatorPassword) {
            const acessTokens = acessToken(user);
            const refreshTokens = refreshToken(user);
            
            response.cookie("refreshToken", refreshTokens, {
                httpOnly: true,
            })
            const { password,...others} = user;
            response.status(200).json({others, acessTokens});
        }

       

    } catch(error) {
        response.status(404).json({
            message: error,
        });
    }
}

const logout = async function(request, response) {
    try {
        response.clearCookies("refreshToken", {
            secure: true,
            sameSite: "none",
        }).status(200).json({
            message: "User has been logout.",
        });
    } catch(error) {
        response.status(404).json({
            message: error,
        });
    }

}

export {
    register,
    login,
    logout
}