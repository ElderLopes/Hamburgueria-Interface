import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`

export const RegisterImg = styled.img`
  height: 90.8%;
  width: 50%;
  border-radius: 10px 0 0 10px;
`
export const ContainerItens = styled.div`
  background-color: black;
  background-size: cover;
  background-position: center;
  padding: 25px 75px;

  border-radius: 0 10px 10px 0;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #ffffff;
    margin-top: 10px;
  }
  img {
    width: 300px;
  }
  form {
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: ${props => (props.error ? '12px' : '28px')};
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 5px;
  color: #cc1717;
`
