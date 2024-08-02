// src/App.tsx
import React, { useEffect, useState } from "react";
import DynamicMenu from "./components/DynamicMenu";
import { IMenuItemJson } from "./types/IMenuItemJson";

const App: React.FC = () => {
  const [menus, setData] = useState<IMenuItemJson[]>([]);

  const getData = () => {
    fetch("./data/menus.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (menus) {
        //console.log(JSON.stringify(menus));
        setData(menus);
      });
  };

  useEffect(function () {
    getData();
  }, []);

  return (
    <div>
      <h1>Dynamic Menu App</h1>
      <DynamicMenu items={menus} />
    </div>
  );
};

export default App;
