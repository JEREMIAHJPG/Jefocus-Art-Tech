<template>
  
</template>

<script>
 import axios from 'axios';
  import {LOADING_SPINNER_SHOW_MUTATION, LOGIN_ACTION } from '@/store/storeconstants';

import axios from 'axios';
import { mapActions, mapMutations } from 'vuex';
import {storage, db} from "@/firebase"

import { ref,uploadBytes,uploadBytesResumable,getDownloadURL } from "firebase/storage"

import { collection, addDoc, setDoc, getDoc, getDocs, query, where, doc } from 'firebase/firestore';
export default {
    data() {
        return{
            fname:'',
            lname:'',
            guest_email:'',
            profession:'',
            subject:'',
            response:'',

        };
}
}
</script>

<style>

</style>