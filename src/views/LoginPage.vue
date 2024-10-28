
    
               <style scoped>
               *{box-sizing: border-box;}
               input[type=text], select,textarea{width: 100%;padding: 12px; border:1pxsolid #ccc}
               textarea{width: 100%; padding:12px; border: 1px solid#ccc; border-radius: 4px; resize: vertical;}
               label{padding: 12px 12px 12px; display: inline-block;}
               input[type=submit]{background-color: #04aa6d; color: white; padding: 12px 20px; border: none; border: none; border-radius: 4px; cursor: pointer; float: right;}
               .input[type=submit]:hover{background-color: #04aa6d;}
               .input[type=password]:hover{ box-shadow: 0px 0px 10px  #04aa6d,}
               input[class=checkbox]{width: auto;}
               .container{border-radius:5px; background-color: #f2f2f2; padding: 20px;}
               .col-25{float: left; width: 25%;margin-top: 6px;}
               .col-75{float: left; width: 75%; margin-top: 6px;}
               .col-75:hover{float: left; width: 75%; margin-top: 6px; box-shadow: 0px 0px 10px green}
               .row:after {content:""; display: table; clear:both;}
               .error3{color:red; position:relative;}
               .error1{color:red; position:relative; left:50%;}
               .error{color:red; position:relative; left:0%;}
               @media screen and(max-width: 600px){.col-25,.col-75, input[type=submit]{width: 100%; margin-top:0;}}
               @media screen and (max-width: 320px){ .container{ padding: 0px; margin-right: 0; margin-left: 0;}}
               @media screen and (min-width: 321px) and (max-width: 768px){.container{ margin: 0; padding: 0%; width: 100%; background-color: white;}}
               @media screen and (max-width: 400px){.container{ margin: 0; padding: 0%; width: 100%; background-color: white;}}
           </style>
   
       <template>
        <center>
           <div class=container>
               <center>
                   <img src="" alt="logo">
               </center>
               <h1 style="text-align: center;"> Login {{ firstName }}</h1>
               
               <center class="error3" v-if="error">
                {{ error }}
                </center>
               <form @submit.prevent="onLogin()" action="/action_page.php">
                  
                   <div class="row">
                       <div class="col-25">
                       <label for="email">Email</label>
                       </div>
                       <div class="col-75">
                           <input type="text" id="email" v-model.trim="email" name="username" placeholder="your email..."  required>
                       </div>
                       <div class="error1" v-if="errors.email">{{ errors.email }}</div>
                   </div>
                  
   
                   <div class="row">
                       <div class="col-25">
                       <label for="password">Password</label>
                       </div>
                       <div class="col-75">
                           <input style="margin-top: 2%; float: left;" type="password" v-model.trim="password" id="password" name="password" placeholder="password..." required>
                       </div>
                       <div class="error1" v-if="errors.password">{{ errors.password }}</div>
                   </div>
   
                  
           
                   <!-- <div class="row">
                       
                       <div class="col-75">
                           <input class= "checkbox" style="margin-top: 2%; margin-left: 2%;" type="checkbox" id="checkbox" required>
                       </div>
                       <div class="col-25" style="width: 100%;">
                           <label for="termsandcondions">I Accept Terms and Conditions</label>
                           </div>
                   </div> -->
   
                   <div class="row">
                       
                       <center>
                       <div @click="forgotpassword()"  >
                           <span style="color:blueviolet">Forgot password </span>
                            <!-- or <span>Username?</span> -->
                           </div>
                        </center>
                   </div>
   
                   <br>
                   <div class="row">
                       <input type="submit" value="Login">
                   </div>
               </form>
           </div>
        </center>
       </template>

       
       <script>
import {LOADING_SPINNER_SHOW_MUTATION, LOGIN_ACTION } from '@/store/storeconstants';
import { mapActions, mapMutations } from 'vuex';
       import SignupValidations from '/services/SignupValidations';
       import {db,storage} from  "@/firebase";
    import { ref,uploadBytes,getDownloadURL } from "firebase/storage";
    import { collection,query,where, addDoc,getDocs, onSnapshot, doc,setDoc } from 'firebase/firestore';
    import { analytics } from '@/firebase'
    import { logEvent } from 'firebase/analytics';
import router from '@/router';
       export default{
        
     data(){
        return{
        email:'',
        password:'',
        errors:[],
        error :'',
        admin_image_url:'',
        recieved_user_id_id:'',
        recieved_user_id_name:'',
        recieved_user_id_email:'',
        recieved_user_id_profession:'',
        get_ID:'',
        tokenData:[],
        IDToken:'',
        reclaimed_email:'',
        reclaimed_name:'',
        reclaimed_password:'',
        reclaimed_profession:'',
        reclaimed_get_token:'',
        token_record:[],
        phonenumber:''
     };
    },
    mounted(){
        localStorage.setItem(`coverpage`, false);
        // var cover_page = ;
        this.loadtoken();

    },
    methods:{

    ...mapActions('auth', {
        login: LOGIN_ACTION,
    }),


    ...mapMutations({
        showLoading: LOADING_SPINNER_SHOW_MUTATION,
    }),
    async loadtoken(){
        
        this.tokenData = await JSON.parse(localStorage.getItem(`userData`));

        if(this.tokenData){
        console.log(this.tokenData.token);
        this.IDToken = this.tokenData.token;
       
        
      const get_token_check =  await getDocs(query(collection(db, 'getting_token_user_id'),
            where('reclaimed_email', '==' , localStorage.getItem(`client_email`)))).then(get_id=>{ 
                get_id.forEach ((doc)=>{
                    this.token_record.push(doc.data());
                // this.reclaimed_email = doc.data().email;
                // this.reclaimed_name = doc.data().name;
                // this.reclaimed_password = doc.data().password;
                // this.reclaimed_phonenumber = doc.data().phonenumber;
                // this.reclaimed_profession = doc.data().profession;       
                // this.reclaimed_get_token = doc.data().idToken;
                // console.log("user IDTOKEN found with email:", this.get_token);
            })

                });
                //if token_record is empty let the token recovery begin
                if(this.token_record=[]){
                    await getDocs(query(collection(db, 'getting_user_id'),
            where('email', '==' , localStorage.getItem(`client_email`)))).then(get_id=>{ 
                get_id.forEach ((doc)=>{
                this.get_ID =  doc.id;
                this.reclaimed_email = doc.data().email;
                this.reclaimed_name = doc.data().name;
                this.reclaimed_password = doc.data().password;
                this.phonenumber = doc.data().phonenumber;
                this.reclaimed_profession = doc.data().profession;       
                this.reclaimed_get_token = doc.data().idToken;
                // console.log("user IDTOKEN found with email:", this.get_token);
            })

                });
//creating another document profile

                    var tokenprofile = {
                        user_ID:              this.recieved_user_id_id,
                        get_ID :              this.get_ID ,
                        reclaimed_email:      this.reclaimed_email,
                        reclaimed_name:       this.reclaimed_name,
                        reclaimed_password:   this.reclaimed_password,
                        phonenumber:          this.phonenumber,
                        reclaimed_profession: this.reclaimed_profession,
                        reclaimed_get_token: this.IDToken
                    }

                    const reclaimed_token = collection(db,'getting_token_user_id');

                await addDoc(reclaimed_token, tokenprofile )

                };
        
                //    await setDoc(doc(db,'getting_user_id', this.get_ID ),{idToken:this.idToken},{merge:true})
                
               
                // setDoc(doc(db,'admin_current_database', this.adminspage_database_id), 
                // { admin_current_database_adminnew_id: this.admin_current_database_adminnew_id}, {merge:true});
                // else{
                //     await deleteDoc(doc(db, 'getting_user_id', ))
               };  // }
            },
            
            //route to Forgotpasswordpage
            forgotpassword(){
                this.$router.replace('/Forgotpasswordpage')
            },
       async onLogin(){
        logEvent(analytics, 'login', {
            login: 'login'
                });
                this.$posthog.capture('login_button_clicked', {
                    'user_email': 'query for emails later',
                    'user_phonenumber': 'query for phonenumber later'

                })
            let validations = new SignupValidations(
                this.email,
                this.password,
            );

            this.errors = validations.checkValidations();
            if(this.errors.length){
                return false;
            }

            this.showLoading(true);
           //Login check
           try{await this.login({email: this.email, password: this.password,});           
            // localStorage.setItem(`client_email`,this.email);

            //firebase actions

           
        this.showLoading(false);
        //
         this.$router.push('/Artworkpage');
        // this.$router.push( {name:'Artworkpage', params:{Artworkpage_id: this.recieved_user_id_id}});
        localStorage.setItem(`client_email`,this.email);
        // console.log("add");


                }
           catch(e){this.error = e; this.showLoading(false);
            return false;
           };
            //    var recieved_user_id = [];
            await getDocs(query(collection(db, 'getting_user_id'),
            where('email', '==' , this.email))).then (recieved_getting_user_id => {recieved_getting_user_id.forEach((doc)=> {
            this.recieved_user_id_id =  doc.id;
            this.recieved_user_id_name= doc.data().name;
            this.recieved_user_id_email = doc.data().email;
            this.recieved_user_id_profession = doc.data().profession;
        
        })
                                         });

             await getDocs(query(collection(db, 'admin_database'),
            where('email', '==' , this.email))).then (adminimage => {adminimage.forEach((doc)=> {
            this.admin_image_url =  doc.data().admin_image_url;                    
        })})
                                        //  console.log(recieved_user_id)
                                         
                                        var recieved_getting_user_identity = {

                                        user_ID:   this.recieved_user_id_id,
                                        name:      this.recieved_user_id_name ,
                                        admin_image: this.admin_image_url,
                                        email:     this.recieved_user_id_email,
                                        profession:this.recieved_user_id_profession
                                         
                                       };
                                       console.log(recieved_getting_user_identity);

                                       localStorage.setItem(`user_id`,recieved_getting_user_identity.user_ID);

                                       const user_profile = collection(db,'current_user_profile');

            // data to send

              var recieved_getting_user_identity_database = await addDoc(user_profile, recieved_getting_user_identity);

                                       console.log("Users Document created with name:", this.recieved_user_id_name );
                                          
        },
        
    },
       };
    </script>