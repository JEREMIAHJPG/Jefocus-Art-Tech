<template>
    <!-- form display  -->
     <!-- view monitor adverts -->
      <!-- -- -->
       
      <!-- -- -->
     <div class="reply_form_view_background" v-if="show_reply_form">
        
        <center>
            <div class=container style="margin-top: 55px;">
      <h1 style="text-align: center; color:white;"> Contact Us </h1>
      <form action="/action_page.php" @submit.prevent="reply_contact_form()">
          <div class="row">
              <div class="col-25">
                  <label for="fname" style="color:white;">Full Name</label>
              </div>
              <div class="col-75">
                  <input type="text" :value = reply_full_name disabled id="fname" name="firstname" placeholder="your name...">
              </div>
              <center>
                  <h1 style="color: green">{{ response }}</h1>
              </center>
          </div>
        
          <div class="row">
              <div class="col-25">
                  <label for="email" style="color:white;">Email</label>
              </div>
              <div class="col-75">
                  <input type="text" :value = reply_guest_email disabled id="email" name="Email" placeholder="example@gmail.com..." required>
              </div>
          </div>
         
  
          <div class="row">
              <div class="col-25">
                      <label for="subject" style="color:white;">Subject</label>
              </div>
              <div class="col-75">
                  <textarea id="subject" name="subject" :value= reply_subject disabled style="height:200px"></textarea>
              </div>
              <div class="col-75">
                  <textarea id="subject" name="subject" :value = reply_my_email_response placeholder="Write Something.." style="height:200px"></textarea>
              </div>
          </div>
          <br>
          <div class="row">
              <input type="submit" value="Submit">
          </div>
      </form>
      </div>
    </center>
    </div>
    
    <!-- form display  -->
<div v-if="show_reply_form_list">
  <div class="admin_container_contact_message" v-for="(view_message, index) in view_replycontactlist " :key="index" >
   
   <!-- <router-link :to="{name:'Replycontactformpage', params:{Replycontactformpage: view_message.guest_emai}}"> -->
       <div class= "admin_profile_container_contact_message" @click="view_message_for_reply(view_message)">
   <div class="admin_profile_contact_message">
       
       <div class="admin_details_contact_message">
           <div class= "name_admin_contact_message"><h>Name:</h><h class="name_contact_message">{{view_message.full_name}}</h></div>
           <div class= "profession_admin_contact_message"><h>Profession:</h> <h class="profession_contact_message">{{view_message.profession}}</h></div>
           <div class= "subject_admin_contact_message"><h>Subject:</h> <h class="subject_contact_message">{{view_message.subject}}</h></div>
           <div class= "email_admin_contact_message"><h>Email:</h> <h class="email_contact_message">{{view_message.guest_email}}</h></div>            
       </div> 
       <div class="post_time_contact_message"><span class="material-symbols-outlined">nest_clock_farsight_analog</span> <h>{{view_message.time}}</h></div>
       <div class="post"><center><button class="post_button" @click="view_message_for_reply(view_message)"> check message</button></center></div> 
       <!-- <div class="post"><center><button class="post_button" @click="migrate_to_monitor_admin(view_message)"> Check posts</button></center></div> -->
                   
   </div>
</div>
   <!-- </router-link> -->
</div>
</div>
</template>

<script>
 import axios from 'axios';
  import {LOADING_SPINNER_SHOW_MUTATION, LOGIN_ACTION } from '@/store/storeconstants';

import { mapActions, mapMutations } from 'vuex';
import {storage, db} from "@/firebase"

import { ref,uploadBytes,uploadBytesResumable,getDownloadURL } from "firebase/storage"

