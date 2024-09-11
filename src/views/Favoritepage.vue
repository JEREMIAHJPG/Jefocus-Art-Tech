
<template >
  
  <div style="border-radius:100%; position:sticky; top:70%; z-index:2; width:100px; height: 100px; background-color: black; "  >
      <h1 id="numberoforders" style="color:white; font-size:xx-large;  position: relative; z-index:8; left:40%; top:30%;">{{ numberoforders }}</h1>
    </div>
  <div v-for="(favorite ,index) in get_favoriteitems()" :key="index" class="Slides" style="height: 751px; top: 0px;">
    <div class="itemstoorder" style="float: left; min-width: auto;">
        <div  class="itemimage">
            <img class="img_css" :src="favorite.imgfirst" title="Painting">
        </div>
        <div>
            <div  class="titleandfavorite">
            <div  class="title" style="margin-left: 30%;">
              {{ favorite.title }}
            </div >
                <img class="love" style="margin-left: 30%;" src="love" title="lo">
            </div>
            <div class="size" style="margin-left: 30%;">
              Size:
              {{ favorite.size }}
            </div>
        <div class="price" style="margin-left: 20%;">
    <img  src="" title="currency">
          {{ favorite.price }}
        </div>
    <div class="buyaddtocart" style= "width: 70%" >
        <div >
        <!-- <button :class="[favorite.addtocart ?'buy':'buynot']" :id="'cart_'+favorite.id" @click="toggleaddtocart_from_favorite(favorite), increament()"> Add to Cart</button>
        <button :class="[!favorite.addtocart ?'buy':'buynot']" :id="'cart_'+favorite.id" @click="toggleaddtocart_from_favorite(favorite), decreament()" > Remove from Cart </button>
                                          -->
        <button class="buy" v-if="!favoritenow" :id="'cart_'+favorite.id" @click="toggleaddtocart_from_favorite(favorite), increament()"><span class="material-symbols-outlined">add_shopping_cart</span> Add to Cart</button>
        <button class="buy" :id="'cart_'+favorite.id" @click="toggleaddtocart_from_favorite(favorite), decreament()" v-else><span class="material-symbols-outlined">remove_shopping_cart</span> Remove from Cart </button>
         
        </div>
        
        <button class="addtocart"><span class="material-symbols-outlined">payments</span>Buy</button>
        <button class="addtocart"><span class="material-symbols-outlined">fullscreen</span>View </button>
        </div>
        </div>
        </div>
      
        </div>
        
        
</template>

<script>
import { computed } from 'vue'
export default {

name:'Favoritepage',

data(){
    return{      
      numberoforders:'',
      favoritenow:false
    }

},


mounted(){
this.get_favoriteitems();
// this.get_number_of_items_from_number_of_carts

this.number_of_orders();

},
computed:{

},

methods:{
  
  get_favoriteitems(){
    
    var favorites = [];
for(var key in localStorage)

{
  if(key.split('_')[0] == 'favorites'){
favorites.push(JSON.parse(localStorage.getItem(key)));
 console.log(favorites);
}

}

return favorites;
},
// filter(all addtocart= false) then display via mounted then filter all addtocart again to true then push to local storage
number_of_orders(){

  var numberofitems = JSON.parse(localStorage.getItem('numberofordersaddedtocart'));
  this.numberoforders = numberofitems;
console.log(numberofitems)
  // numberoforders+= document.getElementById('.numberoforders').innerHTML; 

  
},
increament(){ return this.numberoforders++ },

decreament(){ return this.numberoforders-- },

toggleaddtocart_from_favorite(favorite){
  // document.getElementByClassName('.buy').addeventlistener('onclick',toggleaddtocart_from_favorite )
  // document.querySelector('.buy').display = none;
    
   this.favoritenow = !this.favoritenow; 
var cart_items_from_favorite= JSON.stringify(favorite);
 localStorage.setItem('cart_'+favorite.id, cart_items_from_favorite);
  console.log(favorite.addtocart);
  return favorite
  
}
}}
      
            
</script>

<style scoped>

                      .Slides {
                      display: inline-block;
                      height: 600px;
                      width: auto;
                      position: relative;
                      }

                      .itemimage{
                        float: left;
                        height: auto;
                        width: 100%;
                        padding: 3%;
                        background-color: #4caf50;
                      }

                      .itemstoorder{
                        float: left;
                        height: auto;
                        width:300px;
                        background-color: yellowgreen;
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
                      .buynot{
                        float: left;
                        width: 100%;
                        background-color: transparent;
                        border: 3px black solid;
                        height: 40px;
                        padding: 10px;
                        margin: 10px;
                        border-radius: 10px;
                        display: none;
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

</style>