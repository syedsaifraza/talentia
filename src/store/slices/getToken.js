import {createSlice} from "@reduxjs/toolkit"

const tokkenSlice = createSlice({
    name:"token",
    initialState :{
        value:null
    },
    reducers : {
        setToken : (state ,action) => {
            state.value = action.payload
        }
        
    }
})