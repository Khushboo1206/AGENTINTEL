function Sidebar({

  activeTab,

  setActiveTab,

  handleHistory

}) {

  return (

    <div className="sidebar">

      <h2 className="sidebar-logo">

        ⚡ AgentIntel

      </h2>

      <button

        className={

          activeTab==="research"

          ?

          "sidebar-btn active-sidebar"

          :

          "sidebar-btn"

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

          activeTab==="swot"

          ?

          "sidebar-btn active-sidebar"

          :

          "sidebar-btn"

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

          activeTab==="compare"

          ?

          "sidebar-btn active-sidebar"

          :

          "sidebar-btn"

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

          activeTab==="history"

          ?

          "sidebar-btn active-sidebar"

          :

          "sidebar-btn"

        }

        onClick={handleHistory}

      >

        History

      </button>

    </div>

  );

}

export default Sidebar;