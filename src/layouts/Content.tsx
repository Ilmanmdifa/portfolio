import Card from "../components/Content/Card";
const Content = () => {
  return (
    <main className="flex items-center justify-center w-full h-full px-5 py-7 md:px-42 md:py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Content;
