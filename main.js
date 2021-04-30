menu_list_array=[
    "chicken tandoori pizza",
    "veg supreme pizza",
    "paneer tikka pizza",
    "deluxe veggie pizza",
    "veg extravagenza pizza",
];

 function getmenu(){
     var htmldata;
     htmldata="<ol class='menulist'>"
     menu_list_array.sort();
     for(var i=0;i<menu_list_array.length;i++){
         htmldata=htmldata+'<div class="card">'+'<img src="images/pizzaImg.png"/>'+ menu_list_array[i]+ '</div>'
     }
     htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
    
 }