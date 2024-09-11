// where admins can view items posted or withdrawn
<style scoped>
.monitor_background_view1{
background-color: rgb(177, 177, 177);
justify-items: center;
padding: 3%;
position:relative;


}

.monitor_polaroid_view1{
background-color: white;
width:100%;
display:float;
height:auto;
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

.image_view_view1{
    min-height: 100%;
    padding-bottom: 10px;
    background-color: rgb(255, 255, 255);
    min-width: fit-content;
}

.image_view_content_view1{
    position: relative;
    height: auto;
    width: auto;
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

height: 50px
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
    min-height: 150px;
    padding-bottom: 10px;
    background-color: rgb(163, 163, 163);
    min-width: fit-content;
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

.image_view_back_button{
    border-radius: 5px solid blue;
    background-color:yellow;
    color:black;
    width: 50px;
    height:25px;
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
    <video  v-if="show_advert_video" width="320" height="240" controls>
  <source :src="video_display" type="video/mp4">
  <source :src="video_display" type="video/ogg">
  Your browser does not support the video tag.
</video>
    <!-- </div> -->
    <button class="image_view_back_button" @click="back_button()">Back</button>
        </div>
    </center>
    </div>

    <div class="monitor_background_view1" v-if="show_Adminviewadverts" >
       <center><h1 class="top_text_view1">View items and services Page</h1> </center>
    <div class="monitor_polaroid_view1">
        <center><h1 class="top_text_view1">Content Approved</h1> </center>
        <div class="polaroid_template_view1" v-for = "(view_approved_items, index) in view_approved_items_data" :key="index" >
            
    <div class="image_view_view1">

        <img v-if="show_advert_image" :src="view_approved_items.First_image_selected" title="image_view_content" class="image_view_content_view1" >
        <video  v-if="show_video" width="320" height="240" controls>
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
        <!-- <button class="edit_button_view1"  @click=  "approved_advert_edit_button(view_approved_items)">Edit</button> -->
        <!-- check for how to handle query in Firebase console -->
    </div>

</div>

<center><h1 class="top_text_withdrawn">Content Withdrawn</h1> </center>
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
        video_display: false

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
        }


        // async withdrawn_advert_edit_button(view_withdrawn_items){

        // }

        }
        
        }
</script>
