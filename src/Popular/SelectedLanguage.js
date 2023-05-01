/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedLanguage } from "../redux/popular/popular.slice";
import { fetchPopularRepos } from "../redux/popular/popular.requests";

const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

const SelectedLanguage = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state) => state.popular.selectedLanguage
  );
  const loading = useSelector((state) => state.popular.loading);

  useEffect(() => {
    dispatch(fetchPopularRepos(selectedLanguage));
  }, []);

  return (
    <ul className="languages">
      {languages.map((language, index) => (
        <li
          key={index}
          style={{
            color: language === selectedLanguage ? "#d0021b" : "#000000",
            cursor: loading ? "default" : "pointer",
          }}
          onClick={() => {
            if (!loading) {
              dispatch(setSelectedLanguage(language));
              dispatch(fetchPopularRepos(language));
            }
          }}
        >
          {language}
        </li>
      ))}
    </ul>
  );
};
export default SelectedLanguage;
