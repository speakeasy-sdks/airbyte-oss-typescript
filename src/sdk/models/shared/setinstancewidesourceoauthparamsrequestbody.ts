/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SetInstancewideSourceOauthParamsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "params" })
  params: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceDefinitionId" })
  sourceDefinitionId: string;
}
