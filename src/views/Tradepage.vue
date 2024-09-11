<style scoped>
*{box-sizing: border-box;}
.bottom1 {font-family: Arial, Helvetica, sans-serif;
    padding-top:250px;}
.base1 {float:left; 
    text-align: center;
    width:100%;
    justify-content: center;
    color: black;
     padding: 10px;
      height: auto;}
      .row1 {
        height: auto;
        width: 100%;
      }
      .tradeh{
        font-size:x-large;
      }
      .insidebox {float:left; 
    text-align: center;
    width:50%;
    justify-content: center;
    color: black;
     padding: 10px;
      height: 400px;}
      .row1 {
        height: auto;
        width: 100%;
      }

      .benefits{float:left; 
    text-align: center;
    width:100%;
    justify-content: center;
    color: black;
    background-color: #bbb;
     padding: 10px;
     margin-top: 10px;
     border-radius: 10px;
      height: auto;}

      .row1 {
        height: auto;
        width: 100%;
      }
      .emailregister{
        position: relative;
        float: left;
        height: 15%;
        width:100%;
        top:90px;
      }
      .commenttoregister{
        position: relative;
        float: left;
        height: 50%;
        width:100%;
        bottom: -50px;
      }
      .catalog{
        float: left;
        width: 100%;
        height: auto;
        position: relative;
    
      }
      .base1:after{content: ""; display: table; clear: both;}
