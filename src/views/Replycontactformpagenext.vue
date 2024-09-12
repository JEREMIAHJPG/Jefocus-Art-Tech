<template>
  <div class="admin_container_contact" v-for="(view_message, index) in view_replycontactlist " :key="index">
   
   <!-- <router-link :to="{name:'Replycontactformpage', params:{Replycontactformpage: view_message.guest_emai}}"> -->
       <div class= "admin_profile_container_contact">
   <div class="admin_profile_contact">
       
       <div class="admin_details_contact">
           <div class= "name_admin_contact"><h>Name:</h><h class="name_contact">{{view_message.full_name}}</h></div>
           <div class= "profession_admin_contact"><h>Profession:</h> <h class="profession_contact">{{view_message.profession}}</h></div>
           <div class= "profession_admin_contact"><h>Subject:</h> <h class="profession_contact">{{view_message.subject}}</h></div>
           <div class= "email_admin_contact"><h>Email:</h> <h class="email_contact">{{view_message.guest_email}}</h></div>            
       </div> 
       <div class="post_time_contact"><span class="material-symbols-outlined">nest_clock_farsight_analog</span> <h>{{view_message.time}}</h></div>
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
            view_replycontactlist:[]

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

</style>