<template>
    

  <v-container class="bg-surface-variant" >

    
    <!-- <v-colno-gutters> -->
      <v-col
        cols="12"
        xs="4"
        sm="12"
        md="12"
      >
        <v-sheet min-height="300px" >
            
  <v-container  >
    <v-col     
        cols="12"
        xs="4"
        sm="12"
        md="12" 
      >
        <v-sheet class="" height="50px">
            <v-toolbar color="grey">
            <v-toolbar-title class="headline text-uppercase text-xs-center" >             
                <center><span class = "font-weight-light">Your Current List of Orders</span></center>        
            </v-toolbar-title>
        </v-toolbar>
        </v-sheet>
        <v-sheet class="ma-2 pa-2" height="auto" >
            
  <v-table>
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
          Item Title
        </th>

        <th class="text-left">
          Date Ordered
        </th>
        <!-- <th class="text-left">
          Due Time of Shipment 
        </th> -->
        <th class="text-left">
          Price
        </th>
        <!-- <th class="text-left">
          Time delay commission
        </th> -->
        <!-- <th class="" >
            Tracking ID         
        </th> -->
        <!-- <th class="text-left">
          VAT Commission
        </th> -->
        <!-- <th class="text-left">
            Net Profit
        </th> -->
        
      </tr>
    </thead>
 <tbody>
      <tr v-for="(list_of_order_details_data, index) in list_of_order_details" :key="index">
        <td>{{list_of_order_details_data.Order_No}} </td>
        <td>{{list_of_order_details_data.Image}} </td>
        <td>{{list_of_order_details_data.title}} </td>
        <td>{{list_of_order_details_data.time_details_of_order_placed.time_details_currentTime.time_of_order_placed}} </td>
        <td>{{list_of_order_details_data.price}} </td>
        
      </tr>
    </tbody>
  </v-table>

         
        </v-sheet>
        
      </v-col>
    <!-- <v-colno-gutters> -->

      <v-col     
        cols="12"
        xs="4"
        sm="12"
        md="12" 
      >
        <v-sheet class="" height="50px">
            <v-toolbar color="grey">
            <v-toolbar-title class="headline text-uppercase text-xs-center" >             
                <center><span class = "font-weight-light">Input your Tracking ID</span></center>        
            </v-toolbar-title>
        </v-toolbar>
        </v-sheet>
        <v-sheet class="ma-2 pa-2" height="auto" >
            
  <v-table>
    <thead>
      <tr >
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
          Due Time of Shipment 
        </th>
        <th class="text-left">
          Price
        </th>
        <th class="text-left">
          Time delay commission
        </th>
        <th class="" >
            Tracking ID         
        </th>
        <th class="text-left">
          VAT Commission
        </th>
        <th class="text-left">
            Net Profit
        </th>
        
      </tr>
    </thead>
 <tbody>
      <tr v-for="(order_details_data, index) in order_details" :key="index">
        <td>{{order_details_data.Order_No}} </td>
        <td>{{order_details_data.Image}} </td>
        <td>{{order_details_data.time_details_of_order_placed.time_details_currentTime.time_of_order_placed}} </td>
        <td>{{order_details_data.time_details_of_order_placed.time_details_deadline_Time.deadline_Time}} </td>
        <td>{{order_details_data.price}} </td>
        <td>{{order_details_data.time_delay_commission}}</td>
        <td>
  <div class="pa-4 text-center">
    <v-btn
      text="Open Dialog 1"
      @click="dialog = true"
    ><input @focus="add_tracking(order_details_data)" ref="tracking_id_value" type="text" name="transaction_ID" :placeholder= order_details_data.tracking_id id="" >
  </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="480"
    >
      <v-card title="Carefully Input Tracking ID">
        <template v-slot:text>
          <input type="text" name="transaction_ID" v-model=add_tracking_ID placeholder="Input Tracking ID" id="" style="border: 1px black solid">
          <v-btn
            class="my-2"
            text="Submit"
            @click="add_tracking_ID()"
          ></v-btn>
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

    <v-dialog
      v-model="dialog2"
      max-width="350"
    >
      <v-card title="Please ensure this is correct">
        <template v-slot:text>
          <v-btn
            class="my-2"
            text="tracking_ID input"
            @click="dialog3 = !dialog3"
          ></v-btn>
          <v-btn
            class="my-2"
            text="Submit"
            @click="dialog3 = !dialog3"
          ></v-btn>
        </template>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close"
            variant="text"
            @click="dialog2 = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialog3"
      width="auto"
    >
      <v-card title="Dialog 3">
        <v-card-actions>
          <v-spacer></v-spacer>

          <!-- <v-btn
            text="succ"
            variant="text"
            @click="dialog3 = false"
          ></v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</td>
        <td>{{order_details_data.VAT_Commission}}</td>
        <td>{{order_details_data.net_profit}}</td>

      </tr>
    </tbody>
  </v-table>

        </v-sheet>
        
      </v-col>
    <!-- </v-row> -->
  </v-container>

        </v-sheet>
        <v-sheet class="ma-2 pa-2 " min-height="300px" >
            <v-container >
    <!-- <v-colno-gutters> -->
      <v-col     
        cols="12"
        xs="4"
        sm="12"
        md="12" 
      >
        <v-sheet class="" height="50px">
            <v-toolbar color="grey">
            <v-toolbar-title class="headline text-uppercase" >             
                <center><span class = "font-weight-light">Delivery in Progress</span> </center>        
            </v-toolbar-title>
        </v-toolbar>
        </v-sheet>
        <v-sheet class="ma-2 pa-2" height="auto">
            <v-table>
    <thead>
      <tr >
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
          Period of Shipment 
        </th>
        <th class="text-left">
         Total Price
        </th>

        <th class="" >
            Delivery Status         
        </th>
        
      </tr>
    </thead>

    <tbody>
      <tr  v-for="(delivery_order_details_data, index) in order_details" :key="index">
        <td>{{delivery_order_details_data.Order_No}} </td>
        <td>{{delivery_order_details_data.Image}} </td>
        <td>{{delivery_order_details_data.time_details_of_order_placed.time_details_currentTime.time_of_order_placed}} </td>
        <td>{{delivery_order_details_data.time_details_of_order_placed.date_of_shipment_notification}} </td>
        <td>{{delivery_order_details_data.price}}</td>
        <td>{{delivery_order_details_data.delivery_status}}</td>
        
      </tr>
    </tbody>
    <!-- <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td><input type="text" name="transaction_ID" placeholder="Input Tracking ID" id="" style="border: 1px black solid"></td>
        <td>{{ item.calories }}</td>

      </tr>
    </tbody> -->
  </v-table>
        </v-sheet>
        
      </v-col>
    <!-- </v-row> -->
  </v-container>
        </v-sheet>
        <v-sheet class="ma-2 pa-2" min-height="300px" >
            <v-container >
    <!-- <v-colno-gutters> -->
      <v-col     
        cols="12"
        xs="4"
        sm="12"
        md="12" 
      >
        <v-sheet class="" height="50px">
            <v-toolbar color="grey">
            <v-toolbar-title class="headline text-uppercase" >             
                <center><span class = "font-weight-light">paid, pending payment</span> </center>        
            </v-toolbar-title>
        </v-toolbar>
        </v-sheet>
        <v-sheet class="ma-2 pa-2 " height="auto" >
            <v-table>
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
          Date of Delivery 
        </th>
        <th class="text-left">
         Total Price
        </th>
        <th class="text-left">
          Time due to ship
        </th>
        <th class="" >
            Payment Status      
        </th>
        <th class="text-left">
          VAT Commission
        </th>
        <th class="text-left">
            Net Profit
        </th>
        
      </tr>
    </thead>

    <tbody>
      <tr v-for="(HistoryofOrderplaced_list_data, index) in HistoryofOrderplaced_list" :key="index"
       
      >
        <td>{{HistoryofOrderplaced_list_data.Order_No}} </td>
        <td>{{HistoryofOrderplaced_list_data.Image}} </td>
        <td>{{HistoryofOrderplaced_list_data.time_details_of_order_placed.time_details_currentTime.time_of_order_placed}} </td>
        <td>{{HistoryofOrderplaced_list_data.date_of_shipment_notification}} </td>
        <td>{{HistoryofOrderplaced_list_data.price}} </td>
        <td>{{HistoryofOrderplaced_list_data.time_details_of_order_placed.time_details_deadline_Time.deadline_Time}} </td>
        <td>{{HistoryofOrderplaced_list_data.payment_status}}</td>
        <td>{{HistoryofOrderplaced_list_data.VAT_Commission}}</td>
        <td>{{HistoryofOrderplaced_list_data.net_profit}}</td>
        

      </tr>
    </tbody>

    <!-- <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td><input type="text" name="transaction_ID" placeholder="Input Tracking ID" id="" style="border: 1px black solid"></td>
        <td>{{ item.calories }}</td>

      </tr>
    </tbody> -->
  </v-table>
          
        </v-sheet>
        
      </v-col>
    <!-- </v-row> -->
  </v-container>
        </v-sheet>
      </v-col>

    <!-- </v-row> -->
  </v-container>


  <!-- divide into 3 rows with responsiveness ---
  in each part of the 3 divide into 2 for header and content(the content)---
  10 columns---
  in content divide row into 2 with responsiveness for subheader like order.No and variables---
  in both subheader and variables divide row into 8 with responsiveness for subheader like order.No
  the variables will carry the iteration
  in the input do the popup that says "ensure that the values are correct"
  and another popup for input tracking ID -->

