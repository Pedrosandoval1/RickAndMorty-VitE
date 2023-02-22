import axios from "axios";
import { baseUrl, character } from "./Config";

export const FetchImage = async (pague) => {
  try {
    const url = pague ? pague : `${baseUrl}${character}`;
    const response = await axios.get(url);
    return response;
  } catch (err) {
    console.log(err);
  }
};
export const FetchSearch = async (title) => {
  try {
    const response = await axios.get(`${baseUrl}${character}?name=${title}`);
    return response;
  } catch (err) {
    console.log(err);
  }
};
