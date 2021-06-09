import React from "react";
import appRoutes from "../../routes";
import {Link} from "react-router-dom";

export default function Header({ userPermissions }) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: 50,
        backgroundColor: "grey",
      }}
    >
      <span style={{ marginLeft: 20, marginRight: 20 }}>Header</span>

      {appRoutes
        .filter(({ noHeader }) => !noHeader)
        .filter(
          ({ permissions }) =>
            permissions.some((permission) =>
              userPermissions.includes(permission)
            ) || permissions.length === 0
        )
        .map(({ path, title }) => (
            <Link to={path}>{title}</Link>
        ))}
    </header>
  );
}
