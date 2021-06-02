import React, { createContext, useState } from "react";
import appRoutes from "../../routes";
import Header from "../Header";

export const NavigationContext = createContext();

function Home({ permissions }) {
  const [route, setRoute] = useState({ path: "", args: null });

  const navigateTo = (routeArgs) => () => setRoute(routeArgs);

  const renderBasedOnPath = () => {
    const activeRoute = appRoutes.find((r) => r.path === route.path);

    return activeRoute.render(route.args);
  };

  return (
    <NavigationContext.Provider value={{ path: route.path, navigateTo }}>
      <Header userPermissions={permissions} navigateTo={navigateTo} />
      {renderBasedOnPath()}
    </NavigationContext.Provider>
  );
}
export default Home;
