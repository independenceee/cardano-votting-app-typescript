import prisma from "../models/index.model";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";




    const register = async function(request, response) {
        try {
            
        } catch(error) {
            response.status(404).json({
                message: error,
            });
        }
    }
