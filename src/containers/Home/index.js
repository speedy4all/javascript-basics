import React, { createContext, useState } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Container} from '@material-ui/core';
import appRoutes from "../../routes";
import Header from "../Header";

export const NavigationContext = createContext();

function Home({ permissions }) {
  const [route, setRoute] = useState({ path: "", args: null });

  const navigateTo = (routeArgs) => () => setRoute(routeArgs);

  return (
    <NavigationContext.Provider value={{ path: route.path, navigateTo }}>
      <BrowserRouter>
          <Header userPermissions={permissions} />
        <Switch>
            <Container fixed>
          {appRoutes.map(route => (
              <Route key={route.title} path={route.path} render={route.render} exact={route.exact}/>
          ))}
            </Container>
        </Switch>
      </BrowserRouter>
    </NavigationContext.Provider>
  );
}
export default Home;
