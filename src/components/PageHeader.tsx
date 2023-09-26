interface Props {
    title: string;
}

const PageHeader = ({title}: Props) => {
  return (
    <h1 className="my-4 text-center text-5xl font-extrabold">{title}</h1>
  );
}

export default PageHeader