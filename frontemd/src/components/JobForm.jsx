import { useState } from "react";

function JobForm({ onAdd }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if (!company || !role) return;

    await onAdd({
      company,
      role,
      status: "applied",
    });

    setCompany("");
    setRole("");
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}

export default JobForm;