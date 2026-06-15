import GlassCard from "./GlassCard";

import ExportButton from "./ExportButton";

function ComparisonCard({

  comparison

}) {

  return (

    <GlassCard>

      <div className="card-header">

        <h2>

          ⚔️ Comparison Report

        </h2>

        <ExportButton

          title="Comparison_Report"

          content={comparison}

        />

      </div>

      <pre className="report-text">

        {comparison}

      </pre>

    </GlassCard>

  );

}

export default ComparisonCard;