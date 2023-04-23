/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRepos } from "../redux/popular/popular.thunk";

const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

const SelectedLanguage = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state) => state.popularReducer.selectedLanguage
  );
  const loading = useSelector((state) => state.popularReducer.loading);

  useEffect(() => {
    dispatch(getRepos(selectedLanguage));
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
            if (!loading) return dispatch(getRepos(language));
          }}
        >
          {language}
        </li>
      ))}
    </ul>
  );
};
export default SelectedLanguage;
