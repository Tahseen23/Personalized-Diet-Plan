import {createSlice} from "@reduxjs/toolkit"
import { act } from "react"

const initialState={
  email:'',
  plan:[],
  foodplan:[],
  planTitle:'',
  foodTitle:'',
  login:false
}
export const details=createSlice({
  name:'details',
  initialState,
  reducers:{
    setEmail:(state,action)=>{
      state.email=action.payload
    },
    setPlan:(state,action)=>{
      state.plan=action.payload
    },
    setfoodPlan:(state,action)=>{
      state.foodplan=action.payload
    },
    setFoodTitle:(state,action)=>{
      state.foodTitle=action.payload
    },
    setPlanTitle:(state,action)=>{
      state.planTitle=action.payload
    },
    setLogin:(state,action)=>{
      state.login=action.payload
    }
  }
})

export const {setEmail,setPlan,setfoodPlan,setFoodTitle,setPlanTitle,setLogin}=details.actions

export default details.reducer