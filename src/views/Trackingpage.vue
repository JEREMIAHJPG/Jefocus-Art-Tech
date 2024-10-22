<template>
  <v-container  >
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
                <center><span class = "font-weight-light">Monitor Delivery</span></center>        
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
          Late Shipment or Early Shipment 
        </th>
        <th class="text-left">
          Price
        </th>
        <th class="text-left">
          Tracking ID Link        
        </th>
        <th class="text-left">
          Track Button        
        </th>
        <th class="" >
          Delivery status
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
      <tr v-for="(Tracking_data_list_data, index) in Tracking_data_list" :key="index">
        <td>Tracking_data_list_data.Order.No</td>
        <td>Tracking_data_list_data.Image</td>
        <td>Tracking_data_list_data.time_details_of_order_placed.time_details_currentTime.time_of_order_placed</td>
        <td>Tracking_data_list_data.time_details_of_order_placed.time_details_deadline_Time.deadline_Timet</td>
        <td>Tracking_data_list_data.price</td>
        <td>
        Tracking_data_list_data.Tracking ID Link
        <div @click="iframe_link(Tracking_data_list_data)">
          <v-btn dark size="small" fab color="yellow" 
      text="Track Shipment"
      @click="dialog = true"
           >
       </v-btn>
       </div>
        </td>
        <td>

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

          <v-btn dark size="small" fab color="Green"
            
            text="Delivered"
            variant="text"
            @click="dialog_delivery_value()"
          ></v-btn>

          <v-btn dark size="small" fab color="red"
            
            text="Returned"
            variant="text"
            @click="dialog_returned_value()"
          ></v-btn>
          
          <v-btn
            text="Close"
            variant="text"
            @click="dialog = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- <v-dialog
      v-model="dialog2"
      max-width="350"
    >
      <v-card :title={dialog2_statement}>
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
     -->
    <v-dialog
      v-model="dialog3"
      width="auto"
    >
      <v-card :title= tracking_statement>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="succ"
            variant="text"
            @click="dialog3 = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  
           </td>
        <td>         
  <div class="pa-4 text-center">
    <v-btn dark size="small" fab color="Green"
            ref="focus_delivered"
            text="Delivered"
            variant="text"
            @focus="focus_d()"           
          ></v-btn>

          <v-btn dark size="small" fab color="red"
            ref="focus_returned"
            text="Returned"
            variant="text"
            @focus="focus_r()"
          ></v-btn>
  </div>
</td>
        <td>{{Tracking_data_list_data.Vat_Commission}}</td>
        <td>{{Tracking_data_list_data.net_profit}}</td>

      </tr>
    </tbody>
  </v-table>
    
        </v-sheet>
        
      </v-col>
      <v-col     
        cols="12"
        xs="4"
        sm="12"
        md="12" 
      >
        <v-sheet class="" height="50px">
            <v-toolbar color="grey">
            <v-toolbar-title class="headline text-uppercase text-xs-center" >             
                <center><span class = "font-weight-light">Control Payment</span></center>        
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
      <tr v-for="(History_data_list_data, index) in History_data_list" :key="index"      
      >
        <td>{{History_data_list_data.Order_No}} </td>
        <td>{{History_data_list_data.First_image_selected}} </td>
        <td>{{History_data_list_data.time_details_of_order_placed.time_details_currentTime.time_of_order_placed}} </td>

        <td>{{History_data_list_data.date_of_shipment_notification}}</td>
        
        <!-- <td>
          payment status that is payment assured or History_data_list_data/s returned
  <div class="pa-4 text-center">
  </div>
</td> -->
        <td>{{History_data_list_data.delivery_success_record_date}}</td>
        <td>{{History_data_list_data.delivery_status}} </td>
        <td>{{History_data_list_data.net_profit}}</td>

      </tr>
    </tbody>
  </v-table>

        </v-sheet>
        
      </v-col>
    <!-- </v-row> -->
  </v-container>

</template>

