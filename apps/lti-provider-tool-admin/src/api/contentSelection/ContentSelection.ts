import { JsonValue } from "type-fest";

export type ContentSelection = {
  createdAt: Date;
  id: string;
  items: JsonValue;
  selectionId: string | null;
  updatedAt: Date;
};
