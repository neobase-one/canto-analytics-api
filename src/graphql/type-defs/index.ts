import { gql } from 'graphql-tag';

// Inputs
import { BaseFeeInput } from './inputs/BaseFeeInput';
import { GasPriceInput } from './inputs/GasPriceInput';
// Objects
import { BaseFee } from './objects/BaseFee';
import { GasPrice } from './objects/GasPrice';
// Root types
import { Query } from './root/Query'; // tslint:disable-line ordered-imports
import { DateTimeScalar } from './scalars/DateTime';
import { DecimalScalar } from './scalars/Decimal';

const typeDefStrings = [
  // Scalar
  DecimalScalar,
  DateTimeScalar,
  // Inputs
  BaseFeeInput,
  GasPriceInput,
  // Objects
  BaseFee,
  GasPrice,
  // Root types
  Query
];

const typeDefs = typeDefStrings.map(typeDef => gql(typeDef));

export default typeDefs;
