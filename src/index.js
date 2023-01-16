import React from "react";
import ReactDOM from "react-dom";
//Step 1: import react-router functions
import { BrowserRouter, Route , NavLink, Switch} from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

/* define the NavBar component */
function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
    </div>
  );
}

function Home() {
  return <h1>Home!</h1>
}
export default Home;

function About() {
  return (
    
      <h1>This is my about component</h1>
    
  );
}
function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholde="Username"/>
        </div>
        <div>
          <input type="password" name="password" password="Password"/>
        </div>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}
//step : Change so router is coordinating what is displayed
ReactDOM.render(
  <BrowserRouter>
  <NavBar />
  <Switch>
  <Route path = "/">
    <Home />
    </Route>
    <Route path = "/about">
      <About />
    </Route>
    <Route path = "/login">
      <Login />
    </Route>
    </Switch>
    </BrowserRouter>,
    document.getElementById("root")
)

function App() {
  return <Home />;
}

ReactDOM.render(<App />, document.getElementById("root"));
