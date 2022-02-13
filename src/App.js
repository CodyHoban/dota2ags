import React, {useState, useEffect} from "react";
import {ThemeProvider, withTheme} from "@mui/material/styles";

import {fetchHeroes} from "./components/data";
import Header from "./components/Header";
import theme from "./components/Theme";

function App() {
  const [activeHeroList, setActiveHeroList] = useState([]);

  useEffect(async () => {
    const response = await fetchHeroes();
    setActiveHeroList(response.data);
  }, []);

  const getStr = async () => {
    let heroList = await fetchHeroes();
    const strHeroList = heroList.data.filter(
      (hero) => hero.primary_attr === "str"
    );
    console.log(strHeroList);
  };

  return (
    <div className="app">
      {/* <ThemeProvider theme={theme}> */}
      <Header />
      {console.log(activeHeroList)}
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
