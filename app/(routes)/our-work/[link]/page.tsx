import SingleWork from "@/app/_components/sections/our-work/single-work/SingleWork";
import { OurWorkData } from "@/app/_data";

const SingleWorkPage = async ({
  params,
}: {
  params: Promise<{ link: string }>;
}) => {
  const { link } = await params;
  const data = await OurWorkData.find((item) => item.link === link);
  const otherProjects = OurWorkData.filter(({ title }) =>
    data?.otherProjects?.includes(title.toLowerCase())
  );
  const { pageTitle, sectionTitle, sectionText, project, title, panel } =
    data || {};
  return (
    <SingleWork
      pageTitle={pageTitle}
      sectionTitle={sectionTitle}
      sectionText={sectionText}
      project={project}
      otherProjects={otherProjects}
      title={title}
      panel={panel}
    />
  );
};

export default SingleWorkPage;
