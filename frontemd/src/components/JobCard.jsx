import { updateJob, deleteJob } from "../services/api";

function JobCard({ job, refresh }) {
  const handleStatusChange = async (e) => {
    await updateJob(job.id, { status: e.target.value });
    refresh();
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    await deleteJob(job.id);
    refresh();
  };

  
  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <h3>{job.company}</h3>
      <p>{job.role}</p>

      <select value={job.status} onChange={handleStatusChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Rejected</option>
        <option>Selected</option>
      </select>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default JobCard;