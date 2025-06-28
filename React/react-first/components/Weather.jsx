
const Weather = ({temp}) => {
    if (temp > 15){
        return <h1>It's cold Outside</h1>
    }else if (temp >= 15 && temp <= 25){
        return <h1>It's nice Outside</h1>
    }else{
        return <h1>It's hot Outside</h1>
    }
}

export default Weather;