import { collection, onSnapshot, addDoc, setDoc, getDoc, getDocs, query, where, doc } from 'firebase/firestore';
export default {
    name:'Replycontactformpagenext',
    data() {
        return{
            view_replycontactlist:[],

            show_reply_form:'',
            show_reply_form_list:true,
                reply_full_name:'',                       
                reply_guest_email:'',                         
                reply_profession:'',                    
                reply_subject:'',
                reply_my_email_response:'',                       
                reply_time:'',
                response:'',
                Contact_Page_users_list_ID:''
        }},

        created(){
            this.load_replycontactlist_collection();
        },
        methods:{
            ...mapMutations({
        showLoading: LOADING_SPINNER_SHOW_MUTATION,
                             }),
            async load_replycontactlist_collection(){

              await onSnapshot(query(collection(db,'Contact Page users'),
            where('guest_email', '==' , this.$route.params.Replycontactformpagenext))
            ,(Replycontact)=>{ 
                Replycontact.forEach ((doc)=>{
                    var view_replycontactlist_data = {
                ID:                          doc.id,
                full_name:                        doc.data().full_name,
                guest_email:                           doc.data().guest_email,
                profession:                        doc.data().profession ,
                subject:                        doc.data().message,
                time:                         doc.data().time,
            }

            this.view_replycontactlist.push(view_replycontactlist_data);
         })}
        
        );

        await onSnapshot(query(collection(db,'Contact_Page_users_list'),
            where('guest_email', '==' , this.$route.params.Replycontactformpagenext))
            ,(reply_Page_users_list)=>{ 
                reply_Page_users_list.forEach ((doc)=>{                
               this.Contact_Page_users_list_ID = doc.id
         })}
        
        );

            //     onSnapshot(query(collection(db,'Contact_Page_users_list')), (snap) =>{snap.forEach((doc)=>{
                
                
            // })} )
            },
            view_message_for_reply(view_message){
                this.show_reply_form = true,
                this.show_reply_form_list = false,
                this.reply_id=          view_message.ID ;
                this.reply_full_name = view_message.full_name;                      
                this.reply_guest_email = view_message.guest_email;                    
                this.reply_profession = view_message.profession;                  
                this.reply_subject = view_message.subject;
                                    
                this.reply_time = view_message.time;

            },

            //submit reply to email
            async reply_contact_form(){
        this.showLoading(true);
        let currentTime = new Date()
            var hoursT = currentTime.getHours();
            var minsT  = currentTime.getMinutes();
            var secT    = currentTime.getSeconds();
             var reply_time = hoursT + ":" + minsT + ":" + secT ;

        var contact_form_content_reply = await {
                reply_full_name:            this.reply_full_name,                       
                reply_guest_email:          this.reply_guest_email,                         
                reply_profession:           this.reply_profession,                    
                reply_subject:              this.reply_subject,
                reply_my_email_response:    this.reply_my_email_response,                       
                reply_time:                 reply_time
        };

        //adddoc to firbase firestore database
        const contact_message_list_reply = collection(db,'Contact_Page_users_list_reply');
        
        await getDocs(query(collection(db, 'Contact_Page_users_list'), where('guest_email', '==' , this.guest_email))). 
            then(Contact => Contact.forEach((doc)=>{this.find_Contact = doc.id; 
                console.log(this.find_Contact)}));
                //fetch if it exists already
                    
        
         await addDoc(contact_message_list_reply, contact_form_content_reply).then(()=>{
                    this.showLoading(false);              
                    setInterval(()=>{alert('Your message has been successfully sent and will reply your within 24hrs please check reply in your email Thankyou');
                    this.response = "Your message has been successfully sent and will reply your within 24hrs please check reply in your email Thankyou"},3000)
                    
                    this.fname ='';
                    this.lname ='';
                    this.guest_email ='';
                    this.profession ='';
                    this.subject ='';
                    this.response ='';
            //delete document after successfull sending of reply

                deleteDoc(doc(db, 'Contact Page users', this.reply_id))
                console.log("recieved message deleted from Contact Page users with ID:", this.delete_post_id);
                if(this.view_replycontactlist = []){
                    deleteDoc(doc(db, 'Contact_Page_users_list', this.Contact_Page_users_list_ID));
                    this.$router.push('/Replycontactformpage');
                    alert("messenger data deleted fromContact_Page_users_list with ID:",this.Contact_Page_users_list_ID);                    
                };
            })
        .catch((error)=>{
            this.showLoading(false);
            setInterval(()=>{alert('error occurred please resend');
            this.response = error.response +""+ error.message + "please resend"},3000)
            return false;
        });
        //
        this.show_reply_form = false,
        this.show_reply_form_list = true  
        // set Doc newID
                                                  
            
            //
        }   
        }
}
</script>

