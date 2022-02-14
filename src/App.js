import React, {useState, useEffect} from "react";
import {ThemeProvider, withTheme} from "@mui/material/styles";

import {fetchHeroes} from "./components/data";
import Header from "./components/Header";
import theme from "./components/Theme";

function App() {
  const [activeHeroPool, setActiveHeroPool] = useState([]);

  useEffect(async () => {
    const response = await fetchHeroes();
    setActiveHeroPool(response.data);
  }, []);

  // const getStr = async () => {
  //   let heroPool = await fetchHeroes();
  //   const strHeroPool = heroPool.data.filter(
  //     (hero) => hero.primary_attr === "str"
  //   );
  //   console.log(strHeroPool);
  // };

  return (
    <div className="app">
      {/* <ThemeProvider theme={theme}> */}
      <Header activeHeroPool={activeHeroPool} />
      {console.log(activeHeroPool)}
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
