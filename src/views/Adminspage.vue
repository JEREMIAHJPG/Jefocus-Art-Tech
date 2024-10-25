
<template>
    <form class="admin_container" id="adminspage" @submit.prevent="onsubmit_category()" action="/action_page.php" >
    <div class="btn_postad_top">
        
         <div class="direct_left"><h2 class= "postad_left" style="margin-top:1px;">Post Ad</h2></div>
         <div class="direct_right"><button class="btn_clear">Clear</button></div>
    </div>
    <div class="input_category_form">
        <div class="input_div1">
            <h v-if="display_select_category" class="category_style_select_category">Select Category</h>
            <h v-else></h>
            <select type="text" v-model="select_category_now" @click="select_category()" id="select_category_here" name="select_category" placeholder="Select Category" class="category_input_position1" required>
                            <option value=""> </option> 
                            <option value="Visual_Art_Service">Visual Art Service</option>
                            <option value="Graphics_Art_and_Technology">Graphics Art and Technology</option>
                            
            </select>
                    </div>
                    <!-- <div :class = "[select_category_now = "Visual Art Service" ? 'input_div2':'input_div2_display_none']" v-if="Visuals_Art_Services_selected"> -->
                    <div class = "input_div2" v-if="Visuals_Art_Services_selected">
                        <sup v-if="display_Select_Visuals_Sub_category" id= "Visual_Art_Service" class="category_style_Visual_Art_Service" value="Visual Art Service">Select Visuals Sub-category</sup>
                        <h v-else></h>
                         <select @click="visuals_subcategory(Visual_Art_Service_category)" type="text" name="visuals_subcateory" v-model="visuals_subcategory_data" placeholder="Select Visuals Sub-category" class="category_input_position2" required>
                            <option v-for="(Visual_Art_Service_category, index) in Visual_Art_Service_category_list " :key="index" :value = Visual_Art_Service_category.service>
                                {{Visual_Art_Service_category.service}}
                            </option>
                          
                            <!-- <option value=""></option>
                           <option value="Portrait_painting"> Potrait Paintings</option>
                           <option value="Canvas_Painting">Canvas Paintings</option>
                           <option value="Picture_prints">Framed/ Canvas Picture prints</option>
                            <option value="Interior_Decoration">Interior Decoration</option>
                            <option value="Sculpts_and_Artifacts"> Sculpts and Artifacts</option>
                                <option value="LED_Light_and_Art_Signage"> LED Light and Art Signage</option>
                                    <option value="Mural_Painting">Mural Painting</option>
                                        <option value="Award_and_Plaques">Award and Plaques</option>
                                            <option value="Road_Marking">Road Marking</option>
                                            <option value="Others">Others</option> -->
                        </select>
                    </div>
                    <div class="input_div3" v-if="Graphics_Art_and_Technology">
                        <sup v-if="display_Select_Graphics_Sub_category" id= "Graphics_Art_and_Technology" class="category_style_Graphics_Art_and_Technology">Select Graphics Sub-category</sup>
                        <h v-else></h>
                        <select @click="graphics_subcategory(Graphics_Art_and_Technology_category)" type="text" name="graphics_subcategory" v-model="graphics_subcategory_data" placeholder=" Select Graphics Sub-category"  class="category_input_position3" required>
                             
                            <option v-for="(Graphics_Art_and_Technology_category, index) in Graphics_Art_and_Technology_category_list" :key="index" :value = Graphics_Art_and_Technology_category.service>
                                {{Graphics_Art_and_Technology_category.service}}

                            </option> 
                            
                            <!-- <option value=""></option>      
                            <option value="Website_Development">Website Development</option>
                            <option value="Graphic_Design/Branding">Graphic Design/Branding</option>
                                <option value="Architectural_Design">Architectural Design</option>
                                    <option value="Invitation_Cards">Invitation Cards</option>
                                        <option value="Art/Digital_Illustrations">Art/Digital Illustrations</option>
                                            <option value="Animation">Animation</option>
                                                <option value="Cloth_Prints">Cloth Prints</option>
                                                    <option value="Pillow_and_Mug Prints">Pillow and Mug Prints</option>
                                                    <option value="Others">Others</option> -->
                        </select>
                    </div>
                    <div v-else></div>
                    
    </div>

    <div class="file_input_category_form">
        
    <span v-if = "image_selection_instruction" class="choosefile_instruction">"First picture - is the title picture." </span>
    <span v-if = "video_selection_instruction" class="choosefile_instruction">"Ensure your video has good quality" </span>
        <img v-if="img_show"  class="select-image"  :src="url1"  >
        <img v-if="img_show" class="select-image"   :src="url2"  >
        <video v-if="video_show" width="250" height="150" controls>
  <source :src = url_video type="video/mp4">
  <source :src = "url_video" type="video/ogg">
  Your browser does not support the video tag.
