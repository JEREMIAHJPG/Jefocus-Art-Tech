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
        <center v-if="resend_code_statement"> <h1 style="color: blue;">A code has been sent to your email again</h1></center>
        <center v-if="onloaded"> The code will expire in <h1>{{ expiry_time }}</h1></center>
        <center v-if="code_expired"> Code expired please Resend Code and try again</center>
        <center><button v-if="resend_code" class="resend_code" @click="resend_code">Resend Code</button></center>
    </div>
</center>
  </template>
  
  <script>
  import { mapActions, mapMutations } from 'vuex';
    import {storage, db} from "@/firebase"
    import { ref,uploadBytes,uploadBytesResumable,getDownloadURL } from "firebase/storage"

    import { collection, addDoc, setDoc, getDoc, getDocs, query, where, doc } from 'firebase/firestore';
    // import {sendVerificationcodeSMS} from '@/Twilio';
  export default {
    data() {
      return {
        code: Array(6).fill(''), // Adjust the length based on your code length
        joining:[],
        joining_code:'',
        verification_profile_code:'',
        confirm_phonenumber:'',
        doc_reclaim_email_ID:'',
        error_statement: false,
        resend_code: true,
        resend_code_statement:false,
        expiry_time: 180,
        timercount: null,
        onloaded:'',
        code_expired:false,
        error_sending_verification:'',
        

      };
    },
    created(){
      this.on_load();
    },
    methods: {
     async on_load(){
       await getDoc(doc(db, 'verification_profile', this.$route.params.Validationcode)).then(doc => {
        this.verification_profile_code =  doc.data().verification_code;
        this.confirm_phonenumber =        doc.data().confirm_phonenumber;
        this.doc_reclaim_email_ID =       doc.data().doc_reclaim_email_ID;
      });
       
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
        
        if(this.code[4]){
           
            if(this.joining_code=this.verification_profile_code){
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
     async resend_code(){
        // var resend_a_code = await Math.floor(10000 + Math.random() * 90000);

        // await sendVerificationcodeSMS(this.fetched_phonenumber,this.verification_profile_code ).then(()=>{
        //             alert('A verification Code has been sent via SMS to your Phonenumber');
        //             setInterval(()=>{ this.resend_code_statement = true;},3000)
        //     })
        // .catch((error)=>{
        //     setInterval(()=>{ this.error_sending_verification = true;},3000)
        //     alert(error.message);
        // })

        // await deleteDoc(doc(db, 'verification_profile', this.$route.params.Validationcode))
        // await setDoc(doc(db,'verification_code_profile',  this.$route.params.Validationcode), 
        // {verification_code: resend_a_code}, {merge:true});
               
        //send the code to email
        
        //remove code_expired statement and //clear code to empty the boxes
        this.code = '',
        this.code_expired = false;
        this.expiry_time = 180;
        this.onloaded = true;
        //notifying that a code has been sent
        this.resend_code_statement = true ;
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
  