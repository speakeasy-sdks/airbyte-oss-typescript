/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class InvalidInputProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "invalidValue" })
  invalidValue?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "propertyPath" })
  propertyPath: string;
}
