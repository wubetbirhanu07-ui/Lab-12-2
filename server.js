import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.get("/api/fun-fact", async (req, res) => {
  try {
    const response = await axios.get(
      "https://uselessfacts.jsph.pl/api/v2/facts/random"
    );

    res.json({
      fact: response.data.text
    });

  } catch (error) {
    res.status(500).json({ error: "Could not fetch fun fact" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});