const formateCurrency = value => {
  const formatted = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)
  return ` ${formatted} MZN`
}
export default formateCurrency
