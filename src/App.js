import React from "react";
import "./styles/App.scss";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from "react-router-dom";

import { MenuProvider } from "./contexts/menu.context";
import { ToastProvider } from "react-toast-notifications";
import { PlayersProvider } from "./contexts/players.context";
// import { BirthChartProvider } from "./contexts/birthchart.context";
import { GameProvider } from "./contexts/game.context";
import { AuthProvider } from "./contexts/auth.context";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Home from "./pages/home/home.js";
import NotFound from "./pages/404/404";
import Login from "./pages/login/login";
import AddChart from "./pages/add-birth-chart/add-birth-chart.js";
import InPlay from "./pages/in-play/in-play.js";
import MyBirthChart from "./pages/my-birth-chart/my-birth-chart.js";
import Generator from "./pages/generator/generator.js";
import PublicDisplay from "./pages/public-display/public-display.js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.js";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Lato",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ToastProvider autoDismiss={true}>
          <AuthProvider>
            {/* <BirthChartProvider> */}
              <PlayersProvider>
                <GameProvider>
                  <MenuProvider>
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/login" component={Login} />
                      <ProtectedRoute
                        exact
                        path="/add-birth-chart"
                        component={AddChart}
                      />
                      {/* <Route
                        exact
                        path="/add-birth-chart"
                        component={AddChart}
                      /> */}

                      <ProtectedRoute
                        exact
                        path="/my-birth-chart"
                        component={MyBirthChart}
                      />
                      {/* <Route
                        exact
                        path="/my-birth-chart"
                        component={MyBirthChart}
                      /> */}
                      <Route exact path="/in-play" component={InPlay} />
                      <Route exact path="/generator" component={Generator} />
                      <Route
                        exact
                        path="/public-display"
                        component={PublicDisplay}
                      />
                      <Route path="*" component={NotFound} />
                    </Switch>
                  </MenuProvider>
                </GameProvider>
              </PlayersProvider>
            {/* </BirthChartProvider> */}
          </AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
