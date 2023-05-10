/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { ActorDefinitionResourceRequirements } from "./actordefinitionresourcerequirements";
import { ReleaseStageEnum } from "./releasestageenum";
import { Expose, Transform, Type } from "class-transformer";

export enum SourceDefinitionReadSourceTypeEnum {
  Api = "api",
  File = "file",
  Database = "database",
  Custom = "custom",
}

/**
 * Successful operation
 */
export class SourceDefinitionRead extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dockerImageTag" })
  dockerImageTag: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dockerRepository" })
  dockerRepository: string;

  @SpeakeasyMetadata()
  @Expose({ name: "documentationUrl" })
  documentationUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "icon" })
  icon?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * The Airbyte Protocol version supported by the connector
   */
  @SpeakeasyMetadata()
  @Expose({ name: "protocolVersion" })
  protocolVersion?: string;

  /**
   * The date when this connector was first released, in yyyy-mm-dd format.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "releaseDate" })
  @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
  releaseDate?: RFCDate;

  @SpeakeasyMetadata()
  @Expose({ name: "releaseStage" })
  releaseStage?: ReleaseStageEnum;

  /**
   * actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resourceRequirements" })
  @Type(() => ActorDefinitionResourceRequirements)
  resourceRequirements?: ActorDefinitionResourceRequirements;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceDefinitionId" })
  sourceDefinitionId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceType" })
  sourceType?: SourceDefinitionReadSourceTypeEnum;
}
