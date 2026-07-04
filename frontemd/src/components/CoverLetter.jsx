import { useState } from "react";
import { generateCoverLetter } from "../services/api";

function CoverLetter() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [notes, setNotes] = useState("");
  const [tone, setTone] = useState("formal");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);

      const res = await generateCoverLetter({
        company,
        role,
        notes,
        tone,
      });

      setResult(res.coverLetter);
    } catch (err) {
      alert("Error generating cover letter");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>AI Cover Letter Generator</h2>

      <input placeholder="Company" onChange={(e) => setCompany(e.target.value)} />
      <input placeholder="Role" onChange={(e) => setRole(e.target.value)} />
      <textarea placeholder="Notes" onChange={(e) => setNotes(e.target.value)} />

      <select onChange={(e) => setTone(e.target.value)}>
        <option value="formal">Formal</option>
        <option value="friendly">Friendly</option>
        <option value="concise">Concise</option>
      </select>

      <button onClick={handleGenerate}>
        {loading ? "Generating..." : "Generate"}
      </button>

      <pre>{result}</pre>
    </div>
  );
}

export default CoverLetter;