</template>

<script>
import { db } from '@/firebase';
import {onSnapshot, orderBy, limit, collection, getAggregateFromServer, sum, updateDoc, deleteField, query, addDoc, setDoc, getDoc, getDocs, where, doc } from 'firebase/firestore';
export default {
    name:'Trackinginput',
    data () {
      return {
        dialog: false,
        dialog2: false,
        dialog3: false,
        order_details:[],
        list_of_order_details:[],
        add_tracking_ID_value:'',
        net_profit:'',
        order_details_data_ID:'',
        deduction_amount_late_shipment:'',
        admin_database_uid:'',
        HistoryofOrderplaced_list:[],

      }
    },
    created(){
      this.Adminpost_collection();
      this.Adminpostlist_collection();
      this.history_data();
    },
    methods:{

//query to limit 1
async Adminpost_collection(){
    onSnapshot(query(collection(db, 'order_details_for_tracking_and_payment')), (snap) =>{snap.forEach((doc)=>{
        //FETCH TOTAL PROFIT FROM LIST_ODES AND IX IN order_details_data 
        var order_details_data = {
                           ID: doc.id,
                           seller_ID: doc.data().seller_ID,
                           id: doc.data().id, 
                           main_quantity:doc.data().main_quantity, 
                           First_image_selected:doc.data().First_image_selected, 
                           Second_image_selected:doc.data().Second_image_selected, 
                           title: doc.data().title,
                           qty:  doc.data().qty,
                           total_amount: doc.data().total_amount,
                           size: doc.data().size,
                          price: doc.data().price, 
                          client_token_ID:  doc.data().client_token_ID,
                          client_email : doc.data().client_email,
                          client_selected_approved_item_token : doc.data().client_selected_approved_item_token,
                          client_selected_approved_item_admin_monitor_new_id : doc.data().client_selected_approved_item_admin_monitor_new_id,
                          specific_order_id:                doc.data().specific_order_id,
                          addtocart:                        doc.data().addtocart,
                          Order_No:                         doc.data().Order_No,          
                          time_details_of_order_placed:     doc.data().time_details_of_order_placed,
                          delivery_status:                  doc.data().delivery_status,
                          net_profit:                       "",
                          VAT_Commission:                   0.33*doc.data().price,
                        }           

    this.order_details.push(order_details_data);
    })} )
},

async Adminpostlist_collection(){
            onSnapshot(query(collection(db, 'list_of_order_details_for_tracking_and_payment')), (snap) =>{snap.forEach((doc)=>{
                
              var list_of_order_details_data = {
                           ID: doc.id,
                           seller_ID: doc.data().seller_ID,
                           id: doc.data().id, 
                           main_quantity:doc.data().main_quantity, 
                           First_image_selected:doc.data().First_image_selected, 
                           Second_image_selected:doc.data().Second_image_selected, 
                           title: doc.data().title,
                           qty:  doc.data().qty,
                           total_amount: doc.data().total_amount,
                           size: doc.data().size,
                          price: doc.data().price, 
                          client_token_ID:  doc.data().client_token_ID,
                          client_email : doc.data().client_email,
                          client_selected_approved_item_token : doc.data().client_selected_approved_item_token,
                          client_selected_approved_item_admin_monitor_new_id : doc.data().client_selected_approved_item_admin_monitor_new_id,
                          specific_order_id:                doc.data().specific_order_id,
                          addtocart:                        doc.data().addtocart,
                          Order_No:                         doc.data().Order_No,          
                          time_details_of_order_placed:     doc.data().time_details_of_order_placed,
                          delivery_status:                  doc.data().delivery_status,
                                                   
                        }          
                          this.list_of_order_details.push(list_of_order_details_data);
                          console.log('list_of_order_details_data fetched')
            })} )
        },
        async history_data(){
            onSnapshot(query(collection(db, 'HistoryofOrderplaced'), orderBy("currentTime", "desc"), limit(100)), 
            (snap) =>{snap.forEach((doc)=>{
               // this.check_tracking = doc.data().tracking_id;            
               HistoryofOrderplaced_list.push(doc.data())
                
               console.log('HistoryofOrderplaced_list fetched')
            })})
        },

       async add_tracking_ID(){
        this.$refs.tracking_id_value.focus()
       },
       async add_tracking(order_details_data){
       var tracking_id_input_time = Date()
        //fetch by sellerid and obtain deduction total
        
        await onSnapshot(query(collection(db,'admin_database'),
        where('user_ID', '==', order_details_data.seller_ID)),(admin_database_admin)=>{ 
                
                admin_database_admin.forEach ((doc)=>{
                  this.deduction_amount_late_shipment = doc.data().deduction_amount_late_shipment;
                  this.admin_database_uid =  doc.id;       
                } )
                })    
       
        // fetch id
          this.order_details_data_ID = order_details_data.ID;
          //fetch specific id
          this.specific_order_id = order_details_data.specific_order_id;
          //use this specific id to fetch total, delete transactionid field and shipment status then setdoc adding transactionid field and shipment status
          const snapshot = await getAggregateFromServer(query(collection(db, 'list_of_order_details_for_tracking_and_payment'), where('specific_order_id', '==' , this.specific_order_id)),{net_profit: sum('total_amount')})
          this.net_profit = snapshot.data().net_profit;
          
                 await getDoc(doc(db,'order_details_for_tracking_and_payment',this.order_details_data_ID)).then((doc)=>{
                 this.previous_tracking_id_input = doc.data().tracking_id
                   })

                if((tracking_id_input_time>order_details_data.time_details_of_order_placed.time_details_deadline_Time.deadline_Time)&&(this.previous_tracking_id_input="Input Tracking ID")){

                  //update trackingID
                  await updateDoc(doc(db,'order_details_for_tracking_and_payment', this.order_details_data_ID),
                          {
                          delivery_status:                  deleteField(),
                          shipment_status:                  deleteField(),
                          net_profit:                       deleteField(),
                          shipment_status:                  deleteField(),
                          tracking_id:                      deleteField(),
                          time_delay_commission:            deleteField(),

                          }
          );

          await setDoc(doc(db,'order_details_for_tracking_and_payment', this.order_details_data_ID), 
                {
                 delivery_status:      "delivery pending",
                 shipment_status:      "shipment has begun",        
                 net_profit:             this.net_profit*0.67,
                 tracking_id:           this.add_tracking_ID_value, 
                 date_of_shipment_notification: new Date(),   
                 time_delay_commission:            0.1*this.net_profit*0.67        
                }, {merge:true})

                  //
                 await updateDoc(doc(db,'admin_database', this.admin_database_uid),
                {
                deduction_amount_late_shipment :  deleteField(),                                                        
                },
               
);
// setdoc for 10% netprofit negative deduction_amount_late_shipment
                 await setDoc(doc(db,'admin_database',this.admin_database_uid), 
                {
                 deduction_amount_late_shipment: this.deduction_amount_late_shipment - 0.1*this.net_profit*0.67                            
                }, {merge:true})

}else{
  await updateDoc(doc(db,'order_details_for_tracking_and_payment',this.order_details_data_ID),
                          {
                          delivery_status:                  deleteField(),
                          shipment_status:                  deleteField(),
                          net_profit:                       deleteField(),
                          tracking_id:                      deleteField()                
                          }
          );

          await setDoc(doc(db,'order_details_for_tracking_and_payment', this.admin_monitor_id), 
                {
                 delivery_status:      "delivery pending",
                 shipment_status:      "shipment has begun",
                 net_profit:             this.net_profit*0.67,
                 tracking_id:           this.add_tracking_ID_value,             
                }, {merge:true})

}

          this.dialog=true
          //set account straight from admin creation
          //then set deduction field to negative 10% price so that the net profit during payment is calculated
          //call this in tracking iframe
        },

//   migrate_to_monitor_admin(admin_profile){
//     this.$router.push({name:'Adminmonitor', params:{Adminmonitor_id: admin_profile.user_ID}});
//  },
   
// this.Adminpostlist.push(doc.data())
// async post_item_from_this_admin(){

// }
}
}

// item number of pieces date of order and --
// deadline--
// (compare with the time of inputation
//  if greater than,
//  then if greater create a variable for delayed
//   that will deduct 5000naira send this and tracking_ID data to new database)
</script>

<style>

</style>
