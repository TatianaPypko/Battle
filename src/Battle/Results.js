/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { battle } from "../redux/battle/battle.requests";
import { useLocation, Link } from "react-router-dom";
import PlayerPreview from "./PlayerPreview";
import AlternativeContent from "../AlternativeContent";

const Results = () => {
  const results = useSelector((state) => state.battle.results);
  const loading = useSelector((state) => state.battle.loading);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    dispatch(
      battle([params.get("playerOneName"), params.get("playerTwoName")])
    );
  }, []);

  if (loading) {
    return (
      <div className="row">
        <AlternativeContent />
      </div>
    );
  }

  if (results.error) {
    return (
      <div className="row">
        <div>{results.error}</div>
      </div>
    );
  }

  return (
    <div className="column">
      {results.winner.profile ? (
        <>
          <PlayerPreview
            avatar={results.winner.profile.avatar_url}
            userName={results.winner.profile.login}
          >
            <h2>
              WINNER: {results.winner.profile.name} (score -{" "}
              {results.winner.score})
            </h2>
            <p>Location: {results.winner.profile.location}</p>
            <p>Company: {results.winner.profile.company}</p>
            <p>Followers: {results.winner.profile.followers}</p>
            <p>Following: {results.winner.profile.following}</p>
            <p>Public repos: {results.winner.profile.public_repos}</p>
            <p>Blog: {results.winner.profile.blog}</p>
          </PlayerPreview>
          <Link className="button" to="/battle">
            New battle
          </Link>
        </>
      ) : null}
    </div>
  );
};

export default Results;
