import { type SchemaTypeDefinition } from "sanity";
import profileSchema from "./profile";
import projectSchema from "./project";
import skillSchema from "./skill";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profileSchema, projectSchema, skillSchema],
};
