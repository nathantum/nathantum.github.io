
function calculate_bmi(){

    let weight = parseInt(document.getElementById('weight').value);
    let height_feet = parseInt(document.getElementById('height_feet').value);
    let height_inches = parseInt(document.getElementById('height_inches').value);
   
    
    // const bmi =  703 x weight / Math.pow(height_in_inches,2)
    
    const height_in_inches = height_inches + (height_feet*12)
    const bmi =  Math.round(703 * weight / Math.pow(height_in_inches,2))
    let output_text;
    if(isNaN(bmi)){
        output_text = "All fields must be ented!!"
    }
    else if(bmi <= 18.5){
        output_text = "You are Underweight"
        
    }
    else if(bmi > 18.5 && bmi <= 24.9 ){
        output_text = "You are Normal";
    }
    else if(bmi > 25 && bmi <= 29.9 ){
        output_text = "You are Overweight";
    }
    else if(bmi > 30 ){
        output_text = "You are Obesity";
    }
    // Underweight = <18.5
    // Normal weight >18.5–24.9 
    // Overweight = 25–29.9 
    // Obesity = BMI of 30 or greater

    document.getElementById('output').innerText = output_text ;
}
