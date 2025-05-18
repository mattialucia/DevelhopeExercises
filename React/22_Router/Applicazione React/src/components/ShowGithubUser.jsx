import { useParams } from "react-router-dom";
import GithubUser from "./GitHubUser";

const ShowGithubUser = () => {
  const { username } = useParams();
  return <GithubUser username={username} />;
};

export default ShowGithubUser;
