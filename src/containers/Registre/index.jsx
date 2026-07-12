import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LogoImg from '../../assets/codeclub_burger_logo_transparente.png'
import LoginImg from '../../assets/hamburguer.jpg'
import { Button, ErrorMessage } from '../../components'
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

export function Registre() {
  const schema = Yup.object().shape({
    name: Yup.string('Digite Seu Nome').required('O nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve no minimo 6 dígitos'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve no minimo 6 dígitos')
      .oneOf([Yup.ref('password')], 'As Senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onchange'
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso')
      } else if (status === 409) {
        toast.error('E-mail já cadastrado! Faça login para continuar')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema tente novamente')
    }
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="Imagem-Hamburguer-ao-lado-de-login" />

      <ContainerItens>
        <Logocode src={LogoImg} alt="codeclub_burger_logo_transparente" />

        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>E-mail</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label>Confirmar Senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }}>
            Criar Conta
          </Button>
        </form>

        <SignLink>
          Ja possui conta?{' '}
          <Link to={'/login'} style={{ color: 'white' }}>
            Sign In
          </Link>
        </SignLink>
      </ContainerItens>
    </Container>
  )
}
