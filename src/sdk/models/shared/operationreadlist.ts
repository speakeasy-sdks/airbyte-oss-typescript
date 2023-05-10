/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OperationRead } from "./operationread";
import { Expose, Type } from "class-transformer";

/**
 * Successful operation
 */
export class OperationReadList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: OperationRead })
  @Expose({ name: "operations" })
  @Type(() => OperationRead)
  operations: OperationRead[];
}
