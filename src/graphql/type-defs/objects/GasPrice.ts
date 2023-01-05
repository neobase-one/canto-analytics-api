import Decimal from "decimal.js";

export const GasPrice = `
type GasPrice {
    timestamp: DateTime
    gasPrice: Decimal
}
`

export interface IGasPrice {
    timestamp: string;
    gasPrice: Decimal; // todo: big decimal
}
