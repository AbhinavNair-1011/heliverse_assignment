import { useDispatch, useSelector } from 'react-redux'
import User from './User.js'
import axios, { all } from 'axios'
import { fetchPaginatedUsers, userAction } from '../store/usersStore.js'
import { useEffect } from 'react'


const Users = () => {

  const dispatch = useDispatch()

  const genderFilter=useSelector(state=>state.user.genderFilter);
  const domainFilter=useSelector(state=>state.user.domainFilter);
  const availableFilter=useSelector(state=>state.user.availableFilter);

  
  
  const pageNumber = useSelector(state => state.user.pageNumber)

  useEffect(() => {
   
    dispatch(fetchPaginatedUsers({pageNumber,domainFilter,genderFilter,availableFilter}))
  }, [pageNumber,genderFilter,domainFilter,availableFilter])

  const allUser = useSelector((state) => state.user.allUser);
  const paginatedUser = useSelector(state => state.user.paginatedUser)

  const userSearchInput = useSelector(state => state.user.userInput);

  // const genderFilter=useSelector((state)=>state.user.genderFilter)


  // console.log(genderFilter)


  // console.log(userSearchInput)
  



  let searchedUser = allUser.filter((user) => {
    {
      let username = `${user.first_name} ${user.last_name}`

      for (let i = 0; i < userSearchInput.length; i++) {
        if (username[i].toLowerCase() !== userSearchInput[i].toLowerCase()) {
          return false;
        }
      }


      return true;
      // return username.toLowerCase()===userInput.toLowerCase()
    }
  })
  // console.log(searchedUser)




  return <>
  
  
    {!userSearchInput ? (paginatedUser.map(user =>
        
      <User key={user.id} user={user} />
      
    ))  : (searchedUser.map(user =>
      <User key={user.id} user={user} />))}
  </>

}

export default Users