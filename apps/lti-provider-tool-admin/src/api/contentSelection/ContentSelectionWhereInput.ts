import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ContentSelectionWhereInput = {
  id?: StringFilter;
  items?: JsonFilter;
  selectionId?: StringNullableFilter;
};
