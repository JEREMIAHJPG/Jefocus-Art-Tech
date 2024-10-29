<template>
        <v-col     
        cols="12"
        xs="4"
        sm="12"
        md="12" 
        >
        <v-sheet class="" >                         
                <center><div class = "font-weight-light" id="myPlot" style="width: 100%; max-width: 700px"></div></center>        
        </v-sheet>
        <v-sheet class="" height="50px">
            <v-toolbar color="grey">
            <v-toolbar-title class="headline text-uppercase text-xs-center" >             
                <center><span class = "font-weight-light">Your History with Jefocus Art</span></center>        
            </v-toolbar-title>
        </v-toolbar>
        </v-sheet>
        <v-sheet class="ma-2 pa-2 " height="auto">
            
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
      <tr v-for="(History_data_list_data_admin, index) in History_data_list_admin" :key="index"      
      >
        <td>{{History_data_list_data_admin.Order_No}} </td>
        <td>
          <div class="image_view_tracking_page">
        <img style="z-index:-1;" :src="History_data_list_data_admin.First_image_selected"  class="image_view_content_tracking_page">
        </div>        
         </td>
        <td>{{History_data_list_data_admin.time_details_of_order_placed.time_details_currentTime.time_of_order_placed}}</td>

        <td>{{History_data_list_data_admin.date_of_shipment_notification}}</td>
        
        <!-- <td>
          payment status that is payment assured or History_data_list_data_admin/s returned
  <div class="pa-4 text-center">
  </div>
</td> -->
        <td>{{History_data_list_data_admin.delivery_success_record_date}}</td>
        <td>{{History_data_list_data_admin.delivery_status}} </td>
        <td>{{History_data_list_data_admin.net_profit}}</td>

      </tr>
    </tbody>
  </v-table>

        </v-sheet>
        
      </v-col>
</template>

<script>
import { db } from '@/firebase';
import { onSnapshot,collection, getAggregateFromServer, sum, updateDoc, deleteField, addDoc, setDoc, getDoc, getDocs, where, doc } from 'firebase/firestore';
export default {
   name:'AdminHistoryofOrderplaced', 
   data(){
    return{
      client_token_ID : JSON.parse(localStorage.getItem(`userData`)).token,
      History_data_list_admin:[],
      Time:[],
      Totalpay:[],     
    }
   },
   created(){
    this.loadAdminhistory();
    this.Plotgraph();
   },
   methods:{
    async loadAdminhistory(){onSnapshot(query(collection(db, 'getting_token_user_id'), where('reclaimed_get_token', '==' , this.$route.params.AdminHistoryofOrderplaced)),
            (Admin) =>{Admin.forEach((doc) => {
              onSnapshot(query(collection(db, 'HistoryofOrderplaced'), where('seller_ID', '==' , doc.data().get_ID), orderBy("time_of_payment_assurance", "desc"), limit(100)),
            (Adminhistory) =>{Adminhistory.forEach((history) => {
              this.History_data_list_admin.push(history.data())        
            })})
             // this.get_ID = doc.data().get_ID;         
            })});
   },
  //create some array of time of payment and history total for graph plotting
  async Plotgraph(){
    await onSnapshot(query(collection(db, 'HistoryofOrderplaced'), where('seller_ID', '==' , doc.data().get_ID), orderBy("time_of_payment_assurance"), limit(100)),
            (Adminhistory) =>{Adminhistory.forEach((history) => {
              this.Time.push(history.data().time_of_payment_assurance)        
              this.Totalpay.push(history.data().history_profit)        
            })});
     var data = await [{x:this.Time, y:this.Totalpay, mode:"line"}];
            var layout = await {xaxis:{range: [0,this.Time.length], title:"Time"}, yaxis:{range:[0,this.Totalpay.length], title:"Totalpay"}, title: "Totalpay vs Time Progress of your business with Jefocus Art and Tech"};
        Plotly.newPlot("myPlot", data, layout);        
  }
  }
}
</script>

<style>

</style>