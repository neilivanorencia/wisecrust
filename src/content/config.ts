import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
    category: z.string(),
    philosopher: z.object({
      name: z.string(),
      title: z.string(),
      image: z.string(),
    }),
  }),
});

export const collections = { articles };
