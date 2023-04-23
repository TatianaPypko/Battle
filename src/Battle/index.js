/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from "react-redux";
import { resetPlayersData } from "../redux/buttle/buttle.thunk";
import { Link } from "react-router-dom";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import { useEffect } from "react";

const Battle = () => {
  const playersData = useSelector((state) => state.battleReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (playersData.playerOneImage || playersData.playerTwoImage) {
      handleResert("playerOne");
      handleResert("playerTwo");
    }
  }, []);

  const handleResert = (id) => {
    const data = {
      [`${id}Name`]: "",
      [`${id}Image`]: null,
    };
    dispatch(resetPlayersData(data));
  };

  return (
    <div>
      <div className="row">
        {!playersData.playerOneImage ? (
          <PlayerInput id="playerOne" label="Player 1" />
        ) : (
          <PlayerPreview
            avatar={playersData.playerOneImage}
            userName={playersData.playerOneName}
          >
            <button className="reset" onClick={() => handleResert("playerOne")}>
              Resert
            </button>
          </PlayerPreview>
        )}
        {!playersData.playerTwoImage ? (
          <PlayerInput id="playerTwo" label="Player 2" />
        ) : (
          <PlayerPreview
            avatar={playersData.playerTwoImage}
            userName={playersData.playerTwoName}
          >
            <button className="reset" onClick={() => handleResert("playerTwo")}>
              Resert
            </button>
          </PlayerPreview>
        )}
      </div>
      {playersData.playerOneImage && playersData.playerTwoImage ? (
        <Link
          className="button"
          to={{
            pathname: "results",
            search: `playerOneName=${playersData.playerOneName}&playerTwoName=${playersData.playerTwoName}`,
          }}
        >
          Battle
        </Link>
      ) : null}
    </div>
  );
};

export default Battle;
