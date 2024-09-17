// where admins can view items posted or withdrawn
<style scoped>
.monitor_background_view1{
background-color: rgb(177, 177, 177);
justify-items: center;
padding: 3%;
position:relative;


}

.monitor_polaroid_view1{
    background-color: rgb(177, 177, 177);
justify-items: center;
padding: 3%;
position:relative;
}

.top_text_view1{
    justify-content: center;
    position: relative;
    display: block ;
    width:100%;
    
}

.top_text_withdrawn{
    justify-content: center;
    position: relative;
    display: block ;
    width:100%;
    

}

.polaroid_template_view1{
    background-color: white;
    padding: 10px;
    max-height: 500px;
    width: auto;
    max-width: 150px;
    position: relative;
    margin-left:10px;  
    float: left; 
}

.image_view_view1{
    max-height:200px;
    min-width:fit-content;
    background-color: rgb(163, 163, 163);
}

.image_view_content_view1{
    max-height: 200px;
   height: 150px;
    max-width:150px;
}

.first_image_view_content_view1{
    float:left;
    position: relative;
    height: 330px;
    width: 500px;
    padding: 1px;
}

.second_image_view_content_view1{
    float:left;
    position: relative;
    height: 330px;
    width: 500px;
    padding:1px;
}

.price_monitor_view1{
    width: 100%;
    border: 3px solid grey;
    height: 15px;
    margin-top: 10px;
}

.currency_image_view1{
    position:relative;
    float: left;

}

.price_number_view1{
color:black;
float: left;
padding-left: 5px;
padding-right: 5px;
padding-left: 2px;

}

.monitor_description_view1{
display:float;
float:  left;
height: 77px;
max-width:  100px;
border: 2px solid grey;
contain: content;
margin: 15px;

}

.monitor_description_content_view1{
    width: 50px;
    height: auto;

}

.monitor_time_view1{
      
    float: left;
    position: relative;
    height: auto;
    width: 100%;

}

.clock_icon_view1{
    position: relative;
    float: left;
    width: 30%;
}

.time_monitor_view1{
    margin-left: 10px;
    margin-right: 10px;
float: left;
width: auto;
}

.monitor_buttons_view1{
position:relative;
float: left;
margin-top:1px;
height: auto
}


.view_button_view1{
    background-color:rgb(249, 149, 67);
color:black;
width: 55px;
height:30px;
border-radius: 5px;
margin: 5px;
}

.post_button_view1{
    background-color:green;
color:white;
width: 55px;
height:30px;
border-radius:5px;
margin: 5px;
}

.delete_button_view1{
background-color: red;
color:white;
width:55px;
height:30px;
border-radius:5px;
margin: 5px;
}

.edit_button_view1{
    background-color: purple;
    color:white;
    width:55px;
height:30px;
border-radius:5px;
margin: 5px;
}


</style>

// where admins can view items posted or withdrawn
<style scoped>
.monitor_background_withdrawn{
background-color: rgb(177, 177, 177);
justify-items: center;
padding: 3%;
position:relative;


}

.monitor_polaroid_withdrawn{
background-color: white;
width:25%;
display:float;
height:auto;
}

.top_text_withdrawn{
    justify-content: center;
    position: relative;
    display: block ;
    width:100%;
    

}

.polaroid_template_withdrawn{
    margin-bottom: 20px; 
    border: 3px solid black;
    background-color: white;
    padding: 5%;
    min-height: 350px;
    width: 200px;
    max-width: 100%;
    position: relative;
    display: float;    
    border-radius: 33px;
}

.image_view_withdrawn{
    max-height:200px;
    min-width:fit-content;
    background-color: rgb(163, 163, 163);
}

.image_view_content_withdrawn{
    height: auto;
    width: auto;
}

.price_monitor_withdrawn{
    width: 100%;
    border: 3px solid grey;
    height: 15px;
    margin-top: 10px;
}

.currency_image_withdrawn{
    position:relative;
    float: left;

}

.price_number_withdrawn{
color:black;
float: left;
padding-left: 5px;
padding-right: 5px;
padding-left: 2px;

}

