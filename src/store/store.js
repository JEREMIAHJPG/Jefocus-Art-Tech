import {createStore} from  'vuex';
import auth from './modules/auth/index2';
import { LOADING_SPINNER_SHOW_MUTATION } from './storeconstants';
import {TOTALPRICE} from './storeconstants';

const store = createStore({
    modules: {
        auth,
    },
    state(){
        return{
            showLoading: false,
        };
    },
    state1(){
        return{
            totalprice: totalprice,
        };
    },
    actions:{
        [TOTALPRICE](state1,payload){state1.totalprice=payload}
    },
    mutations:{
[LOADING_SPINNER_SHOW_MUTATION](state, payload){state.showLoading = payload;},
    },
});

export default store;