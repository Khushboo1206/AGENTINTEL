import GlassCard from "./GlassCard";

function ComparisonCard({ comparison }) {
  return (
    <GlassCard>
      <h2>Comparison Report</h2>

      <pre className="report-text">
        {comparison}
      </pre>
    </GlassCard>
  );
}

export default ComparisonCard;