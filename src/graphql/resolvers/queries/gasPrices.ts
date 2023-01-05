import Decimal from "decimal.js"
import { IGasPriceInput } from "../../type-defs/inputs/GasPriceInput"
import { IGasPrice } from "../../type-defs/objects/GasPrice"

export async function gasPrices(_: any, args: IGasPriceInput): Promise<IGasPrice[]> {
    console.log("GAS", args)
    // todo: db query
    return [{
        timestamp: "2022-12-21T05:00:38.000344",
        gasPrice: new Decimal(1000),
    }]
}

// todo: db query function
