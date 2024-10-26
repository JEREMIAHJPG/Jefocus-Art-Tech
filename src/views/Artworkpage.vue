
   <template>
  <div style="overflow-y:auto;">
     <div class="reply_form_view_background_view" v-if="show_artwork_view_form" >
         
        <center>
            <div class=container_view style="margin-top: 55px;">
                            
      <div class="image_view_view1_artwork_view">
        <img  title="image_view_content" class="image_view_content_view1_artwork_view" >
        <img  title="image_view_content" class="image_view_content_view1_artwork_view" >
       
    </div>
     
     </div> 
           </center> 
              <center>
                  <!-- <h1 style="color: green">GOD</h1> -->
              <div>
                
        <!-- <img class="currency_image_view1_artwork" title="N"> -->
        <div class="view1_artwork">
          <h style=" color:white; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 300; font-size: large">Title :</h>
            
            <h style="color: white">Title</h>
        </div>
   
   
        <!-- <img class="currency_image_view1_artwork" title="N"> -->
        <div class="view1_artwork">
          <h style=" color:white; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 300; font-size: large">Size :</h>
            
            <h style="color: white">Size</h>
        </div>
        <div class="view1_artwork">
          <h style=" color:white; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 300; font-size: large">Description :</h>
          <h style="color: white">Description</h> 
           
          
        </div>
       
       
        <div class="view1_artwork">
          <h style=" color:white; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 300; font-size: large">Price :</h>
          <img  title="N">
          <h style="color: white">Price</h>
        </div>
              </div>

          <br>
          <div class="view1_artwork">
              <button @click="back_view_button()" style="color: black; border-radius: 10px; width:50px; height:50px; font-weight: 700"> Back </button>
          </div>
     </center>
     
    
    </div>
<div v-if="view_artwork_page" >
    <div style="border-radius:100%; position:fixed; top:70%; left: 80%; z-index:2; width:77px; height: 77px; background-color: black; "  >
      <h1 style="color:white; font-size:xx-large; position: relative; z-index:8; left:40%; top:15%;">{{ number_of_orders }}</h1>
    </div>
    <div style="border-radius:100%; position:fixed; top:70%; z-index:2; width:77px; height: 77px; background-color: black; " @click="view_cart()" >
      <h1 style="color:white; font-size:xx-large; position: relative; z-index:8; top:10%;">    
        <span class="material-symbols-outlined" style="font-size: small;">shopping_cart_checkout</span><span class="cart_font_style">View Cart</span>
        </h1> 
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

        <!-- <div class="content"> -->     

             <div class="bottom">
                 <div class="row1" >
                     <div class="base1" style="background-color:aquamarine;">
                       <div class="headingpainting" style="background-color: aquamarine;">
                       <h3 style="float: left;">Paintings</h3> <h1 style="font-size: small;padding-top: 3%;padding-left:5%; float: left;">Most Popular Categories of Artworks:<h2 style="font-size: small; padding-left: 2%; padding-top: 2.9%; float: left;">Abstract Paintings, Landscape Paintings, Oil Painting </h2></h1>
                       </div>
                     </div>
                     <div class="base" style=" margin-bottom:100px; background-color:#bbb">
                      <div class="size">
                        <h1>Landscape Paintings</h1>
                        
                        <div class="Slides">
    <div  v-for="(items_to_display, index) in items_to_display_profile" :key="index" class="Slide">
        
      
        <div class=" itemstoorder "  >
                          <!-- <div class="itemimage " > -->

                          <!-- -- -->
                           <center>
                          <div class="image_view_view1_artwork">
        <img :src="items_to_display.First_image_selected" title="image_view_content" class="image_view_content_view1_artwork" >
       
    </div>
                           <center>
    <div>
    <div class="price_monitor_view1_artwork">
        <!-- <img class="currency_image_view1_artwork" title="N"> -->
        <div class="price_number_view1_artwork">
            {{items_to_display.Title}}
        </div>
    </div>
    <div class="price_monitor_view1_artwork">
        <!-- <img class="currency_image_view1_artwork" title="N"> -->
        <div class="price_number_view1_artwork">
            {{items_to_display.Size}}
        </div>
    </div>

    <div class="price_monitor_view1_artwork">
        <img class="currency_image_view1_artwork" title="N"><div class="price_number_view1_artwork">
            {{items_to_display.price}}
        </div>
      </div>
    </div>
  </center>
    </center>
    <!-- keep for view Item -->
    <!-- <div class="monitor_description_view1">
        <h class="monitor_description_content_view1">
        {{ items_to_display.Admin_description }}
        </h>
    </div> -->
    <!-- <div class="monitor_time_view1">
        <img class="clock_icon_view1" title="C" src="">
        <Time class="time_monitor_view1" >
            {{ items_to_display.Admin_upload_date }}
        </Time> -->
        <!-- checking if phone has been accessed -->
        <!-- *#*#4636#*#* -->
    <!-- </div> -->
    
    <div class="monitor_buttons_view1_artwork">
      
        <button class="view_button_view1_artwork"  @click=  "view_artwork_button(items_to_display)">View</button>
        <button class="buy_button_view1_artwork"   @click= "buy_artwork_button(items_to_display)">Buy</button>
        <center>
        <div >
           
        <button :id="'cart_'+items_to_display.Admin_item_token" @click="toggleaddtocart1(items_to_display), increament()" class="buy" v-if="!items_to_display.addtocart ">
                               
          <span class="material-symbols-outlined">add_shopping_cart</span>
          <span class="cart_font_style">Add to Cart</span>

                              </button>
                              <button @click="toggleaddtocart1(items_to_display), decreament()" class="buy" v-else>
                                <span class="material-symbols-outlined">remove_shopping_cart</span>
                             <span class="cart_font_style">Remove from Cart</span>
                              </button>       
                            </div >

        <div>
                                <button :id="'favorites_'+items_to_display.Admin_item_token" @click="togglefavorite1(items_to_display)" class="buy" v-if="!items_to_display.isfav ">
                                  <span class="material-symbols-outlined">favorite</span>
                                  <span class="cart_font_style">Add to Favorite</span>
                              </button>
                              <button @click="togglefavorite1(items_to_display)" class="buy" v-else>
                                <span class="material-symbols-outlined">close</span>
                                <span class="cart_font_style"> Remove from Favorite </span>
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
  </div>
     </div>
     
 
