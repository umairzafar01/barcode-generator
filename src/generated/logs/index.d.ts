
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BarcodeLog
 * 
 */
export type BarcodeLog = $Result.DefaultSelection<Prisma.$BarcodeLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BarcodeAction: {
  GENERATED: 'GENERATED',
  PRINTED: 'PRINTED'
};

export type BarcodeAction = (typeof BarcodeAction)[keyof typeof BarcodeAction]

}

export type BarcodeAction = $Enums.BarcodeAction

export const BarcodeAction: typeof $Enums.BarcodeAction

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BarcodeLogs
 * const barcodeLogs = await prisma.barcodeLog.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BarcodeLogs
   * const barcodeLogs = await prisma.barcodeLog.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.barcodeLog`: Exposes CRUD operations for the **BarcodeLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BarcodeLogs
    * const barcodeLogs = await prisma.barcodeLog.findMany()
    * ```
    */
  get barcodeLog(): Prisma.BarcodeLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BarcodeLog: 'BarcodeLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "barcodeLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BarcodeLog: {
        payload: Prisma.$BarcodeLogPayload<ExtArgs>
        fields: Prisma.BarcodeLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarcodeLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarcodeLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarcodeLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarcodeLogPayload>
          }
          findFirst: {
            args: Prisma.BarcodeLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarcodeLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarcodeLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarcodeLogPayload>
          }
          findMany: {
            args: Prisma.BarcodeLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarcodeLogPayload>[]
          }
          create: {
            args: Prisma.BarcodeLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarcodeLogPayload>
          }
          createMany: {
            args: Prisma.BarcodeLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarcodeLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarcodeLogPayload>[]
          }
          delete: {
            args: Prisma.BarcodeLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarcodeLogPayload>
          }
          update: {
            args: Prisma.BarcodeLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarcodeLogPayload>
          }
          deleteMany: {
            args: Prisma.BarcodeLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarcodeLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarcodeLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarcodeLogPayload>[]
          }
          upsert: {
            args: Prisma.BarcodeLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarcodeLogPayload>
          }
          aggregate: {
            args: Prisma.BarcodeLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarcodeLog>
          }
          groupBy: {
            args: Prisma.BarcodeLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarcodeLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarcodeLogCountArgs<ExtArgs>
            result: $Utils.Optional<BarcodeLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    barcodeLog?: BarcodeLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model BarcodeLog
   */

  export type AggregateBarcodeLog = {
    _count: BarcodeLogCountAggregateOutputType | null
    _min: BarcodeLogMinAggregateOutputType | null
    _max: BarcodeLogMaxAggregateOutputType | null
  }

  export type BarcodeLogMinAggregateOutputType = {
    id: string | null
    action: $Enums.BarcodeAction | null
    productId: string | null
    createdAt: Date | null
  }

  export type BarcodeLogMaxAggregateOutputType = {
    id: string | null
    action: $Enums.BarcodeAction | null
    productId: string | null
    createdAt: Date | null
  }

  export type BarcodeLogCountAggregateOutputType = {
    id: number
    action: number
    productId: number
    createdAt: number
    _all: number
  }


  export type BarcodeLogMinAggregateInputType = {
    id?: true
    action?: true
    productId?: true
    createdAt?: true
  }

  export type BarcodeLogMaxAggregateInputType = {
    id?: true
    action?: true
    productId?: true
    createdAt?: true
  }

  export type BarcodeLogCountAggregateInputType = {
    id?: true
    action?: true
    productId?: true
    createdAt?: true
    _all?: true
  }

  export type BarcodeLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarcodeLog to aggregate.
     */
    where?: BarcodeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarcodeLogs to fetch.
     */
    orderBy?: BarcodeLogOrderByWithRelationInput | BarcodeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarcodeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarcodeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarcodeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BarcodeLogs
    **/
    _count?: true | BarcodeLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarcodeLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarcodeLogMaxAggregateInputType
  }

  export type GetBarcodeLogAggregateType<T extends BarcodeLogAggregateArgs> = {
        [P in keyof T & keyof AggregateBarcodeLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarcodeLog[P]>
      : GetScalarType<T[P], AggregateBarcodeLog[P]>
  }




  export type BarcodeLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarcodeLogWhereInput
    orderBy?: BarcodeLogOrderByWithAggregationInput | BarcodeLogOrderByWithAggregationInput[]
    by: BarcodeLogScalarFieldEnum[] | BarcodeLogScalarFieldEnum
    having?: BarcodeLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarcodeLogCountAggregateInputType | true
    _min?: BarcodeLogMinAggregateInputType
    _max?: BarcodeLogMaxAggregateInputType
  }

  export type BarcodeLogGroupByOutputType = {
    id: string
    action: $Enums.BarcodeAction
    productId: string
    createdAt: Date
    _count: BarcodeLogCountAggregateOutputType | null
    _min: BarcodeLogMinAggregateOutputType | null
    _max: BarcodeLogMaxAggregateOutputType | null
  }

  type GetBarcodeLogGroupByPayload<T extends BarcodeLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarcodeLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarcodeLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarcodeLogGroupByOutputType[P]>
            : GetScalarType<T[P], BarcodeLogGroupByOutputType[P]>
        }
      >
    >


  export type BarcodeLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    productId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["barcodeLog"]>

  export type BarcodeLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    productId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["barcodeLog"]>

  export type BarcodeLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    productId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["barcodeLog"]>

  export type BarcodeLogSelectScalar = {
    id?: boolean
    action?: boolean
    productId?: boolean
    createdAt?: boolean
  }

  export type BarcodeLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "productId" | "createdAt", ExtArgs["result"]["barcodeLog"]>

  export type $BarcodeLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BarcodeLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: $Enums.BarcodeAction
      productId: string
      createdAt: Date
    }, ExtArgs["result"]["barcodeLog"]>
    composites: {}
  }

  type BarcodeLogGetPayload<S extends boolean | null | undefined | BarcodeLogDefaultArgs> = $Result.GetResult<Prisma.$BarcodeLogPayload, S>

  type BarcodeLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarcodeLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarcodeLogCountAggregateInputType | true
    }

  export interface BarcodeLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BarcodeLog'], meta: { name: 'BarcodeLog' } }
    /**
     * Find zero or one BarcodeLog that matches the filter.
     * @param {BarcodeLogFindUniqueArgs} args - Arguments to find a BarcodeLog
     * @example
     * // Get one BarcodeLog
     * const barcodeLog = await prisma.barcodeLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarcodeLogFindUniqueArgs>(args: SelectSubset<T, BarcodeLogFindUniqueArgs<ExtArgs>>): Prisma__BarcodeLogClient<$Result.GetResult<Prisma.$BarcodeLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BarcodeLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarcodeLogFindUniqueOrThrowArgs} args - Arguments to find a BarcodeLog
     * @example
     * // Get one BarcodeLog
     * const barcodeLog = await prisma.barcodeLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarcodeLogFindUniqueOrThrowArgs>(args: SelectSubset<T, BarcodeLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarcodeLogClient<$Result.GetResult<Prisma.$BarcodeLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarcodeLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarcodeLogFindFirstArgs} args - Arguments to find a BarcodeLog
     * @example
     * // Get one BarcodeLog
     * const barcodeLog = await prisma.barcodeLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarcodeLogFindFirstArgs>(args?: SelectSubset<T, BarcodeLogFindFirstArgs<ExtArgs>>): Prisma__BarcodeLogClient<$Result.GetResult<Prisma.$BarcodeLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarcodeLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarcodeLogFindFirstOrThrowArgs} args - Arguments to find a BarcodeLog
     * @example
     * // Get one BarcodeLog
     * const barcodeLog = await prisma.barcodeLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarcodeLogFindFirstOrThrowArgs>(args?: SelectSubset<T, BarcodeLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarcodeLogClient<$Result.GetResult<Prisma.$BarcodeLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BarcodeLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarcodeLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BarcodeLogs
     * const barcodeLogs = await prisma.barcodeLog.findMany()
     * 
     * // Get first 10 BarcodeLogs
     * const barcodeLogs = await prisma.barcodeLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barcodeLogWithIdOnly = await prisma.barcodeLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarcodeLogFindManyArgs>(args?: SelectSubset<T, BarcodeLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarcodeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BarcodeLog.
     * @param {BarcodeLogCreateArgs} args - Arguments to create a BarcodeLog.
     * @example
     * // Create one BarcodeLog
     * const BarcodeLog = await prisma.barcodeLog.create({
     *   data: {
     *     // ... data to create a BarcodeLog
     *   }
     * })
     * 
     */
    create<T extends BarcodeLogCreateArgs>(args: SelectSubset<T, BarcodeLogCreateArgs<ExtArgs>>): Prisma__BarcodeLogClient<$Result.GetResult<Prisma.$BarcodeLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BarcodeLogs.
     * @param {BarcodeLogCreateManyArgs} args - Arguments to create many BarcodeLogs.
     * @example
     * // Create many BarcodeLogs
     * const barcodeLog = await prisma.barcodeLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarcodeLogCreateManyArgs>(args?: SelectSubset<T, BarcodeLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BarcodeLogs and returns the data saved in the database.
     * @param {BarcodeLogCreateManyAndReturnArgs} args - Arguments to create many BarcodeLogs.
     * @example
     * // Create many BarcodeLogs
     * const barcodeLog = await prisma.barcodeLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BarcodeLogs and only return the `id`
     * const barcodeLogWithIdOnly = await prisma.barcodeLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarcodeLogCreateManyAndReturnArgs>(args?: SelectSubset<T, BarcodeLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarcodeLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BarcodeLog.
     * @param {BarcodeLogDeleteArgs} args - Arguments to delete one BarcodeLog.
     * @example
     * // Delete one BarcodeLog
     * const BarcodeLog = await prisma.barcodeLog.delete({
     *   where: {
     *     // ... filter to delete one BarcodeLog
     *   }
     * })
     * 
     */
    delete<T extends BarcodeLogDeleteArgs>(args: SelectSubset<T, BarcodeLogDeleteArgs<ExtArgs>>): Prisma__BarcodeLogClient<$Result.GetResult<Prisma.$BarcodeLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BarcodeLog.
     * @param {BarcodeLogUpdateArgs} args - Arguments to update one BarcodeLog.
     * @example
     * // Update one BarcodeLog
     * const barcodeLog = await prisma.barcodeLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarcodeLogUpdateArgs>(args: SelectSubset<T, BarcodeLogUpdateArgs<ExtArgs>>): Prisma__BarcodeLogClient<$Result.GetResult<Prisma.$BarcodeLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BarcodeLogs.
     * @param {BarcodeLogDeleteManyArgs} args - Arguments to filter BarcodeLogs to delete.
     * @example
     * // Delete a few BarcodeLogs
     * const { count } = await prisma.barcodeLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarcodeLogDeleteManyArgs>(args?: SelectSubset<T, BarcodeLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarcodeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarcodeLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BarcodeLogs
     * const barcodeLog = await prisma.barcodeLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarcodeLogUpdateManyArgs>(args: SelectSubset<T, BarcodeLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarcodeLogs and returns the data updated in the database.
     * @param {BarcodeLogUpdateManyAndReturnArgs} args - Arguments to update many BarcodeLogs.
     * @example
     * // Update many BarcodeLogs
     * const barcodeLog = await prisma.barcodeLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BarcodeLogs and only return the `id`
     * const barcodeLogWithIdOnly = await prisma.barcodeLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BarcodeLogUpdateManyAndReturnArgs>(args: SelectSubset<T, BarcodeLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarcodeLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BarcodeLog.
     * @param {BarcodeLogUpsertArgs} args - Arguments to update or create a BarcodeLog.
     * @example
     * // Update or create a BarcodeLog
     * const barcodeLog = await prisma.barcodeLog.upsert({
     *   create: {
     *     // ... data to create a BarcodeLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BarcodeLog we want to update
     *   }
     * })
     */
    upsert<T extends BarcodeLogUpsertArgs>(args: SelectSubset<T, BarcodeLogUpsertArgs<ExtArgs>>): Prisma__BarcodeLogClient<$Result.GetResult<Prisma.$BarcodeLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BarcodeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarcodeLogCountArgs} args - Arguments to filter BarcodeLogs to count.
     * @example
     * // Count the number of BarcodeLogs
     * const count = await prisma.barcodeLog.count({
     *   where: {
     *     // ... the filter for the BarcodeLogs we want to count
     *   }
     * })
    **/
    count<T extends BarcodeLogCountArgs>(
      args?: Subset<T, BarcodeLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarcodeLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BarcodeLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarcodeLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BarcodeLogAggregateArgs>(args: Subset<T, BarcodeLogAggregateArgs>): Prisma.PrismaPromise<GetBarcodeLogAggregateType<T>>

    /**
     * Group by BarcodeLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarcodeLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BarcodeLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarcodeLogGroupByArgs['orderBy'] }
        : { orderBy?: BarcodeLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BarcodeLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarcodeLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BarcodeLog model
   */
  readonly fields: BarcodeLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BarcodeLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarcodeLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BarcodeLog model
   */
  interface BarcodeLogFieldRefs {
    readonly id: FieldRef<"BarcodeLog", 'String'>
    readonly action: FieldRef<"BarcodeLog", 'BarcodeAction'>
    readonly productId: FieldRef<"BarcodeLog", 'String'>
    readonly createdAt: FieldRef<"BarcodeLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BarcodeLog findUnique
   */
  export type BarcodeLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarcodeLog
     */
    select?: BarcodeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarcodeLog
     */
    omit?: BarcodeLogOmit<ExtArgs> | null
    /**
     * Filter, which BarcodeLog to fetch.
     */
    where: BarcodeLogWhereUniqueInput
  }

  /**
   * BarcodeLog findUniqueOrThrow
   */
  export type BarcodeLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarcodeLog
     */
    select?: BarcodeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarcodeLog
     */
    omit?: BarcodeLogOmit<ExtArgs> | null
    /**
     * Filter, which BarcodeLog to fetch.
     */
    where: BarcodeLogWhereUniqueInput
  }

  /**
   * BarcodeLog findFirst
   */
  export type BarcodeLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarcodeLog
     */
    select?: BarcodeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarcodeLog
     */
    omit?: BarcodeLogOmit<ExtArgs> | null
    /**
     * Filter, which BarcodeLog to fetch.
     */
    where?: BarcodeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarcodeLogs to fetch.
     */
    orderBy?: BarcodeLogOrderByWithRelationInput | BarcodeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarcodeLogs.
     */
    cursor?: BarcodeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarcodeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarcodeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarcodeLogs.
     */
    distinct?: BarcodeLogScalarFieldEnum | BarcodeLogScalarFieldEnum[]
  }

  /**
   * BarcodeLog findFirstOrThrow
   */
  export type BarcodeLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarcodeLog
     */
    select?: BarcodeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarcodeLog
     */
    omit?: BarcodeLogOmit<ExtArgs> | null
    /**
     * Filter, which BarcodeLog to fetch.
     */
    where?: BarcodeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarcodeLogs to fetch.
     */
    orderBy?: BarcodeLogOrderByWithRelationInput | BarcodeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarcodeLogs.
     */
    cursor?: BarcodeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarcodeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarcodeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarcodeLogs.
     */
    distinct?: BarcodeLogScalarFieldEnum | BarcodeLogScalarFieldEnum[]
  }

  /**
   * BarcodeLog findMany
   */
  export type BarcodeLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarcodeLog
     */
    select?: BarcodeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarcodeLog
     */
    omit?: BarcodeLogOmit<ExtArgs> | null
    /**
     * Filter, which BarcodeLogs to fetch.
     */
    where?: BarcodeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarcodeLogs to fetch.
     */
    orderBy?: BarcodeLogOrderByWithRelationInput | BarcodeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BarcodeLogs.
     */
    cursor?: BarcodeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarcodeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarcodeLogs.
     */
    skip?: number
    distinct?: BarcodeLogScalarFieldEnum | BarcodeLogScalarFieldEnum[]
  }

  /**
   * BarcodeLog create
   */
  export type BarcodeLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarcodeLog
     */
    select?: BarcodeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarcodeLog
     */
    omit?: BarcodeLogOmit<ExtArgs> | null
    /**
     * The data needed to create a BarcodeLog.
     */
    data: XOR<BarcodeLogCreateInput, BarcodeLogUncheckedCreateInput>
  }

  /**
   * BarcodeLog createMany
   */
  export type BarcodeLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BarcodeLogs.
     */
    data: BarcodeLogCreateManyInput | BarcodeLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BarcodeLog createManyAndReturn
   */
  export type BarcodeLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarcodeLog
     */
    select?: BarcodeLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarcodeLog
     */
    omit?: BarcodeLogOmit<ExtArgs> | null
    /**
     * The data used to create many BarcodeLogs.
     */
    data: BarcodeLogCreateManyInput | BarcodeLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BarcodeLog update
   */
  export type BarcodeLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarcodeLog
     */
    select?: BarcodeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarcodeLog
     */
    omit?: BarcodeLogOmit<ExtArgs> | null
    /**
     * The data needed to update a BarcodeLog.
     */
    data: XOR<BarcodeLogUpdateInput, BarcodeLogUncheckedUpdateInput>
    /**
     * Choose, which BarcodeLog to update.
     */
    where: BarcodeLogWhereUniqueInput
  }

  /**
   * BarcodeLog updateMany
   */
  export type BarcodeLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BarcodeLogs.
     */
    data: XOR<BarcodeLogUpdateManyMutationInput, BarcodeLogUncheckedUpdateManyInput>
    /**
     * Filter which BarcodeLogs to update
     */
    where?: BarcodeLogWhereInput
    /**
     * Limit how many BarcodeLogs to update.
     */
    limit?: number
  }

  /**
   * BarcodeLog updateManyAndReturn
   */
  export type BarcodeLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarcodeLog
     */
    select?: BarcodeLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarcodeLog
     */
    omit?: BarcodeLogOmit<ExtArgs> | null
    /**
     * The data used to update BarcodeLogs.
     */
    data: XOR<BarcodeLogUpdateManyMutationInput, BarcodeLogUncheckedUpdateManyInput>
    /**
     * Filter which BarcodeLogs to update
     */
    where?: BarcodeLogWhereInput
    /**
     * Limit how many BarcodeLogs to update.
     */
    limit?: number
  }

  /**
   * BarcodeLog upsert
   */
  export type BarcodeLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarcodeLog
     */
    select?: BarcodeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarcodeLog
     */
    omit?: BarcodeLogOmit<ExtArgs> | null
    /**
     * The filter to search for the BarcodeLog to update in case it exists.
     */
    where: BarcodeLogWhereUniqueInput
    /**
     * In case the BarcodeLog found by the `where` argument doesn't exist, create a new BarcodeLog with this data.
     */
    create: XOR<BarcodeLogCreateInput, BarcodeLogUncheckedCreateInput>
    /**
     * In case the BarcodeLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarcodeLogUpdateInput, BarcodeLogUncheckedUpdateInput>
  }

  /**
   * BarcodeLog delete
   */
  export type BarcodeLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarcodeLog
     */
    select?: BarcodeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarcodeLog
     */
    omit?: BarcodeLogOmit<ExtArgs> | null
    /**
     * Filter which BarcodeLog to delete.
     */
    where: BarcodeLogWhereUniqueInput
  }

  /**
   * BarcodeLog deleteMany
   */
  export type BarcodeLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarcodeLogs to delete
     */
    where?: BarcodeLogWhereInput
    /**
     * Limit how many BarcodeLogs to delete.
     */
    limit?: number
  }

  /**
   * BarcodeLog without action
   */
  export type BarcodeLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarcodeLog
     */
    select?: BarcodeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarcodeLog
     */
    omit?: BarcodeLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BarcodeLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    productId: 'productId',
    createdAt: 'createdAt'
  };

  export type BarcodeLogScalarFieldEnum = (typeof BarcodeLogScalarFieldEnum)[keyof typeof BarcodeLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BarcodeAction'
   */
  export type EnumBarcodeActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BarcodeAction'>
    


  /**
   * Reference to a field of type 'BarcodeAction[]'
   */
  export type ListEnumBarcodeActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BarcodeAction[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type BarcodeLogWhereInput = {
    AND?: BarcodeLogWhereInput | BarcodeLogWhereInput[]
    OR?: BarcodeLogWhereInput[]
    NOT?: BarcodeLogWhereInput | BarcodeLogWhereInput[]
    id?: StringFilter<"BarcodeLog"> | string
    action?: EnumBarcodeActionFilter<"BarcodeLog"> | $Enums.BarcodeAction
    productId?: StringFilter<"BarcodeLog"> | string
    createdAt?: DateTimeFilter<"BarcodeLog"> | Date | string
  }

  export type BarcodeLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type BarcodeLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BarcodeLogWhereInput | BarcodeLogWhereInput[]
    OR?: BarcodeLogWhereInput[]
    NOT?: BarcodeLogWhereInput | BarcodeLogWhereInput[]
    action?: EnumBarcodeActionFilter<"BarcodeLog"> | $Enums.BarcodeAction
    productId?: StringFilter<"BarcodeLog"> | string
    createdAt?: DateTimeFilter<"BarcodeLog"> | Date | string
  }, "id">

  export type BarcodeLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    _count?: BarcodeLogCountOrderByAggregateInput
    _max?: BarcodeLogMaxOrderByAggregateInput
    _min?: BarcodeLogMinOrderByAggregateInput
  }

  export type BarcodeLogScalarWhereWithAggregatesInput = {
    AND?: BarcodeLogScalarWhereWithAggregatesInput | BarcodeLogScalarWhereWithAggregatesInput[]
    OR?: BarcodeLogScalarWhereWithAggregatesInput[]
    NOT?: BarcodeLogScalarWhereWithAggregatesInput | BarcodeLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BarcodeLog"> | string
    action?: EnumBarcodeActionWithAggregatesFilter<"BarcodeLog"> | $Enums.BarcodeAction
    productId?: StringWithAggregatesFilter<"BarcodeLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BarcodeLog"> | Date | string
  }

  export type BarcodeLogCreateInput = {
    id?: string
    action: $Enums.BarcodeAction
    productId: string
    createdAt?: Date | string
  }

  export type BarcodeLogUncheckedCreateInput = {
    id?: string
    action: $Enums.BarcodeAction
    productId: string
    createdAt?: Date | string
  }

  export type BarcodeLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumBarcodeActionFieldUpdateOperationsInput | $Enums.BarcodeAction
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarcodeLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumBarcodeActionFieldUpdateOperationsInput | $Enums.BarcodeAction
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarcodeLogCreateManyInput = {
    id?: string
    action: $Enums.BarcodeAction
    productId: string
    createdAt?: Date | string
  }

  export type BarcodeLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumBarcodeActionFieldUpdateOperationsInput | $Enums.BarcodeAction
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarcodeLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumBarcodeActionFieldUpdateOperationsInput | $Enums.BarcodeAction
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumBarcodeActionFilter<$PrismaModel = never> = {
    equals?: $Enums.BarcodeAction | EnumBarcodeActionFieldRefInput<$PrismaModel>
    in?: $Enums.BarcodeAction[] | ListEnumBarcodeActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.BarcodeAction[] | ListEnumBarcodeActionFieldRefInput<$PrismaModel>
    not?: NestedEnumBarcodeActionFilter<$PrismaModel> | $Enums.BarcodeAction
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BarcodeLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type BarcodeLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type BarcodeLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumBarcodeActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BarcodeAction | EnumBarcodeActionFieldRefInput<$PrismaModel>
    in?: $Enums.BarcodeAction[] | ListEnumBarcodeActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.BarcodeAction[] | ListEnumBarcodeActionFieldRefInput<$PrismaModel>
    not?: NestedEnumBarcodeActionWithAggregatesFilter<$PrismaModel> | $Enums.BarcodeAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBarcodeActionFilter<$PrismaModel>
    _max?: NestedEnumBarcodeActionFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumBarcodeActionFieldUpdateOperationsInput = {
    set?: $Enums.BarcodeAction
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumBarcodeActionFilter<$PrismaModel = never> = {
    equals?: $Enums.BarcodeAction | EnumBarcodeActionFieldRefInput<$PrismaModel>
    in?: $Enums.BarcodeAction[] | ListEnumBarcodeActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.BarcodeAction[] | ListEnumBarcodeActionFieldRefInput<$PrismaModel>
    not?: NestedEnumBarcodeActionFilter<$PrismaModel> | $Enums.BarcodeAction
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumBarcodeActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BarcodeAction | EnumBarcodeActionFieldRefInput<$PrismaModel>
    in?: $Enums.BarcodeAction[] | ListEnumBarcodeActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.BarcodeAction[] | ListEnumBarcodeActionFieldRefInput<$PrismaModel>
    not?: NestedEnumBarcodeActionWithAggregatesFilter<$PrismaModel> | $Enums.BarcodeAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBarcodeActionFilter<$PrismaModel>
    _max?: NestedEnumBarcodeActionFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}