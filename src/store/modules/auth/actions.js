
import axios from 'axios';
import SignupValidations from '/services/SignupValidations';
import { 
    LOGIN_ACTION, 
    SET_USER_TOKEN_DATA_MUTATION, 
    SIGNUP_ACTION,
    POSTERS,
    TOTALPRICE,
    LOGOUT_ACTION,
    AUTH_ACTION,
    AUTO_LOGIN_ACTION,
    AUTO_LOGOUT_ACTION,
    SET_AUTO_LOGOUT_MUTATION
} from "@/store/storeconstants";

let timer = '';

export default{
    

   async [SIGNUP_ACTION](context, payload){
       await context.dispatch(AUTH_ACTION,{
            ...payload,
            url:'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDt8TxIM_m7OaUlxT2WgDhS13jYFp7VvhE'
             }
            );
            localStorage.setItem('userData',  JSON.stringify(tokenData));
            context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData);
},

async [LOGIN_ACTION](context, payload){ 
    return context.dispatch(AUTH_ACTION, {
        ...payload,
        url:'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDt8TxIM_m7OaUlxT2WgDhS13jYFp7VvhE',
    });
},
    
[LOGOUT_ACTION](context){
        
        context.commit(SET_USER_TOKEN_DATA_MUTATION,{
            email: null,
            token: null,
            expiresIn: null,
            refreshToken: null,
            userId: null,
       });
       localStorage.removeItem('userData');
       if(timer){
        clearTimeout(timer)
       }
},

[AUTO_LOGOUT_ACTION](context){
    context.dispatch(LOGOUT_ACTION);
    context.commit(SET_AUTO_LOGOUT_MUTATION);
},


[AUTO_LOGIN_ACTION](context){
    let userDataString  = localStorage.getItem(`userData`);
    if (userDataString){ 
        let userData = JSON.parse(userDataString);
        let expirationTime = userData.expiresIn - new Date().getTime();


        if(expirationTime < 300000){
            context.dispatch(AUTO_LOGOUT_ACTION);
        }else{
          timer = setTimeout(() => {
                context.dispatch(AUTO_LOGOUT_ACTION);
            }, expirationTime);
        }
        context.commit(SET_USER_TOKEN_DATA_MUTATION, userData)
    }
    
    },

async [AUTH_ACTION](context, payload){
    let postData = {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
    };
    let response = '';

    try{
        response = await axios.post( payload.url,postData); 
    } catch (err) { 
       
        let errorMessage = SignupValidations.getErrorMessageFromCode(
            err.response.data.error.errors[0].message,);
 throw errorMessage; 
    }

    

    if (response.status === 200){
        let expirationTime= +response.data.expiresIn*1000;

        setTimeout(()=>{
            context.dispatch(AUTO_LOGOUT_ACTION);
        },expirationTime);

        let tokenData = {
            email: response.data.email,
            token: response.data.idToken,
            expiresIn: response.data.expiresIn,
            refreshToken: response.data.refreshToken,
            userId: response.data.localId,
       };
       localStorage.setItem('userData',  JSON.stringify(tokenData));
        context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData);
    }
}

// async [POSTERS](context,payload){
//     var token1 = 123
//     let tokendata = [token1.toString()]
//     let token2 = {token1}
    
//     let postL = payload.postL
//     let postL2= postL.cart
//     var postL3= [JSON.parse(postL2)]
//     var postL4= postL3[0]

//     let cartpostprofile={
//         token: token1,
//         type: postL4.type,
//         Title: postL4.Title,
//         Size: postL4.Size,
//         description: postL4.description,
//         numberofitems: postL4.numberofitems,
//         Price: postL4.Price,
//         imgfirst: postL4.imgfirst,
//         imgsecond: postL4.imgsecond,
//         isfav: postL4.isfav,
//         buy: postL4.buy,
//         addtocart: postL4.addtocart,
//         display: postL4.display,
//         }

    
   
//     console.log(cartpostprofile)
//     let response ='';

    //context.commit(LOADING_SPINNER_SHOW_MUTATION,true,{root:true,});

//    try{
//     response = await axios.post('/cartpostprofile', cartpostprofile,); 
// } catch (err) { 
//     //context.commit(LOADING_SPINNER_SHOW_MUTATION,false,{root:true,});
//     let errorMessage = SignupValidations.getErrorMessageFromCode(
//         err.response.data.error.errors[0].message,);
// throw errorMessage; 
//}

// context.commit(LOADING_SPINNER_SHOW_MUTATION,false,{root:true,}); 
    
//    if (response.status === 200){
//     context.commit(SET_USER_TOKEN_DATA_MUTATION,{
//         email: response.data.email,
//         token: response.data.idToken,
//         expiresIn: response.data.expiresIn,
//         refreshToken: response.data.refreshToken,
//         userId: response.data.localId,
//    });
// }
// },
// async [TOTALPRICE](context,payload){
//     let token1 = 123;
//     let realid =payload.realid;
//     let Price = payload.Price;
//     let numberofitems = payload.numberofitems;
//     let cartstore = payload.cartstore;
//     var date= Date();

   
   // let thisnumberofitems = numberofitems.toFixed(0)
    
//    var totalprice = numberofitems * Price
//    let ordereditems = {
//         token: token1,
//         id:    realid,
//         numberofitems:numberofitems,
//         totalprice: totalprice,
//       };

//       let ordereditemsreal = [ordereditems];
//      // let ordereditems1= [JSON.stringify(ordereditems)];
//      var ordereditemso= JSON.stringify(ordereditems);
//      localStorage.setItem (`ordered_items`, ordereditemso);
//      var carto = localStorage;
//      localStorage.getItem (`cart_o`, carto);
//      let cartoriginal = carto.ordered_items;

//      var ordereditems_real= JSON.stringify(ordereditemsreal);
//      localStorage.setItem (`ordered__items`, ordereditems_real);
//      var carto1 = localStorage;
//      localStorage.getItem (`cart__o`, carto1);
//      let cartoriginalnew = carto1.ordered__items;
    
//      let realcarto= ordereditemsreal.concat(cartoriginal);

    //   let ot = ordereditems.filter((ordereditems1.id)=>realid))
    //   filteredordereditems(){return this.ordereditems1.filter((ordereditems1.id)=>realid)}
   
    //   console.log(); 

    //localstorage for cart total number of items and price
    // console.log(ordereditems)
    // console.log(cartoriginal)
    // console.log(realcarto)
    // let response = '';  


   //reciept Array
    /*** let ordereditemsreciept = {
   token: token1,
     numberofitems:numberofitems,
     Price:Price,
    totalprice: totalprice,
     date: date,
     Recieversaddress:Recieversaddress,
     Recieversphonenumber:Recieversphonenumber,
     Email:Email 
    } ***/

  // let removeitem= payload.removeitem

    //const postL5 = postL4.push(token1)
   // let postL5=[postL4.Price]
    //let cartpage=[postL2.token]
     //let postL6 = postL4.concat(token2)
    //let maincartpage= postL2.concat(tokendata)
    
    //let postL3 = postL2.token
   

    //context.commit(LOADING_SPINNER_SHOW_MUTATION,true,{root:true,});

//    try{
//     response = await axios.put('http://localhost:3000/cartpostprofile/this.id', ordereditems1)
//     .then(response=>console.log(response)); 
// } catch (err) { 
//     //context.commit(LOADING_SPINNER_SHOW_MUTATION,false,{root:true,});
//    //let errorMessage = SignupValidations.getErrorMessageFromCode(
//      //  err.response.data.error.errors[0].message,);
// //throw errorMessage;
// }
};