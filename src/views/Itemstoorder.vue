<template>
    <div class="itemstoorder">
                          <div class="itemimage">
                            <img src="Galaxy Image2.jpg" title="Painting">
                          </div>
                          <div>
                            <div class="titleandfavorite">
                              <div class="title"> Galaxy Image2</div>
                              <img class="love" src="love" title="lo">
                            </div>
                            <div class="size">Size</div>
                            <div class="price"><img src="" title="currency">Price</div>
                            <div class="buyaddtocart"><button class="buy">Add to Cart</button> <button class="addtocart">Buy Now</button></div>
                          </div>
                        </div>
    
     
      
    </template>
    
    <script>
    
    
    export default {
      name: 'Itemstoorder',
     
      data(){
        return{
       
    
      }}}
      
    </script>


    <style scoped >
    body{margin:0;}

    ul.sidenav{list-style-type: none; margin:0; padding:0; width: 25%; background-color: #f1f1f1; position: fixed; height: 100%; overflow: auto;}
    ul.sidenav li a{display: block; color: #000; padding: 8px 16px; text-decoration: none;}
    ul.sidenav li a.active {background-color: #4caf50; color: white;}
    ul.sidenav li a:hover:not(.active){background-color: #555; color: white;}
    div.content {margin-left: 25%; padding: 1px 16px; height: 1000px;}
    @media screen and (max-width:900px) {ul.sidenav{width:100%; height: auto; position: relative;} ul.sidenav li a {float:left; padding: 15px;} div.content{margin-left: 0;}}
    @media screen and (max-width:400px) {ul.sidenav li a {text-align: center; float: none;}}
    .dropdown{position: relative; display: inline-block}
    .dropdown-content{display: none; position: absolute; background-color: #f9f9f9; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);padding: 12px 16px; z-index: 1;}
    .dropdown:hover .dropdown-content{display:block;}
    
    
    *{box-sizing: border-box;}
        .bottom {font-family: Arial, Helvetica, sans-serif;}
        .base {float:left; 
            text-align: center;
            width: 100%;
            
            color: white;
             padding: 10px;
              height: auto;}

              .row1 {
                height: auto;
                width: 100%;
              }
              .itemstoorder{
                float: left;
                height: auto;
                width: auto;
                background-color: yellowgreen;
              }

              .itemimage{
                float: left;
                height: auto;
                width: 100%;
                padding: 3%;
                background-color: #4caf50;
              }

              .titleandfavorite{
                  width: auto;
                  height: auto;
                  padding: 5%;

              }

              .title{
                float:left;
                width: 70%;
              }
              .love{
                float: left;
                width: 20%;
              }

              .size{
                float: left;
                width: 100%;
                height: auto;
                padding: 3%;
              }

              .price{
                float: left;
                width: 100%;
                height: auto;
                padding: 3%;
              }

              .buyaddtocart{
                float: left;
                width: 100%;
                padding-left: 10%;
                padding-right: 10%;
                padding-top: 10%;
                padding-bottom: 10%;

              }

              .buy{
                float: left;
                width: 100%;
                background-color: transparent;
                border: 3px black solid;
                height: 40px;
                padding: 10px;
                margin: 10px;
                border-radius: 10px;
              }

              .buy:hover{
                color: white;
                background-color: black;
              }

              .addtocart{
                float: left;
                width: 100%;
                background-color: transparent;
                border: 3px black solid;
                height: 40px;
                padding: 10px;
                margin: 10px;
                border-radius: 10px;
              }
              .addtocart:hover{
                color: white;
                background-color: black;
              }





              .headingpainting {
                height: 25%;
                padding-left: 5%;
                font-size:x-large;
              }
              .circlespack {
                float: left;
                width: 100%;
                height: auto;
                background-color: white;
                position: relative;
                margin: auto;
                
              }
              
              .circle {
                background-color: white;
                color: #000;
                border: 1px #000 solid;
                border-radius: 50%;
                height: 50px;
                width: 50px;
              }

              .circle:hover {
                background-color: #000;
                color: white;
                border: 1px #000 solid;
                
              }

              .circle:active {
                background-color: rgb(0, 255, 0);
                color: white;
                border: 1px #000 solid;
                
              }

        .row1:after{content: ""; display: table; clear: both;}
        .footer {background-color: #f1f1f1; padding: 10px; text-align: center;}
       
        [class=foot]{
         text-align: center;
         list-style-type: none;
         justify-content:baseline;
         box-sizing: border-box;
        }

        li.foot1{
         color: white;
         
         width: auto;
         height: auto;
         justify-content: left;
         text-align: left;
         padding-top: 5%;

        }
        
</style>