<style>
/* .reply_form_view{
   
} */
.reply_form_view_background{
    z-index: 10;
    background-color: rgb(0,0,0, 0.8);
    width:100%;
    position:relative;
    height:auto;
    margin-bottom: 100px;
}

.container{
z-index: 7;
width: 80%;
}

.admin_container_contact_message{
    padding-left: 5%;
    padding-right: 5%;
position: relative;
background-color:rgb(167, 167, 167,0.2) ;
max-height: 300px;
}
.admin_profile_container_contact_message{
position: relative;
display: inline-block;
margin: 0%;
border: 3px solid rgb(167, 167, 167,0.5);
border-radius: 15px;
min-height: 200px;
height: auto;
background-color:transparent;
}
.admin_profile_contact_message{ 
position:relative;
display: block;
margin-top:12px;
border: 3px solid rgb(167, 167, 167,0.5);
border-radius: 15px;
max-height: 200px;
background-color:white;
transition-duration: .3s;
}

.admin_profile_contact_message:hover{
position: relative;
background-size: contain;
display: block;
margin: 0%;
height: 500px;
border: 3px solid rgb(167, 167, 167,0.5);
border-radius: 10px;

}
/* @keyframes expansion {from{margin:10%} to {margin:0}} */
.circle_image_contact_message:hover{
    position: relative;
float: left;
max-width: 120px;
border: 3px solid grey;
width: 120px;
height:120px;
max-height: 120px;
border-radius: 50%;
}
.circle_image_contact_message{
    position: relative;
float: left;
max-width: 100px;
border: 3px solid grey;
width: 90px;
height:90px;
max-height: 100px;
border-radius: 50%;
}

.admin_image_contact_message{
    position: relative;
    background-size: contain;
    border-radius: 100%;
width: 90px;
height: 90px;
border: 3px solid black;

}

.admin_image_contact_message:hover{
    position: relative;
    background-size: contain;
    border-radius: 100%;
    width: 120px;
    height:120px;
border: 3px solid black;

}

.admin_details_contact_message{
position: relative;
float: left;
margin-top: 5px;
margin-bottom: 20px;
margin-left:50px;
background-color: transparent;

}

.admin_details_contact_message:hover{
position: relative;
float: left;
margin: 30px;
margin-bottom: 20px;
margin-left:50px;
background-color: transparent;

}

.name_admin_contact_message{
float: left;
margin: 3px;
width: 100%;
}

.name_contact_message{
    font-size: large;
    margin-left: 10%;
}

.profession_admin_contact_message{
    float: left;
    margin: 3px;
    width: 100%;
}
.subject_admin_contact_message{
    float: left;
    margin: 3px;
    width: 100%;
}
.email_admin_contact_message{
    float: left;
    margin: 3px;
    width: 100%;
}

.profession_contact_message{
    font-size: large;
    margin-left: 12%;
}
.email_contact_message{
    font-size: large;
    margin-left: 12%;
}
.subject_contact_message{
    font-size: large;
    margin-left: 12%;
}

.service_admin_contact{
    float: left;
    margin: 3px;
    width: 100%;
}

.service_contact{
    font-size: large;
    margin-left: 16%;
}

.post_time_contact_message{
    position: relative;
    width: 50px;
    height: auto;
    margin: 17px;
    float: left;
border: 3px solid grey;
}
.clock_icon_contact{
float:left;
}
.post_contact{
float:right;
margin-right: 100px;
margin-top:20px;
}
.post_button_contact{
 color:white;
 background-color: grey;
 width: 100px;
 height: 50px;
 border-radius: 10px;
 border: 3px solid black;
}

</style>