import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ContentSelectionList } from "./contentSelection/ContentSelectionList";
import { ContentSelectionCreate } from "./contentSelection/ContentSelectionCreate";
import { ContentSelectionEdit } from "./contentSelection/ContentSelectionEdit";
import { ContentSelectionShow } from "./contentSelection/ContentSelectionShow";
import { LaunchRequestList } from "./launchRequest/LaunchRequestList";
import { LaunchRequestCreate } from "./launchRequest/LaunchRequestCreate";
import { LaunchRequestEdit } from "./launchRequest/LaunchRequestEdit";
import { LaunchRequestShow } from "./launchRequest/LaunchRequestShow";
import { DeepLinkingList } from "./deepLinking/DeepLinkingList";
import { DeepLinkingCreate } from "./deepLinking/DeepLinkingCreate";
import { DeepLinkingEdit } from "./deepLinking/DeepLinkingEdit";
import { DeepLinkingShow } from "./deepLinking/DeepLinkingShow";
import { GradePassbackList } from "./gradePassback/GradePassbackList";
import { GradePassbackCreate } from "./gradePassback/GradePassbackCreate";
import { GradePassbackEdit } from "./gradePassback/GradePassbackEdit";
import { GradePassbackShow } from "./gradePassback/GradePassbackShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"LTIProviderTool"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ContentSelection"
          list={ContentSelectionList}
          edit={ContentSelectionEdit}
          create={ContentSelectionCreate}
          show={ContentSelectionShow}
        />
        <Resource
          name="LaunchRequest"
          list={LaunchRequestList}
          edit={LaunchRequestEdit}
          create={LaunchRequestCreate}
          show={LaunchRequestShow}
        />
        <Resource
          name="DeepLinking"
          list={DeepLinkingList}
          edit={DeepLinkingEdit}
          create={DeepLinkingCreate}
          show={DeepLinkingShow}
        />
        <Resource
          name="GradePassback"
          list={GradePassbackList}
          edit={GradePassbackEdit}
          create={GradePassbackCreate}
          show={GradePassbackShow}
        />
      </Admin>
    </div>
  );
};

export default App;
