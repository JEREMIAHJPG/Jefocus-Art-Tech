
    
    <template>
        <div class="bottom1">
            <div class="row1">
               
                <div class="base2" style="background-color:#ddd">
                    
                       
                    <div class="boxmain1" >
                 
        
        
      
        <table class="fixed" border="1" width="100%">
          <th><div class="items" style="background-color: #aaa;">Item Image</div></th>
          <th><div class="name" style="background-color: #bbb;">Name</div></th>
          <th><div class="size" style="background-color: #ccc;">Size</div></th>
          <th><div class="number" style="background-color: #ccc; margin-left: 15%">Number of pieces</div></th>
          <th><div class="pricepi" style="background-color: #ccc;">Price per item</div></th>
          <th><div class="price" style="background-color: #ccc; ">Total Price</div></th>

            <tr v-show="showcart" v-for="(items_to_display, index) in convert_all_cart_to_database" :key="index" >
            <td width="20%"><img class="items" :src = "items_to_display.First_image_selected" style="background-color: #aaa;"></td>
            <td width="20%"> <div class="name" style="background-color: #bbb;">{{items_to_display.Title}}</div></td>
            <td width="20%"><div class="size" style="background-color: #ccc;">{{items_to_display.size}}</div></td>
            <td width="20%"><input class="number" type="number"  v-model="number" :id="'items_to_displaycart_qty_'+items_to_display.id" @input="update_cart(items_to_display)" style="background-color: #ccc;" title="Number of pieces"></td>
            <td width="20%"><div class="pricepi" style="background-color: #ccc;">{{items_to_display.price}}</div></td>
            <td width="20%"><div class="price"  style="background-color: #ccc; font-size:x-large; font-weight:500;">{{items_to_display.total_amount}}</div></td>
            <!-- <td width="20%"><button class="removeitem" :id= "`cart_`+items_to_display.id " @click="removeitems(items_to_display)" style="background-color: #ccc;">Remove Item</button></td> -->
            </tr>
            </table>

          <!-- <div>
          <div class=" display_cart_items grid-container" ></div>
        </div> -->
                  
                    </div>
                    
                </div>
                <div class="footer">
                <div class="total" style="float: left; padding: 10px; ">Total amount = <p>{{sum_value}}</p></div>
              </div>
                <div class=container1 >

            <form  @submit.prevent="payment"  action="/action1_page.php">
          <div class="row">
              <div class="col-255">
                  <label for="fname">First Name</label>
              </div>
              
                  <input class="col-755" type="text" id="fname" v-model="payment_firstname" name="firstname" placeholder="your name...">
              
          </div>
          <div class="row">
              <div class="col-255">
              <label for="lname">Last Name</label>
              </div>
              
                  <input class="col-755" type="text" id="lname" v-model="payment_lastname" name="lastname" placeholder="your last name...">
              
          </div>
          <div class="row">
              <div class="col-255">
                  <label for="email">Email</label>
              </div>
              
                  <input class="col-755" type="text" id="email" name="Email" v-model="payment_email" placeholder="example@gmail.com...">
                  <div v-show="errorstatement">Invalid Email</div>
              
          </div>
     
          <div class="row">
              <div class="col-255">
                  <label for="phonenumber">Nigeria Phone Number</label>
              </div>
              
                  <input class="col-755" type="number" id="number" v-model="phonenumber" name="number" placeholder="your phone number">
              
          </div>
          <div class="row" >
              <div class="col-255" style="margin-block-end: auto;">
                  <label for="pickuplocation">Nigeria Pickup Address </label>
              </div>
              
                  <input class="col-755"  type="text" id="pickuplocation" v-model="pickuplocation" name="pickuplocation" placeholder="your pickup location">
              
          </div>
     
          
          <br>
          <div class="col-75">
              <input class="btncart" type="submit" value="Make Payment">
          </div>
      </form> 
    </div>
    <div class="boxmain2" >
                         <div class="boxmain3" style="padding-top: 30%; background-color: white;">
                            <div class="facepicture" style="border-radius: 50%;">
                                <img src="" title="FacePicture">
                            </div>
                            <div class="customercare">
                               <div style="float: left; width:75%; height:auto;"><h style="font-weight: 700;"> Any Question about Framing, Payment, Delivery or something else?</h></div>
                               <div style="float: left; width: 100%; height:auto; margin-left: 30%;"><button href="#watsapp or robot" class="btn3"> Ask me</button></div>
                            </div>

                         </div>
                         <div class="boxmain3">
                            <h2>JEFOCUS Art guarantees</h2>
                            <h class="guarantee"><img src="" title="mark">Effective Communication</h>
                            <h class="guarantee"><img src="" title="mark">Safe Shipping</h>
                            <h class="guarantee"><img src="" title="mark">Secured Payment</h>
                            <h class="guarantee"><img src="" title="mark">Safe Shipping</h>
                            <h class="guarantee"><img src="" title="mark">Quality Artworks as ordered</h>
                            <h class="guarantee"><img src="" title="mark">Ability to track Item Location</h>
                            <h class="guarantee"><img src="" title="mark">Secured Customer Details</h>
                            
                         </div>
                </div>
                <div class="base1" style="background-color:#cfc">
                    <div class="insideboxmain" style="background-color: transparent;">
                       <h class="header7" style="margin-top: 100px;  top: 50px; color: white;"> <img src="" title="icon">Subscribe to <h style="font-weight: 700;">JEFOCUS</h> Art News to recieve inspiration and find amazing Artworks </h>
                    
                    
                    </div>
                    <div class="insideboxmain" style="background-color: transparent;">
                        <div class="emailregister" style="background-color: transparent;">
                            <input type="email" class="email"  placeholder="Email......."> <button class="btn2"> Join Us Now</button>
                        </div>
                    </div>
                </div>
              
                
                <div class="base1" style="background-color:rgb(204, 242, 255)">
                    <div class="insidebox" style="background-color: rgb(233, 233, 233);">
                    <img class="" title="icon">
                    <h1>Secured Payment</h1>
                    <h3>By Credit card or by Bank transfer</h3>
                    </div>
                    <div class="insidebox" style="background-color:rgb(233, 233, 233);">
                        <img class="" title="icon">
                        <h1>Specially Selected Art piece</h1>
                        <h3>with good Quality</h3>
                    </div>
                    <div class="insidebox" style="background-color: rgb(233, 233, 233);">
                        <img class="" title="icon">
                        <h1>Safe Shipping</h1>
                        <h3>By Professionals</h3>
                    </div>
                    <div class="insidebox" style="background-color: rgb(233, 233, 233);">
                        <img class="" title="icon">
                        <h1>Free Returns at point of recieving order</h1>
                        <h3>Not Applicable to Digital Products</h3> 
                    </div>
                </div>
     
        
           </div>
           </div>
          
           <!-- display cart items here -->

           <section v-for="(cart, index ) in get_all_items_in_cart" :key="index">
            <div class="card">
              <input type="number" :id="'cart_qty_'+cart.id" @input=update_cart(cart.id)>
              <p class="cart_info">{{ cart.title }}</p>
              <p class="cart_info">{{ cart.amount }}</p>
            </div>
           </section>
           <!--///end display cart items -->
        
    </template>

