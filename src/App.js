import TopBar from "./components/topbar/TopBar"
import Home from"./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from "./components/post/Post";
import SinglePost from "./components/singlePost/SinglePost";

function App() {
  const user = true;
  return (
    <Router>
        <TopBar />
        <Switch>
            <Route exact path = "/" >
                <Home />
            </Route>
            <Route path = "/register">
                {user ? <Home /> : <Register  />}
            </Route>
            <Route path = "/login">
                {user ? <Home /> : <Login  />}
            </Route>
            <Route path = "/write" >
                {user ? <Write /> : <Login  />}
            </Route>
            <Route path = "/settings" >
                {user ? <Settings /> : <Login  />}
            </Route>
            <Route path = "/post/:postId" >
                <Single />
            </Route>
        </Switch>
        
    </Router>
  );
}

export default App;
