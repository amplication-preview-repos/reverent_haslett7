import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LaunchRequestService } from "./launchRequest.service";
import { LaunchRequestControllerBase } from "./base/launchRequest.controller.base";

@swagger.ApiTags("launchRequests")
@common.Controller("launchRequests")
export class LaunchRequestController extends LaunchRequestControllerBase {
  constructor(protected readonly service: LaunchRequestService) {
    super(service);
  }
}
