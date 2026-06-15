import GlassCard from "./GlassCard";

function SWOTCard({ swot }) {
  return (
    <GlassCard>
      <h2>SWOT Analysis</h2>

      <pre className="report-text">
        {swot}
      </pre>
    </GlassCard>
  );
}

export default SWOTCard;