import GlassCard from "./GlassCard";

function ReportCard({ report }) {
  return (
    <GlassCard>
      <h2>Business Report</h2>

      <pre className="report-text">
        {report}
      </pre>
    </GlassCard>
  );
}

export default ReportCard;