<script>
import axios from 'axios';
import {mapActions, mapMutations} from 'vuex';
import { NUMBEROFITEMS, TOTALPRICE } from '@/store/storeconstants';
import {Cartsignupvalidation} from '/services/Cartsignupvalidation';
import {storage, db} from "@/firebase"

import { ref,uploadBytes,uploadBytesResumable,getDownloadURL } from "firebase/storage"

import {  onSnapshot,collection, addDoc, setDoc, getDoc, getDocs, query, where, doc } from 'firebase/firestore';

export default {
  name: 'Cartpage',
  data() {
      return{
        sum_value: [],
        showcart: true, 
        payment_email:'',
        payment_firstname:"",
        payment_lastname:"",
        phonenumber:"",
        pickuplocation:"",
        errorstatement:false,
        cartdate:"",
        // items_to_display:[]
          //cartpostprofile:[],
         // number:'',
         // priceperitem:'',
          //totalprice:''
        
        }
      },
          
      
  
  mounted(){
    // axios.get('http://localhost:3000/cartpostprofile')
    // .then(response=> this.cartpostprofile=response.data)
    //this.get_all_items_in_cart();
    this.total_cart_summation();
    this.check_cart_email_validation();
    // this.display_cart_items();
    this.get_all_items_in_cart();
    this.convert_all_cart_to_database();
  },

  computed:{
filtered_get_all_items_in_cart(){return this.cartpostprofile.filter((cartpostprofile)=>cartpostprofile.addtocart)},

  },

 methods:{
          ...mapActions('auth', {
            totalprice1:TOTALPRICE,   
          }),

          check_cart_email_validation(payment_email){
          
          if(/^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(payment_email,)){
            return true;
          }else
          {
            return false
          }
        },

          payment(payment_email){
             payment_email=this.payment_email;
           let checkcart_email_validation = this.check_cart_email_validation(payment_email);
            let errorcomment = "";
            if (!checkcart_email_validation){this.errorcomment = "Invalid Email"};
            if(errorcomment.length){{this.errorstatement= true;}return false;};
          //  let validation = Cartsignupvalidation(this.payment_email);
          //   this.errorstatement = validation.signupstatement(this.payment_email);
            

            var ordernumber= ((Math.random(777777777,999999999))*10000000000).toFixed(0);
            var fullname = this.payment_firstname + " " + this.payment_lastname;
            var countryphonenumber = "+234" + this.phonenumber;
            
            console.log(this.sum_value);
            var receipt = {total_amount:this.sum_value, fullname:fullname, payment_email: this.payment_email, countryphonenumber:countryphonenumber, 
              pickuplocation : this.pickuplocation, ordernumber:ordernumber, cartdate: Date()};
            console.log(receipt);
            let order_receipt = JSON.stringify(receipt);
            localStorage.setItem(`receipt_key`, order_receipt);
            this.$router.push('/Receiptpage');
          },
          

          // display_cart_items(){

          //   var data = this.get_all_items_in_cart();
          //   var content = '';

          //   data.forEach( (items_to_display, index ) => {
          //     content+=
          //         `
          //             <img class="items" src="${items_to_display.First_image_selected}" style="background-color: #aaa;">
          //                 <div class="name" style="background-color: #bbb;">${items_to_display.title}</div>
          //                 <div class="size" style="background-color: #ccc;">${items_to_display.size}</div>
          //                   <input class="number" type="number"  v-model="number" id="items_to_displaycart_qty_${items_to_display.id}" @input="update_cart(${items_to_display})" style="background-color: #ccc;" title="Number of pieces">
          //                   <div class="pricepi" style="background-color: #ccc;">${items_to_display.price}</div>
          //                   <div class="price"  style="background-color: #ccc; ">${items_to_display.total_amount}</div>
          //           `;
          //   });

          //   document.querySelector('.display_cart_items').innerHTML = content;
            
         // },

         get_all_items_in_cart(){
           var items_to_display = [];
           for( var key in localStorage ){
            if( key.split('_')[0] == 'cart'){
              items_to_display.push( JSON.parse(localStorage.getItem(key)));
               
            }
           }
           return items_to_display; 
         },

         convert_all_cart_to_database(){
          var cart_contents_list = [];
          this.get_all_items_in_cart().forEach((localstorage_cart)=>{
            onSnapshot(query(collection(db, 'approved_checked_adverts'), where('Admin_item_token', '==' , localstorage_cart.client_selected_approved_item_token)),
            (cart_contents) =>{cart_contents.forEach((doc) => {cart_contents_list.push(doc.data())
            })  }) 
          })
          console.log(cart_contents_list);
          return cart_contents_list;
         },

         total_cart_summation(){
          var cart_items = this.get_all_items_in_cart();
          var sum_value = cart_items.reduce((prev, curr) => prev + curr.total_amount,0);
          this.sum_value = sum_value ;
          //  console.log( sum_value );
          },
         
        // ...mapMutations({
       // totalprice:NUMBEROFITEMS,}),
       removeitems(items_to_display){
        
        localStorage.removeItem(`cart_${items_to_display.id}` );
        this.showcart = false},
         
          //  cartpost.addtocart=!cartpost.addtocart
            
          // console.log(this.cartpostprofile);
        
          //e.preventDefault();
          // var id = e.target.id;
          // let data = JSON.parse(localStorage.getItem(id));
          // data['qty'] = e.target.value;
          // localStorage.setItem(id,JSON.stringify(data));

       // var cartstorage=JSON.stringify(cartpost);
        // localStorage.setItem(`cartremoval`,cartstorage);
         // },
         // this.removeitem({removeitem:this});


         update_cart(items_to_display=''){
          
          var new_amount = '',
              updated_qty = document.querySelector(`#items_to_displaycart_qty_${items_to_display.id}`).value,
                //get the existing data from localStorage and update it with the new data;
              existing_data = JSON.parse( localStorage.getItem(`cart_`+items_to_display.id) );
              // updated_amount=JSON.parse(localStorage.getItem(`items_to_displaycart_`+items_to_display.total_amount));
              //return console.log( updated_qty );
                if( existing_data ){
                   new_amount = updated_qty * items_to_display.price;                  
                   existing_data['qty'] = updated_qty;
                   existing_data['total_amount']= new_amount; 
                   localStorage.setItem(`cart_`+items_to_display.id, JSON.stringify( existing_data )); 
                };
                console.log()
               
                // this.display_cart_items();
                
         },

      //  numberofitems(number, cartpost){
      //   //localstorage for cart total number of items and price
      //              var numberofitem= JSON.stringify(number);
      //             localStorage.setItem (`numberofitemsdata`, numberofitem);
      //             var getnumberofitemdata = localStorage;
      //             localStorage.getItem (`cartnumberofitems`, getnumberofitemdata);
      //             const numberofitems = JSON.parse(getnumberofitemdata.numberofitemsdata);
      //             //console.log(numberofitems)
      //             //localstorage for cart totalprice
      //             var cartitem= JSON.stringify(cartpost);
      //             localStorage.setItem (`cartdata`, cartitem);
      //             var getcartdata = localStorage;
      //             localStorage.getItem (`cartitems`, getcartdata);
      //             const cartstore = JSON.parse(getcartdata.cartdata);
      //             var Price = cartstore.Price;
      //             let realid =    cartstore.id;
                  
      //             console.log(cartstore)
                  
      //             //let totalprice= numberofitems*Price;
      //             this.totalprice1({Price:Price, numberofitems:numberofitems, realid:realid, cartstore:cartstore});
                  //this.$refs.totalprice2.textContent.totalprice
                  
                 

       //          },
                 

        
        props: {priceperitem: {type:Number
         }
        ,
         },
         //}
         },
        
        //attached(){let totalprice = (this.number * this.priceperitem);
              //    this.totalprice =  totalprice
               //   }
};
      