</video>
        <!-- class="select-image_choose" -->
    <input v-if="img_input_show" name="first_image" type="file"     
       @change = "generate_first_file_name()"
    ref="First_fileinput" required>
    
        
    <input v-if="img_input_show" name="second_image" type="file"          
       @change = "generate_second_file_name()" 
        ref="Second_fileinput" required>

        <div>
    <input v-if="video_input_show" type="file" @change="pick_video_File" ref="Video_fileinput" />
    <progress v-if="uploadProgress" :value="uploadProgress" max="100"></progress>
  </div>

    </div>
    <div class="file_input_category_form">
        <button v-if="upload_video_button" class="select-video-button" @click="upload_on_video_Selected()"> Upload the video you selected </button>
           <button v-if="upload_image_button" class="select-image-button" @click="upload_on_first_FileSelected()"> Upload the First Image you selected </button>
         <button v-if="upload_image_button" class="select-image-button" @click ="upload_on_second_FileSelected()" > Upload the Second Image you selected </button>
          
            
            <span v-if = "image_selection_instruction" class="chooseimage_instruction">Supported formats are *.jpg and *.png</span>
            <span v-if = "video_selection_instruction" class="chooseimage_instruction">Supported formats are *.mp4 and *.ogg</span>
            <span v-if = "upload_errormessage" class="upload_errormessage">Upload Failed due to Network issue try again</span>
        
        </div>

    <div class="admin_description">
                  <textarea maxlength = "777" id="Admin_description" name="Admin_description" v-model="Admin_description" placeholder="Describe the Item uploaded with maximum of 777 words" style="min-width: 100%; height: 100px;" required></textarea>
              </div>
    <div class="Admin_title">
                  <textarea maxlength = "777" id="Title" name="Title" v-model="Admin_title" placeholder="Title" style="min-width: 100%; height: 100px;" required></textarea>
              </div>
              <!-- size -->
    <div class="input_category_form_size_quantity">
    <input type="number"  name="width(Ft)" v-model="width" placeholder="width" class="price" required>
    </div>

    <div class="input_category_form_size_quantity">
    <input type="number"  name="height(Ft)" v-model="height" placeholder="height" class="price" required>
    </div>
    <!-- size -->

    <div class="input_quantity" v-if = quantity_show >
    <input type="number"  name="quantity" v-model="main_quantity" @input="price_input" placeholder="main_quantity" class="price" required>
    </div> 
   
    <div class="input_div_social_media_link">
                    <input type = "text" v-model="youtubelink" class="social_media_link_input_position"  placeholder="YouTube or Any Social Media Link" required>
                </div>
     
    <div class="input_category_form">
    <input type="number"  name="price" v-model="main_price" @input="price_input" placeholder="Price per Item" class="price" required>
    </div>
    
 
   
                    
                    <div class = "policy_checkbox_input_category_form" >
                        <input class = "policy_checkbox" style="margin-top: 2%; margin-left: 2%;" type="checkbox" id="checkbox" required>
                        <label for = "termsandcondions" > I Accept Terms and Conditions </label>
                    </div>
                                      
    <input class="btn_postad" type="submit" value="Post Ad">

    </form>
</template>

<script>
import {LOADING_SPINNER_SHOW_MUTATION, LOGIN_ACTION } from '@/store/storeconstants';

import axios from 'axios';
import { mapActions, mapMutations } from 'vuex';
import {storage, db} from "@/firebase"

import { ref,uploadBytes,uploadBytesResumable,getDownloadURL } from "firebase/storage"

import {  onSnapshot,collection, addDoc, setDoc, getDoc, getDocs, query, where, doc } from 'firebase/firestore';



