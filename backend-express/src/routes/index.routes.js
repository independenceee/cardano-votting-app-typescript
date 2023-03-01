import authRouter from "./auth.routes";
import electionRouter from "./election.routes";

const router = function (app) {
    app.use("/api/v1/auth", authRouter);
    app.use("/api/v1/elections", electionRouter);
};

export default router;
