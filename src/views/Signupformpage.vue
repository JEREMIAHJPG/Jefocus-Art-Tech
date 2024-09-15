

   
        <style scoped>
            *{box-sizing: border-box;}
            input[type=text], select,textarea{width: 100%;padding: 12px; border:1pxsolid #ccc}
            textarea{width: 100%; padding:12px; border: 1px solid#ccc; border-radius: 4px; resize: vertical;}
            label{padding: 12px 12px 12px; display: inline-block;}
            input[type=submit]{background-color: #04aa6d; color: white; padding: 12px 20px; border: none; border: none; border-radius: 4px; cursor: pointer; float: right;}
            .input[type=submit]:hover{background-color: #04aa6d;}
            .input[type=password]:hover{ box-shadow: 0px 0px 10px  #04aa6d,}
            input[class=checkbox]{width: auto;}
            .container{border-radius:5px; background-color: #f2f2f2; padding: 20px; margin-right: 20%; margin-left: 20%;}
            .col-25{float: left; width: 25%;margin-top: 6px;}
            .col-75{float: left; width: 75%; margin-top: 6px;}
            .col-75:hover{float: left; width: 75%; margin-top: 6px; box-shadow: 0px 0px 10px green}
            .row:after {content:""; display: table; clear:both;}
            .error{color:red; position:relative; left:0%;}
            @media screen and(max-width: 600px){.col-25,.col-75, input[type=submit]{width: 100%; margin-top:0;}}
        </style>
    
    <template>

        <div class=container>
            <div style="margin-left: 45%;">
                <img src="" alt="logo">
            </div>
            <h1 style="text-align: center;"> Sign up </h1>
            <div class="error" v-if="error">{{ error }}</div>
            <form @submit.prevent="onSignup()" action="/action_page.php">
                <div class="row">
                    <div class="col-25">
                        <label for="fname">First Name</label>
                    </div>
                    <div class="col-75">
                        <input type="text" v-model="first_name" id="fname" name="firstname" placeholder="your name..."  required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                    <label for="lname">Last Name</label>
                    </div>
                    <div class="col-75">
                        <input type="text" v-model="last_name" id="lname" name="lastname" placeholder="your last name..."  required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="email">Email</label>
                    </div>
                    <div class="col-75">
                        <input v-model.trim="email" type="email" style="width: 100%; height: 50px;" id="email" name="Email" placeholder="example@gmail.com..."  required>
                    </div>
                    <div><h class="error1"> {{ errors.email }}</h></div>
                </div>
                <div class="row">
                    <div class="col-25">
                    <label for="uname">Username</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="uname" name="username" placeholder="your username..."  required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                    <label for="watsappnumber">Watsapp number</label>
                    </div>               

                    <div class="col-75">
                        <div style="position:relative; margin-top:10px; float:left; border:3px solid transparent;">+234</div>
                        <input style="position:relative; width:150px; height:50px; float:left; color:black;" v-model="phonenumber" type="number" id="watsappnumber" name="watsappnumber" placeholder="phone number"  required>
                    </div>
                </div>
                <div class="row">
                <div class="col-25">
                    <label for="Profession">Profession</label>
                </div>
                    <div class="col-75">
                        <select v-model="profession" id="Profession" name="Profession">
                            <option value=""></option>
                            <option value="Interior Designer">Interior Designer</option>
                            <option value="Art Collector">Art Collector</option>
                            <option value="Building Contractor">Building Contractor</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-25">
                    <label for="createpassword">Create Password</label>
                    </div>
                    <div class="col-75">
                        <input v-model.trim = "password" style="margin-top: 2%;" type="password" id="createpassword" name="createpassword" placeholder="Create password" required>
                    <div><h class="error"> {{ errors.password }}</h></div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-25">
                    <label for="confirmpassword">Confirm Password</label>
                    </div>

                    <div class="col-75">
                        <input style="margin-top: 2%;" type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm password" required>
                    </div>
                </div>
        
                <div class="row">
                    
                    <div class="col-75">
                        <input class= "checkbox" style="margin-top: 2%; margin-left: 2%;" type="checkbox" id="checkbox" required>
                    </div>
                    <div class="col-25" style="width: 100%;">
                        <label for="termsandcondions">I Accept Terms and Conditions</label>
                        </div>
                </div>
                <br>

                <div class="row">
                    <input type="submit" value="Create an Account">
                </div>
            </form>
        </div>
    </template>
     <script>
     import {storage, db} from "@/firebase"
 
 import { ref,uploadBytes,getDownloadURL } from "firebase/storage"
 
 import { doc,collection, addDoc, getDocs,getDoc, query, where, setDoc } from 'firebase/firestore';
     import SignupValidations from '/services/SignupValidations';
     import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
     import{LOADING_SPINNER_SHOW_MUTATION,
          SIGNUP_ACTION,
          GET_USER_TOKEN_GETTER,
           IS_USER_AUTHENTICATE_GETTER} from '../store/storeconstants';
    
 
     export default{
   data(){
      return{
      existed:'',
      email:'',
      password:'',
      phonenumber:'',
      errors:[],
      error:'',
      first_name:'',
      last_name:'',
      profession:'',
      get_ID:'',
      
      
   };
  },
  created(){
     console.log(JSON.stringify(localStorage.getItem(`userData`)));
  },
  methods:{
        
     ...mapActions('auth',{
         signup:SIGNUP_ACTION,
     }),
 
     ...mapMutations({
         showLoading: LOADING_SPINNER_SHOW_MUTATION,
     }),
 
     ...mapGetters('auth',
       {
         getterstoken: GET_USER_TOKEN_GETTER,
         isAuthenticated: IS_USER_AUTHENTICATE_GETTER
       }),
 
      async onSignup(){
          let validations = new SignupValidations(
              this.email,
              this.password,
          );
 
          this.errors = validations.checkValidations();
          if('email' in this.errors || 'password' in this.errors){
              return false;
          }
 
          //make spinner true
          this.showLoading(true);
          //signup registeration
          try{await this.signup({
              email: this.email,
              password: this.password,

             });
          //initiate database
          //------//
          var creating_user_id = await{
             name: this.first_name + '' + this.last_name,
             email: this.email,
             profession: this.profession,
             idToken: '',
             password: this.password,
             phonenumber: "+234" + this.phonenumber
             }
 
              // users collection  reference
                 const colRef_creating_user_id = collection(db,'getting_user_id');
                 //check if email exist already in getting_user_id already
             //     await getDocs(query(collection(db,'admin_current_database'),
             // where('email', '==', this.email))).then(email_exist=>{ 
             // email_exist.forEach ((doc)=>{
             //     this.existed= doc.id;
             //     console.log("Email already exist with ID:", this.existed);
             //     })
             //     });
                 
                //tokenData
                
             // data to send
                 var colRef_creating_user_id_upload_database = await addDoc(colRef_creating_user_id, creating_user_id);
             
               //access auto-generated ID with '.id'
             console.log('Document was created with NAME:',  colRef_creating_user_id_upload_database.name);
             //FETCH THE GETTING_USER_ID DOC ID
             await getDocs(query(collection(db,'getting_user_id'),
                 where('email', '==', this.email))).then(get_id=>{ 
                 get_id.forEach ((doc)=>{
                this.get_ID =  doc.id;
                 console.log("user IDTOKEN found with email:", this.email);
                 })
                 });
                 // console.log(this.getterstoken)
             //GET USER_ID_TOKEN from firebase AUTH
             //  await setDoc(doc(db,'getting_user_id', doc.id),{idToken:this.getterstoken},{merge:true})
             //make spinner false
               this.$router.push('/LoginPage');   
          //------//
             this.showLoading(false);
            }catch(e){
                 this.error = e;
                 this.showLoading(false);
                 return false;
             };
             
 
             
      },
  },
     };
  </script>