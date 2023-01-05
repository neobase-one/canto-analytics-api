import { DateTimeScalarType } from "../type-defs/scalars/DateTime";
import { DecimalScalarType } from "../type-defs/scalars/Decimal";
import { baseFees } from "./queries/baseFees";
import { gasPrices } from "./queries/gasPrices";

export const resolvers = {
    // scalars
    Decimal: DecimalScalarType,
    DateTime: DateTimeScalarType,
    // queries
    Query: {
        baseFees,
        gasPrices,
    },
    // mutation
}
