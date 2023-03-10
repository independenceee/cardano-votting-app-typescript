import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


const Authentication = (function() {
    return {
        user: async function(request, response, next) {
            try {
                const {token} = request.headers;
                if(token) {
                    response.status(404).json({
                        message: "User not authentication",
                    })
                }
              
                const result = jwt.verify(
                    token,
                    process.env.JWT_ACCESS_KEY,
                    function(error, user) {
                        if(error) {
                            response.status(404).json({message: error.message})
                        }
                        request.user = user;
                        next();
                        }
                    )
            } catch (error) {
                response.status(404).json({
                    message: error,
                })
            }
        },

        group: async function(request, response, next) {
            try {
                this.user(request, response,function () {
                    if(request.user.role === "ADMIN") {
                        return next();
                    } else {
                        response.status(200).json({
                            message: "User not addmin",
                        })
                    }
                })
            } catch(error) {
                response.status(404).json({
                    message: error,
                })
            }
        }
    }
})

export default Authentication;