.monitor_description_withdrawn{
display:float;
float:  left;
height: 77px;
max-width:  100px;
border: 2px solid grey;
contain: content;
margin: 15px;

}

.monitor_description_content_withdrawn{
    width: 50px;
    height: auto;

}

.monitor_time_withdrawn{
      
    float: left;
    position: relative;
    height: auto;
    width: 100%;

}

.clock_icon_withdrawn{
    position: relative;
    float: left;
    width: 30%;
}

.time_monitor_withdrawn{
    margin-left: 10px;
    margin-right: 10px;
float: left;
width: auto;
}

.monitor_buttons_withdrawn{
position:relative;
float: left;
margin-top:1px;

height: 50px
}


.view_button_withdrawn{
    background-color:rgb(249, 149, 67);
color:black;
width: 55px;
height:30px;
border-radius: 5px;
margin: 5px;
}

.post_button_withdrawn{
    background-color:green;
color:white;
width: 55px;
height:30px;
border-radius:5px;
margin: 5px;
}

.delete_button_withdrawn{
background-color: red;
color:white;
width:55px;
height:30px;
border-radius:5px;
margin: 5px;
}

.edit_button_withdrawn{
    background-color: purple;
    color:white;
    width:55px;
height:30px;
border-radius:5px;
margin: 5px;
}
.alert_posts{
    z-index: 2;
    position:fixed;
    width:100%;
    height:100%;
}
.warning_polaroid{
    background-color: rgb(0,0,0, 0.8);
    position:fixed;
    width:100%;
    height:100%;
}

.text_design{
border-radius:15px;
background-color: white;
position: relative;
top:300px;
margin-left: 33%;
margin-right: 33%;
width:33%;
height:15%;
padding:5px;
}

.advert_view{
    z-index: 3;
    position:fixed;
    width:100%;
    height:100%;
}

.advert_background{
    background-color: rgb(0,0,0, 0.8);
    position:fixed;
    width:100%;
    height:100%;
}

.view_image{
    border-radius:15px;
background-color: white;
position: relative;
top:30px;
margin-left: 0%;
margin-right: 0%;
width: 500px;
height:700px;
padding:5px;
}
.edit_advert_edit{
    border-radius:15px;
background-color: white;
position: relative;
top:30px;
margin-left: 0%;
margin-right: 0%;
width: 500px;
height:700px;
padding:5px;
}

.image_view_back_button_edit{
    border-radius: 5px solid blue;
    background-color:yellow;
    color:black;
    width: 50px;
    height:25px;
}
.btn_postad_edit{        
background-color:black;
color:white;
width:100%;
height:30px;
border-radius:5px;
margin-top:10px;
}
.policy_checkbox_input_category_form_edit{
float:left;
width:70%;
left:0;
position: relative;
margin-left:20%;
margin-right:20%;
}

.input_category_form_edit {
float:left;
width:70%;
left:-10%;
position: relative;
margin-left:20%;
margin-right:20%;
}

.social_media_link_input_position_edit{
    float:left;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left:7%;
    margin-right:0%;
    width:70%;
    height:50px;
}

.input_div_social_media_link_edit {
        position:relative;
    margin-top: 10px;
    top:5px;
    float:left;
    justify-content: center;
    margin-left:10%;
    margin-right:10%;
    width:100%;
    height:70px;
    }

    .admin_description_edit{
        position:relative;
    margin-top: 10px;
    top:5px;
    float:left;
    justify-content: center;
    margin-left:17%;
    margin-right:15%;
    width:70%;
    height:100%;
    }

    .category_input_position2_edit{
    float:left;
    margin-top: 10px;
    margin-left:0%;
    margin-right:20%;
    width:100%;
    height:50px;
}
.category_input_position3_edit{
    float:left;
    margin-top: 10px;
    margin-left:0%;
    margin-right:20%;
    width:100%;
    height:50px;
}
.input_div1_edit {
        position:relative;
    margin-top: 10px;
    top:5px;
    float:left;
    justify-content: center;
    margin-left:10%;
    margin-right:10%;
    width:100%;
    height:70px;
    }

    .input_div2_edit {
        position:relative;
    margin-top: 10px;
    top:5px;
    float:left;
    justify-content: center;
    margin-left:10%;
    margin-right:10%;
    width:100%;
    height:70px;
    }

    .select-image_edit{
    position:relative;
    border: 3px solid grey;
    border-radius: 10px;
    background-color: white;
    width: 100px;
    height: 100px;
    float:left;
    margin: 10px;

}

