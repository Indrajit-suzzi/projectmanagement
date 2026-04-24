import express from "express";
import cors from "cors";

const app = express();

// Basic configurations
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// Cors configurtions
app.use(
  cors({
    origin: process.env.CORS_ERIGIN?.split(",") || "http://localhost:5173",
    Credential: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.get("/", (req, res) => {
  res.send("welcome to basecampy");
});

export default app;