export default {
  name: 'Adminspage',
  data() {
      return{

        
        Visual_Art_Service_category_list:[],
        Graphics_Art_and_Technology_category_list:[],
        uploadProgress:0,
        Visuals_Art_Services_selected:false,
        Graphics_Art_and_Technology:false,
        display_Select_Graphics_Sub_category:true,
        display_Select_Visuals_Sub_category:true,
        display_select_category:true,
        select_category_now:'',
        main_price:'',
        main_quantity:'',
        width:'',
        height:'',
        Size:'',
        youtubelink:'',
        Admin_description:'',
        Admin_title:'',
        First_selectedFile: null,
        Second_selectedFile: null,
        visuals_subcategory_data:'',
        graphics_subcategory_data:'',
        Admin_token:'',
        show_first_image:true,
        show_second_image:true,
        show_first_placeholder_image:false,
        show_second_placeholder_image:false,
        image_selection_instruction:false,
        video_selection_instruction:false,
        upload_errormessage : false,
        img_show:false,
        video_show:false,
        img_input_show:false,
        video_input_show:false,
        quantity_show:'',
        upload_image_button:false,
        upload_video_button:false,
        find_admin_seller:'',
        url1:'', 
        url2:'',
        url_video:'',     
        path1: '',
        path2: '',
        path3: '',
        user_ID:'',
        admin_image_url:'',
        adminspage_database_id:'',
        admin_current_database_adminnew_id:''
        }
      
      },
          
      created(){
        this.on_load_categories();
      },
  
  mounted(){
   
// this.create_path();
// for(var path in pathimage){getDownloadURL(ref(storage, path)).then(
//     (download_url)=>(this.url = download_url ),
// this.show_first_image = localStorage.getItem(`show_image_button`)
// this.show_second_image = localStorage.getItem(`show_image_button`)
 //this.show_first_placeholder_image = localStorage.getItem(`show_placeholder_image`);
 //this.show_second_placeholder_image = localStorage.getItem(`show_placeholder_image`);

//  getDownloadURL(ref(storage, this.path1)).then(
//         (download_url)=>(this.url1 = download_url),
//         console.log(this.url1),
//         localStorage.setItem(`url1`, this.url1)    
// );    

// getDownloadURL(ref(storage, this.path2)).then(
//         (download_url)=>(this.url2 = download_url) ,
//         console.log(this.url2),
//         localStorage.setItem(`url2`, this.url2)   
// );
// also learn the delete storage method
 



},
  

  computed:{

  },

 methods:{
    // create_path(){
    //     var pathimage ={};
    //     for(var index in this.paths){
    //         pathimage.push(index)
    //     }
    // },

    ...mapMutations({
        showLoading: LOADING_SPINNER_SHOW_MUTATION,
    }),

    on_load_categories(){
        onSnapshot(query(collection(db, 'Category_data'), where('category', '==' ,"Visual Art Service")),
            (services) =>{services.forEach((doc) => {
              this.Visual_Art_Service_category_list.push(doc.data())
            
            })  });
        onSnapshot(query(collection(db, 'Category_data'), where('category', '==' ,"Graphics Art and Technology")),
            (services) =>{services.forEach((doc) => {
              this.Graphics_Art_and_Technology_category_list.push(doc.data())
            
            })  });
            console.log(this.Graphics_Art_and_Technology_category_list)

    },
    
    async generate_first_file_name(){
       
        var name1 = ((Math.random(10000000000))*10000000000).toFixed(0);
         
        var first_file_name_array = {
                                    folder_name : 'folder',
                                    first_slash : '/',
                                    first_name  : name1,
                                    file_type   : 'jpg'    
                                     }
        
        var first_file_name = first_file_name_array.folder_name + first_file_name_array.first_slash + first_file_name_array.first_name + '.' + first_file_name_array.file_type ;
        localStorage.setItem(`random_first_file_name`, first_file_name);
        console.log(first_file_name);
        this.path1 =  await first_file_name;
        
        
       ;

        // localStorage.setItem(`random_admin_image`, admin_image);
        // console.log(admin_image);
        //  this.admin_image = await admin_image; 

        //  const admin_image_storageRef = ref(storage, this.admin_image);
        // await uploadBytes(admin_image_storageRef, this.$refs.admin_profile_image.files[0]).then((snapshot)=>{console.log("Admin image Uploaded")})

        // getDownloadURL(ref(storage, this.admin_image)).then(
        // (download_url)=>(this.admin_image_url = download_url) ,
        // console.log(this.admin_image_url),
        // localStorage.setItem(`admin_image_url`, this.admin_image_url));
        
         
          

            // this.show_first_image = false;     
        
    },

   async generate_second_file_name(){
    
        var name2 = ((Math.random(10000000000))*10000000000).toFixed(0);

        var second_file_name_array = {
                                    folder_name : 'folder',
                                    first_slash : '/',
                                    second_name  : name2,
                                    file_type   : 'jpg'    
                                      }
        
        var second_file_name = second_file_name_array.folder_name + second_file_name_array.first_slash + second_file_name_array.second_name + '.' + second_file_name_array.file_type ;  
        this.path2 = await second_file_name;
        // localStorage.setItem(`random_second_file_name`, second_file_name);
        // console.log(second_file_name);

        
    },

    async pick_video_File(){
        var name3 = ((Math.random(10000000000))*10000000000).toFixed(0);

var third_file_name_array = {
                            folder_name : 'folder',
                            first_slash : '/',
                            third_name  : name3,
                            file_type   : 'video'    
                              }

var third_file_name = third_file_name_array.folder_name + third_file_name_array.first_slash + third_file_name_array.third_name + '.' + third_file_name_array.file_type ;  
this.path3 = await third_file_name;
await uploadBytes(ref(storage, this.path3), this.$refs.Video_fileinput.files[0])
      //.then((snapshot)=>{
    //     this.uploadProgress = (snapshot.bytesTransferred/ snapshot.totalBytes)*100;},
    //    (error) =>{
    //     console.error("Upload failed:", error);
    //     this.upload_errormessage=true;
     //  });
     getDownloadURL(ref(storage, this.path3)).then((download_url)=>(this.url_video = download_url),
     console.log(this.url_video),
localStorage.setItem(`url3`, JSON.stringify(this.url_video))
)

},

uploadFile(event) {
      

    },
   // switch_first_show(){
        // this.show_first_image = false;     
        // this.show_first_placeholder_image = true;
   // },

   // switch_second_show(){
        // this.show_second_image = false;   
        // this.show_second_placeholder_image=true
   // },

    //async upload_on_first_FileSelected() {
        // this.path1 = localStorage.getItem(`random_first_file_name`);

//         const storageRef = ref(storage, this.path1);

//         await uploadBytes(storageRef, this.$refs.First_fileinput.files[0]).then((snapshot)=>{console.log("uploaded first")}); 
        
//         getDownloadURL(ref(storage, this.path1)).then(
//         (download_url)=>(this.url1 = download_url),
//         console.log(this.url1),
//         localStorage.setItem(`url1`, this.url1)    
// );
  //  },
    
   // async upload_on_second_FileSelected() {
        
        // this.path2 = localStorage.getItem(`random_second_file_name`); 
        
//         const storageRef = ref(storage, this.path2);

//        await uploadBytes(storageRef, this.$refs.Second_fileinput.files[0]).then((snapshot)=>{console.log("uploaded second")}); 
        
//         getDownloadURL(ref(storage, this.path2)).then(
//         (download_url)=>(this.url2 = download_url) ,
//         console.log(this.url2),
//         localStorage.setItem(`url2`, this.url2)   
// );
   // },

   async upload_on_first_FileSelected(){

    const storageRef = ref(storage, this.path1);
this.first_file_input_change = this.$refs.First_fileinput.files[0];
await uploadBytes(storageRef, this.first_file_input_change).then((snapshot)=>{console.log("uploaded first")}); 

getDownloadURL(ref(storage, this.path1)).then(
(download_url)=>(this.url1 = download_url),
console.log(this.url1),
localStorage.setItem(`url1`, this.url1)
)
   },

   async upload_on_second_FileSelected(){
    const storageRef = ref(storage, this.path2); 
         
        await uploadBytes(storageRef, this.$refs.Second_fileinput.files[0]).
        then((snapshot)=>{console.log("uploaded second")});   
    //    this.show_second_image = false;   
        getDownloadURL(ref(storage, this.path2)).then(
        (download_url)=>(this.url2 = download_url) ,
        console.log(this.url2),
        localStorage.setItem(`url2`, this.url2)   
);
   },

   async upload_on_video_Selected(){
    //   Video_storage_Reference = ;
      await uploadBytes(ref(storage, this.path3), this.$refs.Video_fileinput.files[0])
      //.then((snapshot)=>{
    //     this.uploadProgress = (snapshot.bytesTransferred/ snapshot.totalBytes)*100;},
    //    (error) =>{
    //     console.error("Upload failed:", error);
    //     this.upload_errormessage=true;
     //  });
     getDownloadURL(ref(storage, this.path3)).then((download_url)=>(this.url_video = download_url),
     console.log(this.url_video),
localStorage.setItem(`url3`, JSON.stringify(this.url_video))
)
      
    //  if (uploadTasknetwork.status===404){
    //      this.upload_errormessage=true;
    // }

},
//+2348125476065
   async visuals_subcategory(Visual_Art_Service_category){
     //this.visuals_subcategory_data = Visual_Art_Service_category.service;
    //    this.display_Select_Visuals_Sub_category = !this.display_Select_Visuals_Sub_category
       if (this.visuals_subcategory_data){ this.display_Select_Visuals_Sub_category = false;
            
        } else {return true;}

        switch(this.visuals_subcategory_data){ 
            case 'Interior Decoration' : 
        this.img_show=false,
        this.video_show = true,
        this.img_input_show = false,
        this.video_input_show = true,
        this.image_selection_instruction=false,
        this.video_selection_instruction=true,
        this.upload_image_button=false,
        this.upload_video_button = true
            break;
            
            case 'Picture prints':
                this.quantity_show = true,
                this.Size = true
                break;
            case 'Framed/ Canvas Picture prints':
                this.quantity_show = true,
                this.Size = true
                break;
            case 'Canvas Paintings':
                this.quantity_show = true,
                this.Size = true
                break;
            case 'Award and Plaques':
                this.quantity_show = true
                this.img_show=true,
                this.video_show = false,
                this.img_input_show = true,
                this.video_input_show = false,
                this.upload_image_button= true,
                this.upload_video_button = false,
                this.quantity_show = false,
                this.Size = false
                break;
            case 'Sculpts and Artifacts':
                this.quantity_show = true
                break;
            default:
        this.img_show=true,
        this.video_show = false,
        this.img_input_show = true,
        this.video_input_show = false,
        this.upload_image_button= true,
        this.upload_video_button = false,
        this.quantity_show = false,
        this.Size = false
                    break;
            }
    },


    graphics_subcategory(){
        
    //   this.display_Select_Graphics_Sub_category = !this.display_Select_Graphics_Sub_category
    if (this.graphics_subcategory_data){this.display_Select_Graphics_Sub_category = false;
            
        } else {return true;}

        switch(this.graphics_subcategory_data){ 
            case 'Architectural Design' : 
            this.img_show=false,
        this.video_show = true,
        this.img_input_show = false,
        this.video_input_show = true,
        this.image_selection_instruction = false,
        this.video_selection_instruction = true,
        this.upload_image_button=false,
        this.upload_video_button = true
            break;
            case 'Animation' :         
            this.img_show=false,
        this.video_show = true,
        this.img_input_show = false,
        this.video_input_show = true,
        this.image_selection_instruction = false,
        this.video_selection_instruction = true,
        this.upload_image_button=false,
        this.upload_video_button = true
            break;
            
            default:
        this.img_show=true,
        this.video_show = false,
        this.img_input_show = true,
        this.video_input_show = false,
        this.image_selection_instruction=false,
        this.video_selection_instruction=false,
        this.upload_image_button= true,
        this.upload_video_button = false
                    break;
            }
        
    },

    select_category(){
            
          //var get_select_category = document.querySelector(`#select_category_here`).innerHTML;
             
          if (this.select_category_now){ this.display_select_category = false;
            
        } else {return true;}
          
          switch(this.select_category_now){ 
            case 'Visual_Art_Service' : this.Visuals_Art_Services_selected = true , this.Graphics_Art_and_Technology = false;
            break;
            case 'Graphics_Art_and_Technology' : this.Graphics_Art_and_Technology = true, this.Visuals_Art_Services_selected = false ;
            break;
            default: this.Visuals_Art_Services_selected = false;

                    this.Graphics_Art_and_Technology = false;
                    break;
            } 
            
          
        // let select_category_word = this.select_category;
             console.log(this.select_category_now);
        //   let thisvalue = document.getElementsByClassName(`.category_style_Visual_Art_Service`).innerHTML;
        //   if(this.this.select_category_now = )
        // if(select_category=SelectCategory)
        // var thisvalue = document.getElementsByClassName(`category_style_select_category`).innerHTML;
        // console.log(thisvalue);
    },

    // on_first_FileSelected(event){
    //     this.First_selectedFile = event.target.files[0];
    //     // console.log(this.First_selectedFile);
    // },

    // on_second_FileSelected(event){
    //     this.Second_selectedFile = event.target.files[0];
    //     // console.log(this.Second_selectedFile);
    // },
    // price_input(){
    //             this.main_price
    //             },
    
    async onsubmit_category(){
        this.showLoading(true);
        if ((this.visuals_subcategory_data= 'Picture_prints')|| (this.visuals_subcategory='Award_and_Plaques_data') ||(this.visuals_subcategory_data='Canvas Painting') ){
            this.display_art =true;  
            } else {this.display_art =false } ;
     //try{   
        var Admin_item_token = ((Math.random(777777777,999999999))*10000000000).toFixed(0);
        //storing of Admin_token
        localStorage.setItem(`admin_token`, Admin_item_token);
        //this.generate_first_file_name;
        //this.generate_second_file_name;

        await getDocs(query(collection(db, 'admin_database'),where(
            'admin_email', '==' , localStorage.getItem(`client_email`)))).then(addition_to_admindatabase => addition_to_admindatabase.forEach((doc)=> {
            this.user_ID =          doc.data().user_ID;
            this.adminnew_id =      doc.data().adminnew_id;
            this.admin_image_url =  doc.data().admin_image_url;
            this.admin_name =       doc.data().admin_name;
            this.admin_profession = doc.data().admin_profession;
            this.subcategory      = doc.data().subcategory;
            
        }))
    //}catch(err){this.showLoading(false);  (error) =>{
      //  console.error("Upload failed:", error);
        
      // } };
        console.log(this.user_ID);
        // await getDocs(query(collection(db, 'admin_database'),
        // where('email', '==' , localStorage.getItem(`client_email`))))
            let currentTime = new Date()
            var hoursT = currentTime.getHours();
            var minsT  = currentTime.getMinutes();
            var secT    = currentTime.getSeconds();
             var time = hoursT + ":" + minsT + ":" + secT ;


            var admin_upload_database =

            {      
                user_ID:                this.user_ID, 
                admin_email:            localStorage.getItem(`client_email`),
                category:               this.select_category_now,
                visuals_subcategory:    this.visuals_subcategory_data,
                display_art:            this.display_art,                       
                graphics_subcategory:   this.graphics_subcategory_data,
                Admin_description:      this.Admin_description,
                Title:                  this.Admin_title,
                Size:                   `${this.width}Ft by ${this.height} Ft`,
                main_quantity:          this.main_quantity,
                width:                  this.width,
                height:                 this.height,
                addtocart:              false,
                isfav:                  false,
                admin_image_url:        this.admin_image_url,
                adminnew_id:            this.adminnew_id,
                admin_name:             this.admin_name,
                admin_profession:       this.admin_profession,
                subcategory:            this.subcategory,
                First_image_selected:   this.url1,
                Second_image_selected:  this.url2,
                video_selected:         this.url_video,
                price:                  this.main_price,
                qty_per_mainprice:       1,
                total_amount:           this.main_price*1,
                youtubelink:            this.youtubelink,
                Admin_item_token:       Admin_item_token,
                Admin_upload_date:      new Date(),
                admin_time:             time
                
            };

             console.log(admin_upload_database);
             console.log(admin_upload_database.admin_time);
            //  localStorage.setItem(`admin_upload_database`, JSON.stringify(admin_upload_database));
             
        // const fd1 = new FormData();
        // fd1.append ('First_image', this.First_selectedFile, this.First_selectedFile.name)
        // const fd2 = new FormData();
        // fd2.append ('Second_image', this.Second_selectedFile, this.Second_selectedFile.name);
        // console.log(fd2);
        // axios.post('',fd1,fd2); 
            const col_ref_admin_sellers_database = collection(db, 'admin_sellers_database');
            const colRef = collection(db,'admin_current_database');
            // data to send
            await getDocs(query(collection(db, 'admin_sellers_database'), where('user_ID', '==' , this.user_ID))). 
            then(sellers_snap => sellers_snap.forEach((doc)=>{this.find_admin_seller = doc.data().user_ID; 
                console.log(this.find_admin_seller)}));

            switch(this.find_admin_seller){ 
            case '' : await addDoc(col_ref_admin_sellers_database, admin_upload_database ), 
             await addDoc(collection(db,'admin_current_database'), admin_upload_database );
             
            break;
            default: await addDoc(colRef, admin_upload_database ); 

            await getDocs(query(collection(db,'admin_current_database'),
            where('Admin_item_token', '==', Admin_item_token))).then(adminspage_admin_id=>{ 
            adminspage_admin_id.forEach ((doc)=>{
                this.adminspage_database_id = doc.id;
                this.admin_current_database_adminnew_id = doc.data().adminnew_id +"/"+ "checkadvert" + "=" + doc.id ;
                console.log("successfull upload");
                })

                

                });
                
                 // set Doc newID
                 setDoc(doc(db,'admin_current_database', this.adminspage_database_id), 
                { admin_current_database_adminnew_id: this.admin_current_database_adminnew_id}, {merge:true});
                console.log("first admin_current_database_adminnew_id field added ");
                 setDoc(doc(db,'admin_current_database', this.adminspage_database_id), 
                {product_id: this.adminspage_database_id}, {merge:true})
                localStorage.setItem(`admin_current_database_adminnew_id`, this.admin_current_database_adminnew_id)
                console.log("second admin_current_database_adminnew_id field added ");
                 console.log("Admin newID created with admin_current_database_adminnew_id:", this.admin_current_database_adminnew_id);
              
               
            }
            //creating newID
            

            // if(addition_to_adminlist.exists()){
            //     var admin_upload_current_database = await addDoc(colRef, admin_upload_database);
            //   //access auto-generated ID with '.id'
            //  await console.log('Document was created with admin_current_database ID:', admin_upload_current_database.id );
            // ;} else{
            //     var admin_upload_sellers_database = await addDoc(col_ref_admin_sellers_database, admin_upload_database);
            //     await console.log('Document was created in admin_sellers_database with ID:', admin_upload_sellers_database.id);
            // }
              
            
        document.getElementById("adminspage").reset();
        // this.$refs.First_fileinput.files[0] ='';
        // this.$refs.Second_fileinput.files[0] ='';
        
        // this.$refs.First_fileinput.files[0]=''
        // this.$refs.Second_fileinput.files[0]=''
        // this.$refs.Video_fileinput.files[0]=''
        // this.Visuals_Art_Services_selected=false,
        // this.Graphics_Art_and_Technology=false,
        // this.display_Select_Graphics_Sub_category=true,
        // this.display_Select_Visuals_Sub_category=true,
        // this.display_select_category=true,
        // this.select_category_now='',
        // this.main_price='',
        // this.main_quantity='',
        // this.youtubelink='',
        // this.Admin_description='',
        // this.Size='',
        // this.Title='',       
        // this.visuals_subcategory_data='',
        // this.graphics_subcategory_data='',       
        // this.Admin_item_token='',
        // this.show_first_image=true,
        // this.show_second_image=true,
        // this.show_first_placeholder_image=false,
        // this.show_second_placeholder_image=false,
        // this.url1='', 
        // this.url2='',
        // this.url_video='',     
        // this.path1= '',
        // this.path2= '',
        this.showLoading(false);
    }
                       
 }      
};

