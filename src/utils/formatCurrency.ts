export const formatCurrency = (amount: number) => {
  const currencyFormatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)

  return currencyFormatted
}
