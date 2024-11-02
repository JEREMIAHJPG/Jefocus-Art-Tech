<template>
       <v-col     
        cols="12"
        xs="4"
        sm="12"
        md="12" 
        >
        <v-sheet class="" >
            <v-col     
        cols="12"
        xs="4"
        sm="12"
        md="12" 
        >
      <v-sheet>
        <v-toolbar color="grey">
            <v-toolbar-title class="headline text-uppercase text-xs-center" >             
                <center><span class = "font-weight-light">Payment control</span></center>        
            </v-toolbar-title>
        </v-toolbar>
      </v-sheet>
        <v-sheet>
            <input type="text" v-model="dateofpayment" placeholder="dateofpayment">
            <v-btn dark size="small" fab color="yellow" 
      text="payment status"
      @click="dialog = true"
           >

       </v-btn>
       </v-sheet>
        </v-col>
                <!-- <center><div class = "font-weight-light" id="myPlot" style="width: 100%; max-width: 700px"></div></center>               -->
            </v-sheet>
         
            <v-spacer></v-spacer>

            <v-sheet class="" height="auto">
            <v-col     
        cols="12"
        xs="4"
        sm="12"
        md="12" 
        >
      
<v-toolbar color="grey">
            <v-toolbar-title class="headline text-uppercase text-xs-center" >             
                <center><span class = "font-weight-light">inspect client</span></center>        
            </v-toolbar-title>
        </v-toolbar>
      
      <v-sheet>
      <input type="text" placeholder="Order_No" v-model="client_Order_No">
        <input type="text" placeholder="phone_number" v-model="client_phone_number">
        <!-- <input type="text" v-model="dateofpayment"> -->
      </v-sheet>    
      </v-col>
            <!-- input client admin details -->     
      </v-sheet>
      <v-spacer></v-spacer>
      <v-sheet class="" height="auto">
            <v-col     
        cols="12"
        xs="4"
        sm="12"
        md="12" 
        >   
        <v-sheet class="ma-2 pa-2" height="auto">
        <v-table>
    <!-- client inspect table -->
    <thead>
      <tr>
       <th class="text-left">
          Fullname
        </th>
        <th class="text-left">
          Pickup Location
        </th>
        <th class="text-left">
          Payment Email
        </th>
        <th class="text-left">
          Paid Amount
        </th>
        <th class="text-left">
          Time of order placed
        </th>
       
        <!-- <th class="text-left">
          Pay button
        </th> -->
      </tr>
    </thead>
 <tbody>
  <tr v-for="(client_array_data, index) in client_array" :key="index">

        <td>{{client_array_data.receipt.fullname}}</td>
        <td>{{client_array_data.receipt.pickuplocation}}</td>
        <td>{{client_array_data.receipt.payment_email}}</td>
        <td>{{client_array_data.receipt.total_amount}}</td>
        <td>{{client_array_data.receipt.time_details_of_order_placed.time_details_currentTime.currentTime}}</td>
       
      </tr>
    </tbody>
  </v-table>
      </v-sheet>
      <!-- <v-sheet>
