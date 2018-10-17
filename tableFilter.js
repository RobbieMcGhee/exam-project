//filterInput er referencen til searchbaren i HTML
const liveSearch = document.forms['filterInput']
liveSearch.addEventListener('keyup',(function(e)){
    //toLowerCase sikre at en søgning ikke er case-sensitiv
    const term = e.target.value.toLowerCase();
    const lamps = list.getElementByTagname('lamplist') 
    
    //laver en array på baggrund af lamps, som kommer af lamplist
    Array.from(lamps).forEach(function(lamps)){
        const type = lamps.firstElementChild.textContent; 
        if(type.toLowerCase().indexOf(term)!= -1) {
            lamp.style.display ='block'
        } else {
            lamp.style.display = 'none'
        }
    }

} 

/* Inspiration fra filterfunktionen, der blev lavet fredag 12/10
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('filterInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}