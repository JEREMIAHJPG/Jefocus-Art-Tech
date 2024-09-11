<style scoped>
.admin_container{
    padding-left: 10%;
    padding-right: 10%;
position: relative;
background-color:rgb(167, 167, 167,0.2) ;

}
.admin_profile_container{
    position: relative;
    display: block;
margin: 0%;
border: 3px solid rgb(167, 167, 167,0.5);
border-radius: 15px;
min-height: 200px;
background-color:transparent;
}
.admin_profile{ 
position:relative;
display: block;
margin-top:12px;
border: 3px solid rgb(167, 167, 167,0.5);
border-radius: 15px;
height: auto;
background-color:white;
transition-duration: .3s;
}

.admin_profile:hover{
position: relative;
background-size: contain;
display: block;
margin: 0%;
height: 500px;
border: 3px solid rgb(167, 167, 167,0.5);
border-radius: 10px;

}
/* @keyframes expansion {from{margin:10%} to {margin:0}} */
.circle_image:hover{
    position: relative;
float: left;
max-width: 120px;
border: 3px solid grey;
width: 120px;
height:120px;
max-height: 120px;
border-radius: 50%;
}
.circle_image{
    position: relative;
float: left;
max-width: 100px;
border: 3px solid grey;
width: 90px;
height:90px;
max-height: 100px;
border-radius: 50%;
}

.admin_image{
    position: relative;
    background-size: contain;
    border-radius: 100%;
width: 90px;
height: 90px;
border: 3px solid black;

}

.admin_image:hover{
    position: relative;
    background-size: contain;
    border-radius: 100%;
    width: 120px;
    height:120px;
border: 3px solid black;

}

.admin_details{
position: relative;
float: left;
margin-top: 5px;
margin-bottom: 20px;
margin-left:50px;
background-color: transparent;

}

.admin_details:hover{
position: relative;
float: left;
margin: 30px;
margin-bottom: 20px;
margin-left:50px;
background-color: transparent;

}

.name_admin{
float: left;
margin: 3px;
width: 100%;
}

.name{
    font-size: large;
    margin-left: 10%;
}

.profession_admin{
    float: left;
    margin: 3px;
    width: 100%;
}

.profession{
    font-size: large;
    margin-left: 12%;
}

.service_admin{
    float: left;
    margin: 3px;
    width: 100%;
}

.service{
    font-size: large;
    margin-left: 16%;
}

.post_time{
    position: relative;
    width: 50px;
    height: auto;
    margin: 17px;
    float: left;
border: 3px solid grey;
}
.clock_icon{
float:left;
}
.post{
float:right;
margin-right: 100px;
margin-top:20px;
}
.post_button{
 color:white;
 background-color: grey;
 width: 100px;
 height: 50px;
 border-radius: 10px;
 border: 3px solid black;
}
</style>

<template>
    <div class="admin_container" v-for="(admin_profile, index) in Adminpostlist " :key="index">
        <router-link :to="{name:'Adminmonitor', params:{Adminmonitor_id: admin_profile.adminnew_id}}">
            <div class= "admin_profile_container">
        <div class="admin_profile">
            <circle class="circle_image"><img class="admin_image" :src = admin_profile.admin_image_url></circle>
            <div class="admin_details">
                <div class= "name_admin"><h>Name:</h><h class="name">{{admin_profile.admin_name }}</h></div>
                <div class= "profession_admin"><h>Profession:</h> <h class="profession">{{admin_profile.admin_profession}}</h></div>
                <div class= "service_admin"><h>Service:</h> <h class="service">{{admin_profile.subcategory}}</h> </div>
            </div> 
            <div class="post_time"><span class="material-symbols-outlined">nest_clock_farsight_analog</span> <h>{{admin_profile.Admin_advert_Time}}</h></div>
            <div class="post"><center><button class="post_button" @click="post_item_from_this_admin()"> Post Item list</button></center></div>
            <!-- <div class="post"><center><button class="post_button" @click="migrate_to_monitor_admin(admin_profile)"> Check posts</button></center></div> -->
            
            
        </div>
    </div>
        </router-link>
    </div>
    <!-- {{ name }}
    {{ profession }}
    {{ service_admin }} -->
</template>

<script >
import {collection, onSnapshot,addDoc,getDoc, getDocs, query, where, doc } from 'firebase/firestore';
import {storage, db} from "@/firebase"

import { ref,uploadBytes,getDownloadURL } from "firebase/storage"


export default {
    name:'Adminserviceslist',
    data(){return {
        Adminpostlist:[]

                    }} ,
    created(){
        this.Adminpostlist_collection();
        // this.admin_adverts_to_check();
    },
    
    methods:{

        //query to limit 1
        async Adminpostlist_collection(){
            onSnapshot(query(collection(db, 'admin_sellers_database')), (snap) =>{snap.forEach((doc)=>{
                
                var Adminpostlist_data = {
                adminnew_id:                        doc.data().adminnew_id,
                user_ID:                            doc.data().user_ID,
                username:                           doc.data().username,
                admin_email:                        doc.data().admin_email ,
                admin_image:                        doc.data().admin_image,
                admin_image_url:                    doc.data().admin_image_url,
                admin_name:                         doc.data().admin_name,
                admin_profession:                   doc.data().admin_profession,
                Service_Category:                   doc.data().select_category_now,             
                subcategory:                        doc.data().subcategory,                
                Admin_advert_Time:                  doc.data().admin_time,
                Admin_upload_date:                  doc.data().Admin_upload_date
            }

            this.Adminpostlist.push(Adminpostlist_data);
            })} )
        },
        //   migrate_to_monitor_admin(admin_profile){
        //     this.$router.push({name:'Adminmonitor', params:{Adminmonitor_id: admin_profile.user_ID}});
        //  },
           
        // this.Adminpostlist.push(doc.data())
       async post_item_from_this_admin(){
        
        }
    }
    
}
</script>
