import GlassCard from "./GlassCard";

import ExportButton from "./ExportButton";

function SWOTCard({ swot }) {

  return (

    <GlassCard>

      <div className="card-header">

        <h2>

          🎯 SWOT Analysis

        </h2>

        <ExportButton

          title="SWOT_Analysis"

          content={swot}

        />

      </div>

      <pre className="report-text">

        {swot}

      </pre>

    </GlassCard>

  );

}

export default SWOTCard;