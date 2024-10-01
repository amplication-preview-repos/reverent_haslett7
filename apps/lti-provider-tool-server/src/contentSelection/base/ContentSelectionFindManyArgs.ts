/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContentSelectionWhereInput } from "./ContentSelectionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ContentSelectionOrderByInput } from "./ContentSelectionOrderByInput";

@ArgsType()
class ContentSelectionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ContentSelectionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ContentSelectionWhereInput, { nullable: true })
  @Type(() => ContentSelectionWhereInput)
  where?: ContentSelectionWhereInput;

  @ApiProperty({
    required: false,
    type: [ContentSelectionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ContentSelectionOrderByInput], { nullable: true })
  @Type(() => ContentSelectionOrderByInput)
  orderBy?: Array<ContentSelectionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ContentSelectionFindManyArgs as ContentSelectionFindManyArgs };
