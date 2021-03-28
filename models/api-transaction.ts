/* tslint:disable */
/* eslint-disable */
/**
 * Cardano Wallet Backend API
 * <p align=\"right\"><img style=\"position: relative; top: -10em; margin-bottom: -12em;\" width=\"20%\" src=\"https://cardanodocs.com/img/cardano.png\"></img></p> 
 *
 * OpenAPI spec version: 2021.3.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface ApiTransaction
 */
export interface ApiTransaction {
    /**
     * A unique identifier for this transaction
     * @type {string}
     * @memberof ApiTransaction
     */
    id: any;
    /**
     * 
     * @type {WalletswalletIdtransactionsAmount}
     * @memberof ApiTransaction
     */
    amount: any;
    /**
     * 
     * @type {WalletswalletIdpaymentfeesAmount}
     * @memberof ApiTransaction
     */
    fee: any;
    /**
     * 
     * @type {WalletswalletIdpaymentfeesAmount}
     * @memberof ApiTransaction
     */
    deposit: any;
    /**
     * 
     * @type {WalletswalletIdtransactionsInsertedAt}
     * @memberof ApiTransaction
     */
    inserted_at?: any;
    /**
     * 
     * @type {WalletswalletIdtransactionsExpiresAt}
     * @memberof ApiTransaction
     */
    expires_at?: any;
    /**
     * 
     * @type {WalletswalletIdtransactionsPendingSince}
     * @memberof ApiTransaction
     */
    pending_since?: any;
    /**
     * 
     * @type {WalletswalletIdtransactionsDepth}
     * @memberof ApiTransaction
     */
    depth?: any;
    /**
     * 
     * @type {string}
     * @memberof ApiTransaction
     */
    direction: ApiTransactionDirectionEnum;
    /**
     * A list of transaction inputs.  `assets` and `address` are always present for `outgoing` transactions but generally absent for `incoming` transactions. This information is present on the Cardano explorer, but is not tracked by the wallet. 
     * @type {Array&lt;WalletswalletIdtransactionsInputs&gt;}
     * @memberof ApiTransaction
     */
    inputs: any;
    /**
     * A list of target outputs
     * @type {Array&lt;WalletswalletIdpaymentfeesPayments&gt;}
     * @memberof ApiTransaction
     */
    outputs: any;
    /**
     * A list of withdrawals from stake addresses.
     * @type {Array&lt;WalletswalletIdtransactionsWithdrawals&gt;}
     * @memberof ApiTransaction
     */
    withdrawals: any;
    /**
     * <p>status: <strong>⚠ under development</strong></p>  _This field is not implemented yet, and will always be empty._  Assets minted (created) or unminted (destroyed)  This amount contributes to the total transaction value.  Positive values denote creation of assets and negative values denote the reverse. 
     * @type {Array&lt;WalletswalletIdtransactionsMint&gt;}
     * @memberof ApiTransaction
     */
    mint: any;
    /**
     * Current transaction status.    ```          *---------*          *-----------*          |         |---------->  EXPIRED  |          |         |  (ttl)   *-----------*   -------> PENDING |          |         <----------------*          |         |                |          *---------*            (rollback)               |                     |          (in ledger)          *-----------*               |               |           |               *---------------> IN_LEDGER |                               |           |                               *-----------*   ``` 
     * @type {string}
     * @memberof ApiTransaction
     */
    status: ApiTransactionStatusEnum;
    /**
     * **⚠️ WARNING ⚠️**  _Please note that metadata provided in a transaction will be stored on the blockchain forever. Make sure not to include any sensitive data, in particular personally identifiable information (PII)._  Extra application data attached to the transaction.  Cardano allows users and developers to embed their own authenticated metadata when submitting transactions. Metadata can be expressed as a JSON object with some restrictions:  1. All top-level keys must be integers between `0` and `2^64 - 1`.  2. Each metadata value is tagged with its type.  3. Strings must be at most 64 bytes when UTF-8 encoded.  4. Bytestrings are hex-encoded, with a maximum length of 64 bytes.  Metadata aren't stored as JSON on the Cardano blockchain but are instead stored using a compact binary encoding (CBOR).  The binary encoding of metadata values supports three simple types:  * Integers in the range `-(2^64 - 1)` to `2^64 - 1` * Strings (UTF-8 encoded) * Bytestrings  And two compound types:  * Lists of metadata values * Mappings from metadata values to metadata values  It is possible to transform any JSON object into this schema.  However, if your application uses floating point values, they will need to be converted somehow, according to your requirements. Likewise for `null` or `bool` values. When reading metadata from chain, be aware that integers may exceed the javascript numeric range, and may need special \"bigint\" parsing. 
     * @type {{ [key, string]: TransactionMetadataValue;}}
     * @memberof ApiTransaction
     */
    metadata?: any | null;
}

/**
    * @export
    * @enum {string}
    */
export enum ApiTransactionDirectionEnum {
    Outgoing = 'outgoing',
    Incoming = 'incoming'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiTransactionStatusEnum {
    Pending = 'pending',
    InLedger = 'in_ledger',
    Expired = 'expired'
}

