import Menu from "./menu";
import ThemeToggle from "./themeToggleComponent/themeToggle";
import Intro from "./intro";

export default function Home() {
  return (
    <div className=" overflow-hidden h-screen flex justify-center items-center">
      <Menu />
      <ThemeToggle />
      <Intro />
    </div>
  );
}
