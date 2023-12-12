import {Component} from 'react'

import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import FunctionalityContext from '../../Context/functionalityContext'
import {
  LoginBgContainer,
  LoginContainer,
  LogoContainer,
  FormContainer,
  Label,
  Input,
  Button,
  ErrorMsg,
  WebsiteLogo,
  ShowPasswordContainer,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeShowPassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log('error')
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showSubmitError,
      errorMsg,
      showPassword,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <FunctionalityContext.Consumer>
        {value => {
          const {lightTheme} = value
          const backGroundColor = lightTheme === true ? '#ffffff' : '#0f0f0f'
          const labelTextColor = lightTheme === true ? '#1e293b' : '#ffffff'
          return (
            <LoginBgContainer
              bgColor={lightTheme === true ? '#ffffff' : '#181818'}
            >
              <LoginContainer bgColor={backGroundColor}>
                <LogoContainer>
                  <WebsiteLogo
                    src={
                      lightTheme === true
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    }
                    alt="website logo"
                  />
                </LogoContainer>
                <FormContainer onSubmit={this.submitForm}>
                  <Label htmlFor="username" color={labelTextColor}>
                    USERNAME
                  </Label>
                  <Input
                    type="text"
                    placeholder="USERNAME"
                    id="username"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                  <Label htmlFor="password" color={labelTextColor}>
                    PASSWORD
                  </Label>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="PASSWORD"
                    id="password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                  <ShowPasswordContainer>
                    <Input
                      type="checkbox"
                      id="checkbox"
                      onChange={this.onChangeShowPassword}
                    />
                    <Label htmlFor="checkbox" color={labelTextColor}>
                      Show Password
                    </Label>
                  </ShowPasswordContainer>
                  <Button type="submit">Login</Button>
                  {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </FormContainer>
              </LoginContainer>
            </LoginBgContainer>
          )
        }}
      </FunctionalityContext.Consumer>
    )
  }
}
export default Login
