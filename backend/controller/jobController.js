const pool = require("../config/db");
const getJobs =async(req, res) => {
  const result = await pool.query("SELECT * FROM jobs ORDER BY id DESC");
  res.json(result.rows);
};

const validStatus = [
  "applied",
  "interviewing",
  "offered",
  "rejected",
];

// Create Job
exports.createJob = async (req, res) => {
  try {
    const { company, role, status, applied_date, notes } = req.body;

    if (!validStatus.includes(status)) {
      return res.status(400).json({
        error: "Invalid status. Must be one of: applied, interviewing, offered, rejected",
      });
    }

    const result = await pool.query(
      `INSERT INTO jobs (company, role, status, applied_date, notes)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [company, role, status, applied_date, notes]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};

// Get All Jobs
exports.getAllJobs = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM jobs ORDER BY id DESC"
    );

    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};

// Get Single Job
exports.getJobById = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM jobs WHERE id = $1",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};

// Update Job
exports.updateJob = async (req, res) => {
  try {
    const { status } = req.body;

    if (!validStatus.includes(status)) {
      return res.status(400).json({
        error: "Invalid status. Must be one of: applied, interviewing, offered, rejected",
      });
    }

    const result = await pool.query(
      "UPDATE jobs SET status = $1 WHERE id = $2 RETURNING *",
      [status, req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};

// Delete Job
exports.deleteJob = async (req, res) => {
  try {
    const result = await pool.query(
      "DELETE FROM jobs WHERE id = $1 RETURNING *",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({
      message: "Job deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};