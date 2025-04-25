const TqmAwardSection = () => {
    return (
      <section className="flex flex-col md:flex-row justify-between items-center px-4 lg:px-20 lg:py-10 bg-white text-gray-900 py-4">
        <div className="flex flex-col items-start space-y-2">
          <h2 className="text-4xl lg:my-8 mb-2">TQM Award 23</h2>
          <a
            href="https://slaaqp.org/wp-content/uploads/2024/07/AYANO-TQM-EXCELLENCE-AWARD.docx"
            className="text-blue-700 underline text-xs md:text-base"
          >
            AYANO-TQM-EXCELLENCE-AWARD – Submission Guidelines
          </a>
        </div>
  
        <a href="https://slaaqp.org/wp-content/uploads/2024/07/AYANO-TQM-EXCELLENCE-AWARD.docx">
        <button className="bg-[#ffd470] hover:bg-yellow-500 text-gray-800 font-semibold py-4 px-10 rounded-full shadow-md transition duration-300 text-xl lg:mt-20 mt-4">
          Download
        </button>        
        </a>
      </section>
    );
  };
  
  export default TqmAwardSection;
  