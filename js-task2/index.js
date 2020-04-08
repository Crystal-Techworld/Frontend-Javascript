//Create an array of object "data"
let data =[
    {principal:2500, time: 1.8},
    {principal:1000, time:5},
    {principal:3000, time:1},
    {principal:2000, time:3}
] ;
// Create a function
function interestCalculator(array)
{
//To declare variables that will be calculated
    let interest ;
    let interestData = [];
    let rate ;

//To loop through the data objects
    for (i=0; i<array.length; i++) 
    {
        if (array[i].principal >= 2500 && array[i].time > 1 && array[i].time < 3)
        {
            array[i].rate = 3
        }
        else if (array[i].principal >= 2500 && array[i].time >= 3)
        {
            array[i].rate = 4
        }
        else if (array[i].principal < 2500 || array[i].time <= 1)
        {
            array[i].rate = 2
        }
        else 
        {
            array[i].rate = 1
        }
//To calculate the interest 
        interest = (array[i].principal * array[i].rate * array[i].time)/ 100;
    
//To create new object that will return all the necessary parameters for the result
        newObject = {
            principal:array[i].principal,
            rate:array[i].rate,
            time:array[i].time,
            interest:interest
        } 

        interestData.push(newObject);
    }    
        console.log(interestData);
        return interestData;
    }

   interestCalculator(data);
