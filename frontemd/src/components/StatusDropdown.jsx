function StatusDropdown({ currentStatus, onChange }) {
  const statuses = [
    "Applied",
    "Interview",
    "Offer",
    "Rejected",
  ];

  return (
    <select
      value={currentStatus}
      onChange={(e) => onChange(e.target.value)}
    >
      {statuses.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
}

export default StatusDropdown;