<input type="text" placeholder="Order_No" v-model="client_Order_No">
        <input type="text" placeholder="phone_number" v-model="client_phone_number"> -->
        <!-- <input type="text" v-model="dateofpayment">
      </v-sheet> -->
      <v-sheet class="ma-2 pa-2 " height="auto">
        <v-table>
    <!-- client inspect table -->
    <thead>
      <tr>
        
       <th class="text-left">
          Order.No
        </th>
        <th class="text-left">
          Image
        </th>
        <th class="text-left">
          Item Title
        </th>
        <th class="text-left">
          Date Ordered
        </th>
        <th class="text-left">
          Late Shipment or Early Shipment 
        </th>
        <th class="text-left">
          Price
        </th>
        <th class="text-left">
          Tracking ID Link        
        </th>
        <!-- <th class="text-left">
          Track Button        
        </th> -->
        <th class="" >
          Delivery status
        </th>
        <th class="text-left">
          VAT Commission
        </th>
        <th class="text-left">
            Net Profit
        </th>
        <!-- <th class="text-left">
          Pay button
        </th> -->
      </tr>
    </thead>
 <tbody>
  <tr v-for="(History_pending_list_client_data, index) in History_pending_list_client" :key="index">
        <td>{{History_pending_list_client_data.Order_No}}</td>
        <td>
          <div class="image_view_tracking_page">
        <img style="z-index:-1;" :src="History_pending_list_client_data.First_image_selected"  class="image_view_content_tracking_page" >
        </div>
        </td>
        <td>{{History_pending_list_client_data.title}} </td>
        <td>{{History_pending_list_client_data.time_details_of_order_placed.time_details_currentTime.time_of_order_placed}}</td>
        <td>{{History_pending_list_client_data.time_details_of_order_placed.time_details_deadline_Time.deadline_Time}}</td>
        <td>{{History_pending_list_client_data.price}}</td>
        <td>{{History_pending_list_client_data.tracking_id}}
        <div @click="iframe_link(History_pending_list_client_data)">
          <v-btn dark size="small" fab color="yellow" 
      text="Track Shipment"
      @click="dialog = true"
           >
       </v-btn>
       </div>
        
    <v-dialog
      v-model="dialog"
      max-width="700"
      max-height="500"
    >
      <v-card title="Tracking Iframe">
        <template v-slot:text>
          <iframe
          width="500"
          height="300"
          :href= "'www.kongatracking.com/'+{iframe_link_data}"
          >

          </iframe>
          <!-- <input type="text" name="transaction_ID" placeholder="Input Tracking ID" id="" style="border: 1px black solid"> -->
          <!-- <v-btn
            class="my-2"
            text="Submit"
            @click="dialog2 = true"
          ></v-btn> -->
        </template>

        <v-card-actions>
          <v-spacer></v-spacer>
          
          <v-btn
            text="Close"
            variant="text"
            @click="dialog = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
           </td>
      
        <td>{{History_pending_list_client_data.Vat_Commission}}</td>
        <td>{{History_pending_list_client_data.net_profit}}</td>
        <!-- favor -->
        <!-- 08163213590 -->
      </tr>
    </tbody>
  </v-table>
      </v-sheet>     
      </v-col>
            <!-- input client admin details -->     
      </v-sheet>
      <!-- // -->
      <v-sheet class="ma-2 pa-2" height="auto">
        <v-table>
    <!-- client inspect table -->
    <thead>
      <tr>
        <!-- <th class="text-left">
          Order Transaciion ID
        </th> -->
        <th class="text-left">
          Order.No
        </th>
        <th class="text-left">
          Image
        </th>
        <th class="text-left">
          Date Ordered
        </th>
        <th class="text-left">
          Shipment record Date
        </th>
        <th class="text-left">
          Successful delivery record Date
        </th>     
        <th class="" >
          Delivery and payment status
        </th>
        <!-- <th class="text-left">
          VAT Commission
        </th> -->
        <th class="text-left">
            Net Profit
        </th>
        <!-- <th class="text-left">
          Pay button
        </th> -->
      </tr>
    </thead>
 <tbody>
      <tr v-for="(History_list_client_data, index) in History_list_client" :key="index"      
      >
        <td>{{History_list_client_data.Order_No}} </td>
        <td>
          <div class="image_view_tracking_page">
        <img style="z-index:-1;" :src="History_list_client_data.First_image_selected"  class="image_view_content_tracking_page">
        </div>        
         </td>
        <td>{{History_list_client_data.time_details_of_order_placed.time_details_currentTime.time_of_order_placed}}</td>

        <td>{{History_list_client_data.date_of_shipment_notification}}</td>
        
        <!-- <td>
          payment status that is payment assured or History_list_client_data/s returned
  <div class="pa-4 text-center">
  </div>
