<template>
    
   
        <div class="row12">
            <div class="base1" style="background-color:grey;">
                <h3 style="color: white;">About JEFOCUS ART </h3>
                <ul class="foot">
                    <li class="foot1">About us</li>
                    <li class="foot1">Our Services</li>
                    <li class="foot1">Impact Report YAAN</li>
                </ul>
            </div>
            <div class="base1" style="background-color:grey;">
                <h3 style="color: white;">Customer Care </h3>
                <ul class="foot">
                <li class="foot1">Contact Us</li>
                <li class="foot1">Shipping</li>
                <li class="foot1">Return policy</li>
                <li class="foot1">Location</li>
                <li class="foot1">Frequently Asked Questions</li>
            </ul>
        </div>
            <div class="base1" style="background-color:grey;">
                <h3 style="color: white;"> Visual Art Services </h3>
                <ul class="foot1">
                <li class="foot1">Potrait Paintings</li>
                <li class="foot1">Canvas Paintings</li>
                <li class="foot1">Interior Decoration</li>
                <li class="foot1">Sculpts and Artifacts</li>
                <li class="foot1">LED Light and Art Signage</li>
                <li class="foot1">Mural Painting</li>
                <li class="foot1">Award and Plaques</li>
                <li class="foot1">Road Marking</li>
                </ul>
            </div>
            <div class="base1" style="background-color:grey;">
                <ul class="foot1">
                    <h3 style="color: white;">Graphics Art and Technology</h3>
                    <li class="foot12">Website Development</li>
                    <li class="foot12">Graphic Design/Branding</li>
                    <li class="foot12">Architectural Design</li>
                    <li class="foot12">Invitation Cards</li>
                    <li class="foot12">Art/Digital Illustrations</li>
                    <li class="foot12">Animation</li>
                    <li class="foot12">Cloth Prints</li>
                    <li class="foot12">Pilow and Mug Prints</li>
                    </ul>
            </div>
            <div class="base1" style="background-color:grey;">
                <h3 style="color: white;"> Follow Us </h3>
            <img style="color: white;" src="" alt="facebook">
            <img style="color: white;" src="" alt="Instagram">
            <img style="color: white;" src="" alt="Youtube">
            </div>
       </div>
       
    
     
       

<div class="footer1">
<h3><img src="" alt="logo"> JEFOCUS ART</h3>
<p>@2023 JEFOCUS ART | Legal Notices General Terms and Conditions</p>
</div>

</template>

<style scoped>
    
*{box-sizing: border-box;}

.base1 {float:left; 
text-align: center;
width:20%;
justify-content: center;
color: black;
 padding: 10px;
  height: 400px;}
  .row12 {
    height: auto;
    width: 100%;
  }
.row12:after{content: ""; display: table; clear: both;}
.footer1 {background-color: #f1f1f1; padding: 10px; text-align: center;}

[class=foot1]{
        text-align: center;
        list-style-type: none;
        justify-content:baseline;
        box-sizing: border-box;
       }

       li.foot12{
        color: white;
        font-size:medium;
        width: auto;
        height: auto;
        justify-content: left;
        text-align: left;
        padding-top: 5%;

       }
       @media screen and (min-width: 321px) and (max-width: 768px){
        li.foot12{font-size: small;}
        .base1 {width:50%;}
  .row12 {
    height: auto;
    width: 100%;
  }
        
       }
       @media screen and (max-width: 320px){
        li.foot12{font-size:x-small;}
        .base1 {width:100%;}
       }


</style>
<script>


export default {
    name: Footerpage
}
</script>
