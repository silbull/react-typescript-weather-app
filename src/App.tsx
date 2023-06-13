import Title from './components/Title';
import Form from './components/Form';
import './App.css';
import Results from './components/Result';
import { useState } from "react";

type ResultsStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
}

function App() {
  const [city, setCity] = useState<string>("");
  const [results, setResults ] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",

  });
    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // fetchはAPIを叩くための関数
        fetch(`http://api.weatherapi.com/v1/current.json?key=9af1df654c344e309b012240231306&q=${city}&aqi=no`)
        .then(res => res.json())
        .then(data => {
          setResults({
            country: data.location.country,
            cityName:data.location.name,
            temperature: data.current.temp_c,
            conditionText:data.current.condition.text,
            icon: data.current.condition.icon
          })
        })
    };
  return (
    <div className="wrapper">
      <div className="container">
      <Title />
      <Form setCity = {setCity} getWeather = {getWeather}/>
      <Results results = {results}/>
      </div>
    </div>
  );
}



export default App;
