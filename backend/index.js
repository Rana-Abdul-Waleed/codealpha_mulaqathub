import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import cors from "cors";
// import path from "path";
// import cookieParser from "cookie-parser";
// import { fileURLToPath } from "url";
// import userRoutes from "./routes/user.route.js";
// import authRoutes from "./routes/auth.route.js";
// import productRoutes from "./routes/product.route.js";

dotenv.config();

// __dirname fix for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// database connectivity
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB database.");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// app.use(express.json());
// app.use(
//   cors({
//     origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
//     credentials: true,
//   })
// );
// app.use(cookieParser());

// ✅ Serve static files from uploads folder
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Now URLs like http://localhost:5173/uploads/filename.jpg will work

// routes
// app.use("/backend/user", userRoutes);
// app.use("/backend/auth", authRoutes);
// app.use("/backend/product", productRoutes);

// error middleware
// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || "Internal Server Error!";
//   res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });

// run the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
