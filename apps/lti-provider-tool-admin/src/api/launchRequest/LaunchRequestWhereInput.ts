import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LaunchRequestWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  resourceLinkId?: StringNullableFilter;
  user?: StringNullableFilter;
};
