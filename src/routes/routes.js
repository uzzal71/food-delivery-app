import express from "express";

import SuperAdminRoutes from "./SuperAdmin";

const routes = express.Router();

routes.use("/super-admin", SuperAdminRoutes);

export default routes;