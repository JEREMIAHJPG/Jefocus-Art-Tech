<template >

    <!-- --- -->
    <div class="reply_form_view_background_view_guest_view_contents" v-if="show_artwork_view_form_guest_view_contents" >          
           <center>
               <div class=container_view_guest_view_contents style="margin-top: 55px;">
             <center>                 
         <div class="image_view_view1_artwork_view_guest_view_contents">
           <img v-if="show_advert_view" :src="view_first_image" title="image_view_content" class="image_view_view1_artwork_guest_view_contents"  >
           <img v-if="show_advert_view" :src="view_second_image" title="image_view_content" class="image_view_view1_artwork_guest_view_contents"  >
           <!-- <img  title="image_view_content" class="image_view_content_view1_artwork_view_guest_view_contents" > -->
           <video  v-if="show_advert_video" width="320" height="240" controls>
  <source :src="video_view" type="video/mp4">
  <source :src="video_view" type="video/ogg">
  Your browser does not support the video tag.
</video>
       </div>
        </center> 
        </div> 
              </center> 
                 <center>
                  
                 <div>
                   
           <div class="view1_artwork_guest_view_contents">
             <h style=" color:white; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 300; font-size: large">Title :</h>
               
               <h style="color: white">{{Title}}</h>
           </div>
      
           <div class="view1_artwork_guest_view_contents">
             <h style=" color:white; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 300; font-size: large">Description :</h>
             <h style="color: white">{{Description}}</h> 
              
             
           </div>
          
                 </div>
   
             <br>
             <div class="view1_artwork_guest_view_contents">
                 <button @click="back_view_button_guest_view_contents()" style="color: black; border-radius: 10px; width:50px; height:50px; font-weight: 700"> Back </button>
             </div>
        </center>
        
       </div>
    <!-- --- -->
     <div v-if="view_artwork_page_guest_view_contents">
   <div style="border-radius:100%; position:sticky; top:70%; z-index:2; width:100px; height: 100px; background-color: black; "  >
        <center> <span id="numberoforders" style=" color:white; font-size:small;  position: relative; z-index:8; top: 30px;"> Commission an Artist </span></center>
      </div>
    <div v-for="(guest_view_contents ,index) in guest_view_contents_list" :key="index" class="Slides_guest_view_contents" style="height: 150px; top: 0px;">
     
      <div class=" itemstoorder_guest_view_contents "  >
                            <!-- <div class="itemimage " > -->
  
                            <!-- -- -->
                             <center>
                            <div class="image_view_view1_artwork_guest_view_contents">
          <img v-if="show_advert_view" :src="guest_view_contents.First_image_selected" title="image_view_content" class="image_view_content_view1_artwork_guest_view_contents">
         
          <video  v-if="show_advert_video" width="320" height="240" controls>
  <source :src=guest_view_contents.video_selected type="video/mp4">
  <source :src=guest_view_contents.video_selected type="video/ogg">
  Your browser does not support the video tag.
</video>

      </div>
                             <center>
      
      <div class="price_view1_artwork_guest_view_contents">
          <!-- <img class="currency_image_view1_artwork_guest_view_contents" title="N"> -->
          <div class="price_number_view1_artwork_guest_view_contents">
              {{guest_view_contents.Title}}
          </div>
      </div>
    
      
    </center>
      </center>
      <!-- keep for view Item -->
      <!-- <div class="monitor_description_view1">
          <h class="monitor_description_content_view1">
          {{ guest_view_contents.Admin_description }}
          </h>
      </div> -->
      <!-- <div class="monitor_time_view1">
          <img class="clock_icon_view1" title="C" src="">
          <Time class="time_view1" >
              {{ guest_view_contents.Admin_upload_date }}
          </Time> -->
          <!-- checking if phone has been accessed -->
          <!-- *#*#4636#*#* -->
      <!-- </div> -->
      
      <div class="monitor_buttons_view1_artwork_guest_view_contents">
        
          <button class="view_button_view1_artwork_guest_view_contents"  @click="view_artwort_button_guest_view_contents(guest_view_contents)">View</button>
          <!-- <button class="buy_button_view1_artwork_guest_view_contents"   @click= "buy_button_guest_view_contents(guest_view_contents)">Buy</button> -->
          <center>
   
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
        </template>


        
