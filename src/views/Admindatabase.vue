
<template>
    <div class="admindatabase">
        <center class="admin_top">Administrators</center>
        <form @submit.prevent="add_admin()" id="admindatabaseclear" >  
           <center> <img class="admin_image" :src= admin_image_url></center>      
           <center class="image_input"> <input type="file" name="admin_profile_image" @change="admin_profile_image()" ref="admin_profile_image" > </center>
            <center><input class="username"  v-model = "username"  type="text" placeholder="Business name or Username"></center>
            <center><input type="text" v-model="admin_email"  class="admin_email" placeholder="Add Email of Jefocus Art and Tech Adminstrator Aspirant" ></center>
            <center>
               <center><h v-if="display_select_category" class="category_style_select_category_database">Select Category</h> 
            <h v-else></h>
        </center>
            <select type="text"  v-model="select_category_now" @click="select_category()" id="select_category_here" name="select_category" placeholder="Select Category" class="category_input_position1_database" required>
                            <option value=""> </option> 
                            <option value="Visual Art Service">Visual Art Services</option>
                            <option value="Graphics Art and Technology">Graphics Art and Technology</option>
                            
            </select>
            </center>
                <center>
                    <div class = "input_div2_database" v-if="Visuals_Art_Services_selected">
                        <center v-if="display_Select_Visuals_Sub_category" id= "Visual_Art_Service" class="category_style_Visual_Art_Service_database" value="Visual Art Service">Select Visuals Sub-category</center>
                        <center v-else></center>
                         <select  @click="visuals_subcategory()" type="text" name="visuals_subcateory" v-model="visuals_subcategory_data" placeholder=" Select Visuals Sub-category" class="category_input_position2_database" required>
                            <option value=""></option>
                           <option value="Portrait painting"> Potrait Paintings</option>
                           <option value="Canvas Painting">Canvas Paintings</option>
                            <option value="Interior Decoration">Interior Decoration</option>
                            <option value="Sculpts and Artifacts"> Sculpts and Artifacts</option>
                                <option value="LED Light and Art Signage"> LED Light and Art Signage</option>
                                    <option value="Mural Painting">Mural Painting</option>
                                        <option value="Award and Plaques">Award and Plaques</option>
                                            <option value="Road Marking">Road Marking</option>
                                            <option value="Others">Others</option>
                        </select>
                    </div>
                </center>
                <center>
                <div class="input_div3_database" v-if="Graphics_Art_and_Technology">
                        <h v-if="display_Select_Graphics_Sub_category" class="category_style_Graphics_Art_and_Technology_database">Select Graphics Sub-category</h>
                        <h v-else></h>
                        <select @click="graphics_subcategory()" type="text" name="graphics_subcategory" v-model="graphics_subcategory_data" placeholder=" Select Graphics Sub-category" class="category_input_position3_database" required>
                            <option value=""></option>      
                            <option value="Website Development">Website Development</option>
                            <option value="Graphic Design/Branding">Graphic Design/Branding</option>
                                <option value="Architectural Design">Architectural Design</option>
                                    <option value="Invitation Cards">Invitation Cards</option>
                                        <option value="Art/Digital Illustrations">Art/Digital Illustrations</option>
                                            <option value="Animation">Animation</option>
                                                <option value="Cloth Prints">Cloth Prints</option>
                                                    <option value="Pillow and Mug Prints">Pillow and Mug Prints</option>
                                                    <option value="Others">Others</option>
                        </select>
                    </div>
                    <div v-else></div>
                </center>

                <center><input type="number" v-model= "account_number"  class="admin_email" placeholder="Add Account Number of Jefocus Art and Tech Adminstrator Aspirant" ></center>
                <center><input type="text" v-model= "bank_name"  class="admin_email" placeholder="Add Bank Name of Jefocus Art and Tech Adminstrator Aspirant" ></center>
                <center><input type="text" v-model= "account_name"  class="admin_email" placeholder="Add Account Name of Jefocus Art and Tech Adminstrator Aspirant" ></center>
                <center><input type="text" v-model= "residential_address"  class="admin_email" placeholder="Add Residential address of Jefocus Art and Tech Adminstrator Aspirant" ></center>
            <center><input type="submit" class="add_admin_submit" ></center>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
