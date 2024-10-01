import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type GradePassbackWhereInput = {
  comment?: StringNullableFilter;
  id?: StringFilter;
  score?: FloatNullableFilter;
  userId?: StringNullableFilter;
};