</td> -->
        <td>{{History_list_client_data.delivery_success_record_date}}</td>
        <td>{{History_list_client_data.delivery_status}} </td>
        <td>{{History_list_client_data.net_profit}}</td>

      </tr>
    </tbody>
  </v-table>
      </v-sheet>     
       <!-- -- -->
      <v-sheet class="" height="auto">
          <v-col     
        cols="12"
        xs="4"
        sm="12"
        md="12" 
        > 
        <!-- <v-sheet class="" height="auto"> -->
            <!-- input client admin details -->
            <v-toolbar color="grey">
            <v-toolbar-title class="headline text-uppercase text-xs-center" >             
                <center><span class = "font-weight-light">TRACK CLIENT DELIVERY</span></center>        
            </v-toolbar-title>
        </v-toolbar>
        <!-- </v-sheet> -->
        <v-sheet class="" height="auto">
          <iframe
          width="500"
          height="300"
          :href= "'www.kongatracking.com/'+{iframe_link_data}"
          >
          </iframe>
        </v-sheet>
       
  <!-- //USE ORDER NO TO FETCH LIST OF HISTORY AND PENDING LIST AND THE TRACKING ORDER LIST TRACKING NUMBER 
  //SELLER phonenumber(THROUGH seller_ID) IS FETCHED AND PUSHED TO IFRAME,MERCHANT-phonenumber SLIDE  
  //USE ORDER NO TO FETCH ORDER OF HISTORY AND PENDING LIST AND THE TRACKING ORDER LIST TRACKING NUMBER 
  //CLIENT phonenumber(THROUGH ORDERNO FROM RECIEPT DATABASE) IS FETCHED AND PUSHED TO IFRAME,CLIENT-phonenumber SLIDE   -->
  </v-col>
  </v-sheet>
        <!-- // -->
        <v-spacer></v-spacer>
        <v-sheet class="" height="auto">
          <v-col     
        cols="12"
        xs="4"
        sm="12"
        md="12" 
        > 
        <!-- <v-sheet class="" height="auto"> -->
            <!-- input client admin details -->
            <v-toolbar color="grey">
            <v-toolbar-title class="headline text-uppercase text-xs-center" >             
                <center><span class = "font-weight-light">inspect admin</span></center>        
            </v-toolbar-title>
        </v-toolbar>
        <!-- </v-sheet> -->
        <v-sheet class="" height="auto">
        <input type="text" placeholder ="Order_No" v-model="admin_Order_No">
        <input type="text" placeholder ="phone_number" v-model="admin_phone_number">
        <input type="text"  placeholder ="admin_tracking_number" v-model="admin_tracking_number">
        <h1>{{ does_tracking_number_match }}</h1> 
        </v-sheet>
        <!-- // -->
        <v-spacer></v-spacer>
        <v-sheet class="ma-2 pa-2" height="auto">
        <v-table>
    <!-- client inspect table -->
    <thead>
      <tr>

       <th class="text-left">
          Order.No
        </th>
        <th class="text-left">
          Image
        </th>
        <th class="text-left">
          Item Title
        </th>
        <th class="text-left">
          Date Ordered
        </th>
        <th class="text-left">
          Late Shipment or Early Shipment 
        </th>
        <th class="text-left">
          Price
        </th>
        <th class="text-left">
          Tracking ID Link        
        </th>
        <!-- <th class="text-left">
          Track Button        
        </th> -->
        <th class="" >
          Delivery status
        </th>
        <th class="text-left">
          VAT Commission
        </th>
        <th class="text-left">
            Net Profit
        </th>
        <!-- <th class="text-left">
          Pay button
        </th> -->
      </tr>
    </thead>
 <tbody>
  <tr v-for="(History_list_data, index) in History_list" :key="index">
        <td>{{History_list_data.Order_No}}</td>
        <td>
          <div class="image_view_tracking_page">
        <img style="z-index:-1;" :src="History_list_data.First_image_selected"  class="image_view_content_tracking_page" >
        </div>
        </td>
        <td>{{History_list_data.title}}</td>
        <td>{{History_list_data.time_details_of_order_placed.time_details_currentTime.time_of_order_placed}}</td>
        <td>{{History_list_data.time_details_of_order_placed.time_details_deadline_Time.deadline_Time}}</td>
        <td>{{History_list_data.price}}</td>
        <td>{{History_list_data.tracking_id}}
        <div @click="iframe_link(History_list_data)">
          <v-btn dark size="small" fab color="yellow" 
      text="Track Shipment"
      @click="dialog = true"
           >
       </v-btn>
       </div>
        

    <v-dialog
      v-model="dialog"
      max-width="700"
      max-height="500"
    >
      <v-card title="Tracking Iframe">
        <template v-slot:text>
          <iframe
          width="500"
          height="300"
          :href= "'www.kongatracking.com/'+{iframe_link_data}"
          >

          </iframe>
          <!-- <input type="text" name="transaction_ID" placeholder="Input Tracking ID" id="" style="border: 1px black solid"> -->
          <!-- <v-btn
            class="my-2"
            text="Submit"
            @click="dialog2 = true"
          ></v-btn> -->
        </template>

        <v-card-actions>
          <v-spacer></v-spacer>
          
          <v-btn
            text="Close"
            variant="text"
            @click="dialog = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
           </td>     
        <td>{{History_list_data.Vat_Commission}}</td>
        <td>{{History_list_data.net_profit}}</td>

      </tr>
    </tbody>
  </v-table>
      </v-sheet>
        <!-- // -->
        <v-spacer></v-spacer>
        <v-sheet class="" height="auto">
        <v-table>
    <!-- admin inspect table -->
    <thead>
      <tr>
        <!-- <th class="text-left">
          Order Transaciion ID
        </th> -->
        <th class="text-left">
          Order.No
        </th>
        <th class="text-left">
          Image
        </th>
        <th class="text-left">
          Date Ordered
        </th>
        <th class="text-left">
          Shipment record Date
        </th>
        <th class="text-left">
          Successful delivery record Date
        </th>     
        <th class="" >
          Delivery and payment status
        </th>
        <!-- <th class="text-left">
          VAT Commission
        </th> -->
        <th class="text-left">
            Net Profit
        </th>
        <!-- <th class="text-left">
          Pay button
        </th> -->
      </tr>
    </thead>
 <tbody>
      <tr v-for="(History_main_list_data, index) in History_main_list" :key="index"      
      >
        <td>{{History_main_list_data.Order_No}} </td>
        <td>
          <div class="image_view_tracking_page">
        <img style="z-index:-1;" :src="History_main_list_data.First_image_selected"  class="image_view_content_tracking_page">
        </div>        
         </td>
        <td>{{History_main_list_data.time_details_of_order_placed.time_details_currentTime.time_of_order_placed}}</td>

        <td>{{History_main_list_data.date_of_shipment_notification}}</td>
        
        <!-- <td>
          payment status that is payment assured or History_main_list_data/s returned
  <div class="pa-4 text-center">
  </div>
