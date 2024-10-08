<style scoped>
.verification_code_input{
    border: 5px solid black;
    border-radius: 10px;
    width:50px !important;
    height: 50px;
    display: inline-block;
    margin: 10px;
    
}

.input_code{
    position: relative;
    width:43px !important;
    height: 43px;
    font-size: xx-large;
}
.input_code_start{ 
    position: relative;
    width:43px ;
    height: 43px;
    font-size: xx-large;
    visibility:none
}
.resend_code{background-color: #04aa6d; 
color: white;
 padding: 12px 20px;
  border: none; 
  border: none; 
  border-radius: 4px; 
  cursor: pointer;
    }

.resend_code:hover{
    background-color: black;
}
</style>

<template>
<center >
    <div class="code-input" style=" z-index: 10; height:500px; margin-top:150px; display: inline-block; position:relative">
        
      <input
        v-for="(digit, index) in code"
        :key="index"
        type="text"
        maxlength="1"
        v-model="code[index]"
        @input="onInput(index)"
        @keydown.backspace="onBackspace(index)"
        ref="inputs"
        required
      />

        <center v-if="error_statement"> <h1 style="color: red;">Invalid code please try again</h1></center>
        <center v-if="error_sending_verification"> <h1 style="color: red;">Network error please try again</h1></center>
        <center v-if="resend_code_statement"> <h1 style="color: blue;">A code has been sent to your PhoneNumber</h1></center>
        <center v-if="onloaded"> The code will expire in <h1>{{ expiry_time }}</h1></center>
        <center v-if="code_expired"> Code expired please Resend Code and try again</center>
        <center><button v-if="resend_code" class="resend_code" @click="resend_another_code()">Resend Code</button></center>
    </div>
