const express = require("express");
const cors = require("cors");
require("dotenv").config();
const aiRoutes = require('./routes/aiRouter');
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", aiRoutes);

const jobRoutes = require("./routes/jobs");
app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send("Job Tracker API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 const pool =require("./config/db");
 pool.connect().then(() =>console.log("PostgresSQL Connected")).catch((err) => console.error("DB Error:", err.message));