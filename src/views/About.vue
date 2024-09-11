<style>
.countdown{
  margin-top: 100px;
}
</style>

<template>
  about page
  <!-- testing timer -->
   <div class="countdown">
   <p>{{ timeleft }}</p>
  </div>

</template>

<script>
  
  export default {
    name:"About",
    data(){  
      return{
        timeleft: 180,
        timer: null,
      };
    },
    mounted(){
        this.on_load();
    },
    methods:{
          on_load(){
         if(this.timer){
          clearInterval(this.timer);
         }
         this.timer = setInterval(()=>{
          if(this.timeleft > 0){
            this.timeleft--;
          }else{
            clearInterval(this.timer);
          }
         },1000);
           }
    },
    
           beforeDestroy(){
            if (this.timer){
              clearInterval(this.timer);
            }
           } 


    
  }
  </script>
  
