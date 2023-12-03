import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from './User'
import TeamUser from './TeamUser'
import { fetchTeam } from '../store/usersStore'

const Team = () => {
  const team=useSelector(state=>state.user.team)
  
const dispatch=useDispatch()
  useEffect(()=>{

    dispatch(fetchTeam());

  },[])



  return <>
    { team.length!= 0 ? (team.map((user)=><TeamUser key={user.id} user={user}/>) ) : ( <p id="noUsers">No Users in team</p>)
    }
    </>
    
}

export default Team