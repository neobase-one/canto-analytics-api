import Decimal from "decimal.js"
import { IGasPriceInput } from "../../type-defs/inputs/GasPriceInput"
import { IGasPrice } from "../../type-defs/objects/GasPrice"
import { Client } from 'pg'

export async function gasPrices(_: any, args: IGasPriceInput): Promise<IGasPrice[]> {
    return dbQuery(args)
}

function dbQuery(args: IGasPriceInput): Promise<IGasPrice[]> {
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
                return {timestamp: row.timestamp, gasPrice: row.gasprice}
            });
        })
        .catch(e => console.error(e))
}

function sqlQuery(args: IGasPriceInput): {name: string, text: string, values: any[]} {
    const parameterisedQuery = `
        SELECT 
            to_timestamp(range_timestamp) as timestamp, 
            MAX(gas_price)/10^9 as gasprice
        FROM
        (
            SELECT 
                EXTRACT(epoch FROM 
                    TIMESTAMP WITH TIME ZONE 'epoch' +
                    INTERVAL '1 second' * round(extract('epoch' FROM inserted_at)/$3)*$3
                )::int as range_timestamp,
                inserted_at,
                gas_price,
                hash,
                block_hash,
                inserted_at
            FROM transactions
            WHERE inserted_at >= $1 AND inserted_at < $2
            ORDER BY range_timestamp DESC
        )  as multi
        GROUP BY range_timestamp
        ORDER BY range_timestamp DESC
        LIMIT 2000
    `
    return {
        name: "transaction-gas-price-in-timerange",
        text: parameterisedQuery,
        values: [args.input.start, args.input.end, args.input.range]
    }
}
