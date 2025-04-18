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
  const { pageTitle, sectionTitle, sectionText, project, title } = data || {};
  return (
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
  );
};

export default SingleWorkPage;
