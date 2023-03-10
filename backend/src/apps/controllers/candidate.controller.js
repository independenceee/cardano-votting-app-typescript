import prisma from "../models/index.model";

const CandidateController = function () {
    return {
        getAllcandidates: async function (request, response) {
            try {
                const { ballotId } = request.query;
                const candidates = await prisma.candidate.findMany({
                    where: {
                        ballotId: ballotId,
                    },
                });
            } catch (error) {
                response.status(404).json({
                    message: error,
                });
            }
        },

        getCandidateById: async function () {
            try {
                const { ballotId } = request.query;
                const { candidateId } = request.params;

                const candidate = await prisma.candidate.findFirst({
                    where: {
                        id: candidateId,
                        ballotId: ballotId,
                    },
                });

                if (!candidate) {
                    response.status(404).json({
                        message: "Candidate not found",
                    });
                }

                response.status(200).json(candidate);
            } catch (error) {
                response.status(404).json({
                    message: error,
                });
            }
        },

        createCandidate: async function (request, response) {
            try {
                const { ballotId } = request.query;
                const { name, description, image } = request.params;

                const candidate = await prisma.candidate.create({
                    data: {
                        ballotId: ballotId,
                        name: name,
                        description: description,
                        image: image,
                    },
                });
                response.status(200).json({
                    message: "Candidate has been created successfully",
                });
            } catch (error) {
                response.status(404).json({
                    message: error,
                });
            }
        },

        updateCandidate: async function () {
            try {
                const { candidateId } = request.params;
                const { name, image, description } = request.body;
                const candidate = await prisma.candidate.updateMany({
                    where: { id: candidateId },
                    data: {
                        name: name,
                        image: image,
                        description: description,
                    },
                });
            } catch (error) {
                response.status(404).json({
                    message: error,
                });
            }
        },

        deleteCandidate: async function () {
            try {
                const { candidateId } = request.params;
                await prisma.candidate.delete({
                    where: {
                        id: candidateId,
                    },
                });

                response.status(200).json({
                    message: "Candidate deleted successfully",
                });
            } catch (error) {
                response.status(404).json({
                    message: error,
                });
            }
        },
    };
};

export default CandidateController;
