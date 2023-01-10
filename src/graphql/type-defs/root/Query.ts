export const Query = `
type Query {
  baseFees(input: BaseFeeInput): [BaseFee]
  gasPrices(input: GasPriceInput): [GasPrice]
}
`
