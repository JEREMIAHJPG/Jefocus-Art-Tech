export default class Cartvalidation{
    static checkEmail(payment_email){
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(payment_email,)){return true;}return false;
    }
}