</script>
<style scoped>
.b-create-ad-card-header__button{
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    color: #464b4f;
    font-size: 13px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 55px;
}

.btn_postad_top{ 
color:black;
width:100%;
height:30px;
border-radius:5px;
}

.btn_postad{        
background-color:black;
color:white;
width:100%;
height:30px;
border-radius:5px;
margin-top:10px;
}

.direct_left
{
float:left;
width:40%;
height:auto;
display:float;
position: relative;
}

.direct_right
{
float:left;
width:10%;
height:auto;
display:float;
position: relative;
left:40%;

}

.postad_left {
    position:relative;
    margin-top:10px;
    left:40%;
}

.btn_clear{
background-color:black;
color:white;
width:50px;
height:30px;
border-radius:5px;
}

.category_input_position1{
    position:relative;
    margin-top: 10px;
    float:left;
    margin-left:0%;
    margin-right:20%;
    width:100%;
    height:50px;
}
.category_input_position2{
    float:left;
    margin-top: 10px;
    margin-left:0%;
    margin-right:20%;
    width:100%;
    height:50px;
}
.category_input_position3{
    float:left;
    margin-top: 10px;
    margin-left:0%;
    margin-right:20%;
    width:100%;
    height:50px;
}

.social_media_link_input_position{
    float:left;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left:7%;
    margin-right:0%;
    width:70%;
    height:50px;
}

