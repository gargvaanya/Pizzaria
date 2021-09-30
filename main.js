 var pizza_array = ["Veg Extravaganza", "Indi Tandoori Paneer", "Non-Veg Supreme", "Chicken Fiesta", "Chicken Dominator"];

function getmenu() {
    for(var i=0;i<pizza_array.length;i++) {
        document.getElementById("piz"+str(i)).style.display="inline-block"; 
    } 
 
     
    document.getElementById("piz1").style.display= "inline-block";
    document.getElementById("piz2").style.display= "inline-block";
    document.getElementById("piz3").style.display= "inline-block";
    document.getElementById("piz4").style.display= "inline-block";
    document.getElementById("piz5").style.display= "inline-block"; 
     
    document.getElementById("menu_list").style.display= "none";
    document.getElementById("hide_list").style.display= "inline-block";
    
    
}

menu_list_array = ["Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"];
    
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
    }
     htmldata=htmldata+"</ol>"
     document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){

        htmldata=htmldata+'<div class="card">' +'<img src="images/pizzaImg.png"/>' + menu_list_array[i] + '</div>'
    }
      htmldata=htmldata+"</section>"
      document.getElementById("display_addedmenu").innerHTML = htmldata;
}