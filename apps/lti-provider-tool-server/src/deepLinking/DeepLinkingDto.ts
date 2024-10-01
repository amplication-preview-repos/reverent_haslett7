import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
@ObjectType("DeepLinkingDtoObject")
class DeepLinkingDto {
    @Field(() => GraphQLJSON)
    contentItems!: InputJsonValue;

    @Field(() => GraphQLJSON)
    data!: InputJsonValue;
}

export { DeepLinkingDto as DeepLinkingDto };