/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContentSelectionWhereInput } from "./ContentSelectionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ContentSelectionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ContentSelectionWhereInput,
  })
  @ValidateNested()
  @Type(() => ContentSelectionWhereInput)
  @IsOptional()
  @Field(() => ContentSelectionWhereInput, {
    nullable: true,
  })
  every?: ContentSelectionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContentSelectionWhereInput,
  })
  @ValidateNested()
  @Type(() => ContentSelectionWhereInput)
  @IsOptional()
  @Field(() => ContentSelectionWhereInput, {
    nullable: true,
  })
  some?: ContentSelectionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContentSelectionWhereInput,
  })
  @ValidateNested()
  @Type(() => ContentSelectionWhereInput)
  @IsOptional()
  @Field(() => ContentSelectionWhereInput, {
    nullable: true,
  })
  none?: ContentSelectionWhereInput;
}
export { ContentSelectionListRelationFilter as ContentSelectionListRelationFilter };
