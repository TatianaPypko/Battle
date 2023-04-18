import { useState } from "react";

const PlayerInput = ({ id, onSubmit, label }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username) onSubmit(id, username);
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
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};
export default PlayerInput;
