/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AirbyteCatalog } from "./airbytecatalog";
import { CatalogDiff } from "./catalogdiff";
import { ConnectionStatusEnum } from "./connectionstatusenum";
import { SynchronousJobRead } from "./synchronousjobread";
import { Expose, Type } from "class-transformer";

/**
 * Returns the results of a discover catalog job. If the job was not successful, the catalog field will not be present. jobInfo will aways be present and its status be used to determine if the job was successful or not.
 */
export class SourceDiscoverSchemaRead extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "breakingChange" })
  breakingChange?: boolean;

  /**
   * describes the available schema (catalog).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "catalog" })
  @Type(() => AirbyteCatalog)
  catalog?: AirbyteCatalog;

  /**
   * Describes the difference between two Airbyte catalogs.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "catalogDiff" })
  @Type(() => CatalogDiff)
  catalogDiff?: CatalogDiff;

  @SpeakeasyMetadata()
  @Expose({ name: "catalogId" })
  catalogId?: string;

  /**
   * Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "connectionStatus" })
  connectionStatus?: ConnectionStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "jobInfo" })
  @Type(() => SynchronousJobRead)
  jobInfo: SynchronousJobRead;
}
