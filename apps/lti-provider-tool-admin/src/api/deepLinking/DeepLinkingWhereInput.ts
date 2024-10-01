import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type DeepLinkingWhereInput = {
  contentItems?: JsonFilter;
  data?: JsonFilter;
  id?: StringFilter;
};
