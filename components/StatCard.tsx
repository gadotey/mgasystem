
type StatCardProps = {
  label: string;
  value: string;
  note: string;
};

export default function StatCard({
  label,
  value,
  note,
}: StatCardProps) {
  return (
    <div className="card">
      <div className="card-label">{label}</div>
      <div className="card-value">{value}</div>
      <div className="card-note">{note}</div>
    </div>
  );
}
