import Loading from "../Loading/Loading";

export default function Page({ page, isLoading }) {
  if (isLoading) return <Loading />;
  if (!page) return <div>Error of loading</div>;

  const { title } = page;
  const renderTitle = title?.rendered;

  return <div>{renderTitle}</div>;
}
