import 'module-alias/register';

import { parser } from './c99.js';

console.log (JSON.stringify (parser.parse ('unsigned int test(){}').toJSON (), null, 3));