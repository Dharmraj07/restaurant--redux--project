// src/components/Menu.js
import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menuItems = useSelector((state) => state.menu.items);

  return (
    <div className="menu">
      {menuItems.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Menu;
