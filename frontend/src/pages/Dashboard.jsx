import { useState } from "react";

import {
  analyzeCompany,
  generateSwot,
  compareCompanies,
  getHistory
} from "../services/api";

import Loader from "../components/Loader";
import ReportCard from "../components/ReportCard";
import SWOTCard from "../components/SWOTCard";
import ComparisonCard from "../components/ComparisonCard";
import HistoryCard from "../components/HistoryCard";
import GlassCard from "../components/GlassCard";
import Navbar from "../components/Navbar";

import toast from "react-hot-toast";

function Dashboard() {

  const [company, setCompany] = useState("");

  const [company1, setCompany1] = useState("");

  const [company2, setCompany2] = useState("");

  const [report, setReport] = useState("");

  const [swot, setSwot] = useState("");

  const [comparison, setComparison] = useState("");

  const [history, setHistory] = useState([]);

  const [loading, setLoading] = useState(false);

  const [activeTab, setActiveTab] =
    useState("research");


  // =====================
  // RESEARCH
  // =====================

  const handleResearch = async () => {

    if (!company.trim()) {

      toast.error(
        "Enter a company name"
      );

      return;
    }

    const toastId =
      toast.loading(
        "Generating research..."
      );

    try {

      setLoading(true);

      setSwot("");

      setComparison("");

      const response =

        await analyzeCompany(
          company
        );

      setReport(
        response.data.report
      );

      setActiveTab(
        "research"
      );

      toast.success(
        "Research completed",
        {
          id: toastId
        }
      );

    }

    catch (error) {

      console.error(error);

      toast.error(
        "Research failed",
        {
          id: toastId
        }
      );

    }

    finally {

      setLoading(false);

    }

  };


  // =====================
  // SWOT
  // =====================

  const handleSwot = async () => {

    if (!company.trim()) {

      toast.error(
        "Enter a company name"
      );

      return;
    }

    const toastId =
      toast.loading(
        "Generating SWOT..."
      );

    try {

      setLoading(true);

      setReport("");

      setComparison("");

      const response =

        await generateSwot(
          company
        );

      setSwot(
        response.data.swot
      );

      setActiveTab(
        "swot"
      );

      toast.success(
        "SWOT generated",
        {
          id: toastId
        }
      );

    }

    catch (error) {

      console.error(error);

      toast.error(
        "SWOT failed",
        {
          id: toastId
        }
      );

    }

    finally {

      setLoading(false);

    }

  };


  // =====================
  // COMPARE
  // =====================

  const handleCompare = async () => {

    if (

      !company1.trim()

      ||

      !company2.trim()

    ) {

      toast.error(
        "Enter both companies"
      );

      return;
    }

    const toastId =

      toast.loading(
        "Comparing companies..."
      );

    try {

      setLoading(true);

      setReport("");

      setSwot("");

      const response =

        await compareCompanies(

          company1,

          company2

        );

      setComparison(

        response.data
        .comparison_report

      );

      setActiveTab(

        "compare"

      );

      toast.success(

        "Comparison completed",

        {

          id: toastId

        }

      );

    }

    catch (error) {

      console.error(error);

      toast.error(

        "Comparison failed",

        {

          id: toastId

        }

      );

    }

    finally {

      setLoading(false);

    }

  };


  // =====================
  // HISTORY
  // =====================

  const handleHistory = async () => {

    const toastId =

      toast.loading(

        "Loading history..."

      );

    try {

      setLoading(true);

      const response =

        await getHistory();

      setHistory(

        response.data

      );

      setActiveTab(

        "history"

      );

      toast.success(

        "History loaded",

        {

          id: toastId

        }

      );

    }

    catch (error) {

      console.error(error);

      toast.error(

        "History unavailable",

        {

          id: toastId

        }

      );

    }

    finally {

      setLoading(false);

    }

  };


  return (

    <div className="dashboard-container">

      <Navbar />

      <div

        className=

        "dark-glow left-glow"

      ></div>

      <div

        className=

        "dark-glow right-glow"

      ></div>


      {/* HERO */}

      <div className="hero-card">

        <p className="hero-tag">

          AI Market Intelligence

        </p>

        <h1

          className=

          "dashboard-title"

        >

          AgentIntel

        </h1>

        <p

          className=

          "dashboard-subtitle"

        >

          Research companies,

          generate SWOT analyses

          and benchmark

          competitors using AI.

        </p>

      </div>


      <div className="dashboard-grid">


        {/* LEFT PANEL */}

        <GlassCard>

          <h3>

            Company Intelligence

          </h3>

          <p

            className=

            "section-subtitle"

          >

            Generate company

            research and SWOT.

          </p>


          <input

            className=

            "company-input"

            placeholder=

            "Microsoft"

            value={company}

            onChange={(e)=>

              setCompany(

                e.target.value

              )

            }

          />


          <div className="button-group">

            <button

              className=

              "primary-btn"

              onClick={

                handleResearch

              }

            >

              Analyze

            </button>


            <button

              className=

              "secondary-btn"

              onClick={

                handleSwot

              }

            >

              SWOT

            </button>

          </div>


          <hr

            style={{

              margin:"28px 0",

              borderColor:

              "#27272a"

            }}

          />


          <h3>

            Competitor Analysis

          </h3>


          <input

            className=

            "company-input"

            placeholder=

            "Google"

            value={company1}

            onChange={(e)=>

              setCompany1(

                e.target.value

              )

            }

          />


          <input

            className=

            "company-input"

            placeholder=

            "Microsoft"

            value={company2}

            onChange={(e)=>

              setCompany2(

                e.target.value

              )

            }

          />


          <button

            className=

            "primary-btn"

            onClick={

              handleCompare

            }

          >

            Compare

          </button>

        </GlassCard>


        {/* RIGHT PANEL */}

        <div className="results-section">

          <div className="tabs">

            <button

              className={

                activeTab ===

                "research"

                ?

                "tab active-tab"

                :

                "tab"

              }

              onClick={()=>

                setActiveTab(

                  "research"

                )

              }

            >

              Research

            </button>


            <button

              className={

                activeTab ===

                "swot"

                ?

                "tab active-tab"

                :

                "tab"

              }

              onClick={()=>

                setActiveTab(

                  "swot"

                )

              }

            >

              SWOT

            </button>


            <button

              className={

                activeTab ===

                "compare"

                ?

                "tab active-tab"

                :

                "tab"

              }

              onClick={()=>

                setActiveTab(

                  "compare"

                )

              }

            >

              Compare

            </button>


            <button

              className={

                activeTab ===

                "history"

                ?

                "tab active-tab"

                :

                "tab"

              }

              onClick={

                handleHistory

              }

            >

              History

            </button>

          </div>


          {loading &&

            <Loader />

          }


          {!loading &&

          !report &&

          !swot &&

          !comparison &&

          activeTab !==

          "history" && (

            <GlassCard>

              <h2

                className=

                "empty-title"

              >

                Ready to Analyze

              </h2>

              <p

                className=

                "empty-text"

              >

                Generate company research,

                SWOT analyses and

                competitor intelligence.

              </p>

            </GlassCard>

          )}


          {!loading &&

          activeTab ===

          "research" &&

          report && (

            <ReportCard

              report={report}

            />

          )}


          {!loading &&

          activeTab ===

          "swot" &&

          swot && (

            <SWOTCard

              swot={swot}

            />

          )}


          {!loading &&

          activeTab ===

          "compare" &&

          comparison && (

            <ComparisonCard

              comparison=

              {comparison}
            />
          )}
          {!loading &&
          activeTab ===
          "history" && (
            <HistoryCard
              history={history}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;