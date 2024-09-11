<template>
  
  <div class=container style="margin-top: 95px;">
      <h1 style="text-align: center;"> Contact Us </h1>
      <form action="/action_page.php" @submit.prevent="contact_form()">
          <div class="row">
              <div class="col-25">
                  <label for="fname">First Name</label>
              </div>
              <div class="col-75">
                  <input type="text" :v-model="fname" id="fname" name="firstname" placeholder="your name...">
              </div>
              <center>
                  <h1 style="color: green">{{ response }}</h1>
              </center>
          </div>
          <div class="row">
              <div class="col-25">
              <label for="lname">Last Name</label>
              </div>
              <div class="col-75">
                  <input type="text" :v-model="lname" id="lname" name="lastname" placeholder="your last name...">
              </div>
          </div>
          <div class="row">
              <div class="col-25">
                  <label for="email">Email</label>
              </div>
              <div class="col-75">
                  <input type="text" :v-model="guest_email" id="email" name="Email" placeholder="example@gmail.com..." required>
              </div>
          </div>
          <div class="row">
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
          </div>
  
          <div class="row">
              <div class="col-25">
                      <label for="subject">Subject</label>
              </div>
              <div class="col-75">
                  <textarea id="subject" name="subject" :v-model="subject"  placeholder="Write Something.." style="height:200px"></textarea>
              </div>
          </div>
          <br>
          <div class="row">
              <input type="submit" value="Submit">
          </div>
      </form>
  </div>
</template>

<style scoped>
      *{box-sizing: border-box;}
      input[type=text], select,textarea{width: 100%;padding: 12px; border:1pxsolid #ccc}
      textarea{width: 100%; padding:12px; border: 1px solid#ccc; border-radius: 4px; resize: vertical;}
      label{padding: 12px 12px 12px; display: inline-block;}
      input[type=submit]{background-color: #04aa6d; color: white; padding: 12px 20px; border: none; border: none; border-radius: 4px; cursor: pointer; float: right;}
      input[type=submit]:hover{background-color: #04aa6d;}
      .container{border-radius:5px; background-color: #f2f2f2; padding: 20px; margin-right: 20%; margin-left: 20%; height:fit-content;}
      .col-25{float: left; width: 25%; margin-top: 6px;}
      .col-75{float: left; width: 75%; margin-top: 6px;}
      .col-75:hover{float: left; width: 75%; margin-top: 6px; box-shadow: 0px 0px 10px green}
      .row:after {content:""; display: table; clear:both;}
      @media screen and(max-width: 600px){.col-25,.col-75, input[type=submit]{width: 100%; margin-top:0;}}
      @media screen and (max-width: 320px){ .container{ padding: 0px; margin-right: 0; margin-left: 0;}}
      @media screen and (min-width: 360px) and (max-width: 768px){.container{margin: 0; width: 100%;}}
      @media screen and (width: 400px) and (max-width: 768px){.container{ margin: 0; width: 100%;}}
  </style>
  <script>
  import axios from 'axios';
  import {LOADING_SPINNER_SHOW_MUTATION, LOGIN_ACTION } from '@/store/storeconstants';

import axios from 'axios';
import { mapActions, mapMutations } from 'vuex';
import {storage, db} from "@/firebase"

import { ref,uploadBytes,uploadBytesResumable,getDownloadURL } from "firebase/storage"

import { collection, addDoc, setDoc, getDoc, getDocs, query, where, doc } from 'firebase/firestore';

  export default {
    data() {
        return{
            fname:'',
            lname:'',
            guest_email:'',
            profession:'',
            subject:'',
            response:'',

        };
    },
    methods:{
        //add load spinner
        ...mapMutations({
        showLoading: LOADING_SPINNER_SHOW_MUTATION,
    }),
       async contact_form(){
        this.showLoading(true);
        var contact_form_content = await {
            full_name : this.fname +""+ this.lname,
            guest_email:this.guest_email,
            profession: this.profession,
            message:    this.subject
        };
        //adddoc to firbase firestore database
        const contact_message = collection(db,'Contact Page');
        await addDoc(contact_message, contact_form_content).then(()=>{
                    this.showLoading(false);              
                    setInterval(()=>{alert('Your message has been successfully sent and will reply your within 24hrs please check reply in your email Thankyou');
                    this.response = "Your message has been successfully sent and will reply your within 24hrs please check reply in your email Thankyou"},3000)
                    
                    this.fname ='',
                    this.lname ='',
                    this.guest_email ='',
                    this.profession ='',
                    this.subject ='',
                    this.response =''
            })
        .catch((error)=>{
            this.showLoading(false);
            setInterval(()=>{alert('error occurred please resend');
            this.response = error.response +""+ error.message + "please resend"},3000)
        })

        } 
    },
    mounted(){
        // axios.post('https://jefocusartandtech-default-rtdb.firebaseio.com').then((response)=> {console.log(response)});
    },
  };
  </script>
  
  