<script>
import { computed } from 'vue';
import {db,storage} from  "@/firebase";
import { collection, addDoc,where,setDoc, onSnapshot, deleteDoc, doc, getDocs, query, getDoc } from 'firebase/firestore';
export default {

name:'Jefocus_Art_product_and_services',

data(){
    return{ 

    //   Price:'',
    video_view:'',
        guest_view_contents_list:[],
      Description:'',
      Title:'',
      view_first_image:'',
      view_second_image:'',
      Size:'',
      video_exist:[],
      show_artwork_view_form_guest_view_contents : false,
      view_artwork_page_guest_view_contents:true,
      client_token_ID: this.$route.params.guest_view_contentspage,
    //   client_selected_approved_item_token:'',  
    //   client_selected_approved_item_admin_new_id:'',     
    //   numberoforders:'',
      guest_view_contentsnow:false,
    //   delete_id:'',
    }

},


mounted(){
this.get_guest_view_contentsitems();
// this.get_number_of_items_from_number_of_carts

// this.number_of_orders();

},
computed:{

},

methods:{
  
  async get_guest_view_contentsitems(){
    await onSnapshot(query(collection(db,'approved_checked_adverts'),
    where('subcategory', '==' , this.$route.params.Jefocus_Art_product_and_services)),
            (guest_view) =>{
                guest_view.forEach ((doc) =>{
                this.guest_view_contents_list.push(doc.data())
                this.video_exist.push(doc.data().video_selected)
                console.log(this.video_exist[0]);
            })

switch(this.video_exist[0]){ 
                 case "":  
                //  this.monitor_show=true,
                 this.show_advert_view=true,
                 this.show_advert_video=false
                 break;
                 default:
                         // this.monitor_show=true,
                          this.show_advert_view=true,
                          this.show_advert_video=true
                    }
                })
},


async view_artwort_button_guest_view_contents(guest_view_contents){
      this.show_artwork_view_form_guest_view_contents = true;
      this.view_artwork_page_guest_view_contents=false;
    //   this.Price=guest_view_contents.price,
      this.video_view=guest_view_contents.video_selected;
      this.Description= guest_view_contents.Admin_description,
      this.Title=guest_view_contents.Title,
      this.view_first_image=guest_view_contents.First_image_selected,
      this.view_second_image=guest_view_contents.Second_image_selected
    //   this.Size=guest_view_contents.Size
    },
    back_view_button_guest_view_contents(){
      this.show_artwork_view_form_guest_view_contents = false;
      this.view_artwork_page_guest_view_contents = true;
    },


}}
      
            
</script>

<style scoped>
.container_view_guest_view_contents{
                      position:relative;
z-index: 7;
width: 300;
float: left;
/* margin-left: 3%; */
}

.view1_artwork_guest_view_contents{
float: left;
width: 100%;
}

                    .reply_form_view_background_view_guest_view_contents{
    z-index: 10;
    background-color: rgb(0,0,0, 0.8);
    width:100%;
    position:relative;
    height:1000px;
    margin-bottom: 100px;
}
                    .price_number_view1_artwork_guest_view_contents{
color:black;
float: left;
padding-left: 5px;
padding-right: 5px;
padding-left: 2px;

}
                    .currency_image_view1_artwork_guest_view_contents{
    position:relative;
    float: left;

                    }
                    .image_view_content_view1_artwork_guest_view_contents{
    max-height: 100px;
   height: 150px;
    max-width:100px;
    
                    }
                    image_view_view1_artwork_view_guest_view_contents
                    .image_view_content_view1_artwork_view_guest_view_contents{
                      position: relative;
                      float: left;
                    max-height: 300px;
                    height: 250px;
                    width: fit-content;
                     max-width:300px;
                     padding: 10px;
                    }
                      .price_view1_artwork_guest_view_contents{
                       width: auto;
                        border: 3px solid grey;
                        height: 15px;
                         margin-top: 10px;
                    }

                    .price_number_view1_artwork_guest_view_contents{
color:black;
float: left;
padding-left: 5px;
padding-right: 5px;
padding-left: 2px;

}
                    .currency_image_view1_artwork_guest_view_contents{
    position:relative;
    float: left;

                    }
                    .image_view_content_view1_artwork_guest_view_contents{
                        position: relative;
                      float: left;
    max-height: 500px;
   height: 90px;
   width: 90px;
    max-width:500px;
    padding: 10px;
                    }
                    .image_view_view1_artwork_guest_view_contents{
                        position:relative;
    max-height:100px;
    max-width:100px;
    background-color: rgb(163, 163, 163);
    border-radius:10px;
    float: left;
                    }
                    .Slides_guest_view_contents{
                        display: inline-block;
    max-height:300px;
    width: auto;
   position: relative;
    
    overflow-x: auto;
    overflow: auto;
                    }

                    .image_view_view1_artwork_view_guest_view_contents {
                        max-height: 100px;
   height: 150px;
    max-width:100px;
                    }

                    .monitor_buttons_view1_artwork_guest_view_contents{
                        position:relative;
float: left;
margin-top:1px;
height: auto;
max-width:150px;     
                    }

                    .view_button_view1_artwork_guest_view_contents{
                        background-color:rgb(249, 149, 67);
color:black;
width: 55px;
height:30px;
border-radius: 5px;
margin: 5px;
                    }
                    
</style>