<template>
    <div >
    <!-- <div  style=" height:50px; background-color: rgb(200,200,200);  top:0%; z-index: 3; width: 100%; margin-top: 2px;" >

    <div style=" height:50px;">
      <div><img alt="logo Jefocus Art" src=""></div>
      <router-link  to="/Artworkpage"><button style="float: left; width:auto;"> Artwork</button></router-link> -->
      <!-- <router-link  to="{ name:'Artworkpage', params:{id: login_record.id}}"><button class="header3">Artwork</button></router-link> -->
       <!-- <button class="header3">Explore</button> -->
      <!-- <div class="header4"><input type="text" class="maininput" style="width: 150px;" placeholder="Categories, Topic..."></div>  --> 
    <!-- </div>  -->
    <!-- </div> -->
    <ul class="sidenav">
            
            <li ><router-link  to="/"><span class="material-symbols-outlined">home</span>Home</router-link> </li>
            <li ><router-link  to="/About"><span class="material-symbols-outlined">info</span>About</router-link></li>
            <li v-if="!isAuthenticated"><router-link  to="/LoginPage"><span class="material-symbols-outlined">login</span>Login</router-link></li>
            <!-- <li><a href=""><input type="checkbox">Log out</a></li> -->
            <li v-if="isAuthenticated"><a href="#" @click.prevent="onLogout()" ><span class="material-symbols-outlined">logout</span>Log out</a></li>
            <li v-if="!isAuthenticated"><router-link  to="/Signupformpage"><span class="material-symbols-outlined">app_registration</span>Sign Up</router-link></li>
            <li v-if="!isAuthenticated"><router-link  to="/Tradepage" class="linktrade"><span class="material-symbols-outlined">diversity_1</span>Jefocus Art Community</router-link></li>
            <li v-if="isAuthenticated"><router-link to="/Artworkpage" @click="Artworkpage_loading" ><span class="material-symbols-outlined">shopping_cart</span>Buy and Explore Art</router-link></li>
            <!-- <li><a href=""><input type="checkbox">Jefocus Community</a></li> -->
            <li v-if="isAuthenticated"><router-link  to="/Favoritepage" @click="Favoritepage_loading"><span class="material-symbols-outlined">favorite</span>Favorite</router-link></li>
            <li v-if="isAuthenticated" @click="view_cart()"><router-link  to="/Cartpage"><span class="material-symbols-outlined">shopping_cart_checkout</span>View Cart</router-link></li>
            <li ><button @click="dropdown_button()"><span class="material-symbols-outlined">menu_open</span>Menu</button></li>
            
            <!-- <li><a href=""><input type="checkbox">Orders History</a></li>
            <li><a href=""><input type="checkbox">Sell</a></li>
            <li><a href=""><input type="checkbox">View Adverts</a></li>
            <li><a href=""><input type="checkbox">Admin Creation</a></li> -->
  <!-- +2349036803708 -->
        </ul>
        <ul class="sidenav_top_static" >
            <li class="foot1_top" style="background-color:#555; color: white; width: 100%; text-align:center; font-size:x-large;"> Jefocus Art and Tech</li>
            <li ><router-link  to="/"><span class="material-symbols-outlined">home</span>Home</router-link> </li>
            <li ><router-link  to="/About"><span class="material-symbols-outlined">info</span>About</router-link></li>
            <li v-if="!isAuthenticated"><router-link  to="/LoginPage"><span class="material-symbols-outlined">login</span>Login</router-link></li>
            <!-- <li><router-link><input type="checkbox">Log out</router-link></li> -->
            <li v-if="!isAuthenticated"><router-link  to="/Signupformpage"><span class="material-symbols-outlined">app_registration</span>Sign Up</router-link></li>
            <li v-if="isAuthenticated"><router-link to="/Artworkpage" ><span class="material-symbols-outlined">shopping_cart</span>Buy and Explore Art</router-link></li>
            <li v-if="!isAuthenticated"><router-link  to="/Tradepage" class="linktrade"><span class="material-symbols-outlined">diversity_1</span>Jefocus Art Community</router-link></li>
            <li v-if="isAuthenticated"><router-link  to="/Favoritepage"  ><span class="material-symbols-outlined">favorite</span>Favorite</router-link></li>
            <li v-if="isAuthenticated" @click="view_cart()"><router-link  to="/Cartpage"><span class="material-symbols-outlined">shopping_cart_checkout</span>View Cart</router-link></li>
            <!-- <li><router-link><input type="checkbox">Orders History</router-link></li> -->  
            <li v-if="isAuthenticated"><router-link to="/HistoryofOrderplaced" @click="HistoryofOrderplaced_loading" v-if="HistoryofOrderplaced"><span class="material-symbols-outlined">history</span>History of Order placed</router-link></li>             
            <li v-if="isAuthenticated"><router-link to="/Adminspage"><span class="material-symbols-outlined">sell</span>Sell</router-link></li>
            <li v-if="isAuthenticated"><router-link to="/Adminserviceslist" v-if="Check_Admins_Adverts"><span class="material-symbols-outlined">checklist_rtl</span>Check Admins Adverts</router-link></li>
            <li v-if="isAuthenticated"><router-link :to="{name:'Adminviewadverts', params:{Adminviewadverts: this.adminnew_id}}"  v-if="View_your_Adverts"><span class="material-symbols-outlined">view_list</span>View your Adverts</router-link></li>
            <li v-if="isAuthenticated"><router-link to="/Admindatabase" v-if="Admin_Creation"><span class="material-symbols-outlined">admin_panel_settings</span>Admin Creation</router-link></li>
            <li v-if="isAuthenticated"><router-link to="/Replycontactformpage" v-if="Admin_Creation"><span class="material-symbols-outlined">admin_panel_settings</span>Reply Guest Message</router-link></li>
            <li v-if="isAuthenticated"><a href="#" @click.prevent="onLogout()" ><span class="material-symbols-outlined">logout</span>Log out</a></li>
           </ul>

           <!-- header for tablet -->

           <ul class="sidenav_top_tablet">
            <li class="foot1_top" style="background-color:#555; color: white; width: 100%; text-align:center; font-size:x-large;"> Jefocus Art and Tech</li>
            <li ><router-link  to="/"><span class="material-symbols-outlined">home</span>Home</router-link> </li>
            <li ><router-link  to="/About"><span class="material-symbols-outlined">info</span>About</router-link></li>
            <li v-if="!isAuthenticated"><router-link  to="/LoginPage"><span class="material-symbols-outlined">login</span>Login</router-link></li>
            <!-- <li><router-link><input type="checkbox">Log out</router-link></li> -->
            <li v-if="!isAuthenticated"><router-link  to="/Signupformpage"><span class="material-symbols-outlined">app_registration</span>Sign Up</router-link></li>
            <li v-if="isAuthenticated"><router-link to="/Artworkpage" ><span class="material-symbols-outlined">shopping_cart</span>Buy and Explore Art</router-link></li>
            <li v-if="!isAuthenticated"><router-link  to="/Tradepage" class="linktrade"><span class="material-symbols-outlined">diversity_1</span>Jefocus Art Community</router-link></li>
            <li v-if="isAuthenticated"><router-link  to="/Favoritepage"><span class="material-symbols-outlined">favorite</span>Favorite</router-link></li>
            <li v-if="isAuthenticated" @click="view_cart()"><router-link  to="/Cartpage"><span class="material-symbols-outlined">shopping_cart_checkout</span>View Cart</router-link></li>
            <!-- <li><router-link><input type="checkbox">Orders History</router-link></li> -->  
            <li v-if="isAuthenticated"><router-link to="/HistoryofOrderplaced" @click="HistoryofOrderplaced_loading" v-if="HistoryofOrderplaced"><span class="material-symbols-outlined">history</span>History of Order placed</router-link></li>             
            <li v-if="isAuthenticated"><router-link to="/Adminspage"><span class="material-symbols-outlined">sell</span>Sell</router-link></li>
            <li v-if="isAuthenticated"><router-link to="/Adminserviceslist" v-if="Check_Admins_Adverts"><span class="material-symbols-outlined">checklist_rtl</span>Check Admins Adverts</router-link></li>
            <li v-if="isAuthenticated"><router-link :to="{name:'Adminviewadverts', params:{Adminviewadverts: this.adminnew_id}}"  v-if="View_your_Adverts"><span class="material-symbols-outlined">view_list</span>View your Adverts</router-link></li>
            <li v-if="isAuthenticated"><router-link to="/Admindatabase" v-if="Admin_Creation"><span class="material-symbols-outlined">admin_panel_settings</span>Admin Creation</router-link></li>
            <li v-if="isAuthenticated"><router-link to="/Replycontactformpage" v-if="Admin_Creation"><span class="material-symbols-outlined">admin_panel_settings</span>Reply Guest Message</router-link></li>
            <li v-if="isAuthenticated"><a href="#" @click.prevent="onLogout()" ><span class="material-symbols-outlined">logout</span>Log out</a></li>
           </ul>
            
          <ul class="sidenav_top" v-if="dropdown_menu" >
            <li class="foot1_top" style="background-color:#555; color: white; width: 100%; text-align:center; font-size:x-large;"> Jefocus Art and Tech</li>
            <li ><router-link  to="/"><span class="material-symbols-outlined">home</span>Home</router-link> </li>
            <li ><router-link  to="/About"><span class="material-symbols-outlined">info</span>About</router-link></li>
            <li v-if="!isAuthenticated"><router-link  to="/LoginPage"><span class="material-symbols-outlined">login</span>Login</router-link></li>
            <!-- <li><router-link><input type="checkbox">Log out</router-link></li> -->
            <li v-if="!isAuthenticated"><router-link  to="/Signupformpage" ><span class="material-symbols-outlined">app_registration</span>Sign Up</router-link></li>
            <li v-if="isAuthenticated"><router-link to="/Artworkpage" @click="Artworkpage_loading" ><span class="material-symbols-outlined">shopping_cart</span>Buy and Explore Art</router-link></li>
            <li v-if="!isAuthenticated"><router-link  to="/Tradepage" @click="Tradepage_loading" class="linktrade" ><span class="material-symbols-outlined">diversity_1</span>Jefocus Community</router-link></li>
            <li v-if="isAuthenticated"><router-link  to="/Favoritepage" @click="Favoritepage_loading"><span class="material-symbols-outlined">favorite</span>Favorite</router-link></li>
            <li v-if="isAuthenticated" @click="view_cart()"><router-link  to="/Cartpage" @click="Cartpage_loading"><span class="material-symbols-outlined">shopping_cart_checkout</span>View Cart</router-link></li>
            <li v-if="isAuthenticated"><router-link to="/HistoryofOrderplaced" @click="HistoryofOrderplaced_loading" v-if="HistoryofOrderplaced"><span class="material-symbols-outlined">history</span>History of Order placed</router-link></li> 
            <li v-if="isAuthenticated"><router-link to="/Adminspage" @click="Adminspage_loading"><span class="material-symbols-outlined">sell</span>Sell</router-link></li>
            <li v-if="isAuthenticated"><router-link to="/Adminserviceslist" @click="Adminserviceslist_loading" v-if="Check_Admins_Adverts"><span class="material-symbols-outlined">checklist_rtl</span>Check Admins Adverts</router-link></li>
            <li v-if="isAuthenticated"><router-link :to="{name:'Adminviewadverts', params:{Adminviewadverts: this.adminnew_id}}" @click="Adminviewadverts_loading" v-if="View_your_Adverts">
            <span class="material-symbols-outlined">gallery_thumbnail</span>View your Adverts</router-link></li>
            <li v-if="isAuthenticated"><router-link to="/Admindatabase" @click="Admindatabase_loading" v-if="Admin_Creation"><span class="material-symbols-outlined">admin_panel_settings</span>Admin Creation</router-link></li>
            
            <li v-if="isAuthenticated"><a href="#" @click.prevent="onLogout()" ><span class="material-symbols-outlined">logout</span>Log out</a></li>
        </ul>
        
      <!-- side bar navigation -->
      
      
    </div> 
    
    <div style="position: relative; z-index: 1; top: 95px; padding-bottom:100px; ">
      <div class="loading-box" v-if="showLoading">
     <div class="lds-roller">
        <div></div> 
        <div></div> 
        <div></div> 
        <div></div> 
        <div></div> 
        <div></div>
         <div></div> 
         <div></div>
     </div>
     <div>{{ text }}</div>   
    </div>
    <!-- <div style="main_page"> -->
    <router-view/>
    <!-- </div> -->
    </div>
     <!-- <div style="position: relative; top:50px; z-index: 2;" @load="coverpageremove()" v-if="coverpage" >
     <div style="height:500px; width:100% ; position:relative;  background-color: black; z-index:1;">
            
            <div style="height:500px; width:100%; position:relative; display: block;  background-image:url(/assets/JefocusArt.JPG);
              background-repeat: no-repeat; background-position: center; background-size: contain; z-index:1;
              animation-name: expansioncontraction;  animation-direction: alternate;
               animation-duration:12s; animation-direction:normal; animation-timing-function:ease-in-out; ">
              
              <div class="blackcover">
            
          </div>
            
            
            <div class="btn-position">
             <div class="quote">
            <h class="textclass">The Gift of Art is Beautiful and it is Divine </h>
            </div>
            <div class="registerbutton">
              <router-link  to="/LoginPage"><button class="btn-register">Register Now</button></router-link>
             </div>
            </div>
           
          </div>
              
             
   
             
            </div>
      </div> 
     -->
    
    <div class="bottom1" style="position:relative; padding-top:-50px;" >
    <div class="row12"  style="z-index: 2;">
        <div class="base1" style="background-color:grey;">
            <h3 style="color: white;">About JEFOCUS ART </h3>
            <ul class="foot1">
                <li class="foot12" style="width: 100%;">About us</li>
                <li class="foot12" style="width: 100%;">Our Services</li>
                <li class="foot12" style="width: 100%;">Impact Report YAAN</li>
            </ul>
        </div>
        <div class="base1" style="background-color:grey;">
            <h3 style="color: white;">Customer Care </h3>
            <ul class="foot1">
            <router-link   to="/Contactformpage"><li class="foot12" style="width: 100%;">Contact Us</li></router-link>
            <li class="foot12" style="width: 100%;">Shipping</li>
            <li class="foot12" style="width: 100%;">Return policy</li>
            <li class="foot12" style="width: 100%;">Location</li>
            <li class="foot12" style="width: 100%;">Frequently Asked Questions</li>
        </ul>
    </div>
        <div class="base1" style="background-color:grey;">
            <h3 style="color: white;"> Visual Art Services </h3>
            <ul class="foot1">
            <li class="foot12">Potrait Paintings</li>
            <li class="foot12">Canvas Paintings</li>
            <li class="foot12">Interior Decoration</li>
            <li class="foot12">Sculpts and Artifacts</li>
            <li class="foot12">LED Light and Art Signage</li>
            <li class="foot12">Mural Painting</li>
            <li class="foot12">Award and Plaques</li>
            <li class="foot12">Road Marking</li>
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
        <div class="footer1" >
