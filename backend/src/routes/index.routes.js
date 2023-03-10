
// import uploadRouter from "./upload.routes"
import authRouter from "./auth.routes"
const router = function(app) {
    app.use("/auth", authRouter);

    // app.use("/uploads", uploadRouter);
}

export default router;