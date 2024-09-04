/* eslint-disable no-constant-condition */
import { createSlice } from "@reduxjs/toolkit"

type counterState={
    count:number,
    boxCount:number[]
}

const initialState:counterState={
    count:0,
    boxCount:[]
}

export const CounterSlice=createSlice({
    name:"Counter",
    initialState,
    reducers:{


        increment:(state)=>{
            state.count=state.count+1
            if((state.count)%5==0){
                    state.boxCount.push(state.boxCount.length+1)
            }
        },
        decrement:(state)=>{
            state.count=state.count-1
            if((state.count)%5===0){
                state.boxCount.pop()
        }
        },

    }
})


export const{increment, decrement}=CounterSlice.actions
export default CounterSlice.reducer