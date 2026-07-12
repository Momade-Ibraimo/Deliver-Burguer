import propTypes from 'prop-types'

import { ComponentButton } from './styles.js'

export function Button({ children, ...rest }) {
  return <ComponentButton {...rest}>{children}</ComponentButton>
}

Button.propTypes = {
  children: propTypes.string
}
