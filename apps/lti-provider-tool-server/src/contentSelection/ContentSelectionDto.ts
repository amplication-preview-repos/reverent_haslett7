import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
@ObjectType("ContentSelectionDtoObject")
class ContentSelectionDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    selectionId!: string;

    @Field(() => GraphQLJSON)
    items!: InputJsonValue;
}

export { ContentSelectionDto as ContentSelectionDto };