import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import * as historyB from "history";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import SideNav from "../SideNav/SideNav";
import "./Router.scss";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import ManagementScreen from "../../screens/ManagementScreen/ManagementScreen";
import App from "../../App";
export const history: any = historyB.createBrowserHistory();

const AppRouter = (props: any) => {
  return (
    <Router history={history}>
      <SideNav />
      {/* <Header /> */}
      {/* <Loader /> */}
      <div className="app-content">
        <Switch>
          {/* <IndexRoute component={HomeScreen} /> */}
          <Route path="/" component={HomeScreen} exact={true} />
          <Route path="/home" component={HomeScreen} exact={true} />

          <Route path="/management" component={ManagementScreen} exact={true} />
        </Switch>
      </div>
    </Router>
  );
};

// const mapStateToProps = (state: any) => {
//   return {
//     menuToggle: state.UI.toggle
//   };
// };

// export default connect(mapStateToProps)(AppRouter);

export default AppRouter;
