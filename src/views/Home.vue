
<style scoped>
.btn-position {position:relative; top: -30%; left: 0%;}
.blackcover{
            background-color: black; opacity:0.5; height: 500px; width: 100%;
            animation-name: blackopacity;  animation-direction: alternate;
             animation-duration:21s; animation-direction:normal; animation-timing-function:ease-in-out;
           }
.quote{z-index:1; width:600px; position: relative; left: 25%;}
.textclass{position: relative; max-height:40px; color: white; font-weight: bolder; font-size: xx-large;}
.registerbutton{position:relative; top: -30%; left: 40%}
.btn-register{
            background-color: burlywood;
            color: white;
            width: auto;
            height: 50px;
            float: left;
            border-radius: 5%;
            box-shadow: 10px #cfc;
            font-size: xx-large;
           }
</style>
<template>
    <div style="position: relative; top:50px; z-index: 2;" @load="coverpageremove()"  >
     <div style="height:500px; width:100% ; position:relative;  background-color: black; z-index:1;">
            
            <div style="height:500px; width:100%; position:relative; display: block;  background-image:url(/assets/JefocusArt.JPG);
              background-repeat: no-repeat; background-position: center; background-size: contain; z-index:1;
              animation-name: expansioncontraction;  animation-direction: alternate;
               animation-duration:12s; animation-direction:normal; animation-timing-function:ease-in-out; ">
              
              <div class="blackcover">
            
          </div>
            
            
            <div class="btn-position">
             <div class="quote">
            <h class="textclass">The Gift of Art is Beautiful and it is Divine </h>
            </div>
            <div class="registerbutton">
              <router-link  to="/LoginPage"><button class="btn-register" @click="register_now()" >Register Now</button></router-link>
             </div>
            </div>
           
          </div>
              
             
   
             
            </div>
      </div> 
    
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
     name:'Home',
    data(){
       
    },
    methods: {
        register_now(){
            this.$router.push('/Signupformpage');
        }
    },
}
</script>