.price{  
    float:left;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left:10%;
    margin-right:10%;
    width:100%;
    height:10px;

}

.input_category_form {
float:left;
width:70%;
left:-10%;
position: relative;
margin-left:20%;
margin-right:20%;
}
.input_category_form_size_quantity {
float:left;
width:10%;
left:30%;
position: relative;
margin-left:3%;
margin-right:3%;
}

.input_quantity {
float:left;
width:70%;
left:-10%;
position: relative;
margin-left:20%;
margin-right:20%;
}


.policy_checkbox_input_category_form{
float:left;
width:70%;
left:0;
position: relative;
margin-left:20%;
margin-right:20%;
}

.file_input_category_form {
float:left;
width:100%;
margin-top:0%;
margin-left:0%;
position: relative;
padding-top:10px;
padding-left:20%;
padding-right:20%;

}



.select-image{
    position:relative;
    border: 3px solid grey;
    border-radius: 10px;
    background-color: white;
    width: 100px;
    height: 100px;
    float:left;
    margin: 10px;
}

.select-image_choose{
    position:relative;
    border: 3px solid grey;
    border-radius: 10px;
    background-color: white;
    padding:5px;
    width: 95px; 
    height: 20px;
    float:left;
    margin: 10px;
}

.select-image-button{ 
    position:relative;
    border: 3px solid grey;
    border-radius: 10px;
    background-color: white;
    width: 100px; 
    height: 100px;
    float: left;
    margin: 10px;
}

