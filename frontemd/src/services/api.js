const API_URL = import.meta.env.VITE_API_URL;

export async function getJobs() {
  const response = await fetch(`${API_URL}/jobs`);

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return response.json();
}

export async function createJob(job) {
  const response = await fetch(`${API_URL}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });

  if (!response.ok) {
    throw new Error("Failed to create job");
  }

  return response.json();
}

export async function updateJob(id, data) {
  const response = await fetch(`${API_URL}/jobs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update job");
  }

  return response.json();
}

export async function deleteJob(id) {
  const response = await fetch(`${API_URL}/jobs/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete job");
  }

  return true;
}
export async function generateCoverLetter(data) {
  const response = await fetch(`${API_URL}/cover-letter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error("Failed to generate cover letter");
  }

  return response.json();
}