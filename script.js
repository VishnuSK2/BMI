
function updateValue(type) {
    if (type === 'age') {
        document.getElementById('age-value').innerHTML = document.getElementById('age').value;
    } else if (type === 'height') {
        document.getElementById('height-value').innerHTML = document.getElementById('height').value;
    } else if (type === 'weight') {
        document.getElementById('weight-value').innerHTML = document.getElementById('weight').value;
    }
}


function calculateBMI(){
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const bmi = Math.floor((weight / (height * height))*10000);

    document.getElementById('bmi-result').innerHTML = bmi;

    let status = '';
    let color = '';
    
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('bmi-result').innerHTML=` <h1 style="color: red;"> Enter </h1>`
        document.getElementById('bmi-status').innerHTML=` <p style=color:red> Height and weight </p>`

    }

        if(age =="") {
        alert('Please enter your age');
        return
    }

    if (bmi < 18.5) {
        status = 'Underweight';
        color = '#3498db';
        exercise = 'Engage in strength training exercises to build muscle mass.';
        food = 'Increase your calorie intake with nutrient-dense foods like nuts, avocados, and lean meats.';
        head1='Daily Exercise Recommendations'
        head2='Food Control Recommendations'
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'You have a healthy BMI';
        color = '#2ecc71';
        exercise = 'Maintain your weight with regular exercise such as jogging, swimming, or cycling.';
        food = 'Continue to eat a balanced diet with a mix of proteins, carbohydrates, and healthy fats.';
        head1='Daily Exercise Recommendations'
        head2='Food Control Recommendations'

    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Overweight';
        color = '#f39c12';
        exercise = 'Incorporate more cardio workouts like running, brisk walking, or aerobics.';
        food = 'Consider reducing your calorie intake and focus on eating more vegetables and lean proteins.';
        head1='Daily Exercise Recommendations'
        head2='Food Control Recommendations'
    } else {
        status = 'Obese';
        color = '#e74c3c';
        exercise = 'Aim for at least 150 minutes of moderate-intensity exercise per week.';
        food = 'Adopt a diet rich in fruits, vegetables, and whole grains while reducing consumption of processed foods and sugars.';
        head1='Daily Exercise Recommendations'
        head2='Food Control Recommendations'
    }

    document.getElementById('bmi-status').innerHTML = status;
    document.getElementById('bmi-result').style.color = color;
    document.getElementById('bmi-status').style.color = color;
    document.getElementById('exercise-title').innerHTML = head1;
    document.getElementById('exercise-info').innerHTML = exercise;
    document.getElementById('food-title').innerHTML = head2;
    document.getElementById('food-info').innerHTML = food;

    gsap.fromTo("#bmi-result", 
        { opacity: 0, scale: 0.5, y: -50 }, 
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });

    gsap.fromTo("#bmi-status", 
        { opacity: 0, x: -50 }, 
        { opacity: 1, x: 0, duration: 1, ease: "power1.out" });

    gsap.fromTo("#exercise-title", 
        { opacity: 0, y: -50 }, 
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power1.out" });

    gsap.fromTo("#exercise-info", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power1.out" });

    gsap.fromTo("#food-title", 
        { opacity: 0, y: -50 }, 
        { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power1.out" });

    gsap.fromTo("#food-info", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, delay: 2, ease: "power1.out" });

}


