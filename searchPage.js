/* Instead of searching in the HTML for our objects (lamps), 
we can make a class of them in the JS file.*/
class Lamp {

    constructor(type, color, price, imagePath) {      
      this.type = type;
      this.color = color;
      this.price = price;
      this.imagePath = imagePath;

    }

    createHTML(){
        return "<li class='collection-item'><div class='image'><img src='" + this.imagePath + "' width='200px' height='75px' /></div><a href='#'>" + this.type + " </a><div class='color'>" + this.color + "</div><div class='price'>" + this.price + "</div><div class='button'><button class='addToCart'>Add to Cart</button></li>";
    }
 }

var lamps = [];
// Here we add some New lamps to the empty lamps array 
lamps.push(new Lamp(
    "Ceiling Lamp ", 
    "Red",
    "399", 
    "https://www.eurway.com/Shared/Images/Product/Alp-Ceiling-Lamp/alp-ceiling-lamp.png?bw=75&bh=75")
    );
lamps.push(new Lamp("Ceiling Lamp ", "Blue ", "199 "));
lamps.push(new Lamp("Ceiling Lamp ", "Green ", "599 "));
lamps.push(new Lamp("Ceiling Lamp ", "White ", "299 "));
lamps.push(new Lamp("Ceiling Lamp ", "Steel ", "899 "));
lamps.push(new Lamp("Ceiling Lamp ", "Rainbow ", "1399 "));
lamps.push(new Lamp("Ceiling Lamp ", "Orange ", "399 "));
lamps.push(new Lamp("Ceiling Lamp ", "Black ", "399 "));
lamps.push(new Lamp("Ceiling Lamp ", "Yellow ", "99 "));
lamps.push(new Lamp("Ceiling Lamp ", "Grey ", "499 "));
lamps.push(new Lamp("Ceiling Lamp ", "Glass ", "599 "));
lamps.push(new Lamp("Ceiling Lamp ", "Blue ", "299 "));
lamps.push(new Lamp("Ceiling Lamp ", "Black ", "699 "));
lamps.push(new Lamp("Ceiling Lamp ", "Red ", "699 "));
lamps.push(new Lamp("Ceiling Lamp ", "Steel ", "499 "));

lamps.push(new Lamp("Desk Lamp ", "Red ", "399 "));
lamps.push(new Lamp("Desk Lamp ", "Blue ", "199 "));
lamps.push(new Lamp("Desk Lamp ", "Green ", "599 "));
lamps.push(new Lamp("Desk Lamp ", "White ", "299 "));
lamps.push(new Lamp("Desk Lamp ", "Steel ", "899 "));
lamps.push(new Lamp("Desk Lamp ", "Rainbow ", "1399 "));
lamps.push(new Lamp("Desk Lamp ", "Orange ", "399 "));
lamps.push(new Lamp("Desk Lamp ", "Black ", "399 "));
lamps.push(new Lamp("Desk Lamp ", "Yellow ", "99 "));
lamps.push(new Lamp("Desk Lamp ", "Grey ", "499 "));
lamps.push(new Lamp("Desk lamp ", "Glass ", "599 "));
lamps.push(new Lamp("Desk Lamp ", "Blue ", "299 "));
lamps.push(new Lamp("Desk Lamp ", "Black ", "699 "));
lamps.push(new Lamp("Desk Lamp ", "Red ", "699 "));
lamps.push(new Lamp("Desk Lamp ", "Steel ", "499 "));

lamps.push(new Lamp("Floor Lamp ", "Red ", "399 "));
lamps.push(new Lamp("Floor Lamp ", "Blue ", "199 "));
lamps.push(new Lamp("Floor Lamp ", "Green ", "599 "));
lamps.push(new Lamp("Floor Lamp ", "White ", "299 "));
lamps.push(new Lamp("Floor Lamp ", "Steel ", "899 "));
lamps.push(new Lamp("Floor Lamp ", "Rainbow ", "1399 "));
lamps.push(new Lamp("Floor Lamp ", "Orange ", "399 "));
lamps.push(new Lamp("Floor Lamp ", "Black ", "399 "));
lamps.push(new Lamp("Floor Lamp ", "Yellow ", "99 "));
lamps.push(new Lamp("Floor Lamp ", "Grey ", "499 "));
lamps.push(new Lamp("Floor lamp ", "Glass ", "599 "));
lamps.push(new Lamp("Floor Lamp ", "Blue ", "299 "));
lamps.push(new Lamp("Floor Lamp ", "Black ", "699 "));
lamps.push(new Lamp("Floor Lamp ", "Red ", "699 "));
lamps.push(new Lamp("Floor Lamp ", "Steel ", "499 "));

lamps.push(new Lamp("Design", "Black", "1999"));

// First we will grab the element by its ID! 
var filterInput = document.getElementById('filterInput');

// Now we add the event listener (keyUp), and then call the function that searches/filters through our lamp selection:
filterInput.addEventListener('keyup', function(){
    // We now need the value of the search. We do not just want the element, so we add Value in the end
    var filterValue = document.getElementById('filterInput').value
    console.log(filterValue);
    
    var html = "";

    for (var i = 0; i < lamps.length; i++) {
        if (lamps[i].type.indexOf(filterValue) > -1 || lamps[i].color.indexOf(filterValue) > -1 || lamps[i].price.indexOf(filterValue) > -1) {
            html += lamps[i].createHTML();
        } else {
            continue;
        }
    }
    document.getElementById("names").innerHTML = html;
    addEvents();
});

function addEvents(){
    var buttons = document.getElementsByClassName("addToCart");

    for(i=0; buttons.length; i++){
        buttons[i].addEventListener("click", function(){
            console.log(this);
            alert("BUY STUFF"); // DET ER HER FREDDIES TING SKAL IND ! 
            
        });
    }
}

    /*

    // we now need all the collection items (class) within the ul: 
    // get li´s from ul
    // We will get the li´s with the class of collection items! we can select things based on classes (or anything else), not just by ID! 
    var li = ul.querySelectorAll('li.collection-item');  // THIS SHOULD BE CHANGED OR DELETED SINCE WE HAVE THE ARRAY

    // the collection-items is now being put into a sort of array, 
    // and we want to loop through that array og selection-item li´s:
    for (var i = 0; i < lamps.length; i++){   // LI.LENGTH SHOULD BE CHANGED TO THE ARRAY WE WILL LOOP THROUGH 
    console.log('check 1');
    // Remember, they have been wrapped in an a tag, so we can use getElementByTagName:
          var a = lamps[i].getElementsByTagName('a')[0]; //we add the 0 to only get the current link 

    // we now want to check if the input matches our index 
    // innerHTML will check the name inside the a tag. If < than -1 means there is a match
          if(a.innerHTML.indexOf(filterValue) > - 1) {
    //we dont want it do anything if there is a match, so we set the css styling to nothing, and if else we want it to disappear.
              li[i].style.display = ''; //(i meaning the current ideration) this is how set it to not do anything
              console.log('check 2');
          } else {
            li[i].style.display = 'none'; // notice the difference between nothing and none! 
            console.log('check 3');
          }

    }

}

*/
