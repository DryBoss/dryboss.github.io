import Menu from "./menu";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="">
        <Menu />
        <div className="p-4 m-8 bg-secondary-dark text-gray-300 rounded-lg">
          <h1 className="m-2 text-4xl">Hi, I’m Taiham</h1>
          <p className="m-4 text-lg">
            full stack developer | machine learning engineer | quantum computing
            researcher
          </p>
          <p className="m-2">
            a curious mind passionate about technology, learning, and building
            impactful solutions. Whether it’s developing intuitive web
            experiences, exploring the depths of machine learning, or diving
            into mathematical concepts, I’m always eager to push boundaries and
            create something meaningful. This site is a reflection of my journey
            — projects, ideas, experiments, and the things I’m learning along
            the way.<br></br>
            Feel free to explore, reach out, or just say hi!
          </p>
        </div>
      </div>
    </div>
  );
}
