//using three arrays; storing names, quantity and price.
//these arrays are outside (global); can be used by all functions in the code


inames = []
iqtyp = []
iprice = []

//first function addItem; pushes all items to the array

function addItem(){
  
// id was declared in html file, 'pname' etc. 
//this pushes them all to the array, when clicking "add item"

  inames.push(document.getElementById('pname').value)
  iqtyp.push(parseInt(document.getElementById('pqty').value))
  iprice.push(parseInt(document.getElementById('price').value))
  
//thereafter, we call a function that displays the table
//cartdata; the 4 upper strings in the diagram
//total = =0; used to collect the total price

  displayCart()
   
}

function displayCart(){
  
  
  cartdata = '<table><tr><th>Product Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr>';
  
  total = 0;

//for; statement that creates a loop
  
  for (i=0; i<inames.length; i++){

// quantity that multiplies the price 
   
    total += iqtyp[i] * iprice[i]

//now we build the middle part of the table
//using the; += to acummulate the totals
//getting all the data which is stored in the array
//the last string is the delete button; function 'DelElement'
// ("+ i +") = value that changes based on the loop; i = 0

    cartdata += "<tr><td>" + inames[i] + "</td><td>" + iqtyp[i] + "</td><td>" + iprice[i] + "</td><td>" 
    + iqtyp[i] * iprice[i] + "</td><td><button onclick='delElement(" + i + ")'>Delete</button></td></tr>"
  }
  
//creating the 'total' line, empty colons and 'total' in last line.

  cartdata += '<tr><td></td><td></td><td></td><td>' + total + '</td></tr></table>'
  
//displays the whole table; using innerHTML

  document.getElementById('cart').innerHTML = cartdata
  
}

// when pressing 'delete' it goes to the previous 'Delelement'.
// this is another function we use in collaboration with the previous.
// passing the 'i' as 'a' = using 'a' to delete it.
// The splice() method adds/removes items to/from an array, and returns the removed item(s).
// (a, 1) = 'a' refers to the index; which element we want to delete
// (a, 1) = '1' refers to that the index is '1', so when clicking 'delete' array is gone
// when deleting we want to refresh the table, so we call back the displayCart() function

function delElement(a){
  inames.splice(a, 1);
  iqtyp.splice(a, 1)
  iprice.splice(a, 1)
  displayCart()
}
