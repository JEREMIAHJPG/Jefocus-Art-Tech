
<template >
  
  <div style="border-radius:100%; position:sticky; top:70%; z-index:2; width:100px; height: 100px; background-color: black; "  >
      <h1 id="numberoforders" style="color:white; font-size:xx-large;  position: relative; z-index:8; left:40%; top:30%;">{{ numberoforders }}</h1>
    </div>
  <div v-for="(favorite ,index) in convert_all_favorites_to_database()" :key="index" class="Slides_favorite" style="height: 751px; top: 0px;">
   
    <div class=" itemstoorder_favorite "  >
                          <!-- <div class="itemimage " > -->

                          <!-- -- -->
                           <center>
                          <div class="image_view_view1_artwork_favorite">
        <img :src="favorite.First_image_selected" title="image_view_content" class="image_view_content_view1_artwork_favorite" >
       
    </div>
                           <center>
    <div>
    <div class="price_monitor_view1_artwork_favorite">
        <!-- <img class="currency_image_view1_artwork_favorite" title="N"> -->
        <div class="price_number_view1_artwork_favorite">
            {{favorite.Title}}
        </div>
    </div>
    <div class="price_monitor_view1_artwork_favorite">
        <!-- <img class="currency_image_view1_artwork_favorite" title="N"> -->
        <div class="price_number_view1_artwork_favorite">
            {{favorite.Size}}
        </div>
    </div>

    <div class="price_monitor_view1_artwork_favorite">
        <img class="currency_image_view1_artwork_favorite" title="N"><div class="price_number_view1_artwork_favorite">
            {{favorite.price}}
        </div>
      </div>
    </div>
  </center>
    </center>
    <!-- keep for view Item -->
    <!-- <div class="monitor_description_view1">
        <h class="monitor_description_content_view1">
        {{ favorite.Admin_description }}
        </h>
    </div> -->
    <!-- <div class="monitor_time_view1">
        <img class="clock_icon_view1" title="C" src="">
        <Time class="time_monitor_view1" >
            {{ favorite.Admin_upload_date }}
        </Time> -->
        <!-- checking if phone has been accessed -->
        <!-- *#*#4636#*#* -->
    <!-- </div> -->
    
    <div class="monitor_buttons_view1_artwork_favorite">
      
        <button class="view_button_view1_artwork_favorite"  @click=  "view_button(favorite)">View</button>
        <button class="buy_button_view1_artwork_favorite"   @click= "buy_button(favorite)">Buy</button>
        <center>
        <div >
           
        <button :id="'cart_'+favorite.reclaimed_get_token" @click="toggleaddtocart1(favorite), increament()" class="buy_favorite" v-if="!favorite.addtocart ">
                               
          <span class="material-symbols-outlined">add_shopping_cart</span>
                              Add to Cart
                              </button>
                              <button @click="toggleaddtocart1(favorite), decreament()" class="buy_favorite" v-else>
                                <span class="material-symbols-outlined">remove_shopping_cart</span>
                              Remove from Cart
                              </button>       
                            </div >

        <div>
                                <button :id="'favorites_'+favorite.reclaimed_get_token" @click="remove_favorite(favorite)" class="buy_favorite" v-if="!favorite.isfav ">
                                  <span class="material-symbols-outlined">favorite</span>
                                  <span>Add to Favorite</span>
                              </button>
                              <button @click="remove_favorite(favorite)" class="buy_favorite" v-else>
                                <span class="material-symbols-outlined">close</span>
                                Remove from Favorite
                              </button>  
                            
                              </div>
                            </center>