<h3><img src="" alt="logo"> JEFOCUS ART</h3>
<p>@2023 JEFOCUS ART | Legal Notices General Terms and Conditions</p>
</div>
   </div>

   </div>
   


    
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import {storage, db} from "@/firebase"

import { ref,uploadBytes,getDownloadURL } from "firebase/storage"

import { doc,collection,onSnapshot, addDoc, getDocs, query, where, setDoc } from 'firebase/firestore';
import { AUTO_LOGIN_ACTION, GET_USER_TOKEN_GETTER, IS_USER_AUTHENTICATE_GETTER, LOGOUT_ACTION } from './store/storeconstants';
import { analytics } from '@/firebase'
import { logEvent } from 'firebase/analytics';
import { Axios } from 'axios';
export default {
  name: 'App',
  props:{
        text: {
            required: false,
            type: String,
            default:'Loading',
        }
    },
  data(){return{
    coverpage : true,
    dropdown_menu:JSON.parse(localStorage.getItem(`dropdown_menu`)),
    Check_Admins_Adverts:'',
    View_your_Adverts:'',
    Admin_Creation:'',
    HistoryofOrderplaced:'',
    app_button_selection:[],
    adminnew_id:''
  }},
  // mounted(){
      
       
  //   },
    created(){
      
     this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`);
     
      console.log(this.isAuthenticated)
      this.button_selection();
      console.log(this.getterstoken);
    // axios.get('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDt8TxIM_m7OaUlxT2WgDhS13jYFp7VvhE/'this.getterstoken).then((response)=>{console.log(response);})
    
    },

   
    
    computed: {
      ...mapState({
        showLoading:(state)=>state.showLoading,
        autoLogout: (state)=> state.auth.autoLogout,
      }),

      ...mapGetters('auth',
      {
        getterstoken: GET_USER_TOKEN_GETTER,
        isAuthenticated: IS_USER_AUTHENTICATE_GETTER
      })

    },
    watch:{
      autoLogout(curValue, oldValue){
        if(curValue && curValue !=oldValue ){
          this.$router.replace('/LoginPage');
        }
      }
    },
  
  methods:{ 
    ...mapActions('auth',{
       logout: LOGOUT_ACTION
    }),
    onLogout(){
      this.logout();
      localStorage.removeItem(`user_id`);
      this.$router.replace('/LoginPage');

    },
    // Adminviewadverts_loading(){
    //       this.showLoading(true)
    // },
   async button_selection(){
      //extracting ID for buton selection
      console.log('Buttons Selecting...');
// localStorage.getItem(`user_id`)
      await getDocs(query(collection(db,'admin_database'),
                where('user_ID', '==','p1WSuB6tvuCwh1TgUo3P'))).then(database_id=>{ 
                database_id.forEach ((doc)=>{
                  var button_selection = {
                          check_user_ID : doc.data().user_ID,                     
                  }
                  this.adminnew_id = doc.data().adminnew_id;
                 this.app_button_selection.push(button_selection);
                  // console.log(this.app_button_selection[0].check_user_ID)
                switch (this.app_button_selection[0].check_user_ID){

                  case '' : this.Check_Admins_Adverts=false,
                            this.View_your_Adverts=false,
                            this.Admin_Creation=false,
                            this.HistoryofOrderplaced= true
                break;

                case 'p1WSuB6tvuCwh1TgUo3P' :  this.Check_Admins_Adverts= true,
                                                        this.View_your_Adverts= true,
                                                        this.Admin_Creation= true,
                                                        this.HistoryofOrderplaced= true
                break;
                
                default: this.Check_Admins_Adverts= false,
                         this.View_your_Adverts= true,
                         this.Admin_Creation= false,
                         this.HistoryofOrderplaced = true
                }
                } )

                });
                console.log('Buttons Selected');
                

    },
    dropdown_button(){
      this.dropdown_menu = !this.dropdown_menu
      localStorage.setItem(`dropdown_menu`, this.dropdown_menu) 
    },

    //  coverpageremove(){return this.coverpage = false}
    view_cart(){
      logEvent(analytics, 'view_cart', {
        item_id: '12345',
        // item_name: 'Sample Item'
 
});
console.log('Logged event: notification_received');
    }
}


}

  
</script>

<style scoped>
.home {
            position: relative;
            width: 100%;
            height: auto;
           } 
           @keyframes textanimation {from{min-width:0px;} to{min-width:700px;}}
           @keyframes expansioncontraction {from {background-size: cover;} to{background-size: contain;}}
           @keyframes blackopacity {from { opacity:0.5} to{ opacity:0}}

           .imgpage{position: relative; top: 95px; height:500px; width:100%}
           .btn-position {position:relative; top: -30%; left: 0%;}
           .quote{z-index:1; width:600px; position: relative; left: 25%;}
           .registerbutton{position:relative; top: -30%; left: 40%}
           .textclass{position: relative; max-height:40px; color: white; font-weight: bolder; font-size: xx-large;}
           /* .blackcover{
            background-color: black; opacity:0.5; height: 500px; width: 100%;
            animation-name: blackopacity;  animation-direction: alternate;
             animation-duration:21s; animation-direction:normal; animation-timing-function:ease-in-out;
           } */
           .btn-register{
            background-color: burlywood;
            color: white;
            width: auto;
            height: 50px;
            float: left;
            border-radius: 5%;
            box-shadow: 10px #cfc;
            font-size: xx-large;
           }
           
           /* MENU DROPDOWN */
            ul.sidenav_top{ top :50px; left:0px; z-index:5; display:visible; list-style-type: none;  padding:0; width: 250px; background-color: #f1f1f1; position: fixed; height: 100%; overflow: auto;}
            ul.sidenav_top li a{display: block; color: #000; padding: 8px 16px; text-decoration: none; float: left; width: 100%;}
            ul.sidenav_top li a.active {background-color: #4caf50; color: white;}
            ul.sidenav_top li a:hover:not(.active){background-color: #555; color: white;}
            div.content {margin-left: 15%; padding: 0px 0px; height: 1000px;}
            
            @media screen and (min-width: 320px) and (max-width: 770px) { ul.sidenav_top{top :130px; width:100px; height: auto; position: absolute;} ul.sidenav_top{width:50%; height: auto;} ul.sidenav_top_staticli a { right:0%; float:left; padding: 15px;} div.content{margin-left: 0;}}
            @media screen and (min-width: 768px) and (max-width:1500px) {ul.sidenav_top li a {width:auto; text-align: center; float: left;}  ul.sidenav_top{ width:100%; height: auto; top: 0%;} }
            .dropdown{position: relative; display: inline-block}
            .dropdown-content{display: none; position: absolute; background-color: #f9f9f9; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);padding: 12px 16px; z-index: 1;}
            .dropdown:hover .dropdown-content{display:block;}

            /* MOBILE PHONE DEVICE TOP header */
            ul.sidenav{ display: visible; z-index:5; list-style-type: none; margin:0; padding:0; width: 100%; background-color: #f1f1f1; position: fixed; height: 50px; overflow: auto;}
            ul.sidenav li a { display: block; color: #000; padding: 8px 16px; text-decoration: none; float: left; width: 50px;}
            ul.sidenav li a.active {background-color: #4caf50; color: white;}
            ul.sidenav li a:hover:not(.active){background-color: #555; color: white;}
            div.content {margin-left: 15%; padding: 0px 0px; height: 1000px;} 
            
            
            
            @media screen and (min-width: 320px) and (max-width: 768px) { ul.sidenav li a {width:auto; text-align: center; float: left;}  ul.sidenav{display:visible; width:100%; height: auto;} }
            @media screen and (min-width: 768px) and (max-width: 1500px) { ul.sidenav{ display:none;  top :0px; left:0px; width:50%; height: auto; position: relative;} ul.sidenav li a {float:left; padding: 15px;} div.content{margin-left: 0;}}
            .dropdown{position: relative; display: inline-block}
            .dropdown-content{display: none; position: absolute; background-color: #f9f9f9; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);padding: 12px 16px; z-index: 1;}
            .dropdown:hover .dropdown-content {display:block;}

            /* LAPTOP TOP HEADER */
            ul.sidenav_top_static{ top :50px; left:0px; z-index:5; display:visible; list-style-type: none; margin-top:10px; padding:0; width: 250px; background-color: #f1f1f1; position: fixed; height: 100%; overflow: auto;}
            ul.sidenav_top_static li a{display: block; color: #000; padding: 8px 16px; text-decoration: none; float: left; width: 100%;}
            ul.sidenav_top_static li a.active {background-color: #4caf50; color: white;}
            ul.sidenav_top_static li a:hover:not(.active){background-color: #555; color: white;}
            div.content {margin-left: 15%; padding: 0px 0px; height: 1000px;}
            
            @media screen and (min-width: 320px) and (max-width: 768px) { ul.sidenav_top_static{display: none; width:100px; height: auto; position: relative;} ul.sidenav_top_static{ display: none;width:100%; height: auto;} ul.sidenav_top_static li a { right:0%; float:left; padding: 15px;} div.content{margin-left: 0;}}
            @media screen and (min-width: 768px) and (max-width:1500px) {ul.sidenav_top_static li a { width:auto; text-align: center; float: left;}  ul.sidenav_top_static{width:100%; height: auto; top: 0%;} }
            .dropdown{position: relative; display: inline-block}
            .dropdown-content{display: none; position: absolute; background-color: #f9f9f9; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);padding: 12px 16px; z-index: 1;}
            .dropdown:hover .dropdown-content{display:block;}

            /* tablet */
            ul.sidenav_top_tablet{ top :50px; left:0px; z-index:5; display:visible; list-style-type: none; margin-top:10px; padding:0; width: 250px; background-color: #f1f1f1; position: fixed; height: 100%; overflow: auto;}
            ul.sidenav_top_tablet li a{display: block; color: #000; padding: 8px 16px; text-decoration: none; float: left; width: 100%;}
            ul.sidenav_top_tablet li a.active {background-color: #4caf50; color: white;}
            ul.sidenav_top_tablet li a:hover:not(.active){background-color: #555; color: white;}
            div.content {margin-left: 15%; padding: 0px 0px; height: 1000px;}
            
            @media screen and (min-width: 320px) and (max-width: 760px) { ul.sidenav_top_tablet{display:none; width:100px; height: auto; position: relative;} ul.sidenav_top_tablet{width:100%; height: auto;} ul.sidenav_top_tablet li a { right:0%; float:left; padding: 15px;} div.content{margin-left: 0;}}
            @media screen and (min-width: 768px) and (max-width:1500px) {ul.sidenav_top_tablet li a { width:auto; text-align: center; float: left;}  ul.sidenav_top_tablet{width:100%; height: auto; top: 0%;} }
            .dropdown{position: relative; display: inline-block}
            .dropdown-content{display: none; position: absolute; background-color: #f9f9f9; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);padding: 12px 16px; z-index: 1;}
            .dropdown:hover .dropdown-content{display:block;}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  overflow: scroll;
  height: auto;
}

nav {
  padding: 30px;
}

.linktrade{
  font-weight: bold;
  color: #ffffff;
}


*{box-sizing: border-box;}
      .header {font-family: Arial, Helvetica, sans-serif;margin-top: 100px; position: relative;}
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
      
     
      .header11 {position: fixed;}
    
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

        /* .main_page{
          position:relative;
          float: left;
        } */

        .row12 {
          position:relative;
          float:left;

        }
    
        @media screen and (min-width: 361px) and (max-width: 768px){
          .imgpage{position: relative; top: 10px; height:500px; width:100%}
          .btn-position {position:relative; top: -40%; left: -18%;}
           .quote{z-index:1; min-width:0px; position: relative; left: 50%;}
           .registerbutton{position:relative; top: -30%; left: 50%}
           .textclass{position: relative; max-height:40px; color: white; font-weight: bolder; font-size: large;}
           .blackcover{
            background-color: black; opacity:0.5; height: 500px; width: 100%;
            animation-name: blackopacity;  animation-direction: alternate;
             animation-duration:21s; animation-direction:normal; animation-timing-function:ease-in-out;
           }
           .btn-register{
            background-color: burlywood;
            color: white;
            width: auto;
            height: 30px;
            float: left;
            border-radius: 10px;
            box-shadow: 10px #cfc;
            font-size: large;}
            .header11 {position: relative;}
        }
        
        @media screen and (width:768px){
          .imgpage{position: relative; top: 10px; height:500px; width:100%}
          .btn-position {position:relative; top: -40%; left: -18%;}
           .quote{z-index:1; min-width:0px; position: relative; left: 45%;}
           .registerbutton{position:relative; top: -30%; left: 60%}
           .textclass{position: relative; max-height:40px; color: white; font-weight: bolder; font-size: large;}
           .blackcover{
            background-color: black; opacity:0.5; height: 500px; width: 100%;
            animation-name: blackopacity;  animation-direction: alternate;
             animation-duration:21s; animation-direction:normal; animation-timing-function:ease-in-out;
           }
           .btn-register{
            background-color: burlywood;
            color: white;
            width: auto;
            height: 30px;
            float: left;
            border-radius: 10px;
            box-shadow: 10px #cfc;
            font-size: large;
           }
        }

        @media screen and (width:400px){
          .imgpage{position: relative; top: 10px; height:500px; width:100%}
          .btn-position {position:relative; top: -40%; left: -18%;}
           .quote{z-index:1; min-width:0px; position: relative; left: 25%;}
           .registerbutton{position:relative; top: -30%; left: 50%}
           .textclass{position: relative; max-height:40px; color: white; font-weight: bolder; font-size: large;}
           .blackcover{
            background-color: black; opacity:0.5; height: 500px; width: 100%;
            animation-name: blackopacity;  animation-direction: alternate;
             animation-duration:21s; animation-direction:normal; animation-timing-function:ease-in-out;
           }
           .btn-register{
            background-color: burlywood;
            color: white;
            width: auto;
            height: 30px;
            float: left;
            border-radius: 10px;
            box-shadow: 10px #cfc;
            font-size: large;
           }
              .header2{width: 100%; margin-left:-0.15%;}
                .header3{width: 100%; margin-left:-0.2%;}
                .maininput{
        margin-top: 1%;
        width: -70%;
        margin-left:90px;} 
                .header20 {position: relative;}
                .header4{width: 100%;
        float: left;
        height: auto;
        margin-left: 2%;
        margin-top: 2.5%;
        }
        .header5{ width: 60%;
          padding: 10px;
       position: relative;
       top: auto;
       bottom: 0px;
       left: 70px;
       right: 30px;
        float: left;
      }
      .regfavcart{
        width: 100%;
        position: relative;
        margin-top: 0%;
        left:-20%;
        float: left;
        
      }
              }
               @media screen and (max-width: 360px){
                .imgpage{position: relative; top: 10px; height:500px; width:100%}
          .btn-position {position:relative; top: -40%; left: -18%;}
           .quote{z-index:1; min-width:0px; position: relative; left: 21%;}
           .registerbutton{position:relative; top: -30%; left: 50%}
           .textclass{position: relative; max-height:40px; color: white; font-weight: bolder; font-size: large;}
          
           .btn-register{
            background-color: burlywood;
            color: white;
            width: auto;
            height: 30px;
            float: left;
            border-radius: 10px;
            box-shadow: 10px #cfc;
            font-size: large;
           }
        
              .header2{width: 100%; margin-left:-0.15%;}
                .header3{width: 100%; margin-left:-0.2%;}
                .maininput{
        margin-top: 1%;
        width: -70%;
        margin-left:90px;} 
                .header20 {position: relative;}
                .header4{width: 100%;
        float: left;
        height: auto;
        margin-left: 2%;
        margin-top: 2.5%;
        }
        .header5{ width: 60%;
          padding: 10px;
       position: relative;
       top: auto;
       bottom: 0px;
       left: 70px;
       right: 30px;
        float: left;
      }
      .regfavcart{
        width: 100%;
        position: relative;
        margin-top: 0%;
        left:-20%;
        float: left;
        
      }
               }
</style>

<style scoped>

            *{box-sizing: border-box;}
            
            .base1 {float:left; 
            text-align: center;
            width:20%;
            justify-content: center;
            color: black;
            padding: 10px;
            height: 400px;}
            
            
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
          
                
               }
               @media screen and (max-width: 320px){
                li.foot12{font-size:x-small;}
                .base1 {width: 100%;}
               }
            
            
            </style>

<style scoped>
.loading-box{
    position: fixed;
    top:40%;
    width:25%;
    left: 0px;
    right:0px;
    margin:auto;
    background: #000;
    box-shadow: 0px 0px 9px -2px #000;
    z-index: 999;
    text-align: center;
    color: #fff;
}
.lds-roller{
    display:inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
.lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5,1) infinite;
    transform-origin: 40px 40px;
}
.lds-roller div:after {
content: '';
display: block;
position: absolute;
width: 7px;
height: 7px;
border-radius: 50%;
background: #fff;
margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
   animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after{
    top: 63px;
    left: 63px;
}
.lds-roller div:nth-child(2) {
   animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after{
    top: 68px;
    left: 56px;
}
.lds-roller div:nth-child(3) {
   animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after{
    top: 71px;
    left: 48px;
}
.lds-roller div:nth-child(4) {
   animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
}
.lds-roller div:nth-child(5){
    animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after{
    top: 71px;
    left: 32px;
}
.lds-roller div:nth-child(6){
    animation-delay: 0.216s;
}
.lds-roller div:nth-child(6):after {
    top: 68px;
    left:24px;
}
 .lds-roller div:nth-child(7){
    animation-delay: -0.252s;
 }
 .lds-roller div:nth-child(7):after{
    top: 63px;
    left: 17px;
 }
 .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
 }
 .lds-roller div:nth-child(8):after{
    top: 56px;
    left:12px;
 }
 @keyframes lds-roller {
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
 }
</style>
