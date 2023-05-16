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
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

/**
 * Airbyte Configuration API
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

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "1.2.0";
  private _genVersion = "2.28.0";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;

    this.attempt = new Attempt(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.connection = new Connection(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.destination = new Destination(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.destinationDefinition = new DestinationDefinition(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.destinationDefinitionSpecification =
      new DestinationDefinitionSpecification(
        this._defaultClient,
        this._securityClient,
        this._serverURL,
        this._language,
        this._sdkVersion,
        this._genVersion
      );

    this.destinationOauth = new DestinationOauth(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.health = new Health(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.internal = new Internal(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.jobs = new Jobs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.logs = new Logs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.notifications = new Notifications(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.openapi = new Openapi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.operation = new Operation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.scheduler = new Scheduler(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.source = new Source(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.sourceDefinition = new SourceDefinition(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.sourceDefinitionSpecification = new SourceDefinitionSpecification(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.sourceOauth = new SourceOauth(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.state = new State(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.webBackend = new WebBackend(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.workspace = new Workspace(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
