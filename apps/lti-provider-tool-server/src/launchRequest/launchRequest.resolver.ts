import * as graphql from "@nestjs/graphql";
import { LaunchRequestResolverBase } from "./base/launchRequest.resolver.base";
import { LaunchRequest } from "./base/LaunchRequest";
import { LaunchRequestService } from "./launchRequest.service";

@graphql.Resolver(() => LaunchRequest)
export class LaunchRequestResolver extends LaunchRequestResolverBase {
  constructor(protected readonly service: LaunchRequestService) {
    super(service);
  }
}
