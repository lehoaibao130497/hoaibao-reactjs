import React, { useState } from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerAction } from './Register.action'

function Register(props) {
  const [userInfo, setUserInfo] = useState({
    email: "",
    fullName: "",
    password: ""
  })

  const [errorMessage, setErrorMessage] = useState("")
  const history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(userInfo, "userInfo")
    register(userInfo)
  }

  const onChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  const register = async (data) => {
    setErrorMessage('')

    try {
      await props.register(data)
      history.push('/')
    } catch (error) {
      setErrorMessage(error.response.data.message)
    }
  }
  return (
    <Layout productsInCart={[]}>
      <main>
        {/* breadcrumb-area-start */}
        <section className="breadcrumb-area" style={{backgroundImage: 'url("./assets/page-title.png")'}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Register</h1>
                  <ul className="breadcrumb-menu">
                    <li><a href="index.html">home</a></li>
                    <li><span>Register</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* login Area Strat*/}
        <section className="login-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  <h3 className="text-center mb-60">Signup From Here</h3>
                  <p className="text-danger">{errorMessage}</p>
                  <form onSubmit={onSubmit}>
                    <label htmlFor="name">FullName <span>**</span></label>
                    <input name="fullName" id="name" type="text" placeholder="Enter your Full Name..." />
                    <label htmlFor="email-id">Email Address <span>**</span></label>
                    <input name="email" id="email-id" type="text" placeholder="Enter Email address..." />
                    <label htmlFor="pass">Password <span>**</span></label>
                    <input name="password" id="pass" type="password" placeholder="Enter password..." />
                    <div className="mt-10" />
                    <button className="btn theme-btn-2 w-100">Register Now</button>
                    <div className="or-divide"><span>or</span></div>
                    <Link to="/login" className="btn theme-btn w-100">login Now</Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* login Area End*/}
      </main>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.registerReducer.loading
  }
}

const mapDispatchToProps = {
  register: registerAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)