import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import SignupPage from "./routes/SignupPage";

import { Router, RouteComponentProps } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <RouterPage path="/" pageComponent={<HomePage />} />
        <RouterPage path="/login" pageComponent={<LoginPage />} />
        <RouterPage path="/signup" pageComponent={<SignupPage />} />
      </Router>
    </div>
  );
}

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

export default App;