</td> -->
        <td>{{History_main_list_data.delivery_success_record_date}}</td>
        <td>{{History_main_list_data.delivery_status}}</td>
        <td>{{History_main_list_data.net_profit}}</td>

      </tr>
    </tbody>
  </v-table>
  </v-sheet>
  </v-col>
  </v-sheet>
  <!-- // -->
        <!-- // -->
        <v-sheet class="" height="auto">
          <v-col     
        cols="12"
        xs="4"
        sm="12"
        md="12" 
        > 
        <!-- <v-sheet class="" height="auto"> -->
            <!-- input client admin details -->
            <v-toolbar color="grey">
            <v-toolbar-title class="headline text-uppercase text-xs-center" >             
                <center><span class = "font-weight-light">TRACK ADMIN DELIVERY</span></center>        
            </v-toolbar-title>
        </v-toolbar>
        <!-- </v-sheet> -->
        <v-sheet class="" height="auto">
          <iframe
          width="500"
          height="300"
          :href= "'www.kongatracking.com/'+{iframe_link_data}"
          >
          </iframe>
        </v-sheet>
       
  <!-- //USE ORDER NO TO FETCH LIST OF HISTORY AND PENDING LIST AND THE TRACKING ORDER LIST TRACKING NUMBER 
  //SELLER phonenumber(THROUGH seller_ID) IS FETCHED AND PUSHED TO IFRAME,MERCHANT-phonenumber SLIDE  
  //USE ORDER NO TO FETCH ORDER OF HISTORY AND PENDING LIST AND THE TRACKING ORDER LIST TRACKING NUMBER 
  //CLIENT phonenumber(THROUGH ORDERNO FROM RECIEPT DATABASE) IS FETCHED AND PUSHED TO IFRAME,CLIENT-phonenumber SLIDE   -->
  </v-col>
  </v-sheet>
  <!-- // -->
        </v-col>
