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
import { UtilitiesProvider } from "./contexts/utilities.context";
import { PlayersProvider } from "./contexts/players.context";
import { BirthChartProvider } from "./contexts/birthchart.context";
import { GameProvider } from "./contexts/game.context";

import Home from "./pages/home/home.js";
import AddChart from "./pages/add-birth-chart/add-birth-chart.js";
import InPlay from "./pages/in-play/in-play.js";
import MyBirthChart from "./pages/my-birth-chart/my-birth-chart.js";
import Generator from "./pages/generator/generator.js";
import PublicDisplay from "./pages/public-display/public-display.js";

function App() {
  return (
    <Router>
      <ToastProvider autoDismiss={true}>
        <UtilitiesProvider>
          <BirthChartProvider>
            <PlayersProvider>
              <GameProvider>
                <MenuProvider>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/add-birth-chart" component={AddChart} />
                    <Route exact path="/in-play" component={InPlay} />
                    <Route
                      exact
                      path="/my-birth-chart"
                      component={MyBirthChart}
                    />
                    <Route exact path="/generator" component={Generator} />
                    <Route
                      exact
                      path="/public-display"
                      component={PublicDisplay}
                    />
                  </Switch>
                </MenuProvider>
              </GameProvider>
            </PlayersProvider>
          </BirthChartProvider>
        </UtilitiesProvider>
      </ToastProvider>
    </Router>
  );
}

export default App;