import {storage, db} from "@/firebase"

import { ref,uploadBytes,getDownloadURL } from "firebase/storage"

import {  onSnapshot,collection, addDoc, setDoc, getDoc, getDocs, query, where, doc } from 'firebase/firestore';

export default {
    name: 'Admindatabase',
    data(){
        return {
            admin_database_token:'',
            account_name:'',
            account_number:'',
            bank_name:'',
            residential_address:'',
            admin_phonenumber:'',
            adminnew_id:'',
            admin_database_id:'',
            admin_image_url:'',
            display_select_category:true,
            Visuals_Art_Services_selected:false,
            Graphics_Art_and_Technology:false,
            display_Select_Graphics_Sub_category:true,
            display_Select_Visuals_Sub_category:true,
            select_category_now:'',
            visuals_subcategory_data:'',
            graphics_subcategory_data:'',
            username:'',
            admin_email:'' ,
            admin_image:'',
            admin_name:'',
            admin_profession:'',
            admin_database:[],
            user_ID:''   ,

        }
    },
    mounted(){
        // this.upload()
             },

     methods:{
        
       async admin_profile_image(){
            var name = ((Math.random(10000000000))*10000000000).toFixed(0);
         
        var admin_image_array = {
                                    folder_name : 'folder',
                                    first_slash : '/',
                                    first_name  : name,
                                    file_type   : 'jpg'    
                                     }
        
        var admin_image = admin_image_array.folder_name + admin_image_array.first_slash + admin_image_array.first_name + '.' + admin_image_array.file_type ;

        localStorage.setItem(`random_admin_image`, admin_image);
        console.log(admin_image);
         this.admin_image = await admin_image; 

         const admin_image_storageRef = ref(storage, this.admin_image);
        await uploadBytes(admin_image_storageRef, this.$refs.admin_profile_image.files[0]).then((snapshot)=>{console.log("Admin image Uploaded")})

        getDownloadURL(ref(storage, this.admin_image)).then(
        (download_url)=>(this.admin_image_url = download_url) ,
        console.log(this.admin_image_url),
        localStorage.setItem(`admin_image_url`, this.admin_image_url));
        
    },
        
        select_category(){
           // 
          //var get_select_category = document.querySelector(`#select_category_here`).innerHTML;
          
          if (this.select_category_now){ this.display_select_category = false;
            
          } else {return true;}
          
          switch(this.select_category_now){ 
            case 'Visual Art Service' : this.Visuals_Art_Services_selected = true , this.Graphics_Art_and_Technology = false;
            break;
            case 'Graphics Art and Technology' : this.Graphics_Art_and_Technology = true, this.Visuals_Art_Services_selected = false ;
            break;
            default: this.Visuals_Art_Services_selected = false;

                    this.Graphics_Art_and_Technology = false;
                    break;
            }
          
        // let select_category_word = this.select_category;
             console.log(this.select_category_now);
        },
        graphics_subcategory(){
        
        //   this.display_Select_Graphics_Sub_category = !this.display_Select_Graphics_Sub_category
        if (this.graphics_subcategory_data){this.display_Select_Graphics_Sub_category = false;
                
            } else {return true;}
    
        },

        visuals_subcategory(){
    //    this.display_Select_Visuals_Sub_category = !this.display_Select_Visuals_Sub_category
       if (this.visuals_subcategory_data){this.display_Select_Visuals_Sub_category = false;
            
        } else {return true;}
    },

        upload(){
            
            
        // onSnapshot(uploadBytes(admin_image_storageRef, this.$refs.admin_profile_image.files[0])).then((snapshot)=>{console.log("Admin image Uploaded")});
        
        },
       async add_admin(){
        // const admin_database_admin = await getDoc(collection(db,'recieved_getting_user_identity'), where('email', '=', 'this.email'))
        //await getDocs(query(collection(db, 'getting_user_id'),
        // where('email', '==' , this.email))).then (recieved_getting_user_id => {recieved_getting_user_id.forEach((doc)=> {
        //     this.recieved_user_id_id =  doc.id;
        //     this.recieved_user_id_name= doc.data().name;
        //     this.recieved_user_id_email = doc.data().email;
        //     this.recieved_user_id_profession = doc.data().profession;
        
        // })
        //                                  })

        this.admin_database_token = await ((Math.random(10000000000))*10000000000).toFixed(0);
        //store token generated via adding admin 
        localStorage.setItem(`admin_database_token`, this.admin_database_token);
        
        //getting phonenumber
        await onSnapshot(query(collection(db, 'getting_user_id'), where('email', '==', this.admin_email )),
            (checkadvert) =>{checkadvert.forEach((doc) => {this.admin_phonenumber = doc.data().phonenumber

                  
                // if(!doc.data().exists()){
                //     //to redirect me to Adminserviceslist page
                //     this.$router.push('/Adminserviceslist'),
                //     //to remove admin from admin_sellers_database if he has not posted anything new yet
                //     deleteDoc(doc(db, 'admin_sellers_database', this.sellers_id))
                //     }
                    // console.log("items uploaded");
            })  });
        //creating admin 
        await getDocs(query(collection(db,'current_user_profile'),
        where('email', '==', this.admin_email))).then(admin_database_admin=>{ 
                
                admin_database_admin.forEach ((doc)=>{
                this.user_ID    =  doc.data().user_ID;
                this.admin_email = doc.data().email;
                this.admin_name =   doc.data().name;
                this.admin_profession = doc.data().profession;
                
                
                var account_details = {
                account_name:           this.account_name,
                account_number:         this.account_number,
                bank_name:              this.bank_name,
                residential_address:    this.residential_address,
                }

                //fetching phonenumber
                

                var admin_database_collection = {
                user_ID:                this.user_ID,
                username:               this.username,
                admin_email:            this.admin_email,
                admin_phonenumber:      this.admin_phonenumber,
                admin_image:            this.admin_image,
                admin_image_url:        this.admin_image_url,
                admin_name:             this.admin_name,
                admin_profession:       this.admin_profession,
                Service_Category:       this.select_category_now,
                subcategory:            this.visuals_subcategory_data + this.graphics_subcategory_data,
                admin_database_token:   this.admin_database_token,
                account_details:        account_details,
                deduction_amount_late_shipment :'',
                final_net_profit:               '',                
                Admin_Membership_Time:  new Date()
                                              };

                const admin_creation = addDoc(collection(db,'admin_database'), admin_database_collection );
                console.log("Admin Document created with name:", admin_creation.admin_name );
                } )
                })
                console.log(this.user_ID);

                
               await getDocs(query(collection(db,'admin_database'),
                where('admin_database_token', '==', this.admin_database_token))).then(admin_database_admin_id=>{ 
                admin_database_admin_id.forEach ((doc)=>{
                this.admin_database_id =  doc.id;
                this.adminnew_id = "user_ID" + "=" + doc.data().user_ID +"/"+ "administrator" + "=" + doc.id ;

                console.log("Admin newID created with adminnew_id:", this.adminnew_id);
                } )
                });
                //set Doc newID
                await setDoc(doc(db,'admin_database',this.admin_database_id),{adminnew_id:this.adminnew_id},{merge:true})
                localStorage.setItem(`adminnew_id`, this.adminnew_id)

                localStorage.removeItem(`admin_database_token`);
                localStorage.removeItem(`random_admin_image`);
                localStorage.removeItem(`admin_image_url`);
                // include another input box to verify phonenumber before admin can be created
                if(this.user_ID){return true}else{false}
                // this.$refs.admin_profile_image.files[0]='';
                document.getElementById("admindatabaseclear").reset();
               
            this.account_name='',
            this.account_number='',
            this.bank_name='',
            this.residential_address = '',
            this.admin_phonenumber='',
            this.admin_image_url = '',
            this.display_select_category = true,
            this.Visuals_Art_Services_selected = false,
            this.Graphics_Art_and_Technology = false,
            this.display_Select_Graphics_Sub_category = true,
            this.display_Select_Visuals_Sub_category = true,
            this.select_category_now = '',
            this.visuals_subcategory_data = '',
            this.graphics_subcategory_data = '',
            this.username = '',
            this.admin_email = '' ,
            this.admin_image = '',
            this.admin_name = '',
            this.admin_database = []
            }
            //   
}}
</script>

