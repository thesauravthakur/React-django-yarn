import React from "react";
import { Route } from "react-router-dom";
import Hoc from "../hoc/hoc";
import Login from "../adminUI/Login";
import Signup from "../adminUI/Signup";
import CustomLayout from '../adminUI/Layout';
import UserLayout from './Layout';
import Welcome from './Welcome';
import ListStaff from './staff/ListStaff';

const Routes = () => (
  <Hoc>
    <UserLayout>
      <Route exact path="/home/welcome" component={Welcome} />
      <Route exact path='/home/staff' component={ListStaff} />
    </UserLayout>

  </Hoc>
);

export default Routes;
