import React from "react";
import HeaderComponent from "./header.component";

const Header = () => {
  const user = sessionStorage.getItem("user");
  return <HeaderComponent user={JSON.parse(user)} />;
};

export default Header;
