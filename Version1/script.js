let res = '';
let display = document.getElementById("display");

//For testing
// const userId = Math.floor(Math.random() * 100000);
// const scriptStartTime = new Date().getTime();
// const elapsedTime = new Date().getTime() - scriptStartTime;
// const csvRows = [];
// csvRows.push(["userId","elapsedTime","inputValue"])

// function logging(inputValue){
//     let csvRows = [];
//     const csvRow = [userId, elapsedTime, inputValue];
//     // Add the CSV row to the array
//     csvRows.push(csvRow);
//     // Convert the array to a CSV string
//     const csvString = csvRows.map(row => row.join(',')).join('\n');
//     // Create a Blob object from the CSV string
//     const blob = new Blob([csvString], { type: 'text/csv' });
//     // Create a temporary URL for the Blob
//     const url = window.URL.createObjectURL(blob);
//     // Create a link to download the CSV file
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'test.csv';
//     // Click the link to download the CSV file
//     document.body.appendChild(link);
//     link.click();
//     // Remove the link and the temporary URL
//     document.body.removeChild(link);
//     window.URL.revokeObjectURL(url);
// }

function getInput(value) {
    res += value;    //update the calculator display
    display.value = res;
}

function clearResult() {
    res = "";
    display.value = res;
}

function calculate() {
    res = res.replace("x","*")
    if (res == "") {
        display.value = res;
    }
    else {
        var equation = res;

        // Split the equation into separate parts based on the operators
        var parts = equation.split(/(\+|\-|\*|\/)/);

        // Iterate through the parts and perform the calculations
        var total = parseFloat(parts[0]);
        for (var i = 1; i < parts.length; i += 2) {
            var operator = parts[i];
            var operand = parseFloat(parts[i + 1]);

            switch (operator) {
                case '+':
                    total += operand;
                    break;
                case '-':
                    total -= operand;
                    break;
                case '*':
                    total *= operand;
                    break;
                case '/':
                    total /= operand;
                    break;
                default:
                    break;
            }
        }
        res = total;
        display.value = res;
    }
}