var canvas = new fabric.Canvas('myCanvas');

character_width = 30;
character_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_update(){
    fabric.Image.fromURL("PLAYER.png", 
    function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.sclaeToHeight(140);

        player_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(player_object);
    })
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, 
    function(Img){
        character_object = Img;
        character_object.scaleToWidth(Character_width);
        character_object.sclaeToHeight(character_height);

        character_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(character_object);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(e.shiftKey == true && keypressed == "80"){
        console.log("p and shift pressed together");
        character_width = character_width + 10;
        character_height = character_height + 10;   

        document.getElementById("current_width").innerHTML= character_width;
        document.getElementById("current_height").innerHTML= character_height;
    }

    if(e.shiftKey && keypressed == "77"){
        console.log("m and shift pressed together");
        character_width = character_width - 10;
        character_height = character_height - 10;   

        document.getElementById("current_width").innerHTML= character_width;
        document.getElementById("current_height").innerHTML= character_height;
    }
}

if(keypressed == "38"){
    up();
    console.log("up");
}
if(keypressed == "40"){
    down();
    console.log("down");
}
if(keypressed == "37"){
    left();
    console.log("left");
}
if(keypressed == "39"){
    right();
    console.log("right");
}

function up(){
    if(player_y >= 0 ){
        player_y = player_y - 10;
        console.log("Character height = "+character_height);
        console.log("UP ARROW PRESSED, x = "+player_x+" y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y <= 0 ){
        player_y = player_y + 10;
        console.log("Character height = "+character_height);
        console.log("DOWN ARROW PRESSED, x = "+player_x+" y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x >= 900 ){
        player_x = player_x - 10;
        console.log("Character width = "+character_width);
        console.log("LEFT ARROW PRESSED, x = "+player_x+" y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x <= 0 ){
        player_x = player_x + 10;
        console.log("Character width = "+character_width);
        console.log("LEFT ARROW PRESSED, x = "+player_x+" y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

if(keypressed = "84"){
    new_image("Thor.png");
    console.log("T");
}
if(keypressed = "67"){
    new_image("Captain America.png");
    console.log("C");
}
if(keypressed = "68"){
    new_image("Doctor Strange.png");
    console.log("D");
}
if(keypressed = "66"){
    new_image("Black Widow.png");
    console.log("B");
}
if(keypressed = "72"){
    new_image("Hulk.png");
    console.log("H");
}
if(keypressed = "73"){
    new_image("Iron Man.png");
    console.log("I");
}
if(keypressed = "78"){
    new_image("Nebula.png");
    console.log("N");
}
if(keypressed = "83"){
    new_image("Spider Man.png");
    console.log("S");
}


