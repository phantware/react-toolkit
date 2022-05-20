import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/about/About'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Navigation = ({ token, isAuthenticated }) => {
  const router = useNavigate()
  useEffect(() => {
    if (token && isAuthenticated) {
      router('/home')
    } else {
      router('/login')
    }
  }, [])
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='login' element={<Login />} />
    </Routes>
  )
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  isAuthenticated: state.auth.isAuthenticated,
})
export default connect(mapStateToProps, {})(Navigation)
