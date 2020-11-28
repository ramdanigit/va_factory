import React from "react";
import Routes from "./Routes";
import themes from "./themes";
import { ThemeProvider } from "@material-ui/styles";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "antd/dist/antd.css";
import "react-perfect-scrollbar/dist/css/styles.css";

const browserHistory = createBrowserHistory();

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={themes}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
