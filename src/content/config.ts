import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pub: z.coerce.date(),
    update: z.coerce.date().optional(),
    img: z.string().optional(),
    tags: z.array(z.string()).optional()
  })
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string()
  })
});

export const collections = { blog, projects };
