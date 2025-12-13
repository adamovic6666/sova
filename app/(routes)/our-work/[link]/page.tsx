import SingleWork from "@/app/_components/sections/our-work/single-work/SingleWork";
import { OurWorkData } from "@/app/_data";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ link: string }>;
}): Promise<Metadata> {
  // read route params
  const { link } = await params;
  const product = await OurWorkData.find((item) => item.link === link);
  return {
    title: product?.meta.title,
    description: product?.meta.description,
  };
}

const SingleWorkPage = async ({
  params,
}: {
  params: Promise<{ link: string }>;
}) => {
  const { link } = await params;
  const data = await OurWorkData.find((item) => item.link === link);
  const otherProjects = await OurWorkData.sort(() => 0.5 - Math.random()).slice(
    0,
    6
  );
  const { pageTitle, sectionTitle, sectionText, project, title, image } =
    data || {};

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.sova.ooo",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Our Work",
        item: "https://www.sova.ooo/our-work",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://www.sova.ooo/our-work/${link}`,
      },
    ],
  };

  // CreativeWork Schema
  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description: sectionText,
    creator: {
      "@type": "Organization",
      name: "Sova Creative Studio",
      url: "https://www.sova.ooo",
    },
    about: sectionTitle,
    image: `https://www.sova.ooo${image}`,
    url: `https://www.sova.ooo/our-work/${link}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(creativeWorkSchema),
        }}
      />
      <main className="main-content">
        <SingleWork
          pageTitle={pageTitle}
          sectionTitle={sectionTitle}
          sectionText={sectionText}
          project={project}
          otherProjects={otherProjects}
          title={title}
        />
      </main>
    </>
  );
};

export default SingleWorkPage;
