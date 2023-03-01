import express from "express";
const router = express.Router();
import {
    getAllElections,
    getElectionById,
    createElection,
    editElection,
    deleteElection,
} from "../apps/controllers/election.controller";

router.get("/:id", getElectionById);
router.get("/", getAllElections);
router.post("/", createElection);
router.patch("/:id", editElection);
router.delete("/:id", deleteElection);

export default router;
