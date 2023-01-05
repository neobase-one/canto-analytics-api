import { DecimalScalarType } from "../type-defs/scalars/Decimal";
import { baseFees } from "./queries/baseFees";
import { gasPrices } from "./queries/gasPrices";

export const resolvers = {
    // scalars
    Decimal: DecimalScalarType,
    // queries
    Query: {
        baseFees,
        gasPrices,
    },
    // mutation
}