.file_input_category_form_edit {
float:left;
width:100%;
margin-top:0%;
margin-left:0%;
position: relative;
padding-top:10px;
padding-left:20%;
padding-right:20%;
}

.direct_right_edit
{
float:left;
width:10%;
height:auto;
display:float;
position: relative;
left:40%;
}

.direct_left_edit
{
float:left;
width:40%;
height:auto;
display:float;
position: relative;
}

.btn_postad_top_edit{        

color:black;
width:100%;
height:30px;
border-radius:5px;
}

.admin_container_edit{
border-radius:5px;
background-color: #f2f2f2;
 padding: 20px; 
 margin-right: 20%; 
 margin-bottom: 100px;
  margin-left: 20%;}

  .price_edit{
    
    float:left;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left:10%;
    margin-right:10%;
    width:100%;
    height:10px;

}

</style>
<template>



    <!-- advert warning alert -->
    <div class="alert_posts" v-if="show_warning">
        <div class="warning_polaroid">
        </div>
        <center class="text_design"><h style=" position:relative; font-size: large; font-weight: 700; top:50px !important;">You dont have adverts yet</h></center>
    </div>
            <!-- view image -->
    <div class="advert_view" v-if="show_advert">
        <div class="advert_background">
        </div>
        <center>
            <div class="view_image">
            <!-- <div class="image_view_view1"> -->
    <img v-if="show_advert_view_image" :src="first_image" title="image_view_content" class="first_image_view_content_view1" >
    <img  v-if="show_advert_view_image" :src="second_image" title="image_view_content" class="second_image_view_content_view1" >
    <video  v-if="show_advert_video" width="320" height="240" class="second_image_view_content_view1" controls>
  <source :src="video_display" type="video/mp4">
  <source :src="video_display" type="video/ogg">
  Your browser does not support the video tag.
</video>
    <!-- </div> -->
    <button class="image_view_back_button_edit" @click="back_button()">Back</button>
        </div>
    </center>
    </div>
    <!-- --- -->

    <!-- edit advert -->
    <div class="advert_view" v-if="show_advert">
        <div class="advert_background">
        </div>
        <center>
            <div class="edit_advert_edit">
                <form class="admin_container_edit" id="adminspage" @submit.prevent="onsubmit_edit()" action="/action_page.php" >
    <div class="btn_postad_top_edit">
        
         <div class="direct_left_edit"><h2 class= "postad_left_edit" style="margin-top:1px;">Edit Ad</h2></div>
         <div class="direct_right_edit"><button class="btn_clear_edit">Clear</button></div>
    </div>
    <div class="input_category_form_edit">
        <div class="file_input_category_form_edit">
        <img v-if="img_show"  class="select-image_edit"  :src="url1">
        <img v-if="img_show" class="select-image_edit"   :src="url2">
        <video v-if="video_show"  controls>
  <source :src=url_video type="video/mp4">
  <source :src="url_video" type="video/ogg">
  Your browser does not support the video tag.
