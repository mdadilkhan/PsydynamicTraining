import {createSlice} from '@reduxjs/toolkit'



const paymentSlice=createSlice({
    name:"user",
    initialState:{
        currentPayementDetails:null,
        error:false,
        loading:false,
        email:""
    },
    reducers:{
        paymentDetails(state,action){
            console.log("satte>>",state);
            console.log("action>>",action);
            console.log("payload>>",action.payload);
            state.currentPayementDetails=action.payload
        },
    
    }
})
export default  paymentSlice.reducer 
export const{paymentDetails} = paymentSlice.actions





