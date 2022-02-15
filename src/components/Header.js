import React from "react";
// import {makeStyles} from "@mui/styles";
import {fetchHeroes} from "./data";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import logo from "../assets/logo.png";
import {getStepConnectorUtilityClass} from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   logo: {
//     height: 40,
//     width: 100,
//   },
// }));

// let data = {prop1, prop2, prop3, prop4, prop5, prop}
// let {prop1} = data;
// let Prop1 = data.prop1

export default function Header({activeHeroPool}) {
  // const classes = useStyles();
  // const theme = useTheme();
  // const [strHeroList, setStrHeroList] = useState([]);

  const getStr = () => {
    const strHeroPool = activeHeroPool.filter(
      (hero) => hero.primary_attr === "str"
    );
  };

  const renderStrList = strHeroPool.map(({localized_name}) => (
    <li>{localized_name}</li>
  ));

  const getAgi = async () => {
    let heroList = await fetchHeroes();
    const agiHeroList = heroList.data.filter(
      (hero) => hero.primary_attr === "agi"
    );
    console.log(agiHeroList);
  };

  const getInt = async () => {
    let heroList = await fetchHeroes();
    const intHeroList = heroList.data.filter(
      (hero) => hero.primary_attr === "int"
    );
    console.log(intHeroList);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My Dota 2 App</Typography>
        <img alt="dota 2 logo" src={logo} />
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            onClick={(e) => {
              getStr();
              renderStrList();
            }}
          >
            Strength
          </Button>
          <Button
            variant="contained"
            onClick={(e) => {
              getAgi();
            }}
          >
            Agility
          </Button>
          <Button
            variant="contained"
            onClick={(e) => {
              getInt();
            }}
          >
            Intelligence
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
