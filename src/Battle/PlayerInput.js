import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "../redux/battle/battle.requests";

const PlayerInput = ({ id, label }) => {
  const [userName, setUsername] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName) {
      const data = {
        [`${id}Name`]: userName,
        [`${id}Image`]: `https://github.com/${userName}.png?size200`,
        userName,
      };
      dispatch(getProfile(data));
    }
  };

  return (
    <form className="column" onSubmit={handleSubmit}>
      <label className="header" htmlFor="username">
        {label}
      </label>
      <input
        type="text"
        id="username"
        placeholder="Github username"
        autoComplete="off"
        value={userName}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};
export default PlayerInput;
