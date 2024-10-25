import {createSlice} from '@reduxjs/toolkit'



const registrationSlice=createSlice({
    name:"user",
    initialState:{
        currentRegistrationDetails:null,
        error:false,
        loading:false,
        email:""
    },
    reducers:{
        registrationDetials(state,action){
            console.log("satte>>",state);
            console.log("action>>",action);
            console.log("payload>>",action.payload);
            state.currentRegistrationDetails=action.payload
        },
    
    }
})
export default  registrationSlice.reducer 
export const{registrationDetials} = registrationSlice.actions





