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
 * The maintenance action to carry out, current values are   - gc_stake_pools -> trigger looking up delisted pools from the remote SMASH server 
 * @export
 * @interface Body7
 */
export interface Body7 {
    /**
     * 
     * @type {string}
     * @memberof Body7
     */
    maintenance_action: Body7MaintenanceActionEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum Body7MaintenanceActionEnum {
    Pools = 'gc_stake_pools'
}

