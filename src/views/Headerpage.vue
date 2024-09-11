<template>
    <div class="header">
    <div class="header1">
      <div class="header2"><img alt="logo Jefocus Art" src=""></div>
      <button class="header3">Artwork</button>
       <button class="header3">Explore</button>
      <div class="header4"><input type="text" class="maininput" placeholder="Categories, Topic..."></div> 
      <button class="header5">Trade</button>
      <button class="regfavcart"><img alt="login/signup" src=""></button>
      <button class="regfavcart"><img alt="favorite" src=""></button>
      <button class="regfavcart"><img alt="cart" src=""></button>
    </div>
    </div>
    </template>
    
    <style scoped>
      *{box-sizing: border-box;}
      .header {font-family: Arial, Helvetica, sans-serif;
        margin-top: 100px;}
        .header::after{content: ""; display: table; clear: both;}
        .header1{
          float: left;
          width: 100%;
          height: auto;
          background-color: black;
          margin-left:0% ;
        }
        .header2{width: 10%;
        height: 30%;
        float: left;
        padding-top:0.5%;
        position: relative;
        margin:2% ;
        color: white;
      }
      .header3{
        width: 10%;
        height: 30%;
        float: left;
        justify-content: end;
        margin-left:2% ;
        padding-top:0.5%;
        margin-top: 2.5%;
        position: relative;
        color: white;
        background-color: transparent;
      }
      .header3.hover {background-color: greenyellow;}
      .header4{width: 10%;
        float: left;
        height: auto;
        margin-left: 2%;
        margin-top: 2.5%;
        
      }
      .header5{border: 1px white solid;
        border-radius: 3px;
       position: relative;
       top: auto;
       bottom: -33px;
       left: 60px;
       right: 30px;
        float: left;
        background-color: transparent;
        color: white;
      }
     
    
      .regfavcart{
        color: white;
        padding: 2%;
        width: 2%;
        height: 2%;
        float: left;
        margin-left: 70px;
        background-color: transparent;
      }
      .regfavcart.hover{background-color: greenyellow;}
    
      .maininput{
        margin-top: 1%;
        width: -70%;
      }
      .maininput:focus{margin-top: 1%;
        width: -70%; background-color: yellow;}
          .maininput:hover{margin-top: 1%;
        width: -70%; background-color: rgb(0, 255, 0);}
    
        @media screen and (min-width: 321px) and (max-width: 768px){
          
        }
               @media screen and (max-width: 320px){
              .header2{width: 100%; margin-left:-0.15%;}
                .header3{width: 100%; margin-left:-0.2%;}
                .header4{width: 100%;
        float: left;
        height: auto;
        margin-left: 2%;
        margin-top: 2.5%;
        }
        .header5{ width: 60%;
       position: relative;
       top: auto;
       bottom: -33px;
       left: 60px;
       right: 30px;
        float: left;
      }
      .regfavcart{
        width: 100%;
        position: relative;
        margin-top: 15%;
        left:-20%;
        float: left;
        
      }
               }
    </style>