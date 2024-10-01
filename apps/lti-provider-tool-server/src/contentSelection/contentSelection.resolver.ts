import * as graphql from "@nestjs/graphql";
import { ContentSelectionResolverBase } from "./base/contentSelection.resolver.base";
import { ContentSelection } from "./base/ContentSelection";
import { ContentSelectionService } from "./contentSelection.service";

@graphql.Resolver(() => ContentSelection)
export class ContentSelectionResolver extends ContentSelectionResolverBase {
  constructor(protected readonly service: ContentSelectionService) {
    super(service);
  }
}
