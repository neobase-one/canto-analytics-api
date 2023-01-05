import Decimal from "decimal.js"
import { IBaseFeeInput } from "../../type-defs/inputs/BaseFeeInput"
import { IBaseFee } from "../../type-defs/objects/BaseFee"

export async function baseFees(_: any, args: IBaseFeeInput): Promise<IBaseFee[]> {
    console.log("BASE", args)
    // perform db query
    return [{
            timestamp: "2022-12-21T05:00:38.000344",
            baseFee: new Decimal(1000),
        }]
    
}

// todo: db query function
