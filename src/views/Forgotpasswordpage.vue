<style scoped>
            *{box-sizing: border-box;}
            input[type=text], input[type=number], select,textarea{width: 100%;padding: 12px; border:1pxsolid #ccc}
            textarea{width: 100%; padding:12px; border: 1px solid#ccc; border-radius: 4px; resize: vertical;}
            label{padding: 12px 12px 12px; display: inline-block;}
            input[type=submit]{background-color: #04aa6d; color: white; padding: 12px 20px; border: none; border: none; border-radius: 4px; cursor: pointer; float: right;}
            input[type=submit]:hover{background-color: #04aa6d;}
            .btn_confirmation {background-color: #04aa6d; color: white; padding: 12px 20px; border: none; border: none; border-radius: 4px; cursor: pointer; float: right;}
            .btn_confirmation:hover{background-color: black;}
            .container{margin-top:150px; border-radius:5px; background-color: #f2f2f2; padding: 20px; margin-right: 20%; margin-left: 20%;}
            .col-25{float: left; width: 25%;margin-top: 6px;}
            .col-75{float: left; width: 75%; margin-top: 6px;}
            .col-75:hover{float: left; width: 75%; margin-top: 6px; box-shadow: 0px 0px 10px green}
            .row:after {content:""; display: table; clear:both;}
            @media screen and(max-width: 600px){.col-25,.col-75, input[type=submit]{width: 100%; margin-top:0;}}
            @media screen and (max-width: 320px){ .container{ padding: 0px; margin-right: 0; margin-left: 0;}}
            @media screen and (min-width: 321px) and (max-width: 768px){.container{ background-color: red;}}
        </style>
   
        <template>
        <div class=container>
           
            
               
                <div class="row" v-if="reclaimed_email_confirmation">
                    <div class="col-25">
                        <label for="reclaimed_email">Email</label>
                    </div>
                    <div class="col-75" v-if="unconfirmed_reclaimed_email">
                        <input type="text" id="reclaimed_email" name="reclaimed_email" v-model = "reclaimed_email_unconfirmed" placeholder ='example@gmail.com...' required>
                    </div>

                    <!-- <div class="col-75" v-if="!unconfirmed_reclaimed_email">
                        <input type="text" id="reclaimed_email" name="reclaimed_email" :value = confirmed_reclaimed_email disabled :placeholder = confirmed_reclaimed_email>
                    </div> -->
                    <div>
                   <center v-if="reclaimed_email_error"><h style="color: red; margin-top: 50px;"> This email is not registered in this Website </h></center>
                </div>
                    
                    <div class="row" style="margin-top: 10px;" v-if="reclaimed_email_submit" @click="confirm_reclaimed_email()">
                    <div class="btn_confirmation" style="margin-top:5px;">Confirm Email</div>
                    </div>
                    
                </div>
                <div class="row" v-if="!phonenumber_confirmation">
                    <div class="col-25">
                        <label for="phonenumber">Watsapp number</label>
                    </div>

                    <div class="col-75" v-if="unconfirmed_phonenumber">
                        <input type="number" id="phonenumber" name="phonenumber" v-model = phonenumber_unconfirmed   placeholder ='081........' required>
                    </div>

                    <div class="col-75" v-if="!unconfirmed_phonenumber">
                        <input type="number" id="phonenumber" name="phonenumber" :value = fetched_phonenumber disabled :placeholder = confirmed_phonenumber>
                    </div>
                   
                    <div class="row" style="margin-top: 10px;" v-if="phonenumber_submit" @click="confirm_phonenumber()">
                    <div class="btn_confirmation" style="margin-top:5px;">Confirm Phonenumber</div>
                    </div>

                <div>
                   <center v-if="phonenumber_error"><h style="color: red; margin-top: 50px;"> This number is not registered with the above email in this Website </h></center>
                </div>

                <div>
                   <center v-if="sent_verification_email"> <h1 style="color: blue;">A Verificaion Email has been sent to your email again</h1></center>
                </div>
                <div>
                   <center v-if="sent_verification_code"> <h1 style="color: blue;">A verification Code has been sent via SMS to your Phonenumber</h1></center>
                </div>
                <div>
                   <center v-if="error_sending_verification"> <h1 style="color: red;">Network error please try again</h1></center>
                </div>
                            
                </div>

                <div class="row" v-if="send_code" >
                    <div style="color: blueviolet; font-size:larger;" @click=sending_code()>Send code via sms</div> 
                    <div style="color: blueviolet; font-size:larger;"  @click=sending_verification_email()>Send verificaion email via email</div> 
                </div>
                <!-- <div class="row" style="margin-top: 10px;" >
                    <input type="submit" value="Submit">
                </div> -->
               
                <!-- <div>
                    <h style="color: red; margin-top: 50px;"> A message to recover password has been sent to your reclaimed_email check your reclaimed_email to change password </h>
                </div> -->
                <!-- <div>
                   <center v-if="reclaimed_email_error"><h style="color: red; margin-top: 50px;"> This reclaimed_email is not registered in his Website </h></center>
                </div> -->
                <!-- <div>
                    <h style="margin-left: 40%; color: green; margin-top: 10px;"> Resend message</h>
                </div> -->
                       
        
        </div>
    </template>
    <script>
    import {LOADING_SPINNER_SHOW_MUTATION, LOGIN_ACTION } from '@/store/storeconstants';

import axios from 'axios';
import { mapActions, mapMutations } from 'vuex';
import {storage, db} from "@/firebase"
import { ref,uploadBytes,uploadBytesResumable,getDownloadURL } from "firebase/storage"
import { collection, addDoc, setDoc, getDoc, getDocs, query, where, doc } from 'firebase/firestore';
import { sendPasswordResetEmail } from 'firebase/auth';
import {auth} from '@/firebase';



// import { sendSMS } from '@/AfricasTalkingService';



    export default {
        name: 'Forgotpasswordpage',
        data(){
            return{
               unconfirmed_reclaimed_email: true,
               confirmed_reclaimed_email:'',
               reclaimed_email_unconfirmed:'',
               doc_reclaimed_email_ID:'',
               reclaimed_email_error:false,
               reclaimed_email_submit:true,
               reclaimed_email_confirmation:true,

               unconfirmed_phonenumber:true,
               confirmed_phonenumber:'',
               phonenumber_unconfirmed:'',
               doc_phonenumber_ID:'',
               fetched_phonenumber:'',
               phonenumber_error:false,
               phonenumber_submit:true,
               phonenumber_confirmation:true,

               send_code:false,
               verification_code:'',
               message:'',

                reclaimed_get_token:'',
                doc_verification_code_profile_ID:'',
                
                error_sending_verification:'',
                sent_verification_email:'',
                sent_verification_code:''
            }
        },
       methods: {
        //reclaimed_email confirmation
               
       async confirm_reclaimed_email(){
        await getDocs(query(collection(db, 'getting_token_user_id'),
         where('reclaimed_email', '==' , this.reclaimed_email_unconfirmed))). 
            then(reclaimed_email_snap => {reclaimed_email_snap.forEach((doc)=>{
                this.doc_reclaimed_email_ID = doc.id;
                this.reclaimed_get_token= doc.data().reclaimed_get_token; 
             console.log(doc.id);
                if(!this.doc_reclaimed_email_ID){
                this.reclaimed_email_error = true, 
                this.unconfirmed_reclaimed_email = false
                    }else{ this.confirmed_reclaimed_email = this.reclaimed_email_unconfirmed,
                         this.reclaimed_email_submit=false, 
                         this.reclaimed_email_confirmation = !this.reclaimed_email_confirmation,
                         this.phonenumber_confirmation = false };
                         console.log('user reclaimed_email id gotten:',this.doc_reclaimed_email_ID);
             })});
          
            //07065273228 gafar
                },

        //phonenumber confirmation
        async confirm_phonenumber(){
            //convert to country phonenumber
            var unconfirmed_country_phonenumber = await("+234"+ this.phonenumber_unconfirmed)    
            await getDocs(query(collection(db, 'getting_token_user_id'), where('phonenumber', '==' , unconfirmed_country_phonenumber))). 
            then(phonenumber_snap => phonenumber_snap.forEach((doc)=>{this.doc_phonenumber_ID = doc.id;
                            this.fetched_phonenumber = doc.data().phonenumber;
                console.log('user phonenumber id gotten:'+ this.fetched_phonenumber)
             })); 
             
             

             switch(this.fetched_phonenumber){
             case '': this.phonenumber_error = true, this.unconfirmed_phonenumber = true
             break;
             case unconfirmed_country_phonenumber: 
                         this.phonenumber_submit=false, 
                         this.phonenumber_confirmation = !this.phonenumber_confirmation,
                         
                        this.send_code = true };
        },

       async sending_code(){
        var verification_code = await Math.floor(10000 + Math.random() * 90000);
        this.verification_code = verification_code;
        
        this.message= `Jefocus Art says Your validaion code is ${this.verification_code}`;
        //addDoc with the verification code, this.doc_reclaimed_email_ID and this.confirmed_reclaimed_email
         var verification_code_profile ={
            verification_code:             this.verification_code,
            doc_reclaim_email_ID:        this.doc_reclaimed_email_ID,
            reclaimed_get_token:           this.reclaimed_get_token,
            confirmed_reclaimed_email:     this.confirmed_reclaimed_email,
            confirm_phonenumber:           this.fetched_phonenumber
         }

        await addDoc(collection(db, 'verification_profile' ), verification_code_profile) 
        

        await getDocs(query(collection(db, 'verification_profile'), where(
            'verification_code', '==' , this.verification_code))). 
            then(verification_code_snap => verification_code_snap.forEach((doc)=>{
                this.doc_verification_code_profile_ID = doc.id;
                            
                console.log('user verification id gotten')
             }));
             //
        //      var verification_code_profile_input = await {
        //     doc_verification_code_profile_ID: this.doc_verification_code_profile_ID,
        //     verification_code:             this.verification_code,
        //     doc_reclaim_email_ID:        this.doc_reclaimed_email_ID,
        //     reclaimed_get_token:           this.reclaimed_get_token,
        //     confirmed_reclaimed_email:     this.confirmed_reclaimed_email,
        //     confirm_phonenumber:           this.fetched_phonenumber
        //  }

        //  await addDoc(collection(db, 'verification_code_profile_input' ), verification_code_profile_input)
             //sending code to SMS
             console.log(this.message);
             
const targetUrl = 'http://localhost:3003/send-sms' ;

fetch(targetUrl,{
    method: 'POST',
    headers: {
        'Content-Type': "application/json",
        'apiKey': 'atsk_fd221a40d30b04649873b9094a955a5ffaf688e6f56ec3eecd05dc520b220617e5d4fd8c',
        
    },
    body: JSON.stringify({
    to: this.fetched_phonenumber,
    message: this.message
})
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));



             //involve twillio for sending sms

        //      await sendVerificationcodeSMS(this.fetched_phonenumber,this.verification_code).then(()=>{
        //             alert('A verification Code has been sent via SMS to your Phonenumber');
        //             setInterval(()=>{ this.sent_verification_code = true;},3000)
        //     })
        // .catch((error)=>{
        //     setInterval(()=>{ this.error_sending_verification = true;},3000)
        //     alert(error.message);
        // })

        //send the verification code to 'getting_token_user_id' using setdoc and doc.id
        // await setDoc(doc(db,'verification_profile', doc_verification_code_profile_ID), 
        //         { doc_verification_code_profile_ID: this.doc_verification_code_profile_ID}, {merge:true});
            this.$router.replace({name:'Validationcode', params:{Validationcode:this.doc_verification_code_profile_ID}})
        },

       //function for sending_verification_email()
       async sending_verification_email(){
            //involve firebase auth for sending verification email    
                this.error_sending_verification_email = false;          
                await sendPasswordResetEmail(auth, this.confirmed_reclaimed_email).then(()=>{
                    alert('A verification email has been sent your email');
                    this.sent_verification_email = true;
            })
        .catch((error)=>{
            this.error_sending_verification_email = true;
            alert(error.message);
        })
        this.$router.replace('/LoginPage')     
    },
    
}}
    </script>
    
