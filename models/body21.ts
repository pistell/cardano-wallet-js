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
 * @interface Body21
 */
export interface Body21 {
    /**
     * 
     * @type {string | string | any}
     * @memberof Body21
     */
    payment?: any;
    /**
     * 
     * @type {string | string | any}
     * @memberof Body21
     */
    stake?: any;
    /**
     * Script validation level. Required validation sifts off scripts that would not be accepted by the ledger. Recommended level filters out scripts that do not pass required validation and additionally when:   * 'all' is non-empty   * there are redundant timelocks in a given level   * there are no duplicated verification keys in a given level   * 'at_least' coeffcient is positive   * 'all', 'any' are non-empty and `'at_least' has no less elements in the list      than the coeffcient after timelocks are filtered out. 
     * @type {string}
     * @memberof Body21
     */
    validation?: Body21ValidationEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum Body21ValidationEnum {
    Required = 'required',
    Recommended = 'recommended'
}

