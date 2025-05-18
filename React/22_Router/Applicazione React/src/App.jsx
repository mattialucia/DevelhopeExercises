import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import ShowGithubUser from "./components/ShowGithubUser";
import GithubUserList from "./components/GithubUserList";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/users">GitHub Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="Mattia" />} />
        <Route path="/counter" element={<Counter initialValue={0} incrementAmount={1} />} />
        <Route path="/users" element={<GithubUserList />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="*" element={<h2>Error 404: Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
