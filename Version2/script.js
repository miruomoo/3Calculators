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

let stack = [];
let refresh = true;

function getInput(value) {
  if (refresh == true) {
    res += value;    //update the calculator display
    display.value = res;
  }
  else {
    res = "";
    res += value;
    display.value = res;
    refresh = true;
  }
}

function clearResult() {
  stack = []
  res = "";
  display.value = res;
}

function storeValue() {
  stack.push(res);
  res = '';
  display.value = res;
}

function calculate(value) {
  if (stack.length > 1 && refresh == false) {
    switch (value) {
      case "*":
        res = (stack.pop()) + "*" + (stack.pop());
        res = eval(res);
        stack.push(res)
        display.value = res;
        refresh = false;
        break;
      case "/":
        bot = stack[stack.length - 1];
        stack.pop();
        res = (stack.pop()) + "/" + bot;
        res = eval(res);
        stack.push(res)
        display.value = res;
        refresh = false;
        break;
      case "+":
        res = (stack.pop()) + "+" + (stack.pop());
        res = eval(res);
        stack.push(res)
        display.value = res;
        refresh = false;
        break;
      case "-":
        bot = stack[stack.length - 1];
        stack.pop();
        res = (stack.pop()) + "-" + bot;
        res = eval(res);
        stack.push(res)
        display.value = res;
        refresh = false;
        break;
    }
  }
  else {
    switch (value) {
      case "*":
        res = (stack.pop()) + "*" + res;
        res = eval(res);
        stack.push(res)
        display.value = res;
        refresh = false;
        break;
      case "/":
        res = (stack.pop()) + "/" + res;
        res = eval(res);
        stack.push(res)
        display.value = res;
        refresh = false;
        break;
      case "+":
        res = (stack.pop()) + "+" + res;
        res = eval(res);
        stack.push(res)
        display.value = res;
        refresh = false;
        break;
      case "-":
        res = (stack.pop()) + "-" + res;
        res = eval(res);
        stack.push(res)
        display.value = res;
        refresh = false;
        break;

    }
  }
}