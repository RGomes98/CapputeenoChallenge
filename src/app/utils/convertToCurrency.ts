export const convertToCurrency = (priceInCents: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(priceInCents / 100);
};