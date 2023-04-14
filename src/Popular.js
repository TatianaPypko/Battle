import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchPopularRepos } from "./api";
import SelectedLanguage from "./SelectedLanguage";
import Repos from "./Repos";
import AlternativeContent from "./AlternativeContent";

const Popular = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const alternateList = Array.from({ length: 20 }, (_, i) => i + 1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const paramLang = searchParams.get("lang");
    if (!paramLang) {
      setSearchParams({ lang: selectedLanguage });
    } else {
      setSelectedLanguage(paramLang);
    }
    setLoading(true);

    fetchPopularRepos(paramLang || selectedLanguage)
      .then((data) => {
        return setRepos(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [searchParams, selectedLanguage, setSearchParams]);

  if (error) {
    return "Error";
  }

  return (
    <>
      <SelectedLanguage
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        loading={loading}
        setSearchParams={setSearchParams}
      />
      {loading ? (
        <ul className="popular-list">
          {alternateList.map((item, index) => (
            <AlternativeContent key={index} />
          ))}
        </ul>
      ) : (
        <Repos repos={repos} />
      )}
    </>
  );
};

export default Popular;
