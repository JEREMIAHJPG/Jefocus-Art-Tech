import { createRouter, createWebHistory } from 'vue-router'

import Artworkpage from '../views/Artworkpage.vue';
import Itemstoorder from '../views/Itemstoorder.vue';
import Tradepage from '../views/Tradepage.vue';
import LoginPage from '../views/LoginPage.vue';
import Cartpage from '../views/Cartpage.vue';
import Contactformpage from '../views/Contactformpage.vue';
import Signupformpage from '../views/Signupformpage.vue';
import Receiptpage from '../views/Receiptpage.vue';
import Favoritepage from '../views/Favoritepage.vue';
import Adminspage from '../views/Adminspage.vue';
import Adminmonitor from '../views/Adminmonitor.vue';
import Adminitems from '../views/Adminitems.vue';
import Admindatabase from '@/views/Admindatabase.vue';
import Adminserviceslist from '@/views/Adminserviceslist.vue';
import Adminviewadverts from '@/views/Adminviewadverts.vue';
import HistoryofOrderplaced from '@/views/HistoryofOrderplaced.vue';
import Forgotpasswordpage from '@/views/Forgotpasswordpage.vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import store from '../store/store';
import { IS_USER_AUTHENTICATE_GETTER } from '@/store/storeconstants';
import Validationcode from '../views/Validationcode.vue';
import Changepassword from '@/views/Changepassword.vue';
import Replycontactformpage from '@/views/Replycontactformpage.vue';
import Replycontactformpagenext from '@/views/Replycontactformpagenext.vue';
//  Vue.use(router);
const routes = [
 {
    path: '',
    name: 'Home',
    component: Home
 },

 {
  path: '/About',
  name: 'About',
  component: About
},

 {
  path: '/:Validationcode',
  name: 'Validationcode',
  component: Validationcode
},

{
  path: '/:Changepassword',
  name: 'Changepassword',
  component: Changepassword
},
  
  {
    path: '/Artworkpage',
    name: 'Artworkpage',
    component: Artworkpage,
    meta:{auth:true}
  },

  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage,
    meta:{auth:false}
  },
  
  {
    path: '/Forgotpasswordpage',
    name: 'Forgotpasswordpage',
    component: Forgotpasswordpage,
    meta:{auth:true}
  },


  {
    path: '/:Cartpage',
    name: 'Cartpage',
    component: Cartpage,
    meta:{auth:true}
  },

  {
    path: '/Contactformpage',
    name: 'Contactformpage',
    component: Contactformpage
  },
  {
    path: '/Replycontactformpage',
    name: 'Replycontactformpage',
    component: Replycontactformpage
  },
  {
    path: '/:Replycontactformpagenext',
    name: 'Replycontactformpagenext',
    component: Replycontactformpagenext
  },


  {
    path: '/Itemstoorder',
    name: 'Itemstoorder',
    component: Itemstoorder
  },

  {
    path: '/Tradepage',
    name: 'Tradepage',
    component: Tradepage
  },

  {
    path: '/Signupformpage',
    name: 'Signupformpage',
    component: Signupformpage
    // ,
    // meta:{auth:false} 
  },

  {
    path: '/Receiptpage',
    name: '/Receiptpage',
    component: Receiptpage,
    meta:{auth:true} 
  },

  {
    path: '/:Favoritepage',
    name: '/Favoritepage',
    component: Favoritepage,
    meta:{auth:false} 
  },

  {
    path: '/Adminspage',
    name: '/Adminspage',
    component: Adminspage,
     
  },
  
  {
    path: '/Adminmonitor/:Adminmonitor_id',
    name: 'Adminmonitor',
    component: Adminmonitor,
    
  },

  {
    path: '/Adminitems',
    name: 'Adminitems',
    component: Adminitems
  },
  {
    path: '/Admindatabase',
    name: 'Admindatabase',
    component: Admindatabase,
   
  },

  {
    path: '/Adminserviceslist',
    name: 'Adminserviceslist',
    component: Adminserviceslist,
    
  },
  
  {
    path: '/:Adminviewadverts',
    name: 'Adminviewadverts',
    component: Adminviewadverts,
    
  },

  {
    path: '/HistoryofOrderplaced',
    name: 'HistoryofOrderplaced',
    component: HistoryofOrderplaced,
    meta:{auth:true}
  }
  
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach(()=>{console.log(store.state.auth);});

router.beforeEach((to, from, next)=>{
if('auth' in to.meta && 
  to.meta.auth && !store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]){
  next();
} else if('auth' in to.meta &&
  !to.meta.auth && store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]){
  next();
} else {
  next();
}
});

export default router
