import { IBaseFeeInput } from "../../type-defs/inputs/BaseFeeInput"
import { IBaseFee } from "../../type-defs/objects/BaseFee"
import { Client } from 'pg'

export async function baseFees(_: any, args: IBaseFeeInput): Promise<IBaseFee[]> {
    return dbQuery(args)
    
}

function dbQuery(args: IBaseFeeInput): Promise<IBaseFee[]> {
    const config = {
        connectionString: process.env.PG_CONNECTION_STRING
    }
    const client = new Client(config)
    const query = sqlQuery(args)
    client.connect()
    return client
        .query(query)
        .then((result) => {
            client.end()
                .then(() => console.log('client has disconnected'))
                .catch((err) => console.error('error during disconnection', err.stack))
            // transform object into graphql type
            return result.rows.map(row => {
                return {timestamp: row.timestamp, baseFee: row.basefee}
            });
        })
        .catch(e => console.error(e))
}

function sqlQuery(args: IBaseFeeInput): {name: string, text: string, values: any[]} {
    const parameterisedQuery = `
        SELECT 
            to_timestamp(range_timestamp) as timestamp, 
            MAX(used_gas_cost)/10^9 as baseFee
        FROM
        (
            SELECT 
                EXTRACT(epoch FROM 
                    TIMESTAMP WITH TIME ZONE 'epoch' +
                    INTERVAL '1 second' * round(extract('epoch' FROM timestamp)/$3)*$3
                )::int as range_timestamp,
                timestamp,
                base_fee_per_gas * gas_used as used_gas_cost,
                hash
            FROM blocks
            WHERE inserted_at >= $1 AND inserted_at < $2
            ORDER BY range_timestamp DESC
        )  as multi
        GROUP BY range_timestamp
        ORDER BY range_timestamp DESC
    `
    return {
        name: "block-base-fee-in-timerange",
        text: parameterisedQuery,
        values: [args.input.start, args.input.end, args.input.range]
    }
}
