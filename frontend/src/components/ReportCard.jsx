import GlassCard from "./GlassCard";

import ExportButton from "./ExportButton";

function ReportCard({ report }) {

  return (

    <GlassCard>

      <div className="card-header">

        <h2>

          📊 Business Report

        </h2>

        <ExportButton

          title="Business_Report"

          content={report}

        />

      </div>

      <pre className="report-text">

        {report}

      </pre>

    </GlassCard>

  );

}

export default ReportCard;