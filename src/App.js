import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Feed } from './pages/feed';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>

        <Route path="/login" element={ <Login /> }></Route>

        <Route path="/feed" element={ <Feed />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
