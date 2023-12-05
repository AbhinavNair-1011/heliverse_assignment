import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";

 export const fetchPaginatedUsers =createAsyncThunk("fetchPaginatedUser",async({pageNumber,domainFilter,genderFilter,availableFilter})=>{
    try{
        const responce= await axios.get(`https://heliver-assignment-backend.onrender.com/api/paginatedUsers/${pageNumber}`,{
            params: {
               genderFilter,domainFilter,availableFilter
            }
})
        return responce.data

    }catch(err){
        console.log(err)
    }
 })

 export const addUserToTeam=createAsyncThunk("addUsertoTeam",async(data)=>{
try{
    const responce = await axios.post(`https://heliver-assignment-backend.onrender.com/api/addUserToTeam`,data)
    return responce

}catch(err){
    console.log(err)

}
 })

 export const fetchTeam=createAsyncThunk("fetchTeam",async()=>{
    try{
        const responce = await axios.get(`https://heliver-assignment-backend.onrender.com/api/fetchTeam`)
        return responce.data
    
    }catch(err){
        console.log(err)
    
    }
     })

   



const userslice=createSlice({
    name:"user",
    initialState:{
        allUser:[],
        paginatedUser:[],
        filteredUser:[],
        userInput:"",
        domainFilter:"all",
        genderFilter:"all",
        availableFilter:"all",
        team:[],
        pageNumber:1,

    },
    reducers:{
        allUsers:(state,action)=>{
            state.allUser=[]
            action.payload.forEach((user)=>
            {
                    state.allUser.push(user)
            })
        },
        userSearchInput:(state,action)=>{
            state.userInput=action.payload
        },
        genderFilter:(state,action)=>{
                state.genderFilter=action.payload
        },
        domainFilter:(state,action)=>{
          
            state.domainFilter=action.payload

        },
        availableFilter:(state,action)=>{
          
            state.availableFilter=action.payload

        },
        filteredUser:(state,action)=>{
            state.filteredUser=action.payload
        },
        
         incrementPageNumber:(state,action)=>{
           if(state.pageNumber<50){
            state=state.pageNumber++
           }
            
        },
        decrementPageNumber:(state,action)=>{
            if(state.pageNumber>1){
                state=state.pageNumber--

            }

            
        },
       
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchPaginatedUsers.fulfilled,(state,action)=>{
            // console.log(action.payload)
            state.paginatedUser=[]
           action.payload.map(user=>{
                state.paginatedUser.push(user)
           })
        })
        builder.addCase(addUserToTeam.fulfilled, (state,action)=>{
            
        })
        builder.addCase(fetchTeam.fulfilled,(state,action)=>{
            state.team=[]
            action.payload.map((user)=>{
                state.team.push(user)
            })
    
   })
    }
 
})

const store=configureStore({
    reducer:{
        user:userslice.reducer
    }
})

export const userAction=userslice.actions
export default store