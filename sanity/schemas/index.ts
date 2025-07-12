import { type SchemaTypeDefinition } from "sanity";
import profileSchema from "./profile";
import projectSchema from "./project";
import serviceSchema from "./service";
import techSchema from "./tech";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profileSchema, projectSchema, serviceSchema, techSchema],
};
