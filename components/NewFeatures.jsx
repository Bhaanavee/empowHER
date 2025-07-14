
const NewFeatures = ({ title, subtitle, content, link }) => {
  const paragraphs = content.split('\n\n'); // Split content by double line breaks
  const handleButtonClick = () => {
    window.open(link, '_blank'); // Open link in a new tab
  };

  return (
    <div className="flex-1 flex flex-col sm:max-w-[700px] min-w-[210px]">
      <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-navy-blue">
        {title}
      </h1>
      <p className="flex-1 mt-[16px] font-semibold text-[18px] text-deep-black leading-[32.4px]">
        {subtitle}
      </p>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mt-[16px] font-normal text-[16px] text-deep-black leading-[28.8px]">
          {paragraph.trim()} {/* Trim any leading or trailing whitespace */}
        </p>
      ))}
      <button type="button" onClick={handleButtonClick}
        className="mt-[20px] py-2 px-4 bg-dark-lavender text-white rounded hover:bg-rich-purple transition duration-300"
      >
        Read More
      </button>
    </div>
  );
};

export default NewFeatures;
