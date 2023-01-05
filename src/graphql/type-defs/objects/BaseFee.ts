import Decimal from "decimal.js";

export const BaseFee = `
type BaseFee {
    timestamp: DateTime
    baseFee: Decimal
}
`

export interface IBaseFee {
    timestamp: string;
    baseFee: Decimal; // todo: bigdecimal
}