</script>


<style scoped>
*{box-sizing: border-box;}
.bottom1 {font-family: Arial, Helvetica, sans-serif;}

    .base2 {float:left; 
    text-align: center;
    width:100%;
    justify-content: center;
    color: black;
     padding: 10px;
      height: auto;
    background-color: white;}

.base1 {float:left; 
    text-align: center;
    width:100%;
    justify-content: center;
    color: black;
     padding: 10px;
      height: 300px;}
      .row1 {
        height: auto;
        width: 100%;
      }
      .tradeh{
        font-size:x-large;
      }

      .boxmain1 {
        float: left;
        width: 100%;
        background-color: #cfc;
      }
      .boxmain2{
        margin-left:40% ;
        margin-top:0%;
        float: left;
        width: 30%;
        background-color: aqua;
      }

      .boxmain3 {
        float: left;
        width: 100%;
        height: auto;
        background-color: white;
      }

      

      .insideboxmain {float:left; 
    text-align: center;
    width:50%;
    justify-content: center;
    color: black;
     padding: 10px;
      height: 40%;}
      .row1 {
        height: auto;
        width: 100%;
      }

      .insidebox {float:left; 
    text-align: center;
    width: 25%;
    justify-content: center;
    color: black;
     padding: 10px;
      height: auto;}

      .facepicture{
        width: 25%;
        float: left;
      }

      .guarantee{
        float: left;
        width: 100%;
        padding: 3%;
        font-size: large;
        font-weight: 700;
      }

      .customercare {
        height: auto;
      }

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
      
      .btn3{
            background-color: burlywood;
            color: white;
            height: 50px;
            width: 70px;
            border-radius: 5%;
            box-shadow: 10px #cfc;
            
           }

      .row1 {
        height: auto;
        width: 100%;
      }
      .emailregister{
        position: relative;
        float: left;
        height: 40%;
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

      .header7 {
        font-size: xx-large;
        position: relative;
        top: 20px; 
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
             .insideboxmain {
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
           .insidebox{
            float: left;
            width: 100%;
            height: auto;
           }

           .boxmain1 {
        float: left;
        width: 100%;
        background-color: #cfc;
      }

           .boxmain2{
            float: left;
            width: 100%;
            height: auto;
           }

            
           }  
      
            
           
           @media screen and (max-width: 320px){
            .insideboxmain {
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
           .insidebox{
            float: left;
            width: 100%;
            height: auto;
           }

           .boxmain1 {
        float: left;
        width: 100%;
        background-color: #cfc;
      }

           .boxmain2{
            float: left;
            width: 100%;
            height: auto;
           }

            
           }  
           

        </style>

<style scoped>
            *{box-sizing: border-box;}
            body{font-family: Arial, Helvetica, sans-serif;}
            .header{grid-area: header; background-color: #f1f1f1; padding: 10px; width:100%; text-align: center; font-size: 35px;}
            .grid-container {display: grid; contain: cover;
             grid-template-areas: 'header header header header header header header' 'items name size number pricepi price removeitem '
              'items name size number pricepi price removeitem ' ; gap: 5px;}
            .items,.name,.size,.number,.pricepi,.price{padding:10px; height:auto; width:auto;}
            .items{grid-area: items; width: 200px; max-height:100px;}
            .name{grid-area: name; width:200px;}
            .size{grid-area: size;}
            .number{grid-area:number; max-width: 77px;}
            .pricepi{grid-area: pricepi;}
            .price{grid-area: price; width:200px; }
            .removeitem{grid-area: removeitem; text-align: center; width:60px; padding-top: 10px; }
            .footer{ background-color: #f1f1f1; padding: 10px; text-align: center;}
            .total{text-align: center; font-size: larger; font-weight: 700; float: left; padding: 25px; }
            .btncart{border-radius: 100px; margin-top: 7px; font-size: large; font-weight:700;}
            .btncart:hover{background-color: black; color:white;}
            .container1 {border-radius:5px; float: left; width: 50%; background-color: #f2f2f2; padding: 20px; margin-right: 0%; margin-top:5%; margin-bottom: 5%; margin-left: 10%; height:fit-content;}
            .col-755       {float: left; width: 75%; margin-top: 15px; height:40px;}
            .col-755:focus {float: left; width: 75%; margin-top: 15px;}
            .col-255       {float: left; width: 25%; margin-top: 6px;}
            .row:after {content:""; display: table; clear:both;}
            @media(max-width: 600px){.grid-container{grid-template-areas:'header header header header header header' 'left left left left left left' 'middle middle middle middle middle middle' 'right right right right right right' ;}}
</style>