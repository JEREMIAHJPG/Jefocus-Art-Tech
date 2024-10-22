<style scoped>
               .container{border-radius:5px; background-color: #f2f2f2; padding: 20px; margin-right: 20%; margin-left: 20%;}
               .col-25{float: left; width: 25%;margin-top: 6px;}
               .col-75{float: left; width: 75%; margin-top: 6px; margin-left: 11%;}
               .col-75:hover{float: left; width: 75%; margin-top: 6px; box-shadow: 0px 0px 10px green}
               .row:after {content:""; display: table; clear:both;}
               .error3{color:red; position:relative; left:30%;}
               .error1{color:red; position:relative; left:50%;}
               .error{color:red; position:relative; left:0%;}
               .password_page{position: relative;  margin-top:50px}
               input[type=submit]{background-color: #04aa6d; color: white; padding: 12px 20px; border: none; border: none; border-radius: 4px; cursor: pointer;}
               input[type=submit]:hover{background-color: #04aa6d;}
               .form_class{margin-top: 50px; background-color: rgb(240, 240, 240); margin-left:15%; margin-right:15%; border-radius: 15px;}
</style>
<template>
<center class="password_page">
    
     <form @submit.prevent="onchangepassword()" action="/action_page.php" class="form_class">
                  
                  <!-- <div class="row">
                      <div class="col-25">
                      <label for="email">Email</label>
                      </div>
                      <div class="col-75">
                          <input type="text" id="email" v-model.trim="email" name="username" placeholder="your email..."  required>
                      </div>
                      <div class="error1" v-if="errors.email">{{ errors.email }}</div>
                  </div> -->
                 
                  <center >
                  <div class="row">
                      <!-- <div class="col-25">
                      <label for="Change_Password"> Change Password</label>
                      </div> -->
                      <div class="col-75">
                          <input style="margin-top: 2%;" type="password" v-model.trim="New_Password"
                           id="New_Password" name="New_Password" placeholder="New_Password..." ref="newpasswrod" required>
                      </div>
                      
                  </div>

                  <center><div class="error1" v-if="error_New_Password">The New password length must be Six in number  </div></center>
                  
                  <div class="row">
                      <!-- <div class="col-25">
                      <label for="Confirm_Password"> Confirm Password</label>
                      </div> -->
                      <center>
                      <div class="col-75">
                          <input style="margin-top: 2%;" type="password" v-model.trim="Confirm_Password"
                           id="Confirm_Password" name="Confirm_Password" placeholder="Confirm_Password..." ref="confirmpassword" required>
                      </div>
                    </center>
                      <!-- <div class="error1" v-if="errors.password">{{ errors.password }}</div> -->
                  </div>
                 
                  <center><div class="error1" v-if="error_Confirm_Password">Your Confirmd password did not match with your New password  </div></center>
          
                  <!-- <div class="row">
                      
                      <div class="col-75">
                          <input class= "checkbox" style="margin-top: 2%; margin-left: 2%;" type="checkbox" id="checkbox" required>
                      </div>
                      <div class="col-25" style="width: 100%;">
                          <label for="termsandcondions">I Accept Terms and Conditions</label>
                          </div>
                  </div> -->
  
                  <!-- <div class="row">
                      
                      
                      <div class="col-25" style="width: 100%; margin-left: 40%;">
                          <a href="#">Forgot password </a> or <a href="#">Username?</a>
                          </div>
                  </div> -->
  
                  <br>
                  <div class="row">
                    <center>
                      <input type="submit" value="Change Password">
                    </center>
                  </div>
                </center>
              </form>
              </center>
</template>
<script>
 import {LOADING_SPINNER_SHOW_MUTATION, LOGIN_ACTION } from '@/store/storeconstants';

import axios from 'axios';
import { mapActions, mapMutations } from 'vuex';
import {storage, db} from "@/firebase"

import { ref,uploadBytes,uploadBytesResumable,getDownloadURL } from "firebase/storage"

import { collection, addDoc, setDoc, getDoc, getDocs, query, where, doc } from 'firebase/firestore';
export default{
    name:'Changepassword',
    data() {
     return {
        New_Password:'',
        Confirm_Password:'',
        minlength:6,
        email:'',
        error_New_Password:false,
        error_Confirm_Password:false
     }
    },
    methods:{
       async onchangepassword(){

            //if length is less then 6 his error_chane_passwod=ue
            if(this.New_Password < this.minlength){
               this.error_New_Password = false;
               return false
            }else {
                this.$refs.confirmpassword.focus();
                };
            //if New and confirm password are not the same error confirm password = false
            if(this.New_Password=this.Confirm_Password){
                return true
            }else{ this.error_Confirm_Password=true;
                
            }
            //quey pams o doc id o cach email hen create another array for email and new password for the axios events
            if((this.New_Password > this.minlength) && (this.New_Password = this.Confirm_Password)){
                var fetch_email = await getDoc(doc(db, 'getting_user_id',this.$route.params.Changepassword))
        this.email =  fetch_email.data().email;
        // this.doc_email_ID = this.doc_email_ID 
                       }
             var New_Password_array = await {
                    email : this.email,
                    password: this.New_Password,
                    returnSecureToken: true
                    }
        //  await setDoc(doc(db,'getting_user_id',this.$route.params.Changepassword), 
        //             {password: this.New_Password}, {merge:true});
                    
        // await setDoc(doc(db,'current_user_profile',this.$route.params.Changepassword), 
        //             {password: this.New_Password}, {merge:true});
                    //
        await axios.POST('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDt8TxIM_m7OaUlxT2WgDhS13jYFp7VvhE', New_Password_array ).then(()=>{
             updateDoc(doc(db,'getting_user_id',this.$route.params.Changepassword),
                {
                    password :  deleteField(),                                                        
                },)
         updateDoc(doc(db,'current_user_profile',this.$route.params.Changepassword),
                {
                    password :  deleteField(),                                                        
                },)
         setDoc(doc(db,'getting_user_id',this.$route.params.Changepassword), 
                    {password: this.New_Password}, {merge:true});
                    
         setDoc(doc(db,'current_user_profile',this.$route.params.Changepassword), 
                    {password: this.New_Password}, {merge:true});
            //direct to login page for relogin
            this.$router.replace('/LoginPage')
        }).catch((error)=>{
            alert(`${error.statement}`);
        })
       

        }
    }
}
</script>

