import { type SchemaTypeDefinition } from "sanity";
import productSchema from "./product";
import profileSchema from "./profile";
import projectSchema from "./project";
import skillSchema from "./skill";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profileSchema, projectSchema, productSchema, skillSchema],
};
