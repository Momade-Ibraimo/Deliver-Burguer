import styled from 'styled-components'

import Background from '../../assets/fundo_comidas_preview_completo.png'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('${Background}');
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginImage = styled.img`
  width: 700px;
  height: 70%;
`

export const Logocode = styled.img`
  width: 216px;
  align-self: center;
  margin: -24px;
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: ${props => (props.error ? '10' : '22px')};
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.42px;
  height: 30.32px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  padding-left: 10px;
`

export const SignLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
