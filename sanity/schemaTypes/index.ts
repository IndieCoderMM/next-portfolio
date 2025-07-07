import { type SchemaTypeDefinition } from "sanity";
import productSchema from "./product";
import profileSchema from "./profile";
import skillSchema from "./skill";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profileSchema, productSchema, skillSchema],
};
