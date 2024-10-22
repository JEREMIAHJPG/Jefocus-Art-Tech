<template>
    <v-app>
        <nav>

        <v-toolbar app dark color="indigo">
            <v-app-bar-nav-icon color="yellow" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="headline text-uppercase">
                <span>Vuetify</span>
                <span class = "font-weight-light">MATERIAL DESIGN</span>
                
            </v-toolbar-title>
            
            <v-spacer></v-spacer>
            <v-btn flat href="https://github/vuetifyjs/vuetify/releases/latest"
            target = "_blank">
        <span class="mr-2">
            Latest Release
        </span>
        </v-btn>
        </v-toolbar>
    </nav>
    <v-navigation-drawer app v-model="drawer" color="success">   
        <h color="warning" class="subheading grey--text" mx-4>test</h>
    <v-list>
        <v-list-item v-for = "link in links" :key="link.text" router :to=link.route>
            <v-list-item-icon >
            <v-icon class="yellow--text mb-4 " left>{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title right class="ml-5 white--text">{{link.text}}</v-list-item-title>
            </v-list-item-content>


        </v-list-item>
    </v-list>
    <v-main>
        <v-container>
        <v-dialog max-height="600px" v-model="dialog">
          <template v-slot:activator="{ on, attrs }">
            <v-btn flat v-bind="attrs" v-on="on" class="success">
              Add a project
            </v-btn>
          </template>
          <v-card>

            <v-card-title>
              <h2>Add a Project</h2>
            </v-card-title>
            <v-card-text>
              <div class="caption grey--text text-xs-center">Number 3</div>
              <v-form ref="form">
                <v-text-field label="Title" v-model="title" :rules="inputRules" prepend-icon="folder"></v-text-field>
                <v-textarea label="Information" :rules="inputRules" v-model="content" prepend-icon="edit"></v-textarea>
            <v-btn @click="submit" :loading="true">
                SUBMIT
            </v-btn>  
            </v-form>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
    

    </v-navigation-drawer> 
    <v-main>
        <v-btn>
      Start
      <v-tooltip
        activator="parent"
        color="red"
        location="start"
      >Tooltip</v-tooltip>
    </v-btn>
        <v-btn>
      Start
      <v-tooltip
        activator="parent"
        color="primary"
        location="bottom"
      >Tooltip</v-tooltip>
    </v-btn>
        <v-container class="my-5">
            <v-layout >
            <v-btn small flat color=grey @click="sortBy('text')"><v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">By project name</span>
            </v-btn>
            
           
            <v-btn small flat color=grey @click="sortBy('person')"><v-icon left small>person</v-icon>
            <span class="caption text-lowercase">By person</span>
            </v-btn>
            </v-layout>
            <v-card>
            <v-layout row wrap justify-space-around>
                <v-flex xs12 md6>
                    <div class="text-center">
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Dropdown
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
                </v-flex>
                <v-flex xs12 md3 >
                    <v-btn outline block color="success">Number 2</v-btn>
                </v-flex>
                <v-flex xs6 md3 >
                    <div class="caption grey--text">Number 3</div>
                    <v-chip small>Number 3</v-chip>
                </v-flex>
                <v-flex xs6 md3 >
                    <div class="text-subtitle-2 mt-4 mb-2">Accordion</div>

     <!-- <v-expansion-panels variant="accordion">
      <v-expansion-panel
        v-for="i in 3"
        :key="i"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        title="Item"
      ></v-expansion-panel>
    </v-expansion-panels> -->
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
        </v-card>
        </v-container>
        
        <v-container class="my-5 md-3" color="green">
            <v-layout row wrap>
            <v-flex md3>
            <v-card flat class="text-xs-center mb-3">
                <v-responsive class="pt-4 ">
                    <v-avatar size="100" class="grey lighten">
                        <img src="\assets\Boss_UMC_picture.jpg">
                    </v-avatar>
                    
                </v-responsive>
            <v-card-text>
                <div class="caption grey--text text-xs-center">Number 3</div>
            </v-card-text>
            <v-card-actions>
                <v-btn flat color="orange" class="text-xs-center">
                    <v-icon left small >mdi-messages</v-icon>
               <span>messages</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
    </v-layout>
        </v-container>
      <v-container>
        <v-btn depressed color="primary">
            <v-icon color=white>email</v-icon>
            Click me</v-btn>       
        <v-btn dark size="small" fab color="yellow" class="hidden-md-up-downtext--blue">
            <v-icon left>mdi-email</v-icon>
            Click me</v-btn>       
        <v-btn dark size="small" fab color="yellow" class="text--blue">
            <v-icon left small >mdi-favorite</v-icon>
        </v-btn>       


      </v-container>
      <v-btn flat color="yellow--text">Click me</v-btn>
    </v-main>
    <!-- check vuetify for expansion panel and menu and popup datepicker, npm install data-fns format and snackbar then copy and paste -->

    <!-- recall filter property at computed property
    return this.links.filter(link=>{return link.text==='My Project with God'}) 
    -->
      </v-app>
  
</template>
<script>

export default{

    name: 'vuetify_practice',
    data() {
        return{
            drawer:false,
            links:[
                {icon:'mdi-menu', text:'Dashboard', route:'/'},
                {icon:'mdi-folder', text:'My Project with God', route:'/'},
                {icon:'mdi-person', text:'Team', route:'/LoginPage'}
                   ],
            inputRules:[
                    v => v.length >= 3|| "Minimum length of 3 characters"
                   ],
                   loading:false,
                   dialog:false
        }

    },
    methods:{
        submit(){
            if(this.$refs.form.validate()){
                this.loading=true,
                   
                // BANKEND SUBMISSION ACTION
               this.loading=false,
                this.dialog=false,
                this.$emit(projectadded)
                console.log("submitted");
            }
        },
        sortBy(prop){
            this.links.sort((a,b)=> a[prop]<b[prop] ? -1:1)
        }
    }
}

</script>

<style>
@import 'vuetify/styles';
</style>