<style scoped>
.admindatabase{
    background-color:rgb(128,128,128, 0.2) ;
    border-radius: 30px;
    height: auto;
    position: relative;
    margin: 10%;
    
    
}
.admin_top{
font-weight: 500;
color: black;

}
.admin_image{
border-radius: 100%;
width: 100px;
height: 100px;
border: 3px solid black;
}
.image_input{
 padding: 10px;
 margin-left: 15%;

}
.username{
    margin-left: 20%;
    margin-right:20%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 0px;
    border-left: 0px;
    border-right: 0px;
    border-top:0px;
    width: 55%;
    height: 30px;
    
}
.admin_email{
    margin-left: 20%;
    margin-right:20%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 0px;
    border-left: 0px;
    border-right: 0px;
    border-top:0px;
    width: 55%;
    height: 30px;
}
.username:hover{
    margin-left: 20%;
    margin-right:20%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 3px solid black;
    border-left: 0px;
    border-right: 0px;
    border-top:0px;
    width: 55%;
    height: 30px;
    
}
.admin_email:hover{
    margin-left: 20%;
    margin-right:20%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 3px solid black;
    border-left: 0px;
    border-right: 0px;
    border-top:0px;
    width: 55%;
    height: 30px;
}
.add_admin_submit{
    color: white;
    background-color: black;
    border-radius: 5px;
    margin: 10px;
}
.input_div2_database{
    position:relative;
    margin-top: 10px;
    top:5px;
    float:left;
    justify-content: center;
    margin-left:0%;
    margin-right:10%;
    width:100%;
    height:70px;
    }
    .input_div3_database {
        position:relative;
    margin-top: 5px;
    top:5px;
    float:left;
    justify-content: center;
    margin-left:0%;
    margin-right:10%;
    width:100%;
    height:70px;
    }
    .category_style_Visual_Art_Service_database{
        left:23%;
        position: absolute;
        margin-top: 15px; 
        color: grey;    
    }

    .category_style_Graphics_Art_and_Technology_database{
        left:23%;
        position: absolute;
        margin-top: 15px; 
        color: grey;
    }

    .category_input_position1_database{
    margin-left: 20%;
    margin-right:20%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 0px;
    border-left: 0px;
    border-right: 0px;
    border-top:0px;
    width: 55%;
    height: 30px;
     }

.category_input_position2_database{
    margin-left: 20%;
    margin-right:20%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 0px;
    border-left: 0px;
    border-right: 0px;
    border-top:0px;
    width: 55%;
    height: 30px;

    
}

.category_style_select_category_database{
            left: 23%;
         position: absolute;
          margin-top: 15px; 
          z-index: 3; 
          color: grey;
    }

    

    .category_input_position3_database{
    margin-left: 20%;
    margin-right:20%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 0px;
    border-left: 0px;
    border-right: 0px;
    border-top:0px;
    width: 55%;
    height: 30px;
}

</style>