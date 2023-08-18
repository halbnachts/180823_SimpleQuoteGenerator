
function displayPos() {

    var poswisd = [
        "In the balance of existence, your favorable circumstances find equilibrium.",
        "The alignment of positive variables contributes to the outcome of a satisfactory day.",
        "The logical progression of events has yielded a favorable outcome for this temporal cycle.",
        "Efficient utilization of resources has led to the fruition of a productive day.",
        "The probability matrix has favored the occurrence of a positive experience within this timeframe.",
        "The harmony of favorable factors resonates with the symphony of this day's achievements.",
        "A well-constructed sequence of actions has manifested in a desirable outcome.",
        "A calculated interplay of events has yielded a rewarding day in the continuum.",
        "The algorithm of your actions has generated an optimal result in the span of this day.",
        "Your adept navigation of circumstances has resulted in the attainment of a prosperous day."
        ];

    var index = Math.floor((Math.random() * poswisd.length)); 
    
    document.getElementById("wisdom").innerHTML = poswisd[index];

}

function displayNeg() {

    var negwisd = [
        "The challenges of today are but moments in the vast tapestry of existence.",
        "In times of adversity, remember that emotions are fleeting, but reason endures.",
        "Difficulties are opportunities for growth, to refine the faculties of logic and resilience.",
        "The turbulence of a single day does not define the trajectory of a lifetime.",
        "Adversity serves as a catalyst for sharpening the intellect and mastering emotions.",
        "Acknowledging negative emotions is the first step towards their rational resolution.",
        "A setback is an invitation to reevaluate strategies and enhance future outcomes.",
        "Consider that even the harshest experiences contribute to the mosaic of wisdom.",
        "The challenge of today can serve as a stepping stone to a more harmonious tomorrow.",
        "The pursuit of logic and serenity persists, even amidst the stormiest of days."
        ];

    var index = Math.floor((Math.random() * negwisd.length)); 
    
    document.getElementById("wisdom").innerHTML = negwisd[index];
   
}