.select-video-button{
    position: relative;
    border: 3px solid grey;
    border-radius: 10px;
    background-color: white;
    width: 100px; 
    height: 50px;
    float: left;
    margin: 10px;
}

.choosefile_instruction{
    width: 100%;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    color: grey;
}

.chooseimage_instruction{
    width: 100%;
    display: float;
    float: left;
    margin-top:10px;
    margin-bottom:10px;
    color: grey;
}

.upload_errormessage{
    width: 100%;
    display: float;
    float: left;
    margin-top:10px;
    margin-bottom:10px;
    color: red;
}

.b-add-image-section__static-hints, .h-mt-5{
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    pointer-events: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #6c8ea0;
    font-size: 14px;
    line-height: 20px;
    margin-top: 5px;}

    .input_div1 {
        position:relative;
    margin-top: 10px;
    top:5px;
    float:left;
    justify-content: center;
    margin-left:10%;
    margin-right:10%;
    width:100%;
    height:70px;
    }
    .input_div2 {
        position:relative;
    margin-top: 10px;
    top:5px;
    float:left;
    justify-content: center;
    margin-left:10%;
    margin-right:10%;
    width:100%;
    height:70px;
    }
    
    .input_div2_display_none {
        display:none;
        position:relative;
    margin-top: 10px;
    top:5px;
    float:left;
    justify-content: center;
    margin-left:10%;
    margin-right:10%;
    width:100%;
    height:70px;
    }

    .input_div3 {
        position:relative;
    margin-top: 10px;
    top:5px;
    float:left;
    justify-content: center;
    margin-left:10%;
    margin-right:10%;
    width:100%;
    height:70px;
    }

    .admin_description{
        position:relative;
    margin-top: 10px;
    top:5px;
    float:left;
    justify-content: center;
    margin-left:17%;
    margin-right:15%;
    width:70%;
    height:100%;
    }

    .Admin_title{
        position:relative;
    margin-top: 10px;
    top:5px;
    float:left;
    justify-content: center;
    margin-left:17%;
    margin-right:15%;
    width:70%;
    height:100%;
    }

    .input_div_social_media_link {
        position:relative;
    margin-top: 10px;
    top:5px;
    float:left;
    justify-content: center;
    margin-left:10%;
    margin-right:10%;
    width:100%;
    height:70px;
    }


    .category_style{
        position: absolute; margin-top: 15px; color: grey;

    }
    

    .category_style_Visual_Art_Service{
        position: absolute; margin-top: 15px; color: grey;
    }

    .category_style_Graphics_Art_and_Technology{
        position: absolute; margin-top: 15px; color: grey;
    }
    
    .category_style_select_category{
        position: absolute; margin-top: 15px; z-index: 3; color: grey;
    }
    .supported_picture_format{
        position:relative; display:float; float:left; justify-content: center; left: 32%; color: grey;
    }
    .admin_container{border-radius:5px; background-color: #f2f2f2; padding: 20px; margin-right: 20%; margin-bottom: 100px; margin-left: 20%;}
</style>