<!-- O'reilly Articulating design decisions by Tom Greever -->
       
        <!-- check for how to handle query in Firebase console -->
    </div>
                          <!-- -- -->
                 
                          <!-- </div> 09039796480 -->
                        </div>
                        <!-- -- -->
   
   
   
   
   
    <!-- <div class="itemstoorder_favorite" style="float: left; min-width: auto;">
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
    <div class="buyaddtocart" style= "width: 70%">
        <div >
         <button :class="[favorite.addtocart ?'buy':'buynot']" :id="'cart_'+favorite.id" @click="toggleaddtocart_from_favorite(favorite), increament()"> Add to Cart</button>
        <button :class="[!favorite.addtocart ?'buy':'buynot']" :id="'cart_'+favorite.id" @click="toggleaddtocart_from_favorite(favorite), decreament()" > Remove from Cart </button>
                                          -->
        <!-- <button class="buy_favorite" v-if="!favoritenow" :id="'cart_'+favorite.id" @click="toggleaddtocart_from_favorite(favorite), increament()"><span class="material-symbols-outlined">add_shopping_cart</span> Add to Cart</button>
        <button class="buy_favorite" :id="'cart_'+favorite.id" @click="toggleaddtocart_from_favorite(favorite), decreament()" v-else><span class="material-symbols-outlined">remove_shopping_cart</span> Remove from Cart </button>
         
        </div>
        
        <button class="addtocart"><span class="material-symbols-outlined">payments</span>Buy</button>
        <button class="addtocart"><span class="material-symbols-outlined">fullscreen</span>View </button>
        </div>
        </div>
        </div> --> 
      
        </div>
        
        
</template>

<script>
import { computed } from 'vue'
export default {

name:'Favoritepage',

data(){
    return{ 
      client_token_ID: this.$route.params.Favoritepage,
      client_selected_approved_item_token:'',  
      client_selected_approved_item_admin_monitor_new_id:'',     
      numberoforders:'',
      favoritenow:false,
      delete_id:'',
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

    // get favorites from client_favorites
    onSnapshot(query(collection(db,'client_favorites'), where('client_token_ID', '==' , this.$route.params.Favoritepage)),
            (favorite_contents) =>{favorite_contents.forEach((doc) => {favorites.push(doc.data())
            })})
// for(var key in localStorage)

// {
//   if(key.split('_')[0] == 'favorites'){
// favorites.push(JSON.parse(localStorage.getItem(key)));
//  console.log(favorites);
// }

// }

return favorites;
},
convert_all_favorites_to_database(){
          var favorite_contents_list = [];
          this.get_favoriteitems().forEach((storage_favorite)=>{
            onSnapshot(query(collection(db, 'approved_checked_adverts'), where('id', '==' , storage_favorite.data().client_selected_approved_item_token)),
            (favorite_contents) =>{favorite_contents.forEach((doc) => {favorite_contents_list.push(doc.data())
            })  }) 
          })
          return favorite_contents_list;
         }
,
// filter(all addtocart= false) then display via mounted then filter all addtocart again to true then push to local storage
number_of_orders(){

  var numberofitems = JSON.parse(localStorage.getItem('numberofordersaddedtocart'));
  this.numberoforders = numberofitems;
console.log(numberofitems)
  // numberoforders+= document.getElementById('.numberoforders').innerHTML; 

  
},
increament(){ return this.numberoforders++ },

decreament(){ return this.numberoforders-- },

async buy_button(favorite){
  this.client_selected_approved_item_token = await favorite.Admin_item_token;
      this.client_selected_approved_item_admin_monitor_new_id = await favorite.admin_monitor_new_id;
   
      favorite.addtocart = !favorite.addtocart;
      
      var numberoforders = JSON.stringify(this.number_of_orders+1);
      localStorage.setItem(`numberofordersaddedtocart`,numberoforders );
      // console.log(numberoforders);
    ///outline the received data
     var total_amount = favorite.qty * favorite.price;
      var data = { id: this.client_selected_approved_item_token, 
                   qty:favorite.qty, 
                   First_image_selected:favorite.First_image_selected,
                   Second_image_selected:favorite.Second_image_selected, 
                   title: favorite.Title,
                   total_amount: total_amount,
                   size: favorite.Size,
                  //  price: favorite.price, 
                  client_token_ID:  this.client_token_ID,
                  client_email : localStorage.getItem(`client_email`),
                  client_selected_approved_item_token : favorite.Admin_item_token,
                  client_selected_approved_item_admin_monitor_new_id : favorite.admin_monitor_new_id,
                  addtocart: favorite.addtocart, 
                   
                   };
          // save the data to localStorage
     if (favorite.addtocart)  {localStorage.setItem(`cart_${favorite.id}`, JSON.stringify(data))};
     if (!favorite.addtocart)  {localStorage.removeItem(`cart_${favorite.id}` );}

      this.$router.replace({name:'Cartpage', params:{Cartpage: this.client_token_ID}})
},

async toggleaddtocart_from_favorite(favorite=''){

  favorite.addtocart = !favorite.addtocart;
      
      var numberoforders = JSON.stringify(this.number_of_orders+1);
      localStorage.setItem(`numberofordersaddedtocart`,numberoforders );
      // console.log(numberoforders);
    ///outline the received data
    //  var total_amount = favorite.qty * favorite.price;
      var data = { id: this.client_selected_approved_item_token, 
        main_quantity:favorite.main_quantity, 
                   First_image_selected:favorite.First_image_selected, 
                   Second_image_selected:favorite.Second_image_selected, 
                   title: favorite.Title,
                  //  total_amount: total_amount,
                   size: favorite.Size,
                  //  price: favorite.price, 
                  client_token_ID:  this.client_token_ID,
                  client_email : localStorage.getItem(`client_email`),
                  client_selected_approved_item_token : favorite.Admin_item_token,
                  client_selected_approved_item_admin_monitor_new_id : favorite.admin_monitor_new_id,
                  addtocart: favorite.addtocart, 
                   
                   };

                   // save the data to localStorage
             if (favorite.addtocart)  {localStorage.setItem(`cart_${favorite.id}`, JSON.stringify(data))};
             if (!favorite.addtocart)  {localStorage.removeItem(`cart_${favorite.id}`);} 
 
  // document.getElementByClassName('.buy').addeventlistener('onclick',toggleaddtocart_from_favorite )
  // document.querySelector('.buy').display = none;

    
   this.favoritenow = !this.favoritenow; 
var cart_items_from_favorite= JSON.stringify(favorite);
 localStorage.setItem('cart_'+favorite.id, cart_items_from_favorite);
  console.log(favorite.addtocart);
  return favorite
  
},

async remove_favorite(favorite){
  await onSnapshot(query(collection(db,'client_favorites'), where('client_selected_approved_item_token', '==' , favorite.Admin_item_token)),
            (content) =>{content.forEach((doc) => {this.delete_id = doc.id
            })  })

  await deleteDoc(doc(db, 'client_favorites', this.delete_id))
}
}}
      
            
</script>

