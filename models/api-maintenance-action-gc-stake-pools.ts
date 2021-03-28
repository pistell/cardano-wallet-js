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
 * Gives an indication if metadata GC checking for delisted pools has run and if so, when.  Possible values are:   - not_applicable -> we're currently not querying a SMASH server for metadata   - not_started -> the GC hasn't started yet, try again in a short while   - restarting -> the GC thread is currently restarting, try again in short while   - has_run -> the GC has run successfully  When 'status' is 'restarting' or 'has_run' then the field 'last_run' is set to the last GC time in UTC. 
 * @export
 * @interface ApiMaintenanceActionGcStakePools
 */
export interface ApiMaintenanceActionGcStakePools {
    /**
     * 
     * @type {string}
     * @memberof ApiMaintenanceActionGcStakePools
     */
    status: ApiMaintenanceActionGcStakePoolsStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiMaintenanceActionGcStakePools
     */
    last_run?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum ApiMaintenanceActionGcStakePoolsStatusEnum {
    NotApplicable = 'not_applicable',
    NotStarted = 'not_started',
    Restarting = 'restarting',
    HasRun = 'has_run'
}

