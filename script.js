function calc(){
    let input = document.getElementById('from');
    let output = document.getElementById('to');
    let C_from = document.getElementById('calFrom');
    let C_to = document.getElementById('calTo');
    // console.log("from" + " " + C_from.value + " " + "to" + " " + C_to.value);
    // console.log(input.value);

    // from meter to another
    if(C_from.value == 'meter' && C_to.value == 'meter'){
        output.value = input.value;
    }
    else if(C_from.value == 'meter' && C_to.value == 'cm'){
        output.value = input.value*100;
    }
    else if(C_from.value == 'meter' && C_to.value == 'km'){
        output.value = input.value/1000;
    }
    else if(C_from.value == 'meter' && C_to.value == 'milli'){
        output.value = input.value*1000;
    }
    else if(C_from.value == 'meter' && C_to.value == 'macro'){
        output.value = input.value*1e+6;
    }
    else if(C_from.value == 'meter' && C_to.value == 'mile'){
        output.value = input.value*0.000621371;
    }
    else if(C_from.value == 'meter' && C_to.value == 'yard'){
        output.value = input.value*1.09361;
    }
    else if(C_from.value == 'meter' && C_to.value == 'foot'){
        output.value = input.value*3.28084;
    }
    else if(C_from.value == 'meter' && C_to.value == 'inch'){
        output.value = input.value*39.3701;
    }

    //from cm to another
    else if(C_from.value == 'cm' && C_to.value == 'cm'){
        output.value = input.value;
    }
    else if(C_from.value == 'cm' && C_to.value == 'meter'){
        output.value = input.value/100;
    }
    else if(C_from.value == 'cm' && C_to.value == 'km'){
        output.value = input.value/100000;
    }
    else if(C_from.value == 'cm' && C_to.value == 'milli'){
        output.value = input.value*101;
    }
    else if(C_from.value == 'cm' && C_to.value == 'macro'){
        output.value = input.value*10000;
    }
    else if(C_from.value == 'cm' && C_to.value == 'mile'){
        output.value = input.value/160900;
    }
    else if(C_from.value == 'cm' && C_to.value == 'yard'){
        output.value = input.value/91.44;
    }
    else if(C_from.value == 'cm' && C_to.value == 'foot'){
        output.value = input.value/30.48;
    }
    else if(C_from.value == 'cm' && C_to.value == 'inch'){
        output.value = input.value*2.54;
    }

    //from km to another
    else if(C_from.value == 'km' && C_to.value == 'km'){
        output.value = input.value;
    }
    else if(C_from.value == 'km' && C_to.value == 'meter'){
        output.value = input.value*1000;
    }
    else if(C_from.value == 'km' && C_to.value == 'cm'){
        output.value = input.value*100000;
    }
    else if(C_from.value == 'km' && C_to.value == 'milli'){
        output.value = input.value*1e+6;
    }
    else if(C_from.value == 'km' && C_to.value == 'macro'){
        output.value = input.value*1e+9;
    }
    else if(C_from.value == 'km' && C_to.value == 'mile'){
        output.value = input.value/1.609;
    }
    else if(C_from.value == 'km' && C_to.value == 'yard'){
        output.value = input.value*1093.61;
    }
    else if(C_from.value == 'km' && C_to.value == 'foot'){
        output.value = input.value*3280.84;
    }
    else if(C_from.value == 'km' && C_to.value == 'inch'){
        output.value = input.value*39370.1;
    }
    
    //from milli to another
    else if(C_from.value == 'milli' && C_to.value == 'milli'){
        output.value = input.value;
    }
    else if(C_from.value == 'milli' && C_to.value == 'meter'){
        output.value = input.value/1000;
    }
    else if(C_from.value == 'milli' && C_to.value == 'cm'){
        output.value = input.value/10;
    }
    else if(C_from.value == 'milli' && C_to.value == 'km'){
        output.value = input.value/1e-6;
        }
    else if(C_from.value == 'milli' && C_to.value == 'macro'){
        output.value = input.value*1000;
    }
    else if(C_from.value == 'milli' && C_to.value == 'mile'){
        output.value = input.value/1.609e+6;
    }
    else if(C_from.value == 'milli' && C_to.value == 'yard'){
        output.value = input.value/914.4;
    }
    else if(C_from.value == 'milli' && C_to.value == 'foot'){
        output.value = input.value/304.8;
    }
    else if(C_from.value == 'milli' && C_to.value == 'inch'){
        output.value = input.value/25.4;
    }
     
    //from macro to another
    else if(C_from.value == 'macro' && C_to.value == 'macro'){
        output.value = input.value;
    }
    else if(C_from.value == 'macro' && C_to.value == 'meter'){
        output.value = input.value/1e+6;
    }
    else if(C_from.value == 'macro' && C_to.value == 'cm'){
        output.value = input.value*10000;
    }
    else if(C_from.value == 'macro' && C_to.value == 'km'){
        output.value = input.value/1e+9;
    }
    else if(C_from.value == 'macro' && C_to.value == 'milli'){
        output.value = input.value*101;
    }
    else if(C_from.value == 'macro' && C_to.value == 'mile'){
        output.value = input.value/1000;
    }
    else if(C_from.value == 'macro' && C_to.value == 'yard'){
        output.value = input.value/1.609e+9;
    }
    else if(C_from.value == 'macro' && C_to.value == 'foot'){
        output.value = input.value/30.48;
    }
    else if(C_from.value == 'macro' && C_to.value == 'inch'){
        output.value = input.value*2.54;
    }
    
    //from mile to another
    else if(C_from.value == 'mile' && C_to.value == 'mile'){
        output.value = input.value;
    }
    else if(C_from.value == 'mile' && C_to.value == 'meter'){
        output.value = input.value*1000;
    }
    else if(C_from.value == 'mile' && C_to.value == 'cm'){
       output.value = input.value*100000;
    }
    else if(C_from.value == 'mile' && C_to.value == 'km'){
        output.value = input.value/1.609;
    }
    else if(C_from.value == 'mile' && C_to.value == 'milli'){
        output.value = input.value*1e+6;
    }
    else if(C_from.value == 'mile' && C_to.value == 'macro'){
        output.value = input.value*1e+9;
    }
    else if(C_from.value == 'mile' && C_to.value == 'yard'){
        output.value = input.value*1093.61;
    }
    else if(C_from.value == 'mile' && C_to.value == 'foot'){
        output.value = input.value*3280.84;
    }
    else if(C_from.value == 'mile' && C_to.value == 'inch'){
        output.value = input.value*39370.1;
    }

    // from yard to another
    else if(C_from.value == 'yard' && C_to.value == 'meter'){
        output.value = input.value/1.094;
    }
    else if(C_from.value == 'yard' && C_to.value == 'cm'){
        output.value = input.value*91.44;
    }
    else if(C_from.value == 'yard' && C_to.value == 'km'){
        output.value = input.value/1094;
    }
    else if(C_from.value == 'yard' && C_to.value == 'milli'){
        output.value = input.value*914.4;
    }
    else if(C_from.value == 'yard' && C_to.value == 'macro'){
        output.value = input.value*914400;
    }
    else if(C_from.value == 'yard' && C_to.value == 'mile'){
        output.value = input.value/1760;
    }
    else if(C_from.value == 'yard' && C_to.value == 'yard'){
        output.value = input.value;
    }
    else if(C_from.value == 'yard' && C_to.value == 'foot'){
        output.value = input.value*3;
    }
    else if(C_from.value == 'yard' && C_to.value == 'inch'){
        output.value = input.value*36;
    }

    // from foot to another
    else if(C_from.value == 'foot' && C_to.value == 'meter'){
        output.value = input.value/3.281;
    }
    else if(C_from.value == 'foot' && C_to.value == 'cm'){
        output.value = input.value*30.48;
    }
    else if(C_from.value == 'foot' && C_to.value == 'km'){
        output.value = input.value/3281;
    }
    else if(C_from.value == 'foot' && C_to.value == 'milli'){
        output.value = input.value*304.8;
    }
    else if(C_from.value == 'foot' && C_to.value == 'macro'){
        output.value = input.value*304800;
    }
    else if(C_from.value == 'foot' && C_to.value == 'mile'){
        output.value = input.value/5280;
    }
    else if(C_from.value == 'foot' && C_to.value == 'yard'){
        output.value = input.value/3;
    }
    else if(C_from.value == 'foot' && C_to.value == 'foot'){
        output.value = input.value;
    }
    else if(C_from.value == 'foot' && C_to.value == 'inch'){
        output.value = input.value*12;
    }

    // from inch to another
    else if(C_from.value == 'inch' && C_to.value == 'meter'){
        output.value = input.value/39.37;
    }
    else if(C_from.value == 'inch' && C_to.value == 'cm'){
        output.value = input.value*2.54;
    }
    else if(C_from.value == 'inch' && C_to.value == 'km'){
        output.value = input.value/39370;
    }
    else if(C_from.value == 'inch' && C_to.value == 'milli'){
        output.value = input.value*25.4;
    }
    else if(C_from.value == 'inch' && C_to.value == 'macro'){
        output.value = input.value*25400;
    }
    else if(C_from.value == 'inch' && C_to.value == 'mile'){
        output.value = input.value/63360;
    }
    else if(C_from.value == 'inch' && C_to.value == 'yard'){
        output.value = input.value/36;
    }
    else if(C_from.value == 'inch' && C_to.value == 'foot'){
        output.value = input.value/12;
    }
    else if(C_from.value == 'inch' && C_to.value == 'inch'){
        output.value = input.value;
    }

    else{
        output.value = ' ';
        console.log(output);
    }

    setTimeout(result, 2000)

    function result(){
        let final = document.getElementById('res');
        if(output.value != ' ' && input.value !=' '){
            final.textContent = "RESULT: " + output.value;
        }
    }
}