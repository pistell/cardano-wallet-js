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
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { BadRequest } from '../models';
import { Body21 } from '../models';
import { InlineResponse20014 } from '../models';
import { InlineResponse2005 } from '../models';
import { InlineResponse2023 } from '../models';
import { InlineResponse415 } from '../models';
import { NoSuchWallet } from '../models';
import { NotAcceptable } from '../models';
/**
 * AddressesApi - axios parameter creator
 * @export
 */
export const AddressesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Give useful information about the structure of a given address. 
         * @summary Inspect Address
         * @param {string} addressId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inspectAddress: async (addressId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'addressId' is not null or undefined
            if (addressId === null || addressId === undefined) {
                throw new RequiredError('addressId','Required parameter addressId was null or undefined when calling inspectAddress.');
            }
            const localVarPath = `/addresses/{addressId}`
                .replace(`{${"addressId"}}`, encodeURIComponent(String(addressId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known addresses, ordered from newest to oldest 
         * @summary List
         * @param {string} walletId 
         * @param {string} [state] An optional filter on the address state.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAddresses: async (walletId: string, state?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'walletId' is not null or undefined
            if (walletId === null || walletId === undefined) {
                throw new RequiredError('walletId','Required parameter walletId was null or undefined when calling listAddresses.');
            }
            const localVarPath = `/wallets/{walletId}/addresses`
                .replace(`{${"walletId"}}`, encodeURIComponent(String(walletId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (state !== undefined) {
                localVarQueryParameter['state'] = state;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Construct any address by specyfying credential for payment or stake.  In Cardano, Addresses are made of three parts:  ``` *---------*---------*-------* | NETWORK | PAYMENT | STAKE | *---------*---------*-------* ```  The `NETWORK` part allows for distinguishing addresses between different networks like the mainnet or the testnet. It is implicitly handled by the server without you having to worry about it. The `PAYMENT` and `STAKE` parts however can be constructed similarly, using either:  - A public key - A script  The script itself is either constructed out of a public key, or one of the three following primitives:  - all - any - some  Each of which contains one or more script(s) that can be either keys or primitives, and so on. Schematically:  ```                                    ┏─────────┓ SCRIPT = ──┬───────────────────────┤ pub key ├─────────────────────┬──            │                       ┗─────────┛                     │            │  ╭─────╮   ╭────────╮                                 │            ├──┤ ALL ├───┤ SCRIPT ├─┬───────────────────────────────┤            │  ╰─────╯ ^ ╰────────╯ │                               │            │          │   ╭───╮    │                               │            │          └───┤ , ├────┘                               │            │              ╰───╯                                    │            │  ╭─────╮   ╭────────╮                                 │            ├──┤ ALL ├───┤ SCRIPT ├─┬───────────────────────────────┤            │  ╰─────╯ ^ ╰────────╯ │                               │            │          │   ╭───╮    │                               │            │          └───┤ , ├────┘                               │            │              ╰───╯                                    │            │  ╭──────╮ ╭──────────╮ ┏───┓ ╭──────╮   ╭────────╮    │            └──┤ SOME ├─┤ AT_LEAST ├─┤ n ├─┤ FROM ├───┤ SCRIPT ├─┬──┘               ╰──────╯ ╰──────────╯ ┗───┛ ╰──────╯ ^ ╰────────╯ │                                                    │   ╭───╮    │                                                    └───┤ , ├────┘                                                        ╰───╯ ``` 
         * @summary Construct Address
         * @param {Body21} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postAnyAddress: async (body?: Body21, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/addresses`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AddressesApi - functional programming interface
 * @export
 */
export const AddressesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Give useful information about the structure of a given address. 
         * @summary Inspect Address
         * @param {string} addressId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async inspectAddress(addressId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20014>> {
            const localVarAxiosArgs = await AddressesApiAxiosParamCreator(configuration).inspectAddress(addressId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known addresses, ordered from newest to oldest 
         * @summary List
         * @param {string} walletId 
         * @param {string} [state] An optional filter on the address state.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAddresses(walletId: string, state?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InlineResponse2005>>> {
            const localVarAxiosArgs = await AddressesApiAxiosParamCreator(configuration).listAddresses(walletId, state, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Construct any address by specyfying credential for payment or stake.  In Cardano, Addresses are made of three parts:  ``` *---------*---------*-------* | NETWORK | PAYMENT | STAKE | *---------*---------*-------* ```  The `NETWORK` part allows for distinguishing addresses between different networks like the mainnet or the testnet. It is implicitly handled by the server without you having to worry about it. The `PAYMENT` and `STAKE` parts however can be constructed similarly, using either:  - A public key - A script  The script itself is either constructed out of a public key, or one of the three following primitives:  - all - any - some  Each of which contains one or more script(s) that can be either keys or primitives, and so on. Schematically:  ```                                    ┏─────────┓ SCRIPT = ──┬───────────────────────┤ pub key ├─────────────────────┬──            │                       ┗─────────┛                     │            │  ╭─────╮   ╭────────╮                                 │            ├──┤ ALL ├───┤ SCRIPT ├─┬───────────────────────────────┤            │  ╰─────╯ ^ ╰────────╯ │                               │            │          │   ╭───╮    │                               │            │          └───┤ , ├────┘                               │            │              ╰───╯                                    │            │  ╭─────╮   ╭────────╮                                 │            ├──┤ ALL ├───┤ SCRIPT ├─┬───────────────────────────────┤            │  ╰─────╯ ^ ╰────────╯ │                               │            │          │   ╭───╮    │                               │            │          └───┤ , ├────┘                               │            │              ╰───╯                                    │            │  ╭──────╮ ╭──────────╮ ┏───┓ ╭──────╮   ╭────────╮    │            └──┤ SOME ├─┤ AT_LEAST ├─┤ n ├─┤ FROM ├───┤ SCRIPT ├─┬──┘               ╰──────╯ ╰──────────╯ ┗───┛ ╰──────╯ ^ ╰────────╯ │                                                    │   ╭───╮    │                                                    └───┤ , ├────┘                                                        ╰───╯ ``` 
         * @summary Construct Address
         * @param {Body21} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postAnyAddress(body?: Body21, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2023>> {
            const localVarAxiosArgs = await AddressesApiAxiosParamCreator(configuration).postAnyAddress(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AddressesApi - factory interface
 * @export
 */
export const AddressesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Give useful information about the structure of a given address. 
         * @summary Inspect Address
         * @param {string} addressId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inspectAddress(addressId: string, options?: any): AxiosPromise<InlineResponse20014> {
            return AddressesApiFp(configuration).inspectAddress(addressId, options).then((request) => request(axios, basePath));
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known addresses, ordered from newest to oldest 
         * @summary List
         * @param {string} walletId 
         * @param {string} [state] An optional filter on the address state.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAddresses(walletId: string, state?: string, options?: any): AxiosPromise<Array<InlineResponse2005>> {
            return AddressesApiFp(configuration).listAddresses(walletId, state, options).then((request) => request(axios, basePath));
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Construct any address by specyfying credential for payment or stake.  In Cardano, Addresses are made of three parts:  ``` *---------*---------*-------* | NETWORK | PAYMENT | STAKE | *---------*---------*-------* ```  The `NETWORK` part allows for distinguishing addresses between different networks like the mainnet or the testnet. It is implicitly handled by the server without you having to worry about it. The `PAYMENT` and `STAKE` parts however can be constructed similarly, using either:  - A public key - A script  The script itself is either constructed out of a public key, or one of the three following primitives:  - all - any - some  Each of which contains one or more script(s) that can be either keys or primitives, and so on. Schematically:  ```                                    ┏─────────┓ SCRIPT = ──┬───────────────────────┤ pub key ├─────────────────────┬──            │                       ┗─────────┛                     │            │  ╭─────╮   ╭────────╮                                 │            ├──┤ ALL ├───┤ SCRIPT ├─┬───────────────────────────────┤            │  ╰─────╯ ^ ╰────────╯ │                               │            │          │   ╭───╮    │                               │            │          └───┤ , ├────┘                               │            │              ╰───╯                                    │            │  ╭─────╮   ╭────────╮                                 │            ├──┤ ALL ├───┤ SCRIPT ├─┬───────────────────────────────┤            │  ╰─────╯ ^ ╰────────╯ │                               │            │          │   ╭───╮    │                               │            │          └───┤ , ├────┘                               │            │              ╰───╯                                    │            │  ╭──────╮ ╭──────────╮ ┏───┓ ╭──────╮   ╭────────╮    │            └──┤ SOME ├─┤ AT_LEAST ├─┤ n ├─┤ FROM ├───┤ SCRIPT ├─┬──┘               ╰──────╯ ╰──────────╯ ┗───┛ ╰──────╯ ^ ╰────────╯ │                                                    │   ╭───╮    │                                                    └───┤ , ├────┘                                                        ╰───╯ ``` 
         * @summary Construct Address
         * @param {Body21} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postAnyAddress(body?: Body21, options?: any): AxiosPromise<InlineResponse2023> {
            return AddressesApiFp(configuration).postAnyAddress(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AddressesApi - object-oriented interface
 * @export
 * @class AddressesApi
 * @extends {BaseAPI}
 */
export class AddressesApi extends BaseAPI {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Give useful information about the structure of a given address. 
     * @summary Inspect Address
     * @param {string} addressId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    public inspectAddress(addressId: string, options?: any) {
        return AddressesApiFp(this.configuration).inspectAddress(addressId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known addresses, ordered from newest to oldest 
     * @summary List
     * @param {string} walletId 
     * @param {string} [state] An optional filter on the address state.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    public listAddresses(walletId: string, state?: string, options?: any) {
        return AddressesApiFp(this.configuration).listAddresses(walletId, state, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Construct any address by specyfying credential for payment or stake.  In Cardano, Addresses are made of three parts:  ``` *---------*---------*-------* | NETWORK | PAYMENT | STAKE | *---------*---------*-------* ```  The `NETWORK` part allows for distinguishing addresses between different networks like the mainnet or the testnet. It is implicitly handled by the server without you having to worry about it. The `PAYMENT` and `STAKE` parts however can be constructed similarly, using either:  - A public key - A script  The script itself is either constructed out of a public key, or one of the three following primitives:  - all - any - some  Each of which contains one or more script(s) that can be either keys or primitives, and so on. Schematically:  ```                                    ┏─────────┓ SCRIPT = ──┬───────────────────────┤ pub key ├─────────────────────┬──            │                       ┗─────────┛                     │            │  ╭─────╮   ╭────────╮                                 │            ├──┤ ALL ├───┤ SCRIPT ├─┬───────────────────────────────┤            │  ╰─────╯ ^ ╰────────╯ │                               │            │          │   ╭───╮    │                               │            │          └───┤ , ├────┘                               │            │              ╰───╯                                    │            │  ╭─────╮   ╭────────╮                                 │            ├──┤ ALL ├───┤ SCRIPT ├─┬───────────────────────────────┤            │  ╰─────╯ ^ ╰────────╯ │                               │            │          │   ╭───╮    │                               │            │          └───┤ , ├────┘                               │            │              ╰───╯                                    │            │  ╭──────╮ ╭──────────╮ ┏───┓ ╭──────╮   ╭────────╮    │            └──┤ SOME ├─┤ AT_LEAST ├─┤ n ├─┤ FROM ├───┤ SCRIPT ├─┬──┘               ╰──────╯ ╰──────────╯ ┗───┛ ╰──────╯ ^ ╰────────╯ │                                                    │   ╭───╮    │                                                    └───┤ , ├────┘                                                        ╰───╯ ``` 
     * @summary Construct Address
     * @param {Body21} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    public postAnyAddress(body?: Body21, options?: any) {
        return AddressesApiFp(this.configuration).postAnyAddress(body, options).then((request) => request(this.axios, this.basePath));
    }
}
