import Decimal from "decimal.js";

export const GasPrice = `
type GasPrice {
    timestamp: DateTime
    # in gacanto
    gasPrice: Decimal
}
`

export interface IGasPrice {
    timestamp: string;
    gasPrice: Decimal;
}
