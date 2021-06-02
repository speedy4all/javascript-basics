import React from "react";
import appRoutes from "../../routes";

export default function Header({ navigateTo, userPermissions }) {
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
          <button key={path} onClick={navigateTo({ path, args: null })}>
            {title}
          </button>
        ))}
    </header>
  );
}
