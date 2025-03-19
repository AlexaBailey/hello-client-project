type MainRouteSlugProps = {
  title: string;
};
//a slug component to test all main routes
const MainRouteSlug = ({ title }: MainRouteSlugProps) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p>Welcome to the {title} page. Here you can manage and explore related features.</p>
    </div>
  );
};

export default MainRouteSlug;
