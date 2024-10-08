<style scoped>
.monitor_background{
background-color: rgb(177, 177, 177);
justify-items: center;
padding: 3%;
position:relative;
height: auto;
width: 100%;
float:left;
margin-top:100px;
margin-bottom:100px;
}
/* .monitor_background::before{
    
    height:100px;
    width: 100%;
    float: left;
} */

.monitor_polaroid{
background-color: white;
width:25%;
display:float;
height:auto;
}

.top_text{
    justify-content: center;
    position: relative;
    display: block ;
    width:100%;
    left:35%;

}

.polaroid_template{
    
    background-color: white;
    padding: 10px;
    max-height: 500px;
    width: auto;
    max-width: 150px;
    position: relative;
    margin-left:10px;  
    float: left;  

}

.image_view{
    max-height:200px;
    min-width:fit-content;
    background-color: rgb(163, 163, 163);
   
}

.image_view_content{
   max-height: 200px;
   height: 150px;
    max-width:150px;
}

.price_monitor{
    width: 100%;
    border: 3px solid grey;
    height: 15px;
    margin-top: 10px;
}

.currency_image{
    position:relative;
    float: left;

}

.price_number{
color:black;
float: left;
padding-left: 5px;
padding-right: 5px;
padding-left: 2px;

}

.monitor_description{
display:float;
float:  left;
height: 77px;
max-width:  100px;
border: 2px solid grey;
contain: content;
margin: 15px;

}

.monitor_description_content{
    width: 50px;
    height: auto;

}

.monitor_time{
      
    float: left;
    position: relative;
    height: auto;
    width: 100%;

}

.clock_icon{
    position: relative;
    float: left;
    width: 30%;
}

.time_monitor{
    margin-left: 10px;
    margin-right: 10px;
float: left;
width: auto;
}

.monitor_buttons{
position:relative;
float: left;
margin-top:1px;
height: auto
}


.view_button{
    background-color:rgb(249, 149, 67);
color:black;
width: 55px;
height:30px;
border-radius: 5px;
margin: 5px;
}

.post_button{
    background-color:green;
color:white;
width: 55px;
height:30px;
border-radius:5px;
margin: 5px;
}

.delete_button{
background-color: red;
color:white;
width:55px;
height:30px;
border-radius:5px;
margin: 5px;
}

.edit_button{
    background-color: purple;
    color:white;
    width:55px;
height:30px;
border-radius:5px;
margin: 5px;
}

.advert_view_monitor{
    float:left;
    z-index: 3;
    position:relative;
    width:100%;
    height:100%;
    margin-bottom: 150px;
}

.advert_background_monitor{
    float: left;
    background-color: rgb(0,0,0, 0.8);
    position:relative;
    width:100%;
    height:100%;
}

