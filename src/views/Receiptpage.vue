
<style>
.img_src,.title,.size,.qty,.price,.total_amount{padding:10px; height:auto; width:auto; }
</style>
<template>
    <div style="margin-left: 30%; margin-right: 30%;">
        
    <table  border="10px">
        
        <caption>
            <div style=" margin-right:auto ">JEFOCUS ART AND TECHNOLOGY</div>
            <img title="JefocusLogo" src="" name="JefocusLogo">
        </caption>
        
        
        <!--display of cart -->
        <th><div class="items" >Item Image</div></th>
          <th><div class="name" >Name</div></th>
          <th><div class="size">Size</div></th>
          <th><div class="number" >Number of pieces</div></th>
          <th><div class="pricepi" >Price per item</div></th>
          <th><div class="price" >Total Price</div></th>
        <tr v-for="(cartreceipt, index) in get_cart_items_receipt()" :key="index">
            
            <td width="20%" ><img class="img_src" :src = "cartreceipt.imgfirst"  style="max-width: 70%;"></td>
            <td width="20%" > <div class="title" >{{cartreceipt.title}}</div></td>
            <td width="20%" ><div class="size" >{{cartreceipt.size}}</div></td>
            <td width="5%" > <div class="qty" style="width: 10%;">{{ cartreceipt.qty }}</div></td>
            <td width="20%" ><div class="price" >{{cartreceipt.price}}</div></td>
            <td width="20%" ><div class="total_amount"  style=" font-size:x-large; font-weight:500;">
                {{cartreceipt.total_amount}}</div>
            </td>
        </tr>
     </table>
    <br>
        <table v-for= "(form_cart_data, index) in get_form_data_for_receipt()" :key="index" border="10px">
        <!--display for form-->
            
            <tr><td>Total Amount:</td> <div> {{ form_cart_data.total_amount }} Naira</div></tr>
            <tr><td>Full Name:</td><div> {{ form_cart_data.fullname }}</div></tr>
            <tr><td>Phone number:</td><div>{{ form_cart_data.countryphonenumber }}</div></tr>
            <tr><td>Email:</td><div> {{ form_cart_data.payment_email }}</div></tr>
            <tr><td>Order number:</td><div>{{ form_cart_data.ordernumber }}</div></tr>
            <tr><td>Pickup location:</td><div>{{ form_cart_data.pickuplocation }}</div></tr>
            <tr><td>Date:</td><div>{{ form_cart_data.cartdate }}</div></tr>
        
    </table>
        </div>
    

</template>

<script>


export default {
   name: 'Receiptpage',
   data(){
    return{
        
     }
   },


   mounted(){
    //this.get_cart_items_receipt();
    //this.get_form_data_for_receipt();
   },
   computed:{

   },
   methods:{
   
    get_cart_items_receipt(){
           var cart_info_now = [];
           for(var key in localStorage){
            if(key.split('_')[0] == 'landscapepaintingcart' ){cart_info_now.push(JSON.parse(localStorage.getItem(key)));};};
            return cart_info_now;
},          
    
    get_form_data_for_receipt(){
        var form_cart_data = [];
        for(var key in localStorage){
        if(key.split('_')[0] == 'receipt'){form_cart_data.push(JSON.parse(localStorage.getItem(key)));};};
        return form_cart_data;        
    }
   }

}
</script>
