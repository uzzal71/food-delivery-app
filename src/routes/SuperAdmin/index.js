import express from "express"

import CategoryRoutes from "./CategoryRoutes";

const SuperAdminRoutes = express.Router();

SuperAdminRoutes.use("/categories", CategoryRoutes);

export default SuperAdminRoutes;