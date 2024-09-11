<style scoped >
            body{margin:0;}

            ul.sidenav{list-style-type: none; margin:0; padding:0; width: 15%; background-color: #f1f1f1; position: fixed; height: 100%; overflow: auto;}
            ul.sidenav li a{display: block; color: #000; padding: 8px 16px; text-decoration: none; float: left; width: 100%;}
            ul.sidenav li a.active {background-color: #4caf50; color: white;}
            ul.sidenav li a:hover:not(.active){background-color: #555; color: white;}
            div.content {margin-left: 0%; padding: 0px 0px; height: 1000px;}
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

                      .base1 {float:left; 
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
                        width:300px;
                        background-color: yellowgreen;
                      }
                      
                      @media screen and (min-width: 361px) and (max-width: 768px){}
                      @media screen and (max-width: 360px){
                        .imgdescription2 {
                          width:fit-content; height:50%; float:left;
                              }
                        .size{
                        float: left;
                        width: 100%;
                        height: auto;
                        padding: 3%;
                        
                      }
                      
                      .img_css{
                  max-width: fit-content !important;
                  height: 250px !important;
                      }
                      
                      }
                      .itemimage{
                        float: left;
                        height: auto;
                        width: 100%;
                        padding: 3%;
                        background-color: #4caf50;
                      }
                      .img_css{
                  max-width: fit-content !important;
                  height: 250px !important;
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
                     

                      .size{
                        position:relative;
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
                        background-color: black !important;
                      }
                      .buy:hover{
                        color: white;
                        background-color: black !important;
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
                        background-color: black !important;
                      }





                      .headingpainting {
                        height: 25%;
                        padding-left: 5%;
                        font-size:x-large;
                      }
                      row1:after{content: ""; display: table; clear: both;}

                
                .footer {background-color: #f1f1f1; padding: 10px; text-align: center;}
               
                [class=foot]{
                 text-align: center;
                 list-style-type: none;
                 justify-content:baseline;
                 box-sizing: border-box;
                }
     
                li{
                 float: left;
                 text-align: left;
                }
               
                .d_inline{
                  display: inline-flex !important;
                  width: 100%;
                  overflow-x: scroll !important;
                  
                }
                .cart{
                  
                  float: left;
                        width: 100%;
                        background-color: transparent;
                        border: 3px black solid;
                        height: 40px;
                        padding: 10px;
                        margin: 10px;
                        border-radius: 10px;
                }

                .Slides {
    display: inline-block;
    height: 600px;
    width: auto;
   position: relative;
    
    overflow-x: auto;
    overflow: auto;
}


.img {
    
    height:600px;
    display: table;
    float: left;
    width: auto ;
    padding: 10px;  
}
.polaroid{width: 70%;
height: 40%;}
.img:after{content: ""; display: table; clear: both;}
.Slide {
    transition: top 1s ease-out;
    position: relative;
    display: inline-block;
  
  height: auto;
  overflow: visible !important;
}
.nav-number{border: 2px green solid;
padding: 4px;
background-color: white;
color:black;
border-radius: 5px;
margin: 2px;
cursor: pointer;
}
.nav-number.current{
    background-color: green;
color:white;
}
.navigation{
  margin-top: 10px;
  color: #000;
}
.view{
  z-index: 1; top:0%; left:0%; right:0%; height:100%; width: 100%; position:fixed; background-color: white; justify-content: center;
}
.viewpage {
  margin-top:10px; margin-left: 0; height:50%; position:relative; float: left;  justify-content: center;
}
.imgdescription {
  float: left; width:50%;
}
.imgdescriptionmain{
  float: left; width:100%;
}
.imgdescriptionbutton{
  float: left; left: 40%; width:30%; justify-content: center;
}
        </style>
   <template>
    <div style="border-radius:100%; position:sticky; top:70%; z-index:2; width:100px; height: 100px; background-color: black; "  >
      <h1 style="color:white; font-size:xx-large; position: relative; z-index:8; left:40%; top:30%;">{{ number_of_orders }}</h1>
    </div>
        <!-- <ul class="sidenav">
            <li class="foot1" style="background-color:#555; color: white; width: 100%; text-align:center; font-size:x-large;">Buy Art </li>
            <li><a class="active" href=""><input type="checkbox">Canvas Paintings</a> </li>
            <li><a href=""><input type="checkbox">Sculpt and Artifacts</a></li>
            <li><a href=""><input type="checkbox">Digital Art</a></li>
            <li><a href=""><input type="checkbox">Drawing</a></li>
            <li><a href=""><input type="checkbox">Prints</a></li>
            <li><a href=""><input type="checkbox">Photography</a></li>
        </ul> -->

        <div class="content">
            
            
             <div class="bottom">
                 <div class="row1" >
                     <div class="base1" style="background-color:aquamarine;">
                       <div class="headingpainting" style="background-color: aquamarine;">
                       <h3 style="float: left;">Paintings</h3> <h1 style="font-size: small;padding-top: 3%;padding-left:5%; float: left;">Most Popular Categories of Artworks:<h2 style="font-size: small; padding-left: 2%; padding-top: 2.9%; float: left;">Abstract Paintings, Landscape Paintings, Oil Painting </h2></h1>
                       </div>
                     </div>
                     <div class="base" style="background-color:#bbb">
                      <div class="size">
                        <h1>Landscape Paintings</h1>
                        
                        <div class="Slides">
    <div  v-for="(landscapepainting, index) in landscapepaintingprofiles" :key="index" class="Slide"  :style="{height: innerHeight + 'px', top: '-' + slidesInnermarginTopL +'px'}" >
        
      
        <div class=" itemstoorder "  >
                          <div class="itemimage " >
                            <img class="img_css" :src="landscapepainting.imgfirst" title="Painting">
                          </div>
                          <div>
                            <div class="titleandfavorite">
                              <div class="title"> {{ landscapepainting.Title}}</div>
                              <img class="love" src="love" title="lo">
                            </div>
                            <div class="size">{{  landscapepainting.Size }}</div>
                            <div class="price"><img src="" title="currency">{{  landscapepainting.Price }}</div>
                            
                            <div class="buyaddtocart" style=" margin-top: 0%;">
                              <div>
                                <button :id="'favorites_'+landscapepainting.id" @click="togglefavorite1(landscapepainting)" class="buy" v-if="!landscapepainting.isfav ">
                                  <span class="material-symbols-outlined">favorite</span>
                                  <span>Add to Favorite</span>
                              </button>
                              <button @click="togglefavorite1(landscapepainting)" class="buy" v-else>
                                <span class="material-symbols-outlined">close</span>
                                Remove from Favorite
                              </button>  
                            
                              </div>
                              <div >
                              <button :id="'cart_'+landscapepainting.id" @click="toggleaddtocart1(landscapepainting), increament()" class="buy" v-if="!landscapepainting.addtocart ">
                                <span class="material-symbols-outlined">add_shopping_cart</span>
                              Add to Cart
                              </button>
                              <button @click="toggleaddtocart1(landscapepainting), decreament()" class="buy" v-else>
                                <span class="material-symbols-outlined">remove_shopping_cart</span>
                              Remove from Cart
                              </button>  
                              </div>
                            <button class="addtocart" @click="buynow()"><span class="material-symbols-outlined">payments</span>Buy</button>
                            <button class="addtocart" @click="tooglelpdisplay(landscapepainting)"><span class="material-symbols-outlined">fullscreen</span>View </button>
                            
                          </div>
                          </div>
                        </div>
  </div>
     </div>
     
 
<div class="navigation">
        <span v-on:click="goToPrevL"><span class="material-symbols-outlined">skip_previous</span>Prev</span>
        <span class="nav-number" v-bind:class="[index === currentIndexL ? 'current':'']" v-on:click="gotoslideindexL(index)" v-for="(landscapepainting, index) in landscapepaintingprofiles" :key="index">{{index+1}}</span>
        <span v-on:click="goToNextL">Next<span class="material-symbols-outlined">skip_next</span></span>
     </div>
                      </div>
                    
                    </div>
                    </div>
                     <div class="base" style="background-color:#cfc">
                      <div class="size ">
                        <h1>Abstract Paintings</h1>
    
                        <div class="Slides">
    <div  v-for="(abstractpainting, index) in abstractpaintingprofiles" :key="index" class="Slide"  :style="{height: innerHeight + 'px', top: '-' + slidesInnermarginTopA +'px'}" >
        
      content
        <div  class="itemstoorder " >
                          <div class="itemimage " >
                            <img class="img_css" :src="abstractpainting.img" title="Painting">
                          </div>
                          <div>
                            <div class="titleandfavorite">
                              <div class="title"> {{abstractpainting.Title}}</div>
                              <img class="love" src="love" title="lo">
                            </div>
                            <div class="size">{{ abstractpainting.Size }}</div>
                            <div class="price"><img src="" title="currency">{{ abstractpainting.Price }}</div>
                            <div class="buyaddtocart">
                              <div>
                              <button @click="toggleaddtocart2( abstractpainting)" class="buy" v-if="!abstractpainting.addtocart">
                              Add to Cart
                              </button>
                              <button @click="toggleaddtocart2( abstractpainting)" class="buy" v-else>
                              Remove from Cart
                              </button>  
                              </div>
                            <button class="addtocart" @click="buynow()">Buy</button>
                            <button class="addtocart" @click="toogleapdisplay(abstractpainting)">View </button>
                          </div>
                          </div>
                          </div>
                        </div>
  </div>
     </div>
     

<div class="navigation">
        <span v-on:click="goToPrevA">Prev</span>
        <span class="nav-number" v-bind:class="[index === currentIndexA ? 'current':'']" v-on:click="gotoslideindexA(index)" v-for="(abstractpainting, index) in abstractpaintingprofiles" :key="index">{{index+1}}</span>
        <span v-on:click="goToNextA">Next</span>
     </div>
                      </div>
                    
                    </div>
  
 



                     <div class="base" style="background-color:rgb(204, 242, 255); height:auto">
                      <div class="size">
                      <h1>Relief Paintings</h1>
                      <div class="Slides">
    <div  v-for="( reliefpainting, index) in  reliefpaintingprofiles" :key="index" class = "Slide"  :style = "{height: innerHeight + 'px', top: '-' + slidesInnermarginTopR +'px'}" >
        <br/>
      
        <div class="itemstoorder" >
                          <div class="itemimage " >
                            <img class="img_css" :src=" reliefpainting.img" title="Painting">
                          </div>
                          <div>
                            <div class="titleandfavorite">
                              <div class="title"> {{ reliefpainting.Title}}</div>
                              <img class="love" src="love" title="lo">
                            </div>
                            <div class="size">{{  reliefpainting.Size }}</div>
                            <div class="price"><img src="" title="currency">{{  reliefpainting.Price }}</div>
                            <div class="buyaddtocart">
                              <div >
                              <button @click="toggleaddtocart3( reliefpainting)" class="buy" v-if="!reliefpainting.addtocart">
                              Add to Cart
                              </button>
                              <button @click="toggleaddtocart3( reliefpainting)" class="buy" v-else>
                              Remove from Cart
                              </button>  
                              </div>
                              <button class="addtocart" @click="buynow()">Buy</button>
                              <button class="addtocart" @click="tooglerpdisplay(reliefpainting)">View </button>
                          </div>
                          </div>
                        </div>
  </div>
     </div>
     

<div class="navigation">
        <span v-on:click="goToPrevR">Prev</span>
        <span class="nav-number" v-bind:class="[index === currentIndexR ? 'current':'']" v-on:click="gotoslideindexR(index)" v-for="( reliefpainting, index) in  reliefpaintingprofiles" :key="index">{{index+1}}</span>
        <span v-on:click="goToNextR">Next</span>
     </div>
                      </div>
                    
                    </div>
                     <div class="base" style="background-color:rgb(204, 205, 255); height: auto !important;" >
                      <div class="size" >
                        <h1>Portrait Paintings and Drawings</h1>
                        <div class="Slides">
    <div  v-for="( portraitpainting, index) in  portraitpaintingprofiles" :key="index" class="Slide"  :style="{height: innerHeight + 'px', top: '-' + slidesInnermarginTopP +'px'}" >
        
      
        <div class="itemstoorder  " >
                          <div class="itemimage " >
                            <img class="img_css" :src=" portraitpainting.img" title="Painting">
                          </div>
                          <div>
                            <div class="titleandfavorite">
                              <div class="title"> {{ portraitpainting.Title}}</div>
                              <img class="love" src="love" title="lo">
                            </div>
                            <div class="size">{{  portraitpainting.Size }}</div>
                            <div class="price"><img src="" title="currency">{{  portraitpainting.Price }}</div>
                            <div class="buyaddtocart">
                              <div>
                              <button  @click="toggleaddtocart3(portraitpainting)" class="buy" v-if="!portraitpainting.addtocart">
                              Add to Cart
                              </button>
                              <button  @click="toggleaddtocart(portraitpainting)" class="buy" v-else>
                              Remove from Cart
                              </button>  
                              </div>
                              <button class="addtocart" @click="buynow()">Buy</button>
                              <button class="addtocart" @click="toogleppdisplay(portraitpainting)">View </button>
                          </div>
                          </div>
                        </div>
  </div>
     </div>
     

<div class="navigation">
        <span v-on:click="goToPrevP">Prev</span>
        <span class="nav-number" v-bind:class="[index === currentIndexP ? 'current':'']" v-on:click="gotoslideindexP(index)" v-for="( portraitpainting, index) in  portraitpaintingprofiles" :key="index">{{index+1}}</span>
        <span v-on:click="goToNextP">Next</span>
     </div>

     
                      </div>
                    
                    </div>
                      
                      </div>
                
               
              
              
                      <div class="content">
            
            
            <div class="bottom">
                <div class="row1" >
                    <div class="base1" style="background-color:aquamarine;">
                      <div class="headingpainting" style="background-color: aquamarine;">
                      <h3 style="float: left;">Sculpture</h3> <h1 style="font-size: small;padding-top: 3%;padding-left:5%; float: left;">Most Popular Categories of Artworks:<h2 style="font-size: small; padding-left: 2%; padding-top: 2.9%; float: left;">Casting and Moulding, Absrtact Sculpture and Relief Sulpture</h2></h1>
                      </div>
                    </div>
                    <div class="base" style="background-color:#bbb">
                     <div class="size">
                       <h1>Casting and Moulding</h1>
                       
                       <div class="Slides">
   <div  v-for="(casting, index) in castingprofiles" :key="index" class="Slide"  :style="{height: innerHeight + 'px', top: '-' + slidesInnermarginTopC +'px'}" >
       
     
       <div class="itemstoorder  " >
                         <div class="itemimage " >
                           <img class="img_css" :src=" casting.img" title="Painting">
                         </div>
                         <div>
                           <div class="titleandfavorite">
                             <div class="title"> {{ casting.Title}}</div>
                             <img class="love" src="love" title="lo">
                           </div>
                           <div class="size">{{ casting.Size }}</div>
                           <div class="price"><img src="" title="currency">{{  casting.Price }}</div>
                           <div class="buyaddtocart">
                             <div>
                             <button @click="toggleaddtocart(casting)" class="buy" v-if="!casting.addtocart">
                             Add to Cart
                             </button>
                             <button @click="toggleaddtocart(casting)" class="buy" v-else>
                             Remove from Cart
                             </button>  
                             </div>
                           <button class="addtocart" @click="buynow()">Buy</button>
                           <button class="addtocart" @click="tooglecdisplay(casting)">View </button>
                         </div>
                         </div>
                       </div>
 </div>
    </div>
    

<div class="navigation">
       <span v-on:click="goToPrevC">Prev</span>
       <span class="nav-number" v-bind:class="[index === currentIndexC ? 'current':'']" v-on:click="gotoslideindexC(index)" v-for="(casting, index) in castingprofiles" :key="index">{{index+1}}</span>
       <span v-on:click="goToNextC">Next</span>
    </div>
                     </div>
                   
                   </div>
                   </div>
                  
                   
                   </div>
 




                    <div class="base" style="background-color:rgb(204, 242, 255); height:auto">
                     <div class="size">
                     <h1>Abstract Sculpture</h1>
                     <div class="Slides">
   <div  v-for="(absculpt, index) in absculptprofiles" :key="index" class = "Slide"  :style = "{height: innerHeight + 'px', top: '-' + slidesInnermarginTopAS +'px'}" >
       <br/>
     
       <div class="itemstoorder" >
                         <div class="itemimage " >
                           <img class="img_css" :src=" absculpt.img" title="Painting">
                         </div>
                         <div>
                           <div class="titleandfavorite">
                             <div class="title"> {{ absculpt.Title}}</div>
                             <img class="love" src="love" title="lo">
                           </div>
                           <div class="size">{{ absculpt.Size }}</div>
                           <div class="price"><img src="" title="currency">{{ absculpt.Price }}</div>
                           <div class="buyaddtocart">
                             <div >
                             <button @click="toggleaddtocart( absculpt)" class="buy" v-if="!absculpt.addtocart">
                             Add to Cart
                             </button>
                             <button @click="toggleaddtocart( absculpt)" class="buy" v-else>
                             Remove from Cart
                             </button>  
                             </div>
                             <button class="addtocart" @click="buynow()">Buy</button>
                             <button class="addtocart" @click="toogleasdisplay(absculpt)">View </button>
                         </div>
                         </div>
                       </div>
 </div>
    </div>
    

<div class="navigation">
       <span v-on:click="goToPrevRS">Prev</span>
       <span class="nav-number" v-bind:class="[index === currentIndexRS ? 'current':'']" v-on:click="gotoslideindexRS(index)" v-for="(reliefsculpt, index) in  reliefsculptprofiles" :key="index">{{index+1}}</span>
       <span v-on:click="goToNextRS">Next</span>
    </div>
                     </div>
                   
                   </div>
                    <div class="base" style="background-color:rgb(204, 205, 255); height: auto !important;" >
                     <div class="size" >
                       <h1>Relief Sculpture</h1>
                       <div class="Slides">
   <div  v-for="( reliefsculpt, index) in reliefsculptprofiles" :key="index" class="Slide"  :style="{height: innerHeight + 'px', top: '-' + slidesInnermarginTopRS +'px'}" >
       
     
       <div class="itemstoorder  " >
                         <div class="itemimage " >
                           <img class="img_css" :src=" reliefsculpt.img" title="Painting">
                         </div>
                         <div>
                           <div class="titleandfavorite">
                             <div class="title"> {{ reliefsculpt.Title}}</div>
                             <img class="love" src="love" title="lo">
                           </div>
                           <div class="size">{{  reliefsculpt.Size }}</div>
                           <div class="price"><img src="" title="currency">{{  reliefsculpt.Price }}</div>
                           <div class="buyaddtocart">
                             <div >
                             <button @click="toggleaddtocart(reliefsculpt)" class="buy" v-if="!reliefsculpt.addtocart">
                             Add to Cart
                             </button>
                             <button @click="toggleaddtocart(reliefsculpt)" class="buy" v-else>
                             Remove from Cart
                             </button>  
                             </div>
                             <button class="addtocart" @click="buynow()">Buy</button>
                             <button class="addtocart" @click="tooglersdisplay(reliefsculpt)">View </button>
                         </div>
                         </div>
                       </div>
 </div>
    </div>
    

<div class="navigation">
       <span v-on:click="goToPrevRS">Prev</span>
       <span class="nav-number" v-bind:class="[index === currentIndexRS ? 'current':'']" v-on:click="gotoslideindexRS(index)" v-for="( reliefsculpt, index) in  reliefsculptprofiles" :key="index">{{index+1}}</span>
       <span v-on:click="goToNextRS">Next</span>
    </div>

    
                     </div>
                   
                   </div>
                     
                     </div>
                     <div class="content">
            
            
            <div class="bottom">
                <div class="row1" >
                    <div class="base1" style="background-color:aquamarine;">
                      <div class="headingpainting" style="background-color: aquamarine;">
                      <h3 style="float: left;">Sculpture</h3> <h1 style="font-size: small;padding-top: 3%;padding-left:5%; float: left;">Most Popular Categories of Artworks:<h2 style="font-size: small; padding-left: 2%; padding-top: 2.9%; float: left;">Casting and Moulding, Absrtact Sculpture and Relief Sulpture</h2></h1>
                      </div>
                    </div>
                    <div class="base" style="background-color:#bbb">
                     <div class="size">
                       <h1>Casting and Moulding</h1>
                       
                       <div class="Slides">
   <div  v-for="(casting, index) in castingprofiles" :key="index" class="Slide"  :style="{height: innerHeight + 'px', top: '-' + slidesInnermarginTopC +'px'}" >
       
     
       <div class="itemstoorder  " >
                         <div class="itemimage " >
                           <img class="img_css" :src=" casting.img" title="Painting">
                         </div>
                         <div>
                           <div class="titleandfavorite">
                             <div class="title"> {{ casting.Title}}</div>
                             <img class="love" src="love" title="lo">
                           </div>
                           <div class="size">{{ casting.Size }}</div>
                           <div class="price"><img src="" title="currency">{{  casting.Price }}</div>
                           <div class="buyaddtocart">
                             <div >
                             <button @click="toggleaddtocart(casting)" class="buy" v-if="!casting.addtocart">
                             Add to Cart
                             </button>
                             <button @click="toggleaddtocart(casting)" class="buy" v-else>
                             Remove from Cart
                             </button>  
                             </div>
                           <button class="addtocart" @click="buynow()">Buy</button>
                           <button class="addtocart" @click="tooglecdisplay(casting)">View </button>
                         </div>
                         </div>
                       </div>
 </div>
    </div>
    

<div class="navigation">
       <span v-on:click="goToPrevC">Prev</span>
       <span class="nav-number" v-bind:class="[index === currentIndexC ? 'current':'']" v-on:click="gotoslideindexC(index)" v-for="(casting, index) in castingprofiles" :key="index">{{index+1}}</span>
       <span v-on:click="goToNextC">Next</span>
    </div>
                     </div>
                   
                   </div>
                   </div>
                  
                   
                   </div>
 




                    <div class="base" style="background-color:rgb(204, 242, 255); height:auto">
                     <div class="size">
                     <h1>Abstract Sculpture</h1>
                     <div class="Slides">
   <div  v-for="(absculpt, index) in absculptprofiles" :key="index" class = "Slide"  :style = "{height: innerHeight + 'px', top: '-' + slidesInnermarginTopAS +'px'}" >
       <br/>
     
       <div class="itemstoorder" >
                         <div class="itemimage " >
                           <img class="img_css" :src=" absculpt.img" title="Painting">
                         </div>
                         <div>
                           <div class="titleandfavorite">
                             <div class="title"> {{ absculpt.Title}}</div>
                             <img class="love" src="love" title="lo">
                           </div>
                           <div class="size">{{ absculpt.Size }}</div>
                           <div class="price"><img src="" title="currency">{{ absculpt.Price }}</div>
                           <div class="buyaddtocart">
                             <div>
                             <button @click="toggleaddtocart( absculpt)" class="buy" v-if="!absculpt.addtocart">
                             Add to Cart
                             </button>
                             <button @click="toggleaddtocart( absculpt)" class="buy" v-else>
                             Remove from Cart
                             </button>  
                             </div>
                             <button class="addtocart" @click="buynow()">Buy</button>
                             <button class="addtocart" @click="toogleasdisplay(absculpt)">View </button>
                         </div>
                         </div>
                       </div>
 </div>
    </div>
    

<div class="navigation">
       <span v-on:click="goToPrevAS">Prev</span>
       <span class="nav-number" v-bind:class="[index === currentIndexAS ? 'current':'']" v-on:click="gotoslideindexAS(index)" v-for="(absculpt, index) in  absculptprofiles" :key="index">{{index+1}}</span>
       <span v-on:click="goToNextAS">Next</span>
    </div>
                     </div>
                   
                   </div>
                    <div class="base" style="background-color:rgb(204, 205, 255); height: auto !important;" >
                     <div class="size" >
                       <h1>Relief Sculpture</h1>
                       <div class="Slides">
   <div  v-for="( reliefsculpt, index) in reliefsculptprofiles" :key="index" class="Slide"  :style="{height: innerHeight + 'px', top: '-' + slidesInnermarginTopRS +'px'}" >
       
     
       <div class="itemstoorder  " >
                         <div class="itemimage " >
                           <img class="img_css" :src="reliefsculpt.img" title="Painting">
                         </div>
                         <div>
                           <div class="titleandfavorite">
                             <div class="title"> {{ reliefsculpt.Title}}</div>
                             <img class="love" src="love" title="lo">
                           </div>
                           <div class="size">{{  reliefsculpt.Size }}</div>
                           <div class="price"><img src="" title="currency">{{  reliefsculpt.Price }}</div>
                           <div class="buyaddtocart">
                             <div>
                             <button  @click="toggleaddtocart(reliefsculpt)" class="buy" v-if="!reliefsculpt.addtocart">
                             Add to Cart
                             </button>
                             <button  @click="toggleaddtocart(reliefsculpt)" class="buy" v-else>
                             Remove from Cart
                             </button>  
                             </div>
                             <button class="addtocart" @click="buynow()">Buy</button>
                             <button class="addtocart" @click="tooglersdisplay(reliefsculpt)">View </button>
                         </div>
                         </div>
                       </div>
 </div>
    </div>
    

<div class="navigation">
       <span v-on:click="goToPrevRS">Prev</span>
       <span class="nav-number" v-bind:class="[index === currentIndexRS ? 'current':'']" v-on:click="gotoslideindexRS(index)" v-for="( reliefsculpt, index) in  reliefsculptprofiles" :key="index">{{index+1}}</span>
       <div v-on:click="goToNextRS">Next</div>
    </div>

    
                     </div>
                   
                   </div>
                     
                     </div>
                
      
     <div  v-for="(landscapepainting, index) in filteredlanscapepainting" :key="index"  style="z-index:3;"  class="polaroid, view">
   <div class="imgdescription" style="width:100%; height:fit-content !important; float:left;">
    <img :src="landscapepainting.img" class="viewpage">
  </div>
     <div  class="imgdescription"  style="width:100%; height:50%; float:left;">
      <div class="imgdescriptionmain"> <h2 >Description: {{ landscapepainting.description }}</h2></div>
     <div class="imgdescriptionmain"> <h2 >Size: {{ landscapepainting.Size }}</h2></div>
     <div class="imgdescriptionbutton"><button class="addtocart" @click="tooglelpdisplay(landscapepainting)" > Go Back</button></div>
</div>
</div> 


<div  v-for="(abstractpainting, index) in filteredabstractpainting" :key="index"  style="z-index:3;"   class="polaroid, view">
   <div class="imgdescription" style="width:100%;height:fit-content !important; float:left;" >
    <img :src="abstractpainting.img" class="viewpage">
  </div>
     <div  class="imgdescription"  style="width:100%; height:50%; float:left;">
      <div class="imgdescriptionmain"> <h2 >Description: {{ abstractpainting.description }}</h2></div>
     <div class="imgdescriptionmain"> <h2 >Size: {{ abstractpainting.Size }}</h2></div>
     <div class="imgdescriptionbutton"><button class="addtocart" @click="toogleapdisplay(abstractpainting)" > Go Back</button></div>
</div>


    
   </div> 
   <div  v-for="(reliefpainting, index) in filteredreliefpainting" :key="index"  style="z-index:3;"   class="polaroid, view">
   <div class="imgdescription" style="width:100%; height:fit-content !important; float:left;" >
    <img :src="reliefpainting.img" class="viewpage">
  </div>
     <div  class="imgdescription"  style="width:100%; height:50%; float:left;">
      <div class="imgdescriptionmain"> <h2 >Description: {{ reliefpainting.description }}</h2></div>
     <div class="imgdescriptionmain"> <h2 >Size: {{ reliefpainting.Size }}</h2></div>
     <div class="imgdescriptionbutton"><button class="addtocart" @click="tooglerpdisplay(reliefpainting)" > Go Back</button></div>
</div>


    
   </div> <div  v-for="( portraitpainting, index) in filteredportraitpainting" :key="index"   style="z-index:3;"  class="polaroid, view">
   <div class="imgdescription"  style="width:100%;height:fit-content !important; float:left;" >
    <img :src=" portraitpainting.img" class="viewpage">
  </div>
     <div  class="imgdescription"  style="width:100%; height:50%; float:left;">
      <div class="imgdescriptionmain"> <h2 >Description: {{  portraitpainting.description }}</h2></div>
     <div class="imgdescriptionmain"> <h2 >Size: {{  portraitpainting.Size }}</h2></div>
     <div class="imgdescriptionbutton"><button class="addtocart" @click="toogleppdisplay( portraitpainting)" > Go Back</button></div>
</div>


    
   </div> 
   <div  v-for="( casting, index) in filteredcasting" :key="index"  style="z-index:3;"  class="polaroid, view">
   <div class="imgdescription"  style="width:100%; height:fit-content !important; float:left;" >
    <img :src=" casting.img" class="viewpage">
  </div>
     <div  class="imgdescription"  style="width:100%; height:50%; float:left;">
      <div class="imgdescriptionmain"> <h2 >Description: {{  casting.description }}</h2></div>
     <div class="imgdescriptionmain"> <h2 >Size: {{  casting.Size }}</h2></div>
     <div class="imgdescriptionbutton"><button class="addtocart" @click="tooglecdisplay( casting)" > Go Back</button></div>
</div>


    
   </div> 
 <div  v-for="(absculpt, index) in filteredabsculpt" :key="index" style="z-index:3;"   class="polaroid, view">
   <div class="imgdescription"  style="width:100%; height:fit-content !important; float:left;">
    <img :src="absculpt.img" class="viewpage">
  </div>
     <div  class="imgdescription" style="width:100%; height:50%; float:left;">
      <div class="imgdescriptionmain"> <h2 >Description: {{absculpt.description }}</h2></div>
     <div class="imgdescriptionmain"> <h2 >Size: {{ absculpt.Size }}</h2></div>
     <div class="imgdescriptionbutton"><button class="addtocart" @click="toogleasdisplay(absculpt)" > Go Back</button></div>
</div>


    
   </div> 
 <div  v-for="(reliefsculpt, index) in filteredreliefsculpt" :key="index"  style="z-index:3;"   class="polaroid, view">
   <div class="imgdescription"  style="width:100%; height:fit-content !important; float:left;">
    <img :src="reliefsculpt.img" class="viewpage">
  </div>
     <div  class="imgdescription" style="width:100%; height:50%; float:left;">
      <div class="imgdescriptionmain"> <h2 >Description: {{ reliefsculpt.description }}</h2></div>
     <div class="imgdescriptionmain"> <h2 >Size: {{ reliefsculpt.Size }}</h2></div>
     <div class="imgdescriptionbutton"><button class="addtocart" @click="tooglersdisplay(reliefsculpt)" > Go Back</button></div>
</div>


    
   </div> 

   

   </template>
   
   

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import { POSTERS } from '@/store/storeconstants';
import {storage, db} from "@/firebase"

import { ref,uploadBytes,uploadBytesResumable,getDownloadURL } from "firebase/storage"

import { collection, addDoc, setDoc, getDoc, getDocs, query, where, doc } from 'firebase/firestore';

export default {
    name: 'Artworkpage',
data(){return{
             
             
            
           showprofile:true,
           number_of_orders:0,
           
           landscapepaintingprofiles:[],
               abstractpaintingprofiles:[
              {Title:  'The Lord is with you', Size: '2 by 3 ft ', Price:200000, img: '/assets/galaxy_image.jpg', isfav:false, buy:false, addtocart:false},
              {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/frame_3.jpg', isfav:false, buy:false, addtocart:false},
              {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Health1.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness_image_for_Logo3.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness6.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness3.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/health.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Fitness5.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/frame_2.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/frame_1.webp', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness4.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness_image_for_Logo4.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/free-healthy-green-apple-image.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Apartment.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with us', Size: '3 by 4ft', Price: 500000, img: '/assets/Boss_UMC_picture.jpg', isfav:false, buy:false, addtocart:false},
               
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Laptop_Image1.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/lion.jpeg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Tayo_Unilag_Interior_Decorator2.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Yoga1.jpg', isfav:false, buy:false, addtocart:false},
              
               ],
               reliefpaintingprofiles:[
               {Title:  'The Lord is with you', Size: '2 by 3 ft ', Price:200000, img: '/assets/galaxy_image.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with us', Size: '3 by 4ft', Price: 500000, img: '/assets/Boss_UMC_picture.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness_image_for_Logo3.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness_image_for_Logo4.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness3.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness4.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Fitness5.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness6.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/frame_1.webp', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/frame_2.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/frame_3.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/free-healthy-green-apple-image.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Apartment.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/health.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Health1.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Laptop_Image1.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/lion.jpeg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Tayo_Unilag_Interior_Decorator2.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Yoga1.jpg', isfav:false, buy:false, addtocart:false},
              
               ],

              portraitpaintingprofiles:[
               {Title:  'The Lord is with you', Size: '2 by 3 ft', Price:200000, img: '/assets/galaxy_image.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with us', Size: '3 by 4ft', Price: 500000, img: '/assets/Boss_UMC_picture.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness_image_for_Logo3.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness_image_for_Logo4.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness3.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness4.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Fitness5.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness6.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/frame_1.webp', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/frame_2.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/frame_3.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/free-healthy-green-apple-image.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Apartment.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/health.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Health1.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Laptop_Image1.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/lion.jpeg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Tayo_Unilag_Interior_Decorator2.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Yoga1.jpg', isfav:false, buy:false, addtocart:false},
              
               ],
               castingprofiles:[
               {Title:  'The Lord is with you', Size: '2 by 3 ft ', Price:200000, img: '/assets/galaxy_image.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with us', Size: '3 by 4ft', Price: 500000, img: '/assets/Boss_UMC_picture.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness_image_for_Logo3.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness_image_for_Logo4.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness3.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness4.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Fitness5.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness6.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/frame_1.webp', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/frame_2.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/frame_3.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/free-healthy-green-apple-image.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Apartment.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/health.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Health1.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Laptop_Image1.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/lion.jpeg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Tayo_Unilag_Interior_Decorator2.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Yoga1.jpg', isfav:false, buy:false, addtocart:false},
              
               ],
               absculptprofiles:[
               {Title:  'The Lord is with you', Size: '2 by 3 ft ', Price:200000, img: '/assets/galaxy_image.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with us', Size: '3 by 4ft', Price: 500000, img: '/assets/Boss_UMC_picture.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness_image_for_Logo3.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness_image_for_Logo4.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness3.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness4.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Fitness5.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness6.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/frame_1.webp', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/frame_2.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/frame_3.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/free-healthy-green-apple-image.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Apartment.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/health.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Health1.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Laptop_Image1.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/lion.jpeg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Tayo_Unilag_Interior_Decorator2.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Yoga1.jpg', isfav:false, buy:false, addtocart:false},
              
               ],
                reliefsculptprofiles:[
               {Title:  'The Lord is with you', Size: '2 by 3 ft ', Price:200000, img: '/assets/galaxy_image.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with us', Size: '3 by 4ft', Price: 500000, img: '/assets/Boss_UMC_picture.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness_image_for_Logo3.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness_image_for_Logo4.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness3.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness4.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Fitness5.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/fitness6.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/frame_1.webp', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/frame_2.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/frame_3.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/free-healthy-green-apple-image.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Apartment.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/health.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Health1.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Laptop_Image1.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/lion.jpeg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Tayo_Unilag_Interior_Decorator2.jpg', isfav:false, buy:false, addtocart:false},
               {Title:  'The Lord is with Everyone', Size: '1 by 2 ft', Price: 100000, img: '/assets/Yoga1.jpg', isfav:false, buy:false, addtocart:false},
              
               ],
              
               
    innerHeight:innerHeight,
    singleHeight:innerHeight,
    currentIndexL:0,
    currentIndexA:0,
    currentIndexR:0,
    currentIndexP:0,
    currentIndexC:0,
    currentIndexAS:0,
    currentIndexRS:0,
     
}
    },
    mounted(){
    axios.get('http://localhost:3000/cartpostprofile')
    .then(response=> this.landscapepaintingprofiles=response.data)
     
  },
    
     computed: {
      
      
      slidesInnermarginTopL(){return this.currentIndexL * this.singleHeight },
     slidesInnermarginTopA(){return this.currentIndexA * this.singleHeight }, 
    slidesInnermarginTopR(){return this.currentIndexR * this.singleHeight },
    slidesInnermarginTopP(){return this.currentIndexP * this.singleHeight },
    slidesInnermarginTopC(){return this.currentIndexC * this.singleHeight},
    slidesInnermarginTopAS(){return this.currentIndexAS * this.singleHeight},
    slidesInnermarginTopRS(){return this.currentIndexRS * this.singleHeight},
    
    // filtered display//
    filteredlanscapepainting(){return this.landscapepaintingprofiles.filter((landscapepainting)=>landscapepainting.display)},
      filteredabstractpainting(){return this.abstractpaintingprofiles.filter((abstractpainting)=>abstractpainting.display)},
        filteredreliefpainting(){return this.reliefpaintingprofiles.filter((reliefpainting)=>reliefpainting.display)},
          filteredportraitpainting(){return this. portraitpaintingprofiles.filter(( portraitpainting)=> portraitpainting.display)},
            filteredcasting(){return this.castingprofiles.filter((casting)=>casting.display)},
              filteredabsculpt(){return this.absculptprofiles.filter((absculpt)=>absculpt.display)},
                filteredreliefsculpt(){return this.reliefsculptprofiles.filter((reliefsculpt)=>reliefsculpt.display)},
                

                //filtered addtocart//
                filteredlandscapepaintingaddtocart(){return this.landscapepaintingprofiles.filter((landscapepainting)=>landscapepainting.addtocart)},
              filteredabstractpaintingaddtocart(){return this.abstractpaintingprofiles.filter((abstractpainting)=>abstractpainting.addtocart)},
               
              },
               
              
                  


    
  
    methods:{
      
      ...mapActions('auth', {
        post: POSTERS,
    }),
    
    
    increament(){ return this.number_of_orders++ },

      decreament(){ return this.number_of_orders-- },
    
      goToPrevL(){if(this.currentIndexL===0){return}
        this.currentIndexL--
    },
    goToNextL(){if(this.currentIndexL===(this.landscapepaintingprofiles.length)*0.5){return}
        this.currentIndexL++
    },
    gotoslideindexL(index){this.currentIndexL=index}, 
    toggleaddtocart1(landscapepainting = ''){
      
      landscapepainting.addtocart = !landscapepainting.addtocart;
      
              var numberoforders = JSON.stringify(this.number_of_orders+1);
              localStorage.setItem(`numberofordersaddedtocart`,numberoforders );
              // console.log(numberoforders);
            ///outline the received data
             var total_amount = landscapepainting.qty * landscapepainting.price;
              var data = { id: landscapepainting.id, 
                           qty:landscapepainting.qty, 
                           imgfirst:landscapepainting.imgfirst, 
                           title: landscapepainting.title,
                           total_amount: total_amount,
                           size: landscapepainting.size,
                           price: landscapepainting.price, 
                           qty: landscapepainting.qty,
                           addtocart: landscapepainting.addtocart, 
                           
                           };
                  // save the data to localStorage
             if (landscapepainting.addtocart)  {localStorage.setItem(`cart_${landscapepainting.id}`, JSON.stringify(data))};
             if (!landscapepainting.addtocart)  {localStorage.removeItem(`cart_${landscapepainting.id}` );}
               
 
      
//       var data = JSON.stringify( landscapepainting);
//          localStorage.setItem(`cart`,data );

//          /*****
//  * get item
//  */ 
//          var get_data = localStorage ;
//          localStorage.getItem(`postL1`,get_data);
        
        
//          var postL=get_data;
//          //  console.log(postL);
        //this.post({postL:postL});
     },

     //toogleremovecart1( product_id = ''){
        //     localStorage.removeItem('cart_'+product_id );
       //  },
       
       togglefavorite1(landscapepainting){ 
        landscapepainting.isfav=!landscapepainting.isfav;
        var data_favorite = { id: landscapepainting.id, 
                           qty:landscapepainting.qty, 
                           imgfirst:landscapepainting.imgfirst, 
                           title: landscapepainting.title,
                           isfav:landscapepainting.isfav,
                           size: landscapepainting.size,
                           price: landscapepainting.price, 
                           qty: landscapepainting.qty,
                           addtocart: landscapepainting.addtocart, };
        if (landscapepainting.isfav)  {localStorage.setItem(`favorites_${landscapepainting.id}`, JSON.stringify(data_favorite))};
        if (!landscapepainting.isfav)  {localStorage.removeItem(`favorites_${landscapepainting.id}` );}
        
      },
    tooglelpdisplay(landscapepainting){landscapepainting.display=!landscapepainting.display},
  
    goToPrevA(){if(this.currentIndexA===0){return}
        this.currentIndexA--
    },goToNextA(){if(this.currentIndexA===(this.abstractpaintingprofiles.length)*0.5){return}
        this.currentIndexA++
    },gotoslideindexA(index){this.currentIndexA=index}, 
    toggleaddtocart2(abstractpainting=''){abstractpainting.addtocart=!abstractpainting.addtocart;
      var data = JSON.stringify( abstractpainting); 
         localStorage.setItem(`cart`,data );
         
         
    
    },
    toogleapdisplay(abstractpainting){abstractpainting.display=!abstractpainting.display},
    

  goToPrevR(){if(this.currentIndexR===0){return}
      this.currentIndexR--
  },goToNextR(){if(this.currentIndexR===(this.reliefpaintingprofiles.length)*0.5){return}
      this.currentIndexR++
  },gotoslideindexR(index){this.currentIndexR=index}, 
  toggleaddtocart(reliefpainting){reliefpainting.addtocart=!reliefpainting.addtocart},
  tooglerpdisplay(reliefpainting){reliefpainting.display=!reliefpainting.display},
  
  goToPrevP(){if(this.currentIndexP===0){return}
      this.currentIndexP--
  },goToNextP(){if(this.currentIndexP===(this.portraitpaintingprofiles.length)*0.5){return}
      this.currentIndexP++
  },gotoslideindexP(index){this.currentIndexP=index}, 
  toggleaddtocart(portraitpainting){portraitpainting.addtocart=!portraitpainting.addtocart},
  toogleppdisplay(portraitpainting){portraitpainting.display=!portraitpainting.display},

  goToPrevC(){if(this.currentIndexC===0){return}
      this.currentIndexC--
  },goToNextC(){if(this.currentIndexC===(this.castingprofiles.length)*0.5){return}
      this.currentIndexC++
  },gotoslideindexC(index){this.currentIndexC=index}, 
  toggleaddtocart(casting){casting.addtocart=!casting.addtocart},
  tooglecdisplay(casting){casting.display=!casting.display},

  goToPrevAS(){if(this.currentIndexAS===0){return}
        this.currentIndexAS--
    },goToNextAS(){if(this.currentIndexAS===(this.absculptprofiles.length)*0.5){return}
        this.currentIndexAS++
    },gotoslideindexAS(index){this.currentIndexAS=index}, 
    toggleaddtocart(){absculpt.addtocart=!absculpt.addtocart},
    toogleasdisplay(absculpt){absculpt.display=!absculpt.display},

     goToPrevRS(){if(this.currentIndexRS===0){return}
        this.currentIndexRS--
    },goToNextRS(){if(this.currentIndexRS===(this.reliefsculptprofiles.length)*0.5){return}
        this.currentIndexRS++
    },gotoslideindexRS(index){this.currentIndexRS=index}, 
    toggleaddtocart(reliefsculpt){reliefsculpt.addtocart=!reliefsculpt.addtocart},
    tooglersdisplay(reliefsculpt){reliefsculpt.display=!reliefsculpt.display},

         
    props: {pages: {type:null,
        default:2 }
}, 

 attached() {let singleHeight = this.$el.clientHeight/this.pages
    this.$set("singleHeight", singleHeight)
    this.$set("innerHeight", singleHeight*index)
    
    
    
},
    }}


</script>