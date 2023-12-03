import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../store/usersStore';



const Teamuser = ({user}) => {


    return <>

        <div id="userCard_container">
            <div id="userCard">
                <img src={user.avatar} alt="" id="userImage" />
                <h4 className="userName" id="userName"> {`${user.first_name} ${user.last_name}`} </h4>
                <p className="userDetails" id="email"><span className="userDetails_spanTag">Email :</span> {user.email}</p>
                <p className="userDetails" id="gender"><span className="userDetails_spanTag">Gender :</span> {user.gender} </p>
                <p className="userDetails" id="domain"><span className="userDetails_spanTag">Domain :</span> {user.domain}</p>
                <p className="userDetails" id="available"><span className="userDetails_spanTag">Available :</span> {user.available.toString()}</p>

            </div>
        </div>




    </>
}

export default Teamuser