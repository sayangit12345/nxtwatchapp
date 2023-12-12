import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 10px;
  min-width: 30%;
  height: 400px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 20px #0f0f0f;
`
export const LogoContainer = styled.div`
  text-align: center;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
`
export const Label = styled.label`
  color: ${props => props.color};
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 10px;
`
export const Input = styled.input`
  height: 40px;
  border: #b6c5ff solid 1px;
  border-radius: 5px;
  background-color: transparent;
  padding: 10px;
  color: #b6c5ff;
`
export const Button = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
  height: 40px;
  width: 100%;
  border-radius: 10px;
  border: none;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
`
export const WebsiteLogo = styled.img`
  width: 30%;
  margin-top: 10px;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
`
