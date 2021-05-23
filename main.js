var canvas= new fabric.Canvas("mycanvas")
block_img_width=30;
block_img_height=30;
player_x=10;
player_y=10;
var player_object="";
function player_update()
{
    fabric.Image.fromURL("player.png", function(IMG){
        player_object= IMG;
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(player_object);   
    })
}
function new_img(get_image)
{
    fabric.Image.fromURL(get_image, function(IMG){
        block_object= IMG;
        block_object.scaleToWidth(block_img_width)
        block_object.scaleToHeight(block_img_height)
        block_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_object);   
    })
}
window.addEventListener("keydown",key_down)
function key_down(e){
    key=e.keyCode
    if(key=="37"){
        Left()
    }
    if(key=="38"){
        up()
    }
    if(key=="39"){
        right()
    }
    if(key=="40"){
        down()
    }
    if(key=="87")
(
    new_img("captain_america_left_hand.jpg")
)
if(key=="71")
(
    new_img("hulk_face.png")
)
if(key=="76")
(
    new_img("hulk_left_hand.png")
)
if(key=="84")
(
    new_img("hulk_legs.png")
)
if(key=="82")
(
    new_img("hulk_right_hand.png")
)
if(key=="89")
(
    new_img("hulkd_body.png")
)
if(key=="68")
(
    new_img("ironman_body.png")
)
if(key=="85")
(
    new_img("ironman_face.png")
)
if(key=="67")
(
    new_img("ironman_left_hand.png")
)
if(e.shiftKey==true&&key=="80"){
    block_img_width=block_img_width+10
    block_img_height=block_img_height+10
    document.getElementById("current_height").innerHTML=block_img_height
    document.getElementById("current_width").innerHTML=block_img_width
}
if(e.shiftKey==true&&key=="77"){
    block_img_width=block_img_width-10
    block_img_height=block_img_height-10
    document.getElementById("current_height").innerHTML=block_img_height
    document.getElementById("current_width").innerHTML=block_img_width
}
}
function Left(){
    if(player_x>0){
        player_x=player_x-block_img_width
        canvas.remove(player_object)
        player_update()
       
    }

}
function right(){
    if(player_x<700){
        player_x=player_x+block_img_width 
        canvas.remove(player_object)
        player_update()
       
    }

}
function up(){
    if(player_y>0){
        player_y=player_y-block_img_height
        canvas.remove(player_object)
        player_update()
       
    }

}
function down(){
    if(player_y<700){
        player_y=player_y+block_img_height
        canvas.remove(player_object)
        player_update()
        

    }

}