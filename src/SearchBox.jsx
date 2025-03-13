import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css";
import { useState } from 'react';

function SearchBox({updateInfo}) {
    let [city , setCity] = useState("");
    let [error , setError] = useState(false);
    let [showHeader, setShowHeader] = useState(true);

    const Api_Url = "https://api.openweathermap.org/data/2.5/weather";
    const Api_Key = "dc4bd1bbd2df106315a8c0b66ce85b5f";

    let  getWeatherInfo = async () => {
        try{
            let response = await fetch(`${Api_Url}?q=${city}&appid=${Api_Key}&units=metric`
            );
            let jsonResponse = await response.json();
            let result = {
                city : city,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelslike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch(err){
            throw err;
        }
    };
    let Removetxt = () => {
        <div>
        {showHeader && <h1>This is a header</h1>}
        <button onClick={() => setShowHeader(false)}>Remove Header</button>
    </div>
    };


    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit =async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);

        }catch(err){
            setError(true);
        }
    }
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <br></br>
                <br></br>
                <TextField 
                id="City" 
                label="City Name" 
                variant="outlined" 
                required 
                value ={city}
                onChange={handleChange}
                />
                <br></br>
                <br></br>
                <Button variant="contained" onClick={handleSubmit}>
                    Search
                </Button>
                {error && <h1 className='err' style={{color: "red"}}>No Such Place Exists!</h1>} 
            
            </form>
        </div>
    )
}

export default SearchBox