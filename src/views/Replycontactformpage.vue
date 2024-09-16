<template>
  <div class="admin_container_contact" v-for="(replycontactdata, index) in replycontactlist " :key="index">
   
        <router-link :to="{name:'Replycontactformpagenext', params:{Replycontactformpagenext: replycontactdata.guest_email}}">
            <div class= "admin_profile_container_contact">
        <div class="admin_profile_contact">
            
            <div class="admin_details_contact">
                <div class= "name_admin_contact"><h>Name:</h><h class="name_contact">{{replycontactdata.full_name}}</h></div>
                <div class= "profession_admin_contact"><h>Profession:</h> <h class="profession_contact">{{replycontactdata.profession}}</h></div>
                <div class= "email_admin_contact"><h>Email:</h> <h class="email_contact">{{replycontactdata.guest_email}}</h></div>            
            </div> 
            <div class="post_time_contact"><span class="material-symbols-outlined">nest_clock_farsight_analog</span> <h>{{replycontactdata.time}}</h></div>
            <!-- <div class="post"><center><button class="post_button" @click="post_item_from_this_admin()"> check message</button></center></div> -->
            <!-- <div class="post"><center><button class="post_button" @click="migrate_to_monitor_admin(replycontactdata)"> Check posts</button></center></div> -->
                        
        </div>
    </div>
        </router-link>
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
    name:'Replycontactformpage',
    data() {      
        return{
            replycontactlist:[]
           }},

        created(){
            this.replycontactlist_collection();
        },
        methods:{
            async replycontactlist_collection(){
                onSnapshot(query(collection(db,'Contact_Page_users_list')), (snap) =>{snap.forEach((doc)=>{
                
                var replycontactlist_data = {
                full_name:                        doc.data().full_name,
                guest_email:                           doc.data().guest_email,
                profession:                        doc.data().profession ,
                subject:                        doc.data().subject,
                time:                         doc.data().subject,
            }

            this.replycontactlist.push(replycontactlist_data);
            })} )
            }
        }

}
</script>

<style>
.admin_container_contact{
padding-left: 10%;
padding-right: 10%;
position: relative;
background-color:rgb(167, 167, 167,0.2) ;

}
.admin_profile_container_contact{
position: relative;
display: block;
margin: 0%;
border: 3px solid rgb(167, 167, 167,0.5);
border-radius: 15px;
min-height: 200px;
background-color:transparent;
}
.admin_profile_contact{ 
position:relative;
display: block;
margin-top:12px;
border: 3px solid rgb(167, 167, 167,0.5);
border-radius: 15px;
height: auto;
background-color:white;
transition-duration: .3s;
}

.admin_profile_contact:hover{
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

.admin_details_contact{
position: relative;
float: left;
margin-top: 5px;
margin-bottom: 20px;
margin-left:50px;
background-color: transparent;

}

.admin_details_contact:hover{
position: relative;
float: left;
margin: 30px;
margin-bottom: 20px;
margin-left:50px;
background-color: transparent;

}

.name_admin_contact{
float: left;
margin: 3px;
width: 100%;
}

.name_contact{
    font-size: large;
    margin-left: 10%;
}

.profession_admin_contact{
    float: left;
    margin: 3px;
    width: 100%;
}
.email_admin_contact{
    float: left;
    margin: 3px;
    width: 100%;
}

.profession_contact{
    font-size: large;
    margin-left: 12%;
}
.email_contact{
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

.post_time_contact{
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