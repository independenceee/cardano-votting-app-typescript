import prisma from "../models/index.model";

const BallotController = function () {
    return {
        getAllBallots: async function (request, response) {
            try {
                const ballots = await prisma.ballot.findMany();
                response.status(200).json(ballots);
            } catch (error) {
                response.status(404).json({
                    message: error,
                });
            }
        },

        getBallotById: async function (request, response) {
            try {
                const { ballotId } = request.params;
                const ballot = await prisma.ballot.findFirst({
                    where: {
                        id: ballotId,
                    },
                });

                if (ballot) {
                    response.status(404).json({
                        message: "Ballot not found",
                    });
                }

                response.status(200).json(ballot);
            } catch (error) {
                response.status(404).json({
                    message: error,
                });
            }
        },

        createBallot: async function (request, response) {
            try {
                const { name, description, image, addressWallet } =
                    request.body;
                const ballot = await prisma.ballot.create({
                    data: {
                        name: name,
                        description: description,
                        image: image,
                        addressWallet: addressWallet,
                    },
                });

                response.status(200).json({
                    message: "Ballot has been created successfully",
                });
            } catch (error) {
                response.status(404).json({
                    message: error,
                });
            }
        },

        updateBallot: async function (request, response) {
            try {
                const { id } = request.params;
                const { name, description, image, addressWallet } =
                    request.body;
                const ballot = await prisma.ballot.updateMany({
                    where: {
                        id: id,
                    },
                    data: {
                        name: name,
                        description: description,
                        image: image,
                        addressWallet: addressWallet,
                    },
                });

                response.status(200).json({
                    message: "Updated successfully",
                });
            } catch (error) {
                response.status(404).json({
                    message: error,
                });
            }
        },

        deleteBallotById: async function (request, response) {
            try {
                const { id } = request.params;
                await prisma.ballot.delete({
                    where: {
                        id: id,
                    },
                });

                response.status(200).json({
                    message: "Ballot deleted successfully",
                });
            } catch (error) {
                response.status(404).json({
                    message: error,
                });
            }
        },
    };
};

export default BallotController;
