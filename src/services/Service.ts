import ActualWeather from "../models/model";
import { API_KEY } from "./Api";

const delay = (ms: number | undefined) => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  
export const getWeather = async (name: any): Promise<ActualWeather> => {

    return new Promise<ActualWeather>(async (resolve, reject) => {
        await delay(5000);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => reject(err))

    })
}

