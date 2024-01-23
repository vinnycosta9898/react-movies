export const formatCurrency = (amount: number) => {
  const currencyFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
  
  return currencyFormatted
}