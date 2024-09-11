<style scoped>
.monitor_background{
    background-color: rgb(177, 177, 177);
    justify-items: center;
    padding: 3%;
    
    }
    
    .monitor_polaroid{
    background-color: white;
    width:25%;
    display:float;
    height:auto;
    }
    
    .top_text{
        justify-content: center;
        position: relative;
        display: block ;
        width:100%;
        left:35%;
    
    }
    
    .polaroid_template{
        background-color: white;
        padding: 5%;
        min-height: 200px;
        max-width: 100%;
    
    
    }
    
    .image_view{
        min-height: 100px;
        padding-bottom: 10px;
        background-color: rgb(163, 163, 163);
        min-width: fit-content;
    }
    
    .image_view_content{
        height: auto;
        width: auto;
    }
    
    .price_monitor{
        width: 100%;
        border: 3px solid grey;
        height: 15px;
        margin-top: 10px;
    }
    
    .currency_image{
        position:relative;
        float: left;
    
    }
    
    .price_number{
    color:black;
    float: left;
    padding-left: 5px;
    padding-right: 5px;
    padding-left: 2px;
    
    }
    
    .monitor_description{
    display:float;
    float:  left;
    height: 77px;
    max-width:  100px;
    border: 2px solid grey;
    contain: content;
    margin: 15px;
    
    }
    
    .monitor_description_content{
        width: 50px;
        height: auto;
    
    }
    
    .monitor_time{
          
        float: left;
        position: relative;
        height: auto;
        width: 100%;
    
    }
    
    .clock_icon{
        position: relative;
        float: left;
        width: 30%;
    }
    
    .time_monitor{
        margin-left: 10px;
        margin-right: 10px;
    float: left;
    width: auto;
    }
    
    .monitor_buttons{
    position:relative;
    float: left;
    margin-top:1px;
    
    height: 50px
    }
    
    
    .view_button{
        background-color:rgb(249, 149, 67);
    color:black;
    width: 55px;
    height:30px;
    border-radius: 5px;
    margin: 5px; float: left;
    }
    
    .contact_button{
        background-color:green;
    color:white;
    width: 55px;
    height:30px;
    border-radius:5px;
    margin: 5px;
    }
    
    .delete_button{
    background-color: red;
    color:white;
    width:55px;
    height:30px;
    border-radius:5px;
    margin: 5px;
    }
    
    .edit_button{
        background-color: purple;
        color:white;
        width:55px;
    height:30px;
    border-radius:5px;
    margin: 5px;
    }
    
    
    </style>
    <template>
        <div class="monitor_background">
           <h1 class="top_text">Admins Items</h1> 
        <div class="monitor_polaroid">
    
    <div class = "polaroid_template">
        <div class="image_view">
            <img src="" title="image_view_content" class="image_view_content" >
        </div>
        <div class="price_monitor">
            <img class="currency_image" title="N" src=""><div class="price_number">Price</div>
        </div>
        <!-- <div class="monitor_description">
            <h class="monitor_description_content">
            {{ monitor_data.Admin_description }}
            </h>
        </div> -->
        <!-- <div class="monitor_time">
            <img class="clock_icon" title="C" src="">
            <Time class="time_monitor" >{{ monitor_data.Admin_upload_date }}</Time>
            <checking if phone has been accessed -->
            <!-- *#*#4636#*#* -->
        <!-- </div> >-->
        <div class="monitor_buttons">
            <button class="view_button" @click=  "view_button()">View</button>
             <button class="contact_button" @click=  "contact_button()"><img src="" title="watsapp_icon"/></button>
           <!-- <button class="delete_button" @click="delete_button()">Delete</button>
            <button class="edit_button" @click=  "edit_button()">Edit</button> -->
            <!-- check for how to handle query in Firbase console -->
        </div>
    
    </div>
    </div>
    </div>
    </template>

    <script>
   
    
    export default {
        name: 'Adminitems',
        data(){
            return{
                
            };
        }
    }
    </script>
    