</center>
  </template>
  
  <script>
  import axios from 'axios';
  import { mapActions, mapMutations } from 'vuex';
    import {storage, db} from "@/firebase"
    import { ref,uploadBytes,uploadBytesResumable,getDownloadURL } from "firebase/storage"

    import { collection, addDoc, setDoc, getDoc,deleteDoc, getDocs, query, where, doc, onSnapshot } from 'firebase/firestore';
   
    //  import { sendSMS } from '@/AfricasTalkingService';

  export default {
    data() {
      return {
       
      phoneNumber: '',
      verificationCode: null,
    
        code: Array(6).fill(''), // Adjust the length based on your code length
        joining:[],
        joining_code:'',
        verification_profile_code:'',
        confirm_phonenumber:'',
        doc_reclaim_email_ID:'',
        reclaimed_get_token:'',
        confirmed_reclaimed_email:'',
        verification_code_profile:[],
        error_statement: false,
        resend_code: true,
        resend_a_code:'',
        resend_code_statement:false,
        message:'',
        expiry_time: 180,
        timercount: null,
        onloaded:'',
        code_expired:false,
        error_sending_verification:'',
        doc_verification_code_profile_ID:'',
        

      };
    },
    mounted(){
      this.load_fast();
      this.timing_action();
    },
    methods: {
     async load_fast(){
    //    await onSnapshot(query(collection(db, 'verification_code_profile_input'),
    //     where('doc_verification_code_profile_ID', '==' , this.$route.params.Validationcode)),
    //     (obtain_data) => {
    //       obtain_data.forEach((doc)=>{
    //       var verification_code_profile_data ={
        // verification_profile_code :  doc.data().verification_code,
        // confirm_phonenumber :        doc.data().confirm_phonenumber,
        // reclaimed_get_token  :       doc.data().reclaimed_get_token,
        // doc_reclaim_email_ID :       doc.data().doc_reclaim_email_ID,
        // confirmed_reclaimed_email :  doc.data().confirmed_reclaimed_email,
        // doc_verification_code_profile_ID : doc.data().doc_verification_code_profile_ID
    //   }
    //     this.verification_code_profile.push(doc.data());
    //     console.log(this.verification_code_profile);  
    //  })})
    
    var input_code = await getDoc(doc(db, `verification_profile`,this.$route.params.Validationcode))
    
        this.verification_profile_code =  input_code.data().verification_code,
        this.confirm_phonenumber =        input_code.data().confirm_phonenumber,
        this.reclaimed_get_token  =       input_code.data().reclaimed_get_token,
        this.doc_reclaim_email_ID =       input_code.data().doc_reclaim_email_ID,
        this.confirmed_reclaimed_email =  input_code.data().confirmed_reclaimed_email,
        this.doc_verification_code_profile_ID = input_code.data().doc_verification_code_profile_ID,
        this.confirm_phonenumber =        input_code.data().confirm_phonenumber,
        this.reclaimed_get_token  =       input_code.data().reclaimed_get_token,
        this.doc_reclaim_email_ID =       input_code.data().doc_reclaim_email_ID,
        this.confirmed_reclaimed_email =  input_code.data().confirmed_reclaimed_email,
        this.doc_verification_code_profile_ID = input_code.data().doc_verification_code_profile_ID
    
            console.log(input_code.data());
      localStorage.setItem(`phone_number`,this.confirm_phonenumber)
  },

     async timing_action(){
     console.log(this.$route.params.Validationcode);
       
        if(this.doc_reclaim_email_ID){
          this.onloaded = true;
          this.timercount = setInterval(()=>{
          if(this.expiry_time > 0){
            this.expiry_time--;       
          }else{
            clearInterval(this.timercount);
            this.code_expired = true
          }
         }, 1000);
         //
          if (this.expiry_time =0){
           await deleteDoc(doc(db, 'verification_profile', this.$route.params.Validationcode))
         }

        //   if(this.expiry_time=0){
        //   clearInterval(this.timercount);
        //  }
        }
               
           },
     async onInput(index) {
        if (this.code[index].length === 1 && index < this.code.length - 1) {
          this.$refs.inputs[index + 1].focus();
          console.log(this.code.length)          
        var joining_code = await (10000*this.code[0] + 1000*this.code[1] + 100*this.code[2] + 10*this.code[3] + 1*this.code[4])
        console.log(joining_code);
        }
        
        if(this.code[4] && this.expiry_time!=0){
           
            if((this.joining_code=this.verification_profile_code)||(this.joining_code = this.resend_a_code)){
               await deleteDoc(doc(db, 'verification_profile', this.$route.params.Validationcode)),
               this.resend_code = false,
                this.$router.replace({name:'Changepassword', params:{Changepassword: this.$route.params.Validationcode}})
                
            }else{this.error_statement = true}
        }
        
        // switch

      },
      onBackspace(index) {
        if (this.code[index] === '' && index > 0) {
          this.$refs.inputs[index - 1].focus();
        }
      },
     async resend_another_code(){

          var resend_a_code = await Math.floor(10000 + Math.random() * 90000);
          //  this.resend_a_code = JSON.stringify(resend_a_code);
      alert(this.confirm_phonenumber);
      this.message =  `Jefocus Art says Your validaion code is ${resend_a_code}`
        const targetUrl = 'http://localhost:3003/send-sms' ;
const options = {
    to: this.confirm_phonenumber,
    message: this.message
};

fetch(targetUrl,{
    method: 'POST',
    headers: {
        'Content-Type': "application/json",
        'apiKey': 'atsk_fd221a40d30b04649873b9094a955a5ffaf688e6f56ec3eecd05dc520b220617e5d4fd8c',
        
    },
    body: JSON.stringify(options)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error) );

      
     
        
        //remove code_expired statement and //clear code to empty the boxes
        this.code =  Array(6).fill(''),
        this.code_expired = false;
        this.expiry_time = 180;
        this.onloaded = true;
        this.resend_code_statement = true;

        this.timercount = await setInterval(()=>{
          if(this.expiry_time > 0){
            this.expiry_time--;       
          }else{
            clearInterval(this.timercount);
            this.code_expired = true
            this.resend_a_code = null;
          }
          if(this.expiry_time <= 170){
          this.resend_code_statement = false;
          
        }
        //   if(this.expiry_time = 0){
            
          
        // }
         }, 1000);

        
        //notifying that a code has been sent
        // setTimeout(()=>{},10000) ;
        }
    },
    beforeDestroy(){
            if (this.timercount){
              clearInterval(this.timercount);
            }
           }
  };
  </script>
  
  <style>
  .code-input input {
   
    width: 2rem;
    height: 2rem;
    text-align: center;
    margin: 0.5rem;
    font-size: 1.5rem;
  }
  .code-input input:focus {
    border: 3px solid green;
  }
  </style>
  