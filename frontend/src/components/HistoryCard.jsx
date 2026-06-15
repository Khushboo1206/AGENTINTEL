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

        history.map((item, index) => (

          <div
            key={index}
            className="history-item"
          >

            <h4>

              {item.company}

            </h4>

            <p>

              {item.type}

            </p>

            <small>

              {item.created_at}

            </small>

          </div>

        ))

      }

    </GlassCard>

  );
}

export default HistoryCard;