import { useSelector } from "react-redux";

const Repos = () => {
  const loading = useSelector((state) => state.popular.loading);
  const repos = useSelector((state) => state.popular.repos);
  const error = useSelector((state) => state.popular.error);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul className="popular-list">
      {repos?.length > 0
        ? repos.map((repo, index) => {
            return (
              <li key={repo.id} className={"popular-item"}>
                <div className="popular-rank">#{index + +1}</div>
                <ul className="space-list-items">
                  <li>
                    <img
                      className="avatar"
                      src={repo.owner.avatar_url}
                      alt="Avatar"
                    />
                  </li>
                  <li>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                      {repo.name}
                    </a>
                  </li>
                  <li>@{repo.owner.login}</li>
                  <li>{repo.stargazers_count} stars</li>
                </ul>
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default Repos;
