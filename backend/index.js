import express from "express";
import cors from "cors";
import db from "./config/database.js";
import router from "./routes/PostRoute.js";
const app = express();
try {
await db.authenticate();
console.log("Database connected");
} catch (error) {
console.error("Connection error: ", error);
}
app.use(cors());
app.use(express.json());
app.use("/posts", router);
app.listen(5000, () => console.log("Server is running on port 5000"));
