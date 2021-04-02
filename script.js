const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').Value;


    const tempSelected = document.getElementById('temp_diff');


    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;


    const celToFah = (cel) => {

        let fehrenheit = math.round((cel * 9/5) + 32);

        return celsius;
    }
    const fahToCel = (fehr) => {

        let fehrenheit = math.round((fehr -32) * 5/9);

        return celsius;
    }

    let result;

    if(valueTemp == 'cel'){

        result = celToFah(numberTemp);

        document.getElementById('resultContainer').innerHTML= `= ${result}ºFehrenheit`;
    }else{
        result = fehToCel(numberTemp);

        document.getElementById('resultContainer').innerHTML= `= ${result}ºCelsius`;

    }
}