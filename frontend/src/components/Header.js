import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchTeam } from '../store/usersStore'

const Header = () => {
  const dispatch=useDispatch();


  const team=useSelector(state=>state.user.team)

 const handleClick=()=>{
  dispatch(fetchTeam());

 }


  

 
  return (
    <header>
        <h1 id="headerHeading">HELIVERSE ASSIGNMENT</h1>
        <nav id="navTag">
            <ul id="navList">
               <li className="NavList_item"> <Link className="nav_list" to="/">Home</Link> </li>
                <li className="NavList_item" > <Link onClick={handleClick} className="nav_list"to="team">Team</Link></li>

            </ul>
            
        </nav>
    </header>
  )
}

export default Header