.row1:after{content: ""; display: table; clear: both;}
.footer {background-color: #f1f1f1; padding: 10px; text-align: center;}

           
           .email {position: relative;
            width: 70%;
            height: 100%;
            float: left;
            border: 1px black solid;
            border-radius: 10px;
            font-size: small;
           }
           .email:focus {
            background-color: greenyellow;
            color: black;
            
           }
           .btn2{
            background-color: burlywood;
            color: white;
            width: 30%;
            height: 100%;
            float: left;
            border-radius: 5%;
            box-shadow: 10px #cfc;
            font-size: large;
           }

           @media screen and (min-width: 321px) and (max-width: 768px){
            .insidebox {
    text-align: center;
    width:100%;
    justify-content: center;
    color: black;
     padding: 10px;
      height: 400px;}
      
      }
      
            
           
           @media screen and (max-width: 320px){
            .insidebox {
    text-align: center;
    width:100%;
    justify-content: center;
    color: black;
     padding: 10px;
      height: 400px;}
      .tradeh{
        font-size:medium;}
        .btn2{
        
            font-size: medium;
           }


            
           }  
           

        </style>
        
  
    <template>
        <div class="bottom1">
            <div class="row1">
                <div class="base1" style="background-color:#aaa">
        
                    <!-- Carousel -->
<div id="demo" class="carousel slide" data-bs-ride="carousel">

<!-- Indicators/dots -->
<div class="carousel-indicators" >
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

<!-- The slideshow/carousel -->
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="\assets\frame_2.jpg" alt="Galaxy image.jpg" class="d-block" style="width:100%; height:auto;">
  </div>
  <div class="carousel-item">
    <img src="\assets\frame_1.webp" alt="health-and-fitness-logo-set-vector.jpg" class="d-block" style="width:100%; height:auto;">
  </div>
  <div class="carousel-item">
    <img src="\assets\frame_3.jpg" alt="New York" class="d-block" style="width:100%; height:auto;">
  </div>
</div>

<!-- Left and right controls/icons -->
<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
                    
                </div>
                <div class="base1" style="background-color:#bbb">
                    <div class="insidebox" style="background-color: rgb(233, 233, 233);">
                        <div class="commenttoregister" style="background-color: white;">
                        <h2 class="tradeh"> Explore the benefits of Art </h2>
                        <h3 class="tradeh"> Are you an Art Collector? Discover and have access Amazing Artworks via our notifications </h3>
                        </div>
                    <div class="emailregister" style="background-color: white;">
                    <input type="email" class="email" placeholder="Email......."> <button class="btn2"> Join Us Now</button>
                    </div>
                    </div>
                    <div class="insidebox" style="background-color: rgb(233, 233, 233);"> <img src="" title="">Picture or Video to post<video class="" src="" title=""></video></div>
                </div>
                <div class="base1" style="background-color:#cfc">
                    <div class="insidebox" style="background-color: rgb(255, 255, 255);"><img src="" title="">Picture or Video to post<video class="" src="" title=""></video></div>
                    <div class="insidebox" style="background-color:  rgb(255, 255, 255);">
                    <div class="benefits">
                        <h1 style="font-size: medium;"><img src="" title="mark">Customer Support</h1>
                           <h1 style="font-size:large">Quick response to our Customers</h1>
                    </div>
                    <div class="benefits">
                        <h1 style="font-size: medium;"><img src="" title="mark">No minimum number of Orders required</h1>
                           <h1 style="font-size:large">Feel free to order as much as you want</h1>
                    </div>
                    <div class="benefits">
                        <h1 style="font-size: medium;"><img src="" title="mark">Discount Price</h1>
                           <h1 style="font-size:large">Enjoy trade Discount prices across our entire Art Services</h1>
                    </div>
                    </div>
                </div>
                <div class="base1" style="background-color:rgb(204, 242, 255)">
                    <div class="insidebox" style="background-color: rgb(233, 233, 233);">
                        <div class="commenttoregister" style="background-color: white;">
                            <h2 class="tradeh"> Explore the benefits of Art </h2>
                            <h3 class="tradeh"> Are you an Interior Designer?
                                Discover Amazing Painting Artworks, sculpt-plaques, architechural model and designs via our notifications. </h3>
                        </div>
                        <div class="emailregister" style="background-color: white;">
                            <input type="email" class="email"  placeholder="Email......."> <button class="btn2"> Join Us Now</button>
                        </div>
                    </div>
                    
                    <div class="insidebox" style="background-color:rgb(233, 233, 233); "><img src="" title="">Picture or Video to post<video class="" src="" title=""></video></div>
                </div>
                <div class="base1" style="background-color:#cfc">
                    <div class="insidebox" style="background-color: rgb(255, 255, 255);"><img src="" title="">Picture or Video to post<video class="" src="" title=""></video></div>
                    <div class="insidebox" style="background-color: rgb(255, 255, 255);">
                        <div class="benefits">
                            <h1 style="font-size: medium;"><img src="" title="mark">Creativity and New Ideas</h1>
                           <h1 style="font-size:large">Access new Ideas and trends related to Art and Tech Services (put the Tech Services link) with Jefocus Art.</h1>
                        </div>
                        <div class="benefits">
                            <h1 style="font-size: medium;"> <img src="" title="mark"> Designs and Renovation</h1>
                           <h1 style="font-size:large">We can bring Building Design and Renovation Ideas to Reality Ideas to Reality</h1>
                        </div>
                        <div class="benefits">
                            <h1 style="font-size: medium;"><img src="" title="mark">Commission a Visual and Graphic Artist </h1>
                           <h1 style="font-size:large">Get Paintings and Designs or Art/LED Signage that matches your taste by commissioning Jefocus Art through the Customer Care.</h1>
                        </div>
                    </div>
                </div>
                <div class="base1" style="background-color:rgb(204, 242, 255)">
                    <div class="insidebox" style="background-color: rgb(233, 233, 233);">
                        <div class="commenttoregister" style="background-color: white;">
                            <h2 class="tradeh"> Explore the benefits of Art </h2>
                            <h3 class="tradeh"> Are you a Building Contractor? Discover and Purchase Amazing Achitectural designs and models via our notifications </h3>
                        </div>
                        <div class="emailregister" style="background-color: white;">
                            <input type="email" class="email"  placeholder="Email......."> <button class="btn2"> Join Us Now</button>
                        </div>
                    </div>

                    <div class="insidebox" style="background-color:rgb(233, 233, 233);">Picture or Video to post</div>
                </div>
                <div class="base1" style="background-color: white; height: auto; border: #aaa;">
                   <div class="Catalog"><h3>View our Catalog for more Insight</h3> </div>
                   <div class="Catalog" style="margin-top:2%;"><Button style="height: 30px;">Download our Catalog</Button> </div>
                </div>
           </div>
        
           </div>
           
    
    <div class="footer">
    
    </div>
    </template>

