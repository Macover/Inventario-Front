import React,{useState, useEffect} from "react";
import CovidService from '../services/CovidService.js'

function addCommas(nStr)
{
	nStr += '';
	let x = nStr.split('.');
    let x1 = x[0];
	let x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

const UsoFuncion = () =>{

    const [covidState, setCovidState] = useState({});
    const covidService = new CovidService();

    const obtenerData = () =>{
        covidService.obtenerData().then(data => setCovidState(data));
    }
    useEffect(() => {
        obtenerData();
    },[]);
    console.log("covidData",covidState);

    

    return (
        <div>

            <h1>Covid data</h1>
            <h2>Numero de muertes: {(covidState[0].death === undefined ? ' ': addCommas(covidState[0].death))}</h2>
            <h2>Numero de hospitalizados: {(covidState[0].hospitalized === undefined ? ' ': addCommas(covidState[0].hospitalized))}</h2>
            <h2>Numero de casos positivos: {(covidState[0].positive === undefined ? ' ': addCommas(covidState[0].positive))}</h2>
            <h2>Numero de casos negativos: {(covidState[0].negative === undefined ? ' ': addCommas(covidState[0].negative))}</h2>
            <h2>Resultados totales: {(covidState[0].totalTestResults === undefined ? ' ': addCommas(covidState[0].totalTestResults))}</h2>

        </div>
    )

}

export default UsoFuncion