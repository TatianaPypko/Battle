/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { battle } from "../api";
import PlayerPreview from "./PlayerPreview";
import AlternativeContent from "../AlternativeContent";

const Results = () => {
  const location = useLocation();
  const initialValue = {
    loading: false,
    winner: {},
    loser: {},
    error: null,
  };
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    setState((prev) => ({ ...prev, loading: true }));
    battle([params.get("playerOneName"), params.get("playerTwoName")])
      .then((data) => {
        setState((prev) => ({ ...prev, winner: data[0], loser: data[1] }));
      })
      .catch((error) => {
        setState((prev) => ({ ...prev, error }));
      })
      .finally((data) => {
        setState((prev) => ({ ...prev, loading: false }));
      });
  }, []);

  if (state.loading) {
    return (
      <div className="row">
        <AlternativeContent />
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="row">
        <div>{state.error}</div>
      </div>
    );
  }

  return (
    <div className="column">
      {state.winner.profile ? (
        <>
          <PlayerPreview
            avatar={state.winner.profile.avatar_url}
            userName={state.winner.profile.login}
          >
            <h2>
              WINNER: {state.winner.profile.name} (score - {state.winner.score})
            </h2>
            <p>Location: {state.winner.profile.location}</p>
            <p>Company: {state.winner.profile.company}</p>
            <p>Followers: {state.winner.profile.followers}</p>
            <p>Following: {state.winner.profile.following}</p>
            <p>Public repos: {state.winner.profile.public_repos}</p>
            <p>Blog: {state.winner.profile.blog}</p>
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