</video>
        <!-- class="select-image_choose" -->
    </div>
        <div class="input_div1_edit">
         <input type="text" name = "graphics_subcategory" :value = category disabled class ="category_input_position3_edit" required> 
         </div>
                    <!-- <div :class = "[select_category_now = "Visual Art Service" ? 'input_div2':'input_div2_display_none']" v-if="Visuals_Art_Services_selected"> -->
         <div class = "input_div2_edit">                      
         <input type="text" name = "subcateory" :value = subcategory disabled class ="category_input_position2_edit" required>                                           
         </div>               
    </div>

    <div class="admin_description_edit">
         <textarea maxlength = "777" id="Admin_description" name="Admin_description" v-model = Admin_description placeholder="Describe the Item uploaded with maximum of 777 words" style="min-width: 100%; height: 100px;" required></textarea>
         </div>
   
    <div class="input_div_social_media_link_edit">
    <input type = "text" :value= youtubelink disabled class="social_media_link_input_position_edit" required>
     </div>
    <div class="input_category_form_edit">
    <input type="number"  name="price" v-model="price" @input="price_input" :placeholder="main_price" class="price_edit" required>
    </div>
                    
    <div class = "policy_checkbox_input_category_form_edit" >
    <input class = "policy_checkbox_edit" style="margin-top: 2%; margin-left: 2%;" type="checkbox" id="checkbox" required>
    <label for = "termsandcondions" > I Accept Terms and Conditions </label>
    </div>
                                      
    <input class="btn_postad_edit" type="submit" value="Post Ad">

    </form>
            <!-- <div class="image_view_view1"> -->
    <!-- <img v-if="show_advert_view_image" :src="first_image" title="image_view_content" class="first_image_view_content_view1" >
    <img  v-if="show_advert_view_image" :src="second_image" title="image_view_content" class="second_image_view_content_view1" >
    <video  v-if="show_advert_video" width="320" height="240" controls>
  <source :src="video_display" type="video/mp4">
  <source :src="video_display" type="video/ogg">
  Your browser does not support the video tag.
</video> -->
    <!-- </div> -->
    <button class="image_view_back_button_edit" @click="back_button()">Back</button>
        </div>
    </center>
    </div>
                <!-- --- -->

    <div class="monitor_background_view1" v-if="show_Adminviewadverts" >
       <center><h1 class="top_text_view1">View items and services Page</h1> </center>
    <div class="monitor_polaroid_view1">

        <center><h1 class="top_text_view1">Content Approved</h1> </center>
        <div class="polaroid_template_view1" v-for = "(view_approved_items, index) in view_approved_items_data" :key="index" >
            
    <div class="image_view_view1">
        <img v-if="show_advert_image" :src="view_approved_items.First_image_selected" title="image_view_content" class="image_view_content_view1" >
        <video  v-if="show_video" width="320" height="240" class="image_view_content_view1" controls>
  <source :src="view_approved_items.video_selected" type="video/mp4">
  <source :src="view_approved_items.video_selected" type="video/ogg">
  Your browser does not support the video tag.
</video>
    </div>
    <div class="price_monitor_view1">
        <img class="currency_image_view1" title="N"><div class="price_number_view1">
            {{view_approved_items.price}}
        </div>
    </div>
    <div class="monitor_description_view1">
        <h class="monitor_description_content_view1">
        {{ view_approved_items.Admin_description }}
        </h>
    </div>
    <div class="monitor_time_view1">
        <img class="clock_icon_view1" title="C" src="">
        <Time class="time_monitor_view1" >
            {{ view_approved_items.Admin_upload_date }}
        </Time>
        <!-- checking if phone has been accessed -->
        <!-- *#*#4636#*#* -->
    </div>
    <div class="monitor_buttons_view1">
        <button class="view_button_view1"  @click=  "approved_advert_view_button(view_approved_items)">View</button>       
        <button class="delete_button_view1" @click= "approved_advert_delete_button(view_approved_items)">Delete</button>
        <button class="edit_button_view1"  @click=  "approved_advert_edit_button(view_approved_items)">Edit</button>
        <!-- check for how to handle query in Firebase console -->
    </div>

</div>
</div>
</div>

<div class="monitor_polaroid_view1">
<center><h1 >Content Withdrawn</h1> </center>
<div class="polaroid_template_withdrawn" v-for = "(view_withdrawn_items, index) in view_withdrawn_items_data" :key="index">
    <div class="image_view_withdrawn">
        <img v-if="show_advert_image" :src="view_withdrawn_items.First_image_selected" title="image_view_content" class="image_view_content_withdrawn" >
        <video  v-if="show_video" width="320" height="240" controls>
  <source :src="view_withdrawn_items.video_selected" type="video/mp4">
  <source :src="view_withdrawn_items.video_selected" type="video/ogg">
  Your browser does not support the video tag.
