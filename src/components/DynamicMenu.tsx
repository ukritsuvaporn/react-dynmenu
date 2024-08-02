// src/components/DynamicMenu.tsx
import React from "react";
import { IMenuItemJson } from "../types/IMenuItemJson";

interface DynamicMenuProps {
  items: IMenuItemJson[];
}

const DynamicMenu: React.FC<DynamicMenuProps> = ({ items }) => {
  const renderMenuItems = (items: IMenuItemJson[]) => (
    <ul style={{ listStyleType: "none", padding: "0 10px" }}>
      {items.map((item) => (
        <li key={item.id} style={{ margin: "8px 0" }}>
          <a href={item.link} style={{ textDecoration: "none", color: "blue" }}>
            {item.label}
          </a>
          {item.children && renderMenuItems(item.children)}
        </li>
      ))}
    </ul>
  );

  return <>{renderMenuItems(items)}</>;
};

export default DynamicMenu;
