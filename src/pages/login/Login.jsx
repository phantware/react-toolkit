import React, { useState, useEffect } from 'react'
import { authUser } from '../../store/actions/auth'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = ({ authUser, token }) => {
  const [data, setData] = useState({ email: '', password: '' })

  const onSubmit = () => {
    authUser(data)
  }
  const onchangeHandler = (e) => {
    const { name, value } = e.target
    setData((pre) => ({ ...pre, [name]: value }))
  }
  const router = useNavigate()
  useEffect(() => {
    if (token) {
      router('/home')
    }
  }, [router, token])
  return (
    <div>
      <label htmlFor=''>Email: </label>
      <input
        type='email'
        name='email'
        placeholder='Enter your email'
        onChange={onchangeHandler}
      />
      <label htmlFor=''>Password: </label>
      <input
        type='password'
        name='password'
        placeholder='Enter your password'
        onChange={onchangeHandler}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}
const mapStateToProps = (state) => ({ token: state.auth.token })
export default connect(mapStateToProps, { authUser })(Login)
