import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import prisma from "../models";

export const getAllElections = async function (request, response) {
    try {
        const elections = await prisma.election.findMany({
            // where: {
            //     id: userId,
            // },
        });
        response.status(200).json(elections);
    } catch (error) {
        response.status(404).json({
            message: error,
        });
    }
};

export const getElectionById = async function (request, response) {
    try {
        const { electionId } = request.param;
        const userId = request.query;
        const election = await prisma.election.findFirst({
            where: {
                id: electionId,
                userId: userId,
            },
        });

        if (!election) {
            response.status(404).json({
                message: "Election not found",
            });
            return;
        }

        response.status(404).json({
            election,
        });
    } catch (error) {
        if (error instanceof Error) {
            response.status(404).json({
                message: error,
            });
        }
        response.status(404).json({
            message: error,
        });
    }
};

export const createElection = async function (request, response) {
    try {
        console.log("1");
        const { userId, mainQuestion, description, nameOrganization } =
            request.body;

        console.log("2");

        const election = await prisma.election.create({
            data: {
                userId: userId,
                mainQuestion: mainQuestion,
                description: description,
                nameOrganization: nameOrganization,
            },
        });

        console.log(election);

        response.status(200).json({
            message: "Election has been created successfully",
        });
    } catch (error) {
        console.log(error + "error");
        if (error instanceof Error) {
            response.status(404).json({
                message: error,
            });
        }
        response.status(404).json({
            message: error,
        });
    }
};

export const editElection = async function (request, response) {
    try {
        const { userId, mainQuestion, description, nameOrganization } =
            request.body;

        const election = await prisma.election.findUnique({
            where: {
                id: userId,
            },
        });

        if (!election || election.userId != userId) {
            response.status(404).json({
                message: "Access to resources denied",
            });
            return;
        }

        await prisma.election.update({
            where: {
                id: electionId,
            },
            data: {
                mainQuestion,
                description,
                nameOrganization,
            },
        });

        response.status(200).json({
            message: "Election has been updated",
        });
    } catch (error) {
        if (error instanceof Error) {
            response.status(404).json({
                message: error,
            });
        }
        response.status(404).json({
            message: error,
        });
    }
};

export const deleteElection = async function (request, response) {
    try {
        const { userid, electionId } = request.params;
        const election = await prisma.election.findUnique({
            where: {
                id: electionId,
            },
        });

        if (!election || election.userId !== userid) {
            response.status.json({
                message: "Access to resources denied",
            });
            return;
        }

        await prisma.election.delete({
            where: {
                id: electionId,
            },
        });
    } catch (error) {
        if (error instanceof Error) {
            response.status(404).json({
                message: error,
            });
        }
        response.status(404).json({
            message: error,
        });
    }
};
