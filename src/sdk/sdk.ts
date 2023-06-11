/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Attempt } from "./attempt";
import { Connection } from "./connection";
import { Destination } from "./destination";
import { DestinationDefinition } from "./destinationdefinition";
import { DestinationDefinitionSpecification } from "./destinationdefinitionspecification";
import { DestinationOauth } from "./destinationoauth";
import { Health } from "./health";
import { Internal } from "./internal";
import { Jobs } from "./jobs";
import { Logs } from "./logs";
import { Notifications } from "./notifications";
import { Openapi } from "./openapi";
import { Operation } from "./operation";
import { Scheduler } from "./scheduler";
import { Source } from "./source";
import { SourceDefinition } from "./sourcedefinition";
import { SourceDefinitionSpecification } from "./sourcedefinitionspecification";
import { SourceOauth } from "./sourceoauth";
import { State } from "./state";
import { WebBackend } from "./webbackend";
import { Workspace } from "./workspace";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["http://localhost:8000/api"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "1.10.1";
    genVersion = "2.39.2";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Airbyte Configuration API: Airbyte Configuration API
 *
 * @remarks
 * [https://airbyte.io](https://airbyte.io).
 *
 * This API is a collection of HTTP RPC-style methods. While it is not a REST API, those familiar with REST should find the conventions of this API recognizable.
 *
 * Here are some conventions that this API follows:
 * * All endpoints are http POST methods.
 * * All endpoints accept data via `application/json` request bodies. The API does not accept any data via query params.
 * * The naming convention for endpoints is: localhost:8000/{VERSION}/{METHOD_FAMILY}/{METHOD_NAME} e.g. `localhost:8000/v1/connections/create`.
 * * For all `update` methods, the whole object must be passed in, even the fields that did not change.
 *
 * Authentication (OSS):
 * * When authenticating to the Configuration API, you must use Basic Authentication by setting the Authentication Header to Basic and base64 encoding the username and password (which are `airbyte` and `password` by default - so base64 encoding `airbyte:password` results in `YWlyYnl0ZTpwYXNzd29yZA==`). So the full header reads `'Authorization': "Basic YWlyYnl0ZTpwYXNzd29yZA=="`
 *
 *
 * @see {@link https://airbyte.io} - Find out more about Airbyte
 */
export class AirbyteTest {
    /**
     * Interactions with attempt related resources.
     */
    public attempt: Attempt;
    /**
     * Connection between sources and destinations.
     */
    public connection: Connection;
    /**
     * Destination related resources.
     */
    public destination: Destination;
    /**
     * DestinationDefinition related resources.
     */
    public destinationDefinition: DestinationDefinition;
    /**
     * DestinationDefinitionSpecification related resources.
     */
    public destinationDefinitionSpecification: DestinationDefinitionSpecification;
    /**
     * Source OAuth related resources to delegate access from user.
     */
    public destinationOauth: DestinationOauth;
    /**
     * Healthchecks
     */
    public health: Health;
    public internal: Internal;
    public jobs: Jobs;
    public logs: Logs;
    public notifications: Notifications;
    public openapi: Openapi;
    public operation: Operation;
    public scheduler: Scheduler;
    /**
     * Source related resources.
     */
    public source: Source;
    /**
     * SourceDefinition related resources.
     */
    public sourceDefinition: SourceDefinition;
    /**
     * SourceDefinition specification related resources.
     */
    public sourceDefinitionSpecification: SourceDefinitionSpecification;
    /**
     * Source OAuth related resources to delegate access from user.
     */
    public sourceOauth: SourceOauth;
    /**
     * Interactions with state related resources.
     */
    public state: State;
    /**
     * Endpoints for the Airbyte web application. Those APIs should not be called outside the web application implementation and are not
     *
     * @remarks
     * guaranteeing any backwards compatibility.
     *
     */
    public webBackend: WebBackend;
    /**
     * Workspace related resources.
     */
    public workspace: Workspace;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        const securityClient = defaultClient;

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.attempt = new Attempt(this.sdkConfiguration);
        this.connection = new Connection(this.sdkConfiguration);
        this.destination = new Destination(this.sdkConfiguration);
        this.destinationDefinition = new DestinationDefinition(this.sdkConfiguration);
        this.destinationDefinitionSpecification = new DestinationDefinitionSpecification(
            this.sdkConfiguration
        );
        this.destinationOauth = new DestinationOauth(this.sdkConfiguration);
        this.health = new Health(this.sdkConfiguration);
        this.internal = new Internal(this.sdkConfiguration);
        this.jobs = new Jobs(this.sdkConfiguration);
        this.logs = new Logs(this.sdkConfiguration);
        this.notifications = new Notifications(this.sdkConfiguration);
        this.openapi = new Openapi(this.sdkConfiguration);
        this.operation = new Operation(this.sdkConfiguration);
        this.scheduler = new Scheduler(this.sdkConfiguration);
        this.source = new Source(this.sdkConfiguration);
        this.sourceDefinition = new SourceDefinition(this.sdkConfiguration);
        this.sourceDefinitionSpecification = new SourceDefinitionSpecification(
            this.sdkConfiguration
        );
        this.sourceOauth = new SourceOauth(this.sdkConfiguration);
        this.state = new State(this.sdkConfiguration);
        this.webBackend = new WebBackend(this.sdkConfiguration);
        this.workspace = new Workspace(this.sdkConfiguration);
    }
}
