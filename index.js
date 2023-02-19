

var score=0;






$("button").click(function(){
$("button").fadeOut();

var intrvl=setInterval(()=>{
    img=enemyappere();
    enemymove(img);


   

},2000)






    $(document).keydown(function(e){
    
        var lft= $(".our").css("left");
        
         // switch (e.key){
  if(e.key== "ArrowLeft"){  
    //left arrow key
    
      $(".our").finish().animate({
          
          left: "-=10"
          
      });}
      
      if(e.key== "ArrowRight"){
      
          $(".our").finish().animate({
              
              left: "+=10"
              
          });}
          
          if(e.key== " "){
           var lazerimg= firelazer();
           var p=document.querySelector(".lazerimg");
           var xlazer=parseInt(window.getComputedStyle(p).getPropertyValue('left'));
           var ylazer=parseInt(window.getComputedStyle(p).getPropertyValue('top'));
          
          
 
        } // }
});



    



});
function enemyappere(){
    var  x = (Math.random() * 755)+300;
        var img = document.createElement("img");
        img.src ="images/enemyimg.png";
        document.getElementById('gfp').appendChild(img);
//alert(x);
        img.classList.add("img");
        img.style.left=x +"px";
        img.style.top=10+"px";
return img;

        
        
   

}
function enemymove(img){
    var intrvl=setInterval(()=>{
        var ximg=0
        ximg=parseInt(img.style.top)
        if(ximg>600){
            if(Array.from(img.classList).includes("dead")){
                img.remove()
            }
            else{
       img.remove()
       alert("game over! you lost with score: "+score);



            }
        }
        else{
            img.style.top=(ximg+4)+"px"
        }
        

    },50)
}


//lazer

function firelazer(){
    var lazerimg=creatlazer();
    movelazer(lazerimg);
    return lazerimg;
}


function creatlazer(){
    var l=document.querySelector("#plane");
    var xlaser=parseInt(window.getComputedStyle(l).getPropertyValue('left'));
    var ylaser=parseInt(window.getComputedStyle(l).getPropertyValue('top'));
    var lazerimg=document.createElement("img");
    lazerimg.src="images/ball.png";
    document.getElementById('gfp').appendChild(lazerimg);
    lazerimg.classList.add("lazerimg");
    lazerimg.style.left=(xlaser+60)+"px"
    lazerimg.style.top=(ylaser+600)+"px"
    return lazerimg;
}
function movelazer(lazerimg){
    var large=lazerimg
    var intrvl=setInterval(()=>{
        var xlazer=parseInt(lazerimg.style.top)


        let monsters = document.querySelectorAll(".img")
    monsters.forEach(monster => {
        //for(var i=0;i<15;i++){
           // for(var j=0;j<15;j++){
                if (checkLaserCollision(lazerimg, monster)) {
        monster.classList.add("dead")
                    monster.remove();
                    
                    score=score+100
                    
                    $(".score").text("score:"+score);
                  }//}}
     
    })
       // if(xlazer===200){
       //// lazerimg.remove()

       // }
        //else{
            lazerimg.style.top=(xlazer-4)+"px"
        //}

    },10)

}



function checkLaserCollision(laserimg, monster) {
    let laserLeft = parseInt(laserimg.style.left)
    let laserTop = parseInt(laserimg.style.top)
    let laserBottom = laserTop - 20
    let monsterTop = parseInt(monster.style.top)
    let monsterBottom = monsterTop - 30
    let monsterLeft = parseInt(monster.style.left)
    //console.log(monsterLeft);
    //console.log(laserLeft)
    if ( laserLeft >monsterLeft&&laserLeft < monsterLeft+100) {
      if ( (laserTop <= monsterTop && laserTop >= monsterBottom) ) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }



