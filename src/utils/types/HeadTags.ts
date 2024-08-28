export type HeadTags = {
  title?: string;
  description?: string;
  image?: string;
  noindex?: boolean;
  og?: {
    title: string;
    type: string;
    description: string;
    image: string;
    alt: string;
  };
};