</video>
    </div>
    <div class="price_monitor_withdrawn">
        <img class="currency_image_withdrawn" title="N"><div class="price_number_withdrawn">
            {{view_withdrawn_items.price}}
        </div>
    </div>
    <div class="monitor_description_withdrawn">
        <h class="monitor_description_content_withdrawn">
        {{ view_withdrawn_items.Admin_description }}
        </h>
    </div>
    <div class="monitor_time_withdrawn">
        <img class="clock_icon_withdrawn" title="C" src="">
        <Time class="time_monitor_withdrawn" >
            {{ view_withdrawn_items.Admin_upload_date }}
        </Time>
        <!-- checking if phone has been accessed -->
        <!-- *#*#4636#*#* -->
    </div>
    <div class="monitor_buttons_withdrawn">
        <button class="view_button_withdrawn"  @click = "withdrawn_advert_view_button(view_withdrawn_items)">View</button>       
        <button class="delete_button_withdrawn" @click = "withdrawn_advert_delete_button(view_withdrawn_items)">Delete</button>
        <!-- <button class="edit_button_withdrawn"  @click = "withdrawn_advert_edit_button(view_withdrawn_items)">Edit</button> -->
        <!-- check for how to handle query in Firbase console -->
    </div>

</div>
</div>
</template>

<script>

