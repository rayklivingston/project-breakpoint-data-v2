// To make importing them easier, you can export all models from single file
import { createScrappedContentSchema } from "./ScrappedContent";

export function createSchemas(mongoose) {

  const scrappedContents = createScrappedContentSchema(mongoose);

  return { scrappedContents };
}