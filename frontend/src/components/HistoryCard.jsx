import GlassCard from "./GlassCard";

function HistoryCard({ history }) {

  return (

    <GlassCard>

      <h2>

        Report History

      </h2>

      <br />

      {

        history.length === 0

        ?

        (

          <p className="empty-text">

            No reports available yet.

          </p>

        )

        :

        (

          history.map((item) => (

            <div

              key={item.id}

              className="history-item"

            >

              <h4>

                {item.company}

              </h4>

              <p>

                {item.report_type}

              </p>

              <small>

                {item.created_at}

              </small>

            </div>

          ))

        )

      }

    </GlassCard>

  );

}

export default HistoryCard;