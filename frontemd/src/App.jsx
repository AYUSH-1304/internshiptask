import "./App.css";
import { useEffect, useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import CoverLetter from "./components/CoverLetter";

import {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
} from "./services/api";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all jobs
  const fetchJobs = async () => {
    try {
      setLoading(true);
      const data = await getJobs();
      setJobs(data);
      setError("");
    } catch (err) {
      setError("Failed to load jobs.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Add a new job
  const handleAddJob = async (job) => {
    try {
      const newJob = await createJob(job);
      setJobs((prevJobs) => [newJob, ...prevJobs]);
    } catch (err) {
      alert("Failed to add job.");
      console.error(err);
    }
  };

  // Update job status
  const handleStatusChange = async (id, status) => {
    try {
      const updatedJob = await updateJob(id, { status });

      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job.id === id ? updatedJob : job
        )
      );
    } catch (err) {
      alert("Failed to update status.");
      console.error(err);
    }
  };

  // Delete a job
  const handleDelete = async (id) => {
    try {
      await deleteJob(id);

      setJobs((prevJobs) =>
        prevJobs.filter((job) => job.id !== id)
      );
    } catch (err) {
      alert("Failed to delete job.");
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Job Application Tracker</h1>
       
      <JobForm onAdd={() =>window.location.reload()} />

    
        <JobList/>
<CoverLetter/>
    </div>
  );
}

export default App;
