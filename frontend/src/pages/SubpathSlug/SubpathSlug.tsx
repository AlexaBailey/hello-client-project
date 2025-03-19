type SubpathSlugProps = {
  title: string;
};
//a slug component to test all subpath routes

const SubpathSlug = ({ title }: SubpathSlugProps) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-3">{title}</h1>
      <p>This is the {title} section. Here you can explore specific details and manage data.</p>
    </div>
  );
};

export default SubpathSlug;
