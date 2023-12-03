import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { userAction } from "../store/usersStore";


const Search = () => {
  const dispatch=useDispatch()

  const [userInput,setUserInput]=useState("");

  

  useEffect(()=>{
    dispatch(userAction.userSearchInput(userInput))

  },[userInput])

  // dispatch(userAction.genderFilter)
  const genderFilter=useSelector(state=>state.user.genderFilter);
  const domainFilter=useSelector(state=>state.user.domainFilter);
  const availableFilter=useSelector(state=>state.user.availableFilter);




  return (

    <>
    <form id="searchUser_form">
                <label id="searchBar_label" htmlFor="searchBar"> </label>
                <input type="text" id="searchBar" placeholder="Search user here" value={userInput} onChange={(e)=>{setUserInput(e.target.value)}} />
                <div id="filterDiv">
                  <label>*filter works with Search*</label>
              <select 
              id="genderFilter"
              value={genderFilter}
              onChange={(e)=>{dispatch(userAction.genderFilter(e.target.value))}}
              >
                <option value="all" >Gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="agender">agender</option>
                <option value="bigender">bigender</option>
                <option value="genderfluid">genderfluid</option>

                <option value="polygender">polygender</option>
                <option value="non-binary">non-binary</option>
                <option value="genderqueer">genderqueer</option>



              </select>
              <select 
              id="domainFilter"
              value={domainFilter}
              onChange={(e)=>{dispatch(userAction.domainFilter(e.target.value))}}
              >
                <option value="all" >Domain</option>
                <option value="it">It</option>
                <option value="business development">Business Develpoment</option>
                <option value="Finance">Finance</option>
                <option value="ui designing">UI Designing</option>
                <option value="management">Management</option>
                <option value="sales">Sales</option>



              </select>
              <select
              
              id="availableFilter"
              value={availableFilter}
              onChange={(e)=>{dispatch(userAction.availableFilter(e.target.value))}}
              >
                <option value="all" >Available</option>
                <option value="true">true</option>
                <option value="false">false</option>
            
              </select>
              </div>
            </form>
    </>
  )
}

export default Search