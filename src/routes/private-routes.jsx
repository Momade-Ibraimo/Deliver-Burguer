import { Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Header } from '../components'

function PrivateRoute({ component: Component, isAdmin }) {
  const user = localStorage.getItem('codeburguer:userData')

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/" replace />
  }
  return (
    <>
      {!isAdmin && <Header />}
      <Component />
    </>
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
  isAdmin: PropTypes.bool
}

export default PrivateRoute
