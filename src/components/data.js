import React from "react";
import axios from "axios";

const baseURL = "https://api.opendota.com";

export const fetchHeroes = async () => {
  const response = await axios.get(
    `${baseURL}/api/heroes?api_key=${process.env.API_KEY}`
  );
  return response;
};
