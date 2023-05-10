/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateConnectionResponse extends SpeakeasyBase {
  /**
   * Successful operation
   */
  @SpeakeasyMetadata()
  connectionRead?: shared.ConnectionRead;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Input failed validation
   */
  @SpeakeasyMetadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
