import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPaginatedUsers, userAction } from '../store/usersStore'


const Buttons = () => {
const myref=useRef(null)
const dispatch=useDispatch()
    const pageNumber=useSelector(state=>state.user.pageNumber);

    const handleIncrement=()=>{
            
        dispatch(userAction.incrementPageNumber())
        dispatch(fetchPaginatedUsers(pageNumber))   
      

    }
    const handleDecrement=()=>{
        dispatch(userAction.decrementPageNumber())
        dispatch(fetchPaginatedUsers(pageNumber))        


    }

    

  return <>
  <div id="buttonDiv">

  <button  className="button"id="decrementButton"onClick={handleDecrement} >{"<"}</button>
  <p id="pageNumber" >{pageNumber}</p>
  <button className="button" id="incrementButton" onClick={handleIncrement} >{">"}</button>

  </div>

  </>


}


export default Buttons