import * as graphql from "@nestjs/graphql";
import { DeepLinkingResolverBase } from "./base/deepLinking.resolver.base";
import { DeepLinking } from "./base/DeepLinking";
import { DeepLinkingService } from "./deepLinking.service";

@graphql.Resolver(() => DeepLinking)
export class DeepLinkingResolver extends DeepLinkingResolverBase {
  constructor(protected readonly service: DeepLinkingService) {
    super(service);
  }
}
