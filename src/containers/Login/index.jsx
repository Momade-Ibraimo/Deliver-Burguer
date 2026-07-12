import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LogoImg from '../../assets/codeclub_burger_logo_transparente.png'
import LoginImg from '../../assets/hamburguer.jpg'
import { Button, ErrorMessage } from '../../components'
import { UseUser } from '../../hooks/UserContext.jsx'
import api from '../../services/api.jsx'
import {
  Container,
  ContainerItens,
  LoginImage,
  Input,
  SignLink,
  Logocode,
  Label
} from './styles.js'

export function Login() {
  const navigate = useNavigate()
  const { putUserData } = UseUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve no minimo 6 dígitos')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo(a)',
        error: 'Verifique seu e-mail e senha 🤔'
      }
    )
    putUserData(data)

    setTimeout(() => {
      if (data.admin) {
        navigate('/pedidos')
      } else {
        navigate('/')
      }
    }, 1000)
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="Imagem-Hamburguer-ao-lado-de-login" />

      <ContainerItens>
        <Logocode src={LogoImg} alt="codeclub_burger_logo_transparente" />

        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>E-mail</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 75, marginBottom: 25 }}>
            Entrar
          </Button>
        </form>

        <SignLink>
          Não tem conta?{' '}
          <Link to={'/cadastro'} style={{ color: 'white' }}>
            Sign Up
          </Link>
        </SignLink>
      </ContainerItens>
    </Container>
  )
}
