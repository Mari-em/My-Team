import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types

import { Default } from "./Layouts/Index";
import tables from "../src/views/tables"
import add from "../src/views/add"




// Route Views


import userProfile from "../src/views/userProfile";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    exact: true,
    layout: Default,
    component: () => <Redirect to="/userProfile" />
  },
  {
    path: "/userProfile",
    layout: Default,
    component: userProfile
  },
  {
    path: "/tables",
    layout: Default,
    component: tables
  },
  {
    path: "/add",
    layout: Default,
    component: add
  }
  ,

];
