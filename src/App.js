import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { MenuProvider } from "./contexts/menu.context";
import { ToastProvider } from "react-toast-notifications";
import { PlayersProvider } from "./contexts/players.context";
import { GameProvider } from "./contexts/game.context";
import { AuthProvider } from "./contexts/auth.context";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Landing from "./pages/landing/landing.js";
import NotFound from "./pages/404/404";
import Login from "./pages/login/login";
import Controls from "./pages/controls/controls";
import AddChart from "./pages/add-birth-chart/add-birth-chart.js";
import InPlay from "./pages/in-play/in-play.js";
import MyBirthChart from "./pages/my-birth-chart/my-birth-chart.js";
import Admin from "./pages/admin/admin.js";
import PublicDisplay from "./pages/public-display/public-display.js";
import PublicGrid from "./pages/public-grid/public-grid";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.js";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Open Sans",
      "Chromate",
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
        <ToastProvider autoDismiss={true} placement={"bottom-left"}>
          <AuthProvider>
            <PlayersProvider>
              <GameProvider>
                <MenuProvider>
                  <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/controls" component={Controls} />

                    <ProtectedRoute
                      exact
                      path="/add-birth-chart/:id?"
                      component={AddChart}
                    />

                    <ProtectedRoute
                      exact
                      path="/my-birth-chart"
                      component={MyBirthChart}
                    />

                    <Route exact path="/in-play" component={InPlay} />
                    <Route exact path="/admin" component={Admin} />

                    <Route
                      exact
                      path="/public-display"
                      component={PublicDisplay}
                    />
                    <Route exact path="/public-grid" component={PublicGrid} />

                    <Route path="*" component={NotFound} />
                  </Switch>
                </MenuProvider>
              </GameProvider>
            </PlayersProvider>
          </AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