</template>
<script>
import { db } from '@/firebase';
import {query, onSnapshot, orderBy,collection,limit, getAggregateFromServer, sum, updateDoc, deleteField, addDoc, setDoc, getDoc, getDocs, where, doc } from 'firebase/firestore';
export default {
   name:'Admin_Client_Controlling_Room', 
   data(){
    return{
      client_Order_No:'',
      client_phone_number:'',
      client_array:[],
      History_pending_list_client:[],
      History_list_client:[],
      History_list:[],
      History_main_list:[],
      tracking_id1:'',
      tracking_id2:'',
   
      //seller_doc1:[],
      //seller_doc2:[],
     
      phone_number_array:[],
      iframe_tracking_phonenumber_data1:[],
      iframe_tracking_phonenumber_data2:[],
      iframe_tracking_phonenumber_data:[],

      

    //   client_token_ID : JSON.parse(localStorage.getItem(`userData`)).token,
    //   History_data_list_admin:[],
    //   Time:[],
    //   Totalpay:[],     
    }
   },
   created(){
    this.fetch_list_history_client();
    this.fetch_list_history_admin();
    
    // this.loadAdminhistory();
    // this.Plotgraph();
   },
   methods:{

      async fetch_list_history_client(){

        await onSnapshot(query(collection(db, 'receipt'), where('countryphonenumber', '==' , `+234${this.client_phone_number}`), orderBy("cartdate", "desc"), limit(7)),
            (client_list) =>{client_list.forEach((client_data) => {  
                      this.client_array.push(client_data.data().admin_phonenumber);

                        //fullname
                        //pickuplocation
                        //payment_email
                        //pickuplocation
            })});

            await onSnapshot(query(collection(db, 'list_of_order_details_for_tracking_and_payment'), where('Order_No', '==' , this.client_Order_No), orderBy("currentTime", "desc"), limit(100)),
            (clienthistory) =>{clienthistory.forEach((history) => {
              this.History_pending_list_client.push(history.data());   

            })})

             onSnapshot(query(collection(db, 'order_details_for_tracking_and_payment'), where('Order_No', '==' , this.client_Order_No), orderBy("currentTime", "desc"), limit(100)),
            (clienthistory) =>{clienthistory.forEach((history) => {   
              this.History_list_client.push(history.data())
              this.tracking_id1 = historydoc.data().tracking_id;
    
              onSnapshot(query(collection(db, 'admin_database'), where('user_ID', '==' , history.data().seller_ID),
            (phone_number_list) =>{phone_number_list.forEach((phone_number_data) => {  
                       this.phone_number1 = phone_number_data.data().admin_phonenumber;

            })}));
                                  var iframe_tracking_phonenumber1 = {
                                    tracking_id1: this.tracking_id1,
                                    phone_number1: this.phone_number1
                                  }
                this.iframe_tracking_phonenumber_data2.push(iframe_tracking_phonenumber1)
            })})
               
            await onSnapshot(query(collection(db, 'HistoryofOrderitemsplaced'), where('Order_No', '==' , this.client_Order_No), orderBy("currentTime", "desc"), limit(100)),
            (historylist) =>{historylist.forEach((historydoc) => {
                    this.History_list.push(historydoc.data()); 
            })})

           // var History_list = History_pending_list_client||History_list_client;

             await onSnapshot(query(collection(db, 'HistoryofOrderplaced'), where('Order_No', '==' , this.client_Order_No), orderBy("currentTime", "desc"), limit(100)),
            (historylist) =>{historylist.forEach((historydoc) => {   
              this.History_main_list.push(historydoc.data());
              this.tracking_id2 = historydoc.data().tracking_id;
              onSnapshot(query(collection(db, 'admin_database'), where('user_ID', '==' , historydoc.data().seller_ID),
            (phone_number_list) =>{phone_number_list.forEach((phone_number_data) => {  
                       this.phone_number2 = phone_number_data.data().admin_phonenumber
            })}));
                                  var iframe_tracking_phonenumber2 = {
                                    tracking_id2: this.tracking_id2,
                                    phone_number2: this.phone_number2
                                  }
                                  //fetch iframe tracking id array
               this.iframe_tracking_phonenumber_data2.push(iframe_tracking_phonenumber2)
            })})
          //  this.seller_doc3 = await(this.seller_doc1||this.seller_doc3);                   
                 
                        this.iframe_tracking_phonenumber_data = this.iframe_tracking_phonenumber_data1||this.iframe_tracking_phonenumber_data2             
            //
   },

      async fetch_list_history_admin(){

            await onSnapshot(query(collection(db, 'list_of_order_details_for_tracking_and_payment'), where('Order_No', '==' , this.client_Order_No), orderBy("currentTime", "desc"), limit(100)),
            (clienthistory) =>{clienthistory.forEach((history) => {
              this.History_pending_list_client.push(history.data());   

            })})

              onSnapshot(query(collection(db, 'order_details_for_tracking_and_payment'), where('Order_No', '==' , this.client_Order_No), orderBy("currentTime", "desc"), limit(100)),
            (clienthistory) =>{clienthistory.forEach((history) => {   
              this.History_list_client.push(history.data())
              this.tracking_id1 = historydoc.data().tracking_id;
    
              onSnapshot(query(collection(db, 'admin_database'), where('user_ID', '==' , history.data().seller_ID),
            (phone_number_list) =>{phone_number_list.forEach((phone_number_data) => {  
                       this.phone_number1 = phone_number_data.data().admin_phonenumber;

            })}));
                                  var iframe_tracking_phonenumber1 = {
                                    tracking_id1: this.tracking_id1,
                                    phone_number1: this.phone_number1
                                  }
                this.iframe_tracking_phonenumber_data2.push(iframe_tracking_phonenumber1)
            })})
               
            await onSnapshot(query(collection(db, 'HistoryofOrderitemsplaced'), where('Order_No', '==' , this.client_Order_No), orderBy("currentTime", "desc"), limit(100)),
            (historylist) =>{historylist.forEach((historydoc) => {
                    this.History_list.push(historydoc.data()); 
            })})

           // var History_list = History_pending_list_client||History_list_client;

             await onSnapshot(query(collection(db, 'HistoryofOrderplaced'), where('Order_No', '==' , this.client_Order_No), orderBy("currentTime", "desc"), limit(100)),
            (historylist) =>{historylist.forEach((historydoc) => {   
              this.History_main_list.push(historydoc.data());
              this.tracking_id2 = historydoc.data().tracking_id;
              onSnapshot(query(collection(db, 'admin_database'), where('user_ID', '==' , historydoc.data().seller_ID),
            (phone_number_list) =>{phone_number_list.forEach((phone_number_data) => {  
                       this.phone_number2 = phone_number_data.data().admin_phonenumber
            })}));
                                  var iframe_tracking_phonenumber2 = {
                                    tracking_id2: this.tracking_id2,
                                    phone_number2: this.phone_number2
                                  }
                                  //fetch iframe tracking id array
               this.iframe_tracking_phonenumber_data2.push(iframe_tracking_phonenumber2)
            })})
            this.seller_doc3 =await(this.seller_doc1||this.seller_doc3);                   
                 
                        this.iframe_tracking_phonenumber_data = this.iframe_tracking_phonenumber_data1||this.iframe_tracking_phonenumber_data2             
   }
   }
   }
</script>