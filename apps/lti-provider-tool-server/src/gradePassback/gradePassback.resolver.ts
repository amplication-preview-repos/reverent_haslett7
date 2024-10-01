import * as graphql from "@nestjs/graphql";
import { GradePassbackResolverBase } from "./base/gradePassback.resolver.base";
import { GradePassback } from "./base/GradePassback";
import { GradePassbackService } from "./gradePassback.service";

@graphql.Resolver(() => GradePassback)
export class GradePassbackResolver extends GradePassbackResolverBase {
  constructor(protected readonly service: GradePassbackService) {
    super(service);
  }
}
