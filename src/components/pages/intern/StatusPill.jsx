const StatusPill = ({ expiresAt }) => {
  const active = expiresAt && new Date(expiresAt) > new Date();

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
        active
          ? "bg-emerald-50 text-emerald-700"
          : "bg-rose-50 text-rose-700"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          active ? "bg-emerald-500" : "bg-rose-500"
        }`}
      />
      {active ? "Verified" : "Expired"}
    </span>
  );
};

export default StatusPill;