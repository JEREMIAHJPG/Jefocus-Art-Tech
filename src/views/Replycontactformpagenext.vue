<template>
    <!-- form display  -->
     <!-- view monitor adverts -->
     <div class="reply_form_view" v-if="show_advert_monitor">
        <div class="reply_form_view_background">
        </div>
        <center>
            <div class=container style="margin-top: 95px;">
      <h1 style="text-align: center;"> Contact Us </h1>
      <form action="/action_page.php" @submit.prevent="contact_form()">
          <div class="row">
              <div class="col-25">
                  <label for="fname">Full Name</label>
              </div>
              <div class="col-75">
                  <input type="text" :value="full_name" disabled id="fname" name="firstname" placeholder="your name...">
              </div>
              <center>
                  <h1 style="color: green">{{ response }}</h1>
              </center>
          </div>
          <!-- <div class="row">
              <div class="col-25">
              <label for="lname">Last Name</label>
              </div>
              <div class="col-75">
                  <input type="text" :value="full_name" disabled id="lname" name="lastname" placeholder="your last name...">
              </div>
          </div> -->
          <div class="row">
              <div class="col-25">
                  <label for="email">Email</label>
              </div>
              <div class="col-75">
                  <input type="text" :value="guest_email" disabled id="email" name="Email" placeholder="example@gmail.com..." required>
              </div>
          </div>
          <!-- <div class="row">
          <div class="col-25">
              <label for="Profession">Profession</label>
          </div>
              <div class="col-75">
                  <select id="profession" :v-model="profession" name="profession">
                      <option value=""></option>
                      <option value="ID">Interior Designer</option>
                      <option value="AC">Art Collector</option>
                      <option value="BC">Building Contractor</option>
                      <option value="OT">Others</option>
                  </select>
              </div>
          </div> -->
  
          <div class="row">
              <div class="col-25">
                      <label for="subject">Subject</label>
              </div>
              <div class="col-75">
                  <textarea id="subject" name="subject" :value="subject" disabled placeholder="Write Something.." style="height:200px"></textarea>
              </div>
              <div class="col-75">
                  <textarea id="subject" name="subject" :value="my_email_response" disabled placeholder="Write Something.." style="height:200px"></textarea>
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

  <div class="admin_container_contact" v-for="(view_message, index) in view_replycontactlist " :key="index">
   
   <!-- <router-link :to="{name:'Replycontactformpage', params:{Replycontactformpage: view_message.guest_emai}}"> -->
       <div class= "admin_profile_container_contact_message">
   <div class="admin_profile_contact_message">
       
       <div class="admin_details_contact_message">
           <div class= "name_admin_contact_message"><h>Name:</h><h class="name_contact_message">{{view_message.full_name}}</h></div>
           <div class= "profession_admin_contact_message"><h>Profession:</h> <h class="profession_contact_message">{{view_message.profession}}</h></div>
           <div class= "subject_admin_contact_message"><h>Subject:</h> <h class="subject_contact_message">{{view_message.subject}}</h></div>
           <div class= "email_admin_contact_message"><h>Email:</h> <h class="email_contact_message">{{view_message.guest_email}}</h></div>            
       </div> 
       <div class="post_time_contact_message"><span class="material-symbols-outlined">nest_clock_farsight_analog</span> <h>{{view_message.time}}</h></div>
       <!-- <div class="post"><center><button class="post_button" @click="post_item_from_this_admin()"> check message</button></center></div> -->
       <!-- <div class="post"><center><button class="post_button" @click="migrate_to_monitor_admin(view_message)"> Check posts</button></center></div> -->
                   
   </div>
</div>
   <!-- </router-link> -->
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
    data() {
        return{
            view_replycontactlist:[],
                full_name:'',                       
                guest_email: '',                         
                profession:   '',                    
                subject: '',                       
                time:'',
        }},

        created(){
            this.load_replycontactlist_collection();
        },
        methods:{
            async load_replycontactlist_collection(){
                await onSnapshot(query(collection(db,'Contact Page users'),
            where('guest_email', '==' , this.$route.params.Replycontactformpage))
            ,(Replycontact)=>{ 
                Replycontact.forEach ((doc)=>{
                    var view_replycontactlist_data = {
                full_name:                        doc.data().full_name,
                guest_email:                           doc.data().guest_email,
                profession:                        doc.data().profession ,
                subject:                        doc.data().subject,
                time:                         doc.data().subject,
            }

            this.view_replycontactlist.push(view_replycontactlist_data);
         })});

            //     onSnapshot(query(collection(db,'Contact_Page_users_list')), (snap) =>{snap.forEach((doc)=>{
                
                
            // })} )
            }
        }
}
</script>

<style>
.reply_form_view{
    z-index: 3;
    position:fixed;
    width:100%;
    height:100%;
}

.reply_form_view_background{
    background-color: rgb(0,0,0, 0.8);
    position:fixed;
    width:100%;
    height:100%;
}
.admin_container_contact{
    padding-left: 10%;
    padding-right: 10%;
position: relative;
background-color:rgb(167, 167, 167,0.2) ;

}
.admin_profile_container_contact_message{
position: relative;
display: block;
margin: 0%;
border: 3px solid rgb(167, 167, 167,0.5);
border-radius: 15px;
min-height: 200px;
background-color:transparent;
}
.admin_profile_contact_message{ 
position:relative;
display: block;
margin-top:12px;
border: 3px solid rgb(167, 167, 167,0.5);
border-radius: 15px;
height: auto;
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
.circle_image_contact:hover{
    position: relative;
float: left;
max-width: 120px;
border: 3px solid grey;
width: 120px;
height:120px;
max-height: 120px;
border-radius: 50%;
}
.circle_image_contact{
    position: relative;
float: left;
max-width: 100px;
border: 3px solid grey;
width: 90px;
height:90px;
max-height: 100px;
border-radius: 50%;
}

.admin_image_contact{
    position: relative;
    background-size: contain;
    border-radius: 100%;
width: 90px;
height: 90px;
border: 3px solid black;

}

.admin_image_contact:hover{
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