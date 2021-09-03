var x = 10;
console.log(x);

// about related scripts

// attach event handler thru js
document.getElementById('changeColorBtn').addEventListener('click', handleChangeColor);

function handleChangeColor(event){
  var el = document.getElementById('welcomeText'); // fetching the element
  // change the text color 
  el.style.color = 'red';
}

// TODO: On click of 'Add', add one more element with <h2>Wow</h2> underneath it and also have the Bg color for the element yellow

// querySelector 

// TODO: Change the bg color of the whole page to blue 



// TODO: remove Event Listener or disable 
