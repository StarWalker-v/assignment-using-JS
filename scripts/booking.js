/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var dayCost = 35;
var daysNumber = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
var mondayButton = document.getElementById("monday");
var tuesdayButton = document.getElementById("tuesday");
var wednesdayButton = document.getElementById("wednesday");
var thursdayButton = document.getElementById("thursday");
var fridayButton = document.getElementById("friday");
function addClick()
{
    if (!this.classList.contains("clicked"))
    {
        daysNumber++;
        this.classList.add("clicked");
        costCalculate();
    }
}
mondayButton.addEventListener("click", addClick);
tuesdayButton.addEventListener("click", addClick);
wednesdayButton.addEventListener("click", addClick);
thursdayButton.addEventListener("click", addClick);
fridayButton.addEventListener("click", addClick);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
var clearButton = document.getElementById("clear-button");
function removeClass()
{
    daysNumber = 0;
    var cost = 0;
    dayCost = 35;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    mondayButton.classList.remove("clicked");
    tuesdayButton.classList.remove("clicked");
    wednesdayButton.classList.remove("clicked");
    thursdayButton.classList.remove("clicked");
    fridayButton.classList.remove("clicked");
    document.getElementById("calculated-cost").innerHTML = cost;

}
clearButton.addEventListener("click", removeClass);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
var halfButton = document.getElementById("half");
function changeDayHalf()
{
    if (halfButton.classList.contains("clicked"))
        dayCost = 20;
    else
    {
        fullButton.classList.remove("clicked");
        var list2 = halfButton.classList;
        list2.add("clicked");
        dayCost = 20;
    }
    costCalculate();
}
halfButton.addEventListener("click", changeDayHalf);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
var fullButton = document.getElementById("full");
function changeDayFull()
{
    if (fullButton.classList.contains("clicked"))
        dayCost = 35;
    else
    {
        halfButton.classList.remove("clicked");
        var list1 = fullButton.classList;
        list1.add("clicked");
        dayCost = 35;
    }
    costCalculate();
}
fullButton.addEventListener("click", changeDayFull);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function costCalculate()
{
    var cost = dayCost*daysNumber;
    document.getElementById("calculated-cost").innerHTML = cost;
}