<style scoped>
                      .price_monitor_view1_artwork_favorite{
                       width: 70%;
                        border: 3px solid grey;
                        height: 15px;
                         margin-top: 10px;
                    }

                    .price_number_view1_artwork_favorite{
color:black;
float: left;
padding-left: 5px;
padding-right: 5px;
padding-left: 2px;

}
                    .currency_image_view1_artwork_favorite{
    position:relative;
    float: left;

                    }
                    .image_view_content_view1_artwork_favorite{
    max-height: 100px;
   height: 150px;
    max-width:100px;
                    }
                    .image_view_view1_artwork_favorite{
    max-height:200px;
    min-width:fit-content;
    background-color: rgb(163, 163, 163);
    border-radius:10px;
                    }
                    .monitor_buttons_view1_artwork_favorite{
position:relative;
float: left;
margin-top:1px;
height: auto;
max-width:150px;
}
.view_button_view1_artwork_favorite{
    background-color:rgb(249, 149, 67);
color:black;
width: 55px;
height:30px;
border-radius: 5px;
margin: 5px;
}
.buy_button_view1_artwork_favorite{
background-color: red;
color:white;
width:55px;
height:30px;
border-radius:5px;
margin: 5px;
}

.itemstoorder_favorite{
                        float: left;
                        height: auto;
                        width:150px;
                        background-color: yellowgreen;
                        border-radius: 10px;
                        margin: 3px;
                      }

                      .Slides_favorite {
                        display: inline-block;
    height: 300px;
    width: auto;
   position: relative;
    
    overflow-x: auto;
    overflow: auto;
                      }

                      /* .itemimage{
                        float: left;
                        height: auto;
                        width: 100%;
                        padding: 3%;
                        background-color: #4caf50;
                      } */

                      .itemstoorder_favorite{
                        float: left;
                        height: auto;
                        width:150px;
                        background-color: yellowgreen;
                        border-radius: 10px;
                        margin: 3px;
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

                      .buy_favorite{
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