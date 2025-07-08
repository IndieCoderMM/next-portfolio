import { type SchemaTypeDefinition } from "sanity";
import profileSchema from "./profile";
import projectSchema from "./project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profileSchema, projectSchema],
};
