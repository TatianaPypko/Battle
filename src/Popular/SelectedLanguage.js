import { memo } from "react";

const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

const SelectedLanguage = memo(
  ({ selectedLanguage, setSelectedLanguage, loading, setSearchParams }) => {
    const handlerClick = (language) => {
      if (loading) {
        return null;
      }
      setSearchParams({ lang: language });
      setSelectedLanguage(language);
    };
    return (
      <ul className="languages">
        {languages.map((language, index) => (
          <li
            key={index}
            style={{
              color: language === selectedLanguage ? "#d0021b" : "#000000",
              cursor: loading ? "default" : "pointer",
            }}
            onClick={() => handlerClick(language)}
          >
            {language}
          </li>
        ))}
      </ul>
    );
  }
);
export default SelectedLanguage;
