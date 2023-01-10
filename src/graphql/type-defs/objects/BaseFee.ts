import Decimal from "decimal.js";

export const BaseFee = `
type BaseFee {
    timestamp: DateTime
    # in gacanto
    baseFee: Decimal
}
`

export interface IBaseFee {
    timestamp: string;
    baseFee: Decimal;
}
