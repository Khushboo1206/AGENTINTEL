import jsPDF from "jspdf";

function ExportButton({

  title,

  content

}) {

  const downloadPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(22);

    doc.text(

      title,

      20,

      20

    );

    doc.setFontSize(12);

    const lines = doc.splitTextToSize(

      content,

      170

    );

    doc.text(

      lines,

      20,

      40

    );

    doc.save(

      `${title}.pdf`

    );

  };

  return (

    <button

      className="secondary-btn"

      onClick={downloadPDF}

    >

      Export PDF

    </button>

  );

}

export default ExportButton;
