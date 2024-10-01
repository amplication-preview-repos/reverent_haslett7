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
import { GradePassbackWhereInput } from "./GradePassbackWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GradePassbackListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GradePassbackWhereInput,
  })
  @ValidateNested()
  @Type(() => GradePassbackWhereInput)
  @IsOptional()
  @Field(() => GradePassbackWhereInput, {
    nullable: true,
  })
  every?: GradePassbackWhereInput;

  @ApiProperty({
    required: false,
    type: () => GradePassbackWhereInput,
  })
  @ValidateNested()
  @Type(() => GradePassbackWhereInput)
  @IsOptional()
  @Field(() => GradePassbackWhereInput, {
    nullable: true,
  })
  some?: GradePassbackWhereInput;

  @ApiProperty({
    required: false,
    type: () => GradePassbackWhereInput,
  })
  @ValidateNested()
  @Type(() => GradePassbackWhereInput)
  @IsOptional()
  @Field(() => GradePassbackWhereInput, {
    nullable: true,
  })
  none?: GradePassbackWhereInput;
}
export { GradePassbackListRelationFilter as GradePassbackListRelationFilter };
