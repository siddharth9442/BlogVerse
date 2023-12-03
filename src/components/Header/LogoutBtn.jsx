import React from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            navigate("/")
        })
    }
  return (
    <button
    className='inline-bock hover:bg-gray-200 rounded-lg px-2 py-1'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn