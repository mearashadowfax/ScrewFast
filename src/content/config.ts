// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection } from 'astro:content';

const productCollection = defineCollection({
  type: 'content',
    schema: ({ image }) => z.object({
    main: z.object({
      id: z.number(),
      title: z.string(),
      subTitle: z.string(),
      content: z.string(),
      imgCard: image(),
      imgMain: image(),
      imgAlt: z.string(),
    }),
    tabs: z.array(
      z.object({
        id: z.string(),
        dataTab: z.string(),
        title: z.string(),
      })
    ),
    description: z.object({
      title: z.string(),
      subTitle: z.string(),
      btnTitle: z.string(),
      btnURL: z.string(),
    }),
    descriptionList: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ),
    specificationsLeft: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ),
    specificationsRight: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ).optional(),
    blueprints: z.object({
      first: z.string().optional(),
      second: z.string().optional(),
    }),
  }),
});

// const blogCollection = defineCollection({
//     type: 'content',
//     schema: z.object({})
//   });

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'products': productCollection,
  // 'blog': blogCollection,
};