<script>
import { db } from '@/firebase';
import { onSnapshot,collection, getAggregateFromServer,sum,updateDoc,deleteField,addDoc, setDoc, getDoc, getDocs, where, doc } from 'firebase/firestore';
export default {
name:'Trackingpage',
data(){
    return{
        dialog: false,
        dialog2: false,
        dialog3: false,
        dialog2_statement:"",
        Tracking_data_list:[],
        iframe_link_data:'',
        admin_database_uid:'',
        net_profit:'',
        ID_order_delete:'',
        ID_delete:'',
        tracking_statement:'',
        History_data_list:[],
    }
},
created(){
  this.tracking_list_collection();
},
methods:{
  async tracking_list_collection(){
            onSnapshot(query(collection(db, 'order_details_for_tracking_and_payment')), (snap) =>{snap.forEach((doc)=>{
               // this.check_tracking = doc.data().tracking_id;

                if(doc.data().tracking_id != "Input Tracking ID"){
                  Tracking_data_list.push(doc.data())
                }
               console.log('Tracking_data_list fetched')
            })} )
        },

        async history_collection(){
          onSnapshot(query(collection(db, 'HistoryofOrderplaced')), (snap) =>{snap.forEach((doc)=>{
               // this.check_tracking = doc.data().tracking_id;            
                  History_data_list.push(doc.data())
                
               console.log('History_data_list fetched')
            })} )
        },

        iframe_link(Tracking_data_list_data){
          this.iframe_link_data = Tracking_data_list_data.tracking_id
        },
  dialog_delivery_value(){
    this.dialog3 = true;
    
    this.refs.focus_delivered.focus();
    //setdoc delivery status as delivery successfull
    
    // this.dialog2_statement=`Are you sure the delivery is successful ?`
  },
  dialog_returned_value(){
    this.dialog3 = true;
    
    this.refs.focus_returned.focus();
    //setdoc delivery status as delivery returned
    // this.dialog2_statement=`Are you sure the Item/s is/are returned ?`
  },
  async focus_d(Tracking_data_list_data){
//change delivery and shipment status to delivered or shipped and payment status to payment assured
await updateDoc(doc(db,'order_details_for_tracking_and_payment',Tracking_data_list_data.seller_ID),
                          {
                          delivery_status:                  deleteField(),
                          shipment_status:                  deleteField(),                
                          }
          );

await setDoc(doc(db,'order_details_for_tracking_and_payment',Tracking_data_list_data.seller_ID), 
                {
                 delivery_status:      "Delivery Successfull",
                 shipment_status:      "Shipment Successfull",
                 delivery_success_record_date:       Date()            
                }, {merge:true})


//if delivered is clicked the admin_database final_net_profit should be adjusted just as the deduction is adjusted and the database for each item
    onSnapshot(query(collection(db, 'order_details_for_tracking_and_payment')), (snap) => {
      snap.forEach((doc) => {
        this.net_profit = doc.data().net_profit;       
      });
    })

await getDocs(query(collection(db,'admin_database'),
        where('user_ID', '==', Tracking_data_list_data.seller_ID))).then(admin_database_admin=>{ 
                
                admin_database_admin.forEach ((doc)=>{
                  this.final_net_profit = doc.data().final_net_profit;
                    this.admin_database_uid =  doc.id;                              
                } )
                });

                await updateDoc(doc(db,'admin_database', this.admin_database_uid),
                {
                final_net_profit :  deleteField(),                                                        
                },
               
);
// setdoc final_net_profit
                 await setDoc(doc(db,'admin_database',this.admin_database_uid), 
                {
                 final_net_profit: this.final_net_profit + this.net_profit                            
                }, {merge:true});

//via specific_order_id is pushed to history for reference purposes then delete the ones in the order_details_for_tracking_and_payment
    onSnapshot(query(collection(db, 'order_details_for_tracking_and_payment'), where('seller_ID', '==', Tracking_data_list_data.seller_ID)),
      (check_id) => {
        check_id.forEach((doc) => {
          this.specific_order_id = doc.data().specific_order_id;
          this.ID_order_delete = doc.id;

          setDoc(doc(db,'order_details_for_tracking_and_payment', doc.id), 
                {
                  payment_status:        'payment assured'         
                }, {merge:true})

          addDoc(collection(db, 'HistoryofOrderplaced'), doc.data()).then(()=>{
            deleteDoc(doc(db, 'order_details_for_tracking_and_payment', doc.id));
            
          })
        });
      });

   onSnapshot(query(collection(db, 'list_of_order_details_for_tracking_and_payment'), where('specific_order_id', '==', this.specific_order_id)),
      (check) => {
        check.forEach((doc) => {
          this.specific_order_id = doc.data().specific_order_id;
          this.ID_delete = doc.id;
          addDoc(collection(db, 'HistoryofOrderitemsplaced'), doc.data()).then(() => {
            deleteDoc(doc(db, 'list_of_order_details_for_tracking_and_payment', doc.id));
            
        });
        });
      });
  this.tracking_statement = 'delivery successfull';
  this.dialog3=true;
  },
  async focus_r(Tracking_data_list_data){
//if returned is clicked the database for each item via specific_order_id is pushed to history for reference purposes
//then delete the ones in the order_details_for_tracking_and_payment
//and list_of_order_details_for_tracking_and_payment
onSnapshot(query(collection(db, 'order_details_for_tracking_and_payment'),where('seller_ID', '==', Tracking_data_list_data.seller_ID)),
      (check_id) => {
        check_id.forEach((doc) => {
          this.specific_order_id = doc.data().specific_order_id;
          this.ID_order_delete = doc.id;

          setDoc(doc(db,'order_details_for_tracking_and_payment', doc.id), 
                {
                  payment_status:        'no payment'         
                }, {merge:true})
          addDoc(collection(db, 'HistoryofOrderplaced'), doc.data()).then(()=>{

            deleteDoc(doc(db, 'order_details_for_tracking_and_payment', doc.id))
          })
        });
      });

   onSnapshot(query(collection(db, 'list_of_order_details_for_tracking_and_payment'),
  where('specific_order_id', '==', this.specific_order_id)),
      (check) => {
        check.forEach((doc) => {
          this.specific_order_id = doc.data().specific_order_id;
          this.ID_delete = doc.id;

          

          addDoc(collection(db, 'HistoryofOrderitemsplaced'), doc.data()).then(() => {
            
            deleteDoc(doc(db, 'list_of_order_details_for_tracking_and_payment', doc.id));
          });
        });
      });

    this.tracking_statement = 'Item/s returned';
    this.dialog3=true;
    //CHECK DOCUMENTATION FOR ORDER QUERIES FOR ASCENDING AND DESCENDING ORDER
    //do images and the iteraton contents
    //

//Ayo
//+2348127208187
  },

}
}
</script>

<style>

</style>