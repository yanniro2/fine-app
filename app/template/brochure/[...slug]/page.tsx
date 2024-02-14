import { NextPage } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page: NextPage<PageProps> = ({ params }) => {
  return <div className="page text-white">My Post: {params.slug}</div>;
};

export default Page;