.view_image_monitor{
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

.first_image_view_content_view1_monitor{
    float:left;
    position: relative;
    height: 330px;
    width: 500px;
    padding: 1px;
}

.second_image_view_content_view1_monitor{
    float:left;
    position: relative;
    height: 330px;
    width: 500px;
    padding:1px;
}

.image_view_back_button_monitor{
    border-radius: 5px solid blue;
    background-color:yellow;
    color:black;
    width: 50px;
    height:25px;
}

</style>
<template>
    <!-- view monitor adverts -->
    <div class="advert_view_monitor"  v-if="show_advert_monitor">
        <div class="advert_background_monitor">
        </div>
        <center>
            <div class="view_image_monitor">
            <!-- <div class="image_view_view1"> -->
    <img v-if="show_advert_view_image_monitor" :src="first_image" title="image_view_content" class="first_image_view_content_view1_monitor" >
    <img  v-if="show_advert_view_image_monitor" :src="second_image" title="image_view_content" class="second_image_view_content_view1_monitor" >
    <video  v-if="show_advert_video_monitor" width="320" height="240" controls>
  <source :src="video_display_monitor" type="video/mp4">
  <source :src="video_display_monitor" type="video/ogg">
  Your browser does not support the video tag.
</video>
    <!-- </div> -->
    <button class="image_view_back_button_monitor" @click="back_button_monitor()">Back</button>
        </div>
    </center>
    </div>

    <div class="monitor_background" v-if="monitor_show">
      <center> <h1>Monitor Page</h1> </center>
    
<div  class="polaroid_template" v-for = "(monitor_data_value, index) in monitor_data" :key="index">
    <div class="image_view">

        <img v-if="show_advert_view_image_monitor" style="z-index:-1;" :src="monitor_data_value.First_image_selected"  class="image_view_content" >
        <video v-if="show_advert_video_monitor"   width="320" height="240" class="image_view_content" controls>
  <source :src="monitor_data_value.video_selected" type="video/mp4">
  <source :src="monitor_data_value.video_selected" type="video/ogg">
  Your browser does not support the video tag.
</video>
        
    </div>
    <div class="price_monitor">
        <img class="currency_image" title="N"><div class="price_number">{{monitor_data_value.price}}</div>
    </div>
    <div class="monitor_description">
        <h class="monitor_description_content">
        {{ monitor_data_value.Admin_description }}
        </h>
    </div>
    <div class="monitor_time">
        
        <Time class="time_monitor" ><span class="material-symbols-outlined">nest_clock_farsight_analog</span>{{ monitor_data_value.admin_time }}</Time>
        <!-- checking if phone has been accessed -->
        <!-- *#*#4636#*#* -->
    </div>
    <div class="monitor_buttons">
        <button class="view_button"  @click=  "view_button(monitor_data_value)">View</button>
        <button class="post_button"  @click=  "post_button(monitor_data_value)">Post</button>
        <button class="delete_button"  @click="delete_button(monitor_data_value)">Delete</button>
        <button class="edit_button"  @click=  "edit_button(monitor_data_value)">Edit</button>
        <!-- check for how to handle query in Firbase console -->
    </div>

</div>
<div style="background-color: black;"></div>
</div>

</template>

<script>
// use the ID router instead of just name router,
// get ID from Signup form, fetch ID using login details from database and store in local storage,  
// create a login email form and database collection for query IDs for Admins only,
// get a register database for the identity of the Admins
// check how to delete file database using firebase documentation
// register GitHub 
// video upload in adminspage
// place conditional statement that if params id is found in Admin database Adminspage button should show else Adminspage button shouldn't show
// while if your ID is found you can see Admin-database-monitor and Adminmonitor page
// add to the prices for profit, query for time of monitor display of items
// build an Admin page for displaying their items
// in the Adminmonitor page as items are posted to new database it is deleted in the current database,
// settimeout for random display of items posted from 1 to 10 or more after indexing firestore database - 
// HOW TO get userid from signup and login o ech i and delee om oopasswod pocess
// apply git to your project for authentification 
// work on date and time structure, showloading, catch(err){} for all uploads to databases
// try code for analytics in vue and in firebase
// code for admin to edit their approved items
// check for contact us page function  
// code for sending SMS and email to clients for forgot password, orders placed, adverts notifications etc -
// add backend to artwork page use pagenation---
// check how to launch website with GitHub(use brad traversy) --     
// create view-order history, view artworks page -
// create a confirm recieve item button on the receipt page ---
// add payment stack using flutterwave documentation ---
// Responsiveness, Material-Icons and SVGs -   

import axios from 'axios';
import {db,storage} from  "@/firebase";
import { ref,uploadBytes,getDownloadURL } from "firebase/storage"
import { collection, addDoc,where,setDoc, onSnapshot, deleteDoc, doc, getDocs, query, getDoc } from 'firebase/firestore';
import actions from '@/store/modules/auth/actions';

export default {
  name: 'Adminmonitor',
  mounted(){
      }

  ,
  created() {
this.load_page_video_check();

//  this.load_image()
    },
  data() {
      return{
        // show_image_polaroid: false,
        // show_video_polaroid: false,
         // show_image_polaroid_monitor:'',
        // show_video_polaroid_monitor:'',

        monitor_show:true,
        show_advert_view_image_monitor:true,
        show_advert_video_monitor:false, 
        first_image:'',
        second_image:'',     
        video_display_monitor:'',
        monitor_data:[],
        //  get_images:[],
        checkingadverts:'',
        sellers_id:[],
        video_exist:[],
        post_id:'',
        delete_advert:'',
      };
    },
    
    methods:{
    
        async load_page_video_check(){          
                 //Admin sellers database post id
            await onSnapshot(query(collection(db,'admin_sellers_database'),
            where('adminnew_id', '==' , this.$route.params.Adminmonitor_id))
            ,(admin_monitor_admin_id)=>{ 
            admin_monitor_admin_id.forEach ((doc)=>{
                this.video_exist.push(doc.data().video_selected)
                console.log(this.video_exist[0]);
                // this.video_exist.push(doc.data());
            // this.sellers_id.push(doc.data().adminnew_id);
            console.log ("Admin sellers database post id obtained with value :", this.video_exist);
            switch(this.video_exist[0]){ 
                 case "":  
                 this.monitor_show=true,
                 this.show_advert_view_image_monitor=true,
                 this.show_advert_video_monitor=false
                 break;
                 default:
                          this.monitor_show=true,
                          this.show_advert_view_image_monitor=true,
                          this.show_advert_video_monitor=true
                    }
                console.log('checked');

                })});

                
                //UPLOAD QUERYING
                await onSnapshot(query(collection(db, 'admin_current_database'), where('adminnew_id', '==' , this.$route.params.Adminmonitor_id)),
            (checkadvert) =>{checkadvert.forEach((doc) => {this.monitor_data.push(doc.data())

                  
                // if(!doc.data().exists()){
                //     //to redirect me to Adminserviceslist page
                //     this.$router.push('/Adminserviceslist'),
                //     //to remove admin from admin_sellers_database if he has not posted anything new yet
                //     deleteDoc(doc(db, 'admin_sellers_database', this.sellers_id))
                //     }
                    // console.log("items uploaded");
            })  })              
            
            console.log(this.monitor_data);  

                },

        //               async load_page(){
                      
        // },
              
       async post_button(monitor_data_value){
        await getDocs(query(collection(db,'admin_current_database'),
            where('admin_current_database_adminnew_id', '==',  monitor_data_value.admin_current_database_adminnew_id))).then(post=>{ 
            post.forEach ((doc)=>{
                this.post_id = doc.id;
                // this.admin_current_database_adminnew_id = doc.data().adminnew_id +"/"+ "checkadvert" + "=" + doc.id ;

                 console.log("Admin post ID gotten with ID:", this.post_id);
                })
                });
          var post_advert = await getDoc(doc(db, `admin_current_database`,this.post_id))
            this.checkingadverts =  post_advert.data();
            console.log(this.checkingadverts);          
            await addDoc(collection(db, 'approved_checked_adverts'), this.checkingadverts)
            
            // creating new id for approving action
            await getDocs(query(collection(db,'approved_checked_adverts'),
            where('admin_current_database_adminnew_id', '==', monitor_data_value.admin_current_database_adminnew_id)))
            .then(admin_monitor_admin_id=>{ 
            admin_monitor_admin_id.forEach ((doc)=>{
                this.admin_monitor_id = doc.id;
                this.admin_monitor_new_id = doc.data().admin_current_database_adminnew_id + "/approved_checked_advert" + doc.id ;

                console.log("Admin newID created with admin_monitor_new_id:", this.admin_monitor_new_id);
                })});

                await setDoc(doc(db,'approved_checked_adverts', this.admin_monitor_id), 
                { admin_monitor_new_id: this.admin_monitor_new_id,
                //   admin_current_database_adminnew_id:        this.admin_monitor_id  
                }, {merge:true})
                localStorage.setItem(`APPROVED`, this.admin_monitor_new_id)
                
                await deleteDoc(doc(db, 'admin_current_database', this.post_id))
                console.log("Admin advert APPROVED and deleted with admin_monitor_new_id and this.admin_monitor_id respectively:", this.post_id);

            // users collection  reference
           // const colRef = collection(db,'admin_upload_database');
            // data to send
            //  var admin_upload_database = await addDoc(colRef, JSON.parse(localStorage.getItem(`admin_upload_database`)));
              
              //access auto-generated ID with '.id'
             // console.log('Document was created with ID:', admin_upload_database.id); 
              
              //await setDoc(doc(db, `admin_upload_database`, 'US'),{email:'United States'})
             // await setDoc(doc(db, `admin_upload_database`, 'US'),{email:'United States'},{merge:'true'})
            //async var docSnap = await getDoc(doc((db,'email', 'www')), localStorage.getItem(`admin_upload_database`))
            // if (admin_upload_database.exists()){
                    //this.name = docSnap.data().name} else{'Document does not exist'}
                    

            // db.collection('admin_upload_database').get().then((snapshot)=>{
                
            //     snapshot.docs.forEach(doc=>{console.log(doc)})

                
            // })
        },
        //lord take me home, home where i belong 
        async view_button(monitor_data_value){
            this.show_advert_monitor = true;
            this.monitor_show = false;
            this.video_display_monitor = monitor_data_value.video_selected;
            this.first_image = monitor_data_value.First_image_selected;
            this.second_image = monitor_data_value.Second_image_selected;
        },
        
        async back_button_monitor(monitor_data_value){
            this.show_advert_monitor = false;
            this.monitor_show = true;
        },

        async delete_button(monitor_data_value){
            await getDocs(query(collection(db,'admin_current_database'),
            where('admin_current_database_adminnew_id', '==',  monitor_data_value.admin_current_database_adminnew_id))).then(delete_post=>{ 
            delete_post.forEach ((doc)=>{
                this.delete_post_id = doc.id;
                // this.admin_current_database_adminnew_id = doc.data().adminnew_id +"/"+ "checkadvert" + "=" + doc.id ;

                 console.log("Admin delete_post ID gotten with ID:", this.delete_post_id);
                })
                });
          var delete_advert = await getDoc(doc(db, `admin_current_database`,this.delete_post_id))
            this.delete_adverts =  delete_advert.data();
            console.log( this.delete_adverts);          

            // await getDoc(doc(db, `admin_current_database`, monitor_data_value.admin_current_database_adminnew_id))
            // .then(get_item_snap =>{this.checkingadverts = get_item_snap.data()
                                    
            // })
            
            await addDoc(collection(db, 'withdrawn_checked_adverts'), this.delete_adverts)

            // creating new id for withdrawing action
            await getDocs(query(collection(db,'withdrawn_checked_adverts'),
            where('admin_current_database_adminnew_id', '==', monitor_data_value.admin_current_database_adminnew_id)))
            .then(admin_monitor_admin_id=>{ 
            admin_monitor_admin_id.forEach ((doc)=>{
                this.admin_monitor_id = doc.id;
                this.admin_monitor_new_id = doc.data().admin_current_database_adminnew_id + "/withdrawn_checked_advert" + doc.id ;

                console.log("Admin newID sent to WITHDRAWN database with admin_monitor_new_id:", this.admin_monitor_new_id);
                })});

                await setDoc(doc(db,'withdrawn_checked_adverts', this.admin_monitor_id), 
                { admin_monitor_new_id: this.admin_monitor_new_id,
                //   admin_current_database_adminnew_id:        this.admin_monitor_id  
                }, {merge:true})
                localStorage.setItem(`WITHDRAWN`, this.admin_monitor_new_id)
                
                await deleteDoc(doc(db, 'admin_current_database', this.delete_post_id))

                console.log("Admin post deleted from admin_current_database with ID:", this.delete_post_id);
        }
    }
}
</script>