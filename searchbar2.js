// First we will grab the element by its ID! 
var filterInput = document.getElementById('filterInput');

// Now we add the event listener (keyUp), and then call the function that searches/filters through our lamp selection:
filterInput.addEventListener('keyup', filterLamps);

// We now add the function that search for relevant lamps! 
function filterLamps(){
    // We now need the value of the search. We do not just want the element, so we add Value in the end
    var filterValue = 
    document.getElementById('filterInput').value;
    console.log(filterValue);
    // Now we get names ul:
    var ul = document.getElementById('names');

    // we now need all the collection items (class) within the ul: 
    // get li´s from ul
    // We will get the li´s with the class of collection items! we can select things based on classes (or anything else), not just by ID! 
    var li = ul.querySelectorAll('li.collection-item'); 

    // the collection-items is now being put into a sort of array, 
    // and we want to loop through that array og selection-item li´s:
    for (var i = 0; i < li.length; i++){
    console.log('check 1');
    // Remember, they have been wrapped in an a tag, so we can use getElementByTagName:
          var a = li[i].getElementsByTagName('a')[0]; //we add the 0 to only get the current link 

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
