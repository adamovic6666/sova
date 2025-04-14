export interface OurWork {
  title: string;
  project: string;
  image: string;
  alt: string;
  link?: string;
  description?: string;
  pageTitle?: string[];
  secondaryTitle?: string;
  sectionTitle?: string;
  sectionText?: string;
  meta: {
    title: string;
    description: string;
  };
}