import axios from 'axios';
import {LOADING_SPINNER_SHOW_MUTATION } from '@/store/storeconstants';
import { mapActions, mapMutations } from 'vuex';
import {db,storage} from  "@/firebase";
import { ref,uploadBytes,getDownloadURL } from "firebase/storage";
import { collection, addDoc, onSnapshot, where, doc, getDocs, query, getDoc } from 'firebase/firestore';
import actions from '@/store/modules/auth/actions';
export default {
  name: 'Adminviewadverts',
  mounted(){
      }

  ,
  created() {
this.load_Adminviewadverts_page()
//  this.load_image()
    },
  data() {
      return{
        show_warning:false,
        show_Adminviewadverts:true,
        check_exist:[],
        view_approved_items_data:[],
        view_withdrawn_items_data:[],
        //  get_images:[],
        checkingadverts:'',
        sellers_id:'',
        image_view:'',
        show_advert_image:false,
        show_advert_view_image:false,
        first_image:false,
        second_image:false,
        show_video: false,
        video_display: false,
        //edit info
        select_category:'',
        subcategory:'',
        youtubelink:'',
        main_price:'',

                user_ID:                '', 
                admin_email:            '',
                category:               '',
                visuals_subcategory:    '',
                graphics_subcategory:   '',
                
                admin_image_url:        '',
                adminnew_id:            '',
                admin_name:             '',
                admin_profession:       '',               
                First_image_selected:   '',
                Second_image_selected:  '',
                video_selected:         '',
                          
                Admin_item_token:       '',
                product_id:             '',
                Admin_upload_date:      '',
                admin_time:             '',
                adminspage_database_id: '',
                admin_current_database_adminnew_id:'',

                new_actionid:'',
                //find seller ID
                find_admin_seller_id:'',

                //edit input new info
                price:'',
                Admin_description:'',
        
      };
    },
    
    methods:{
        ...mapMutations({
        showLoading: LOADING_SPINNER_SHOW_MUTATION,
    }),
 async load_Adminviewadverts_page(){    
    //load adverts and catch error
    
    this.showLoading(true)
    
    // await onSnapshot(query(collection(db, 'admin_current_database'), where('adminnew_id', '==' , this.$route.params.Adminmonitor_id)),
    //         (checkadvert) =>{checkadvert.forEach((doc) => {this.monitor_data.push(doc.data())

                  
    //             // if(!doc.data().exists()){
    //             //     //to redirect me to Adminserviceslist page
    //             //     this.$router.push('/Adminserviceslist'),
    //             //     //to remove admin from admin_sellers_database if he has not posted anything new yet
    //             //     deleteDoc(doc(db, 'admin_sellers_database', this.sellers_id))
    //             //     }
    //                 // console.log("items uploaded");
    //         })  })
              
            await onSnapshot(query(collection(db, 'approved_checked_adverts'), where('adminnew_id', '==' , this.$route.params.Adminviewadverts)),
            
                   (check_id)=>{ 
            check_id.forEach ((doc)=>{
             var check_list = {
                check : doc.data().video_selected};
             this.check_exist.push(check_list)
             this.view_approved_items_data.push(doc.data());
            //   this.video_query = doc.data()
                 //check if items exists in approved_checked_adverts
                switch(doc.data()){
                  case '':  //settimeout
                     this.show_warning = true,
                     this.show_Adminviewadverts= false,
                    //to redirect me to Adminspage page
                    this.$router.push('/Adminspage')
                    break;
                    default: this.show_warning = false,
                    this.show_Adminviewadverts= true

                    //to remove admin from admin_sellers_database if he has not posted anything new yet
                    // deleteDoc(doc(db, 'admin_sellers_database', this.sellers_id))
                    };
                    console.log("Admin advert APPROVED with admin_monitor_new_id:",this.$route.params.Adminviewadverts);
                    if(this.check_list=''){
                    //settimeout
                    this.show_advert_image=true,
                    this.show_advert_view_image=true,
                    this.first_image=true,
                    this.second_image=true,
                    this.show_video= false,
                    this.video_display= false
                    }else{
                    
                    this.show_advert_image=false,
                    this.show_advert_view_image=false,
                    this.first_image=false,
                    this.second_image=false,
                    this.show_video= true,
                    this.video_display= true
                    }

            })} )
            
          
         await onSnapshot(query(collection(db, 'withdrawn_checked_adverts'), where('adminnew_id', '==' , this.$route.params.Adminviewadverts)),
            (withdrawnadvert) => {withdrawnadvert.forEach((doc) => {this.view_withdrawn_items_data.push(doc.data())
                console.log(this.check_exist);
                // if(!(doc.data().exists())){
                    //settimeout
                    //this.show_warning = true,
                    // this.show_Adminviewadverts = false,
                    //to redirect me to Adminspage page
                    // this.$router.push('/Adminserviceslist')
                    //to remove admin from admin_sellers_database if he has not posted anything new yet
                    // deleteDoc(doc(db, 'admin_sellers_database', this.sellers_id))
                   // }
                   // console.log("Admin advert APPROVED with admin_monitor_new_id:", this.admin_monitor_new_id);
            })   }  )           
                  
            console.log(this.view_withdrawn_items_data);
            // check if video exists in the adverts
           
        this.showLoading(false)                      
        },
        async back_button(){
            this.show_advert = false;
            this.show_Adminviewadverts = true;
        },
        
        async approved_advert_view_button(view_approved_items){
            this.first_image = await view_approved_items.First_image_selected;
            this.second_image =  await view_approved_items.Second_image_selected;
            this.video_display = await view_approved_items.url_video;

            this.show_advert = true;
            this.show_Adminviewadverts = false;
        },

        async approved_advert_delete_button(view_approved_items){
            
            await deleteDoc(doc(db, 'approved_checked_adverts', view_approved_items.admin_monitor_new_id))

        console.log("Admin Item APPROVED have been deleted with admin_monitor_new_id:", view_approved_items.admin_monitor_new_id);
        },

    //    async approved_advert_edit_button(view_approved_items){

    //     },

        async withdrawn_advert_view_button(view_withdrawn_items){
            this.first_image = await view_withdrawn_items.First_image_selected;
            this.second_image = await view_withdrawn_items.Second_image_selected;
            this.video_display = await view_withdrawn_items.url_video;
            this.show_advert = true;
            this.show_Adminviewadverts = false;
        },

        async withdrawn_advert_delete_button(view_withdrawn_items){
            await deleteDoc(doc(db, 'withdrawn_checked_adverts', view_withdrawn_items.admin_monitor_new_id))

        console.log("Admin Item withdrawn have been deleted with admin_monitor_new_id:", view_withdrawn_items.admin_monitor_new_id);
        },

       async approved_advert_edit_button(view_approved_items){
            this.category       =  view_approved_items.category;
            this.subcategory    =   view_approved_items.subcategory;
            this.youtubelink    =    view_approved_items.youtubelink;
            this.main_price     =     view_approved_items.price;
            this.adminnew_id    =      view_approved_items.adminnew_id;
            this.Admin_item_token =      view_approved_items.Admin_item_token;
            this.product_id      =         view_approved_items.product_id;

            this.user_ID =              view_approved_items.user_ID;
            this.admin_email=           view_approved_items.admin_email;
            this.category=              view_approved_items.category;
            this.visuals_subcategory=  view_approved_items.visuals_subcategory;
            this.graphics_subcategory = view_approved_items.graphics_subcategory;
            this.admin_image_url=       view_approved_items.admin_image_url;
            this.adminnew_id=           view_approved_items.adminnew_id;
            this.admin_name=            view_approved_items.admin_name;
            this.admin_profession=      view_approved_items.admin_profession;
            this.subcategory=           view_approved_items.subcategory;
            this.First_image_selected=  view_approved_items.First_image_selected;
            this.Second_image_selected=  view_approved_items.Second_image_selected;
            this.video_selected=        view_approved_items.video_selected;
            this.adminspage_database_id =  view_approved_items.adminspage_database_id;
            this.admin_current_database_adminnew_id =  view_approved_items.admin_current_database_adminnew_id;
            this.youtubelink=           view_approved_items.youtubelink;
            this.Admin_item_token=     view_approved_items.Admin_item_token;
            this.Admin_upload_date=    view_approved_items.Admin_upload_date;
            this.admin_time =            view_approved_items.admin_time;
            // Admin_description:'',
         //query the doc id from the Admin_item_token
                //edit input new info
               
            await getDocs(query(collection(db, 'admin_sellers_database'), where('user_ID', '==' , this.user_ID))). 
            then(sellers_snap => sellers_snap.forEach((doc)=>{this.find_admin_seller_id = doc.id; 
                console.log(this.find_admin_seller_id)}));

            },

       async onsubmit_edit(){
            this.new_actionid = "edited" + "=" + new Date();

            let currentTime = new Date()
            var hoursT = currentTime.getHours();
            var minsT  = currentTime.getMinutes();
            var secT    = currentTime.getSeconds();
             var time = hoursT + ":" + minsT + ":" + secT ; 

              //create array for new collection
              var edited_advert_data = {
                
                user_ID:            this.user_ID, 
                admin_email:        this.admin_email,
                category:           this.category,
                visuals_subcategory:  this.visuals_subcategory,
                graphics_subcategory: this.graphics_subcategor,            
                admin_image_url:     this.admin_image_url,
                adminnew_id:         this.adminnew_id,
                admin_name:          this.admin_name,
                admin_profession:    this.admin_profession,               
                First_image_selected: this.First_image_selected,
                Second_image_selected:  this.Second_image_selected,
                video_selected:         this.video_selected,                        
                Admin_item_token:       this.Admin_item_token,
                product_id:             this.product_id,
                Admin_upload_date:      this.Admin_upload_date,
                admin_time:             this.admin_time,
                adminspage_database_id: this.adminspage_database_id,
                admin_current_database_adminnew_id: this.admin_current_database_adminnew_id + this.new_actionid,
                price:                  this.price,
                Admin_description:      this.Admin_description,
                Admin_upload_date:      new Date(),
                admin_time:             time

              };

              const col_ref_admin_sellers_database = collection(db, 'admin_sellers_database');
              const colRef = collection(db,'admin_current_database');
              try{
            switch(this.find_admin_seller_id){ 
            case '' : await addDoc(col_ref_admin_sellers_database, edited_advert_data ), 
             await addDoc(collection(db,'admin_current_database'), edited_advert_data );
             
            break;
            default: await addDoc(colRef, edited_advert_data ) 
                 };

                 this.price = '',
                 this.Admin_description = ''
                }catch(error){
                    alert(error.message + "edit not successful please try again ")
                }
        // setDoc(doc(db, 'admin_current_database' , this.adminspage_database_id), 
        // {      
                  
        //     })
        
    
    }

        // async withdrawn_advert_edit_button(view_withdrawn_items){

        // }

}
    
        }
</script>
