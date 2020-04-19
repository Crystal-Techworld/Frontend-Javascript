// Create a function of integers
function javaTask(parameter){

    let final = [];
//Create a for loop to loop through the numbers
for (let i=1; i <=parameter; i++) 
{
//create a variable to store each result of the loop
        let output= "";
// create the conditional statement to pass for individual check
   if (i % 2 == 0) {
        output = output + "yu";
        }
    if (i % 3 == 0) {
        if (output === "") {
        output = output + "gi";
        } else {
        output = output + "-gi";
        }
        }
    if (i % 5 == 0) {
        if (output === "") {
        output = output + "oh";
        } else {
        output = output + "-oh";
        }
        }
    if (output == "") {
        final.push(i); 
        } else {
        final.push(output); 
        }
        } 
    console.log(final);
// return an array containing all numbers
    return final;
}
// call the function and pass 100 as an argument
    javaTask(100);
// call the function and pass any number as an argument
    javaTask(121);
