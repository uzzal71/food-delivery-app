import express from "express"

import CategoryRoutes from "./CategoryRoutes";

const SuperAdminRoutes = express.Router();

SuperAdminRoutes.use("/super-admin/categories", CategoryRoutes);

export default SuperAdminRoutes;