import Decimal from "decimal.js";

export const GasPrice = `
type GasPrice {
    timestamp: String
    gasPrice: Decimal
}
`

export interface IGasPrice {
    timestamp: string;
    gasPrice: Decimal; // todo: big decimal
}
