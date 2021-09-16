import { Drawer } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LeftMenu from "../LeftMenu/LeftMenu";
import "./Layout.scss";

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout(props: ILayoutProps) {
  const { children } = props;

  return (
    <div className="layout">
      <div className="layout__menu-container">
        <LeftMenu />
      </div>
      <div className="layout__content"></div>
    </div>
  );
}

export default Layout;
