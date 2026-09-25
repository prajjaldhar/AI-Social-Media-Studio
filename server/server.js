import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { generateSocialPost } from "./services/aiGenerator.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/*
  Health Check
*/
app.get("/api/health", (req, res) => {
  res.json({
    message: "Social Media Studio API is running 🚀",
  });
});

/*
  Generate Social Media Post
*/
app.post("/api/generate", async (req, res) => {
  try {
    const { businessName, businessType, offer } = req.body;

    // Validate input
    if (!businessName || !businessType || !offer) {
      return res.status(400).json({
        message: "Business name, type and offer are required.",
      });
    }

    // Ask Ollama to generate the content
    const result = await generateSocialPost({
      businessName,
      businessType,
      offer,
    });

    // Send AI result to frontend
    res.json(result);
  } catch (error) {
    console.error("Generate Error:", error);

    res.status(500).json({
      message: "Failed to generate social media content.",
    });
  }
});

/*
  Start Server
*/
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
