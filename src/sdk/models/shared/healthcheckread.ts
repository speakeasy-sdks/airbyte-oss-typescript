/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Successful operation
 */
export class HealthCheckRead extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "available" })
  available: boolean;
}
