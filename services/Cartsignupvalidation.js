import Cartvalidation from "./Cartvalidation";

export default class Cartsignupvalidation{
   static signupstatement (payment_email){
        let errorstatement=[];
        // email validation

        if(!Cartvalidation.checkEmail(payment_email)){
            errorstatement['email'] = 'Invalid Email';
        }
        
        return errorstatement;
    }
};