<div class="navigation">
        <span v-on:click="goToPrevL"><span class="material-symbols-outlined">skip_previous</span>Prev</span>
        <span class="nav-number" v-bind:class="[index === currentIndexL ? 'current':'']" v-on:click="gotoslideindexL(index)" v-for="(items_to_display, index) in items_to_display_profile" :key="index">{{index+1}}</span>
        <span v-on:click="goToNextL">Next<span class="material-symbols-outlined">skip_next</span></span>
     </div>
                      </div>
                    
                    </div>
                    </div>

    
   </div> 

   </div>
</div>
   </template>
   
   

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import { POSTERS } from '@/store/storeconstants';
import {storage, db} from "@/firebase"

import { ref,uploadBytes,uploadBytesResumable,getDownloadURL } from "firebase/storage"

import { collection, addDoc,where,setDoc, onSnapshot, deleteDoc, doc, getDocs, query, getDoc } from 'firebase/firestore';

export default {
    name: 'Artworkpage',
data(){return{
    
  
  show_artwork_view_form:false,
  Price:'',
  Description:'',
  Title:'',
  view_image:'',
  Size:'',
  view_artwork_page:true,
    client_token_ID:'',
    client_selected_approved_item_token:'',  
    client_selected_approved_item_admin_monitor_new_id:'',
    showprofile:true,
    number_of_orders:0,     
    items_to_display_profile:[],      
    client_favorites_id:'',
               
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
    created(){
      this.on_load_artworkpage();
    },
    mounted(){
    // axios.get('http://localhost:3000/cartpostprofile')
    // .then(response=> this.items_to_display_profile=response.data)
     
  },
    
     computed: {
      
      
      slidesInnermarginTopL(){return this.currentIndexL * this.singleHeight},
    
    
    // filtered display//
    filtered_items_to_display(){return this.items_to_display_profile.filter((items_to_display)=>items_to_display.display)},
    
               
              },
                
  
    methods:{
      
      ...mapActions('auth', {
        post: POSTERS,
    }),
    
    on_load_artworkpage(){
      // onSnapshot(query(collection(db, 'advert_on_artpage'), where('display_art', '==' , true)),
      //       (checkadvert) =>{checkadvert.forEach((doc) => {this.monitor_data.push(doc.data())
      //       })  }) ,

      onSnapshot(query(collection(db, 'getting_token_user_id'), where('get_ID', '==' , localStorage.getItem(`user_id`))),
            (client) =>{client.forEach((doc) => {
              this.client_token_ID = doc.data().reclaimed_get_token
            
            })  });
      onSnapshot(query(collection(db, 'approved_checked_adverts'), where('display_art', '==' , true)),
            (advert) =>{advert.forEach((doc) => {this.items_to_display_profile.push(doc.data())
            })  }) 
    },
    async view_artwork_button(items_to_display){
      this.show_artwork_view_form = true;
      this.view_artwork_page=false;
      this.Price=items_to_display.price,
      this.Description=items_to_display.Admin_description,
      this.Title=items_to_display.Title,
      this.view_first_image=items_to_display.First_image_selected,
      this.view_second_image=items_to_display.Second_image_selected,
      this.Size=items_to_display.Size
    },

    async back_view_button(){
      this.show_artwork_view_form = false;
      this.view_artwork_page=true;
    },
    
    async buy_artwork_button(items_to_display){
      
      // this.client_token_ID = 
      // this.client_email = await localStorage.getItem(`client_email`);
      this.client_selected_approved_item_token = items_to_display.Admin_item_token;
      this.client_selected_approved_item_admin_monitor_new_id = items_to_display.admin_monitor_new_id;
   
      items_to_display.addtocart = !items_to_display.addtocart;
      
      console.log(this.client_selected_approved_item_token)

      var numberoforders = JSON.stringify(this.number_of_orders+1);
      localStorage.setItem(`numberofordersaddedtocart`,numberoforders );
      // console.log(numberoforders);
    ///outline the received data
    // var total_amount = items_to_display.qty * items_to_display.price;
      var data = {         seller_ID: items_to_display.user_ID,
                           id: this.client_selected_approved_item_token, 
                           main_quantity:items_to_display.main_quantity, 
                           First_image_selected:items_to_display.First_image_selected, 
                           Second_image_selected:items_to_display.Second_image_selected, 
                           title: items_to_display.Title,
                           qty:  items_to_display.qty_per_mainprice,
                           total_amount: '',
                           size: items_to_display.Size,
                           price: items_to_display.price, 
                           client_token_ID:  this.client_token_ID,
                           client_email : localStorage.getItem(`client_email`),
                           client_selected_approved_item_token : items_to_display.Admin_item_token,
                           client_selected_approved_item_admin_monitor_new_id : items_to_display.admin_monitor_new_id,
                           addtocart: items_to_display.addtocart, 
                   
                   };
          // save the data to localStorage
     if (items_to_display.addtocart)  {localStorage.setItem(`cart_${items_to_display.Admin_item_token}`, JSON.stringify(data))};
     if (!items_to_display.addtocart)  {localStorage.removeItem(`cart_${items_to_display.Admin_item_token}` );}

      this.$router.push({name:'Cartpage', params:{Cartpage: this.client_token_ID}})
    },
    increament(){ return this.number_of_orders++ },

      decreament(){ return this.number_of_orders-- },
    
      goToPrevL(){if(this.currentIndexL===0){return}
        this.currentIndexL--
    },
    goToNextL(){if(this.currentIndexL===(this.items_to_display_profile.length)*0.5){return}
        this.currentIndexL++
    },
    gotoslideindexL(index){this.currentIndexL=index}, 
    toggleaddtocart1(items_to_display = ''){
      
      items_to_display.addtocart = !items_to_display.addtocart;
      
              var numberoforders = JSON.stringify(this.number_of_orders+1);
              localStorage.setItem(`numberofordersaddedtocart`,numberoforders );
              // console.log(numberoforders);
            ///outline the received data
            //  var total_amount = items_to_display.qty * items_to_display.price;
              var data = { seller_ID: items_to_display.user_ID,
                           id: items_to_display.Admin_item_token, 
                           main_quantity:items_to_display.main_quantity, 
                           First_image_selected:items_to_display.First_image_selected, 
                           Second_image_selected:items_to_display.Second_image_selected, 
                           title: items_to_display.Title,
                           qty:  items_to_display.qty_per_mainprice,
                           total_amount: items_to_display.total_amount,
                           size: items_to_display.Size,
                          price: items_to_display.price, 
                          client_token_ID:  this.client_token_ID,
                          client_email : localStorage.getItem(`client_email`),
                          client_selected_approved_item_token : items_to_display.Admin_item_token,
                          client_selected_approved_item_admin_monitor_new_id : items_to_display.admin_monitor_new_id,
                          addtocart: items_to_display.addtocart, 
                           
                           };
                  // save the data to localStorage
             if (items_to_display.addtocart)  {localStorage.setItem(`cart_${items_to_display.Admin_item_token}`, JSON.stringify(data))};
             if (!items_to_display.addtocart)  {localStorage.removeItem(`cart_${items_to_display.Admin_item_token}` );

             // 
             }
               
 
      
//       var data = JSON.stringify( items_to_display);
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
     view_cart(){
      this.$router.push({name:'Cartpage', params:{Cartpage: this.client_token_ID}})
     },

     //toogleremovecart1( product_id = ''){
        //     localStorage.removeItem('cart_'+product_id );
       //  },
       
      async togglefavorite1(items_to_display){ 
        items_to_display.isfav=!items_to_display.isfav;
        
        var data_favorite = {
                            seller_ID: items_to_display.user_ID,
                           id: items_to_display.Admin_item_token, 
                           main_quantity:items_to_display.main_quantity, 
                          //  First_image_selected:items_to_display.First_image_selected, 
                          //  Second_image_selected:items_to_display.Second_image_selected, 
                           title: items_to_display.Title,
                          //  total_amount: total_amount,
                          size: items_to_display.Size,
                          //  price: items_to_display.price,
                          client_token_ID:  this.client_token_ID, 
                          client_email : localStorage.getItem(`client_email`),
                          client_selected_approved_item_token : items_to_display.Admin_item_token,
                          client_selected_approved_item_admin_monitor_new_id : items_to_display.admin_monitor_new_id,
                          addtocart: items_to_display.addtocart,                       
                           };
        if (items_to_display.isfav)  {await addDoc(collection(db,'client_favorites'), data_favorite );};

                          //  get favorites ID
          onSnapshot(query(collection(db,'client_favorites'), where('client_selected_approved_item_token', '==' , items_to_display.Admin_item_token)),
            (favorite_contents) =>{favorite_contents.forEach((doc) => {this.client_favorites_id = doc.id
            })  }) 

        if (!items_to_display.isfav){await deleteDoc(doc(db, 'client_favorites', this.client_favorites_id))
        console.log("This Favorite is deleted from the client_favorites collection with id :", this.client_favorites_id);
                                    }
        // if (items_to_display.isfav)  {localStorage.setItem(`favorites_${items_to_display.Admin_item_token}`, JSON.stringify(data_favorite))};
        // if (!items_to_display.isfav)  {localStorage.removeItem(`favorites_${items_to_display.Admin_item_token}` );}
        
      },
    tooglelpdisplay(items_to_display){items_to_display.display=!items_to_display.display},
          
    props: {pages: {type:null,
        default:2 }
}, 

 attached() {let singleHeight = this.$el.clientHeight/this.pages
    this.$set("singleHeight", singleHeight)
    this.$set("innerHeight", singleHeight*index)
    
    
    
},
    }}


</script>

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
                .price_monitor_view1_artwork{
                 width: 70%;
                  border: 3px solid grey;
                  height: 15px;
                  margin-top: 10px;
                    }

                    .container_view{
                      position:relative;
z-index: 7;
width: 300;
float: left;
/* margin-left: 3%; */
}

.view1_artwork{
float: left;
width: 100%;
}

      .cart_font_style{
        font-size:small;
      }
                    .reply_form_view_background_view{
    z-index: 10;
    background-color: rgb(0,0,0, 0.8);
    width:100%;
    position:relative;
    height:1000px;
    margin-bottom: 100px;
}
                    .price_number_view1_artwork{
color:black;
float: left;
padding-left: 5px;
padding-right: 5px;
padding-left: 2px;

}
                    .currency_image_view1_artwork{
    position:relative;
    float: left;

                    }
                    .image_view_content_view1_artwork{
    max-height: 100px;
   height: 150px;
    max-width:100px;
    
                    }
                    .image_view_content_view1_artwork_view{
                      position: relative;
                      float: left;
    max-height: 500px;
   height: 250px;
   width: 250px;
    max-width:500px;
    padding: 10px;
                    }
                    .image_view_view1_artwork{
    max-height:200px;
    min-width:fit-content;
    background-color: rgb(163, 163, 163);
    border-radius:10px;
                    }
                    .image_view_view1_artwork_view{
    position: relative;
    max-height:500px;
    min-width:fit-content;
    background-color: rgb(163, 163, 163);
    border-radius:10px;
    float: left;
                    }
                    .monitor_buttons_view1_artwork{
position:relative;
float: left;
margin-top:1px;
height: auto;
max-width:150px;
}
.view_button_view1_artwork{
    background-color:rgb(249, 149, 67);
color:black;
width: 55px;
height:30px;
border-radius: 5px;
margin: 5px;
}
.buy_button_view1_artwork{
background-color: red;
color:white;
width:55px;
height:30px;
border-radius:5px;
margin: 5px;
}

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
                        width:150px;
                        background-color: yellowgreen;
                        border-radius: 10px;
                        margin: 3px;
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
                        width: 90%;
                        background-color: transparent;
                        border: 3px black solid;
                        height: 20px;
                        padding: 3px;
                        margin: 3px;
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
    height: auto;
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
         <!-- :style="{height: innerHeight + 'px', top: '-' + slidesInnermarginTopL +'px'}" -->