import {createSlice} from "@reduxjs/toolkit"

const initialState={
  email:'',
  plan:[],
  foodplan:[],
  planTitle:'',
  foodTitle:''
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
    }
  }
})

export const {setEmail,setPlan,setfoodPlan,setFoodTitle,setPlanTitle}=details.actions

export default details.reducer