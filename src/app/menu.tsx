import Image from "next/image";

export default function Menu() {
  const menuItems = [
    {
      title: "projects",
      icon: "./icons/rocket.svg",
      redirect: "",
      rotation: "-5",
    },
    {
      title: "achievements",
      icon: "./icons/achievements.svg",
      redirect: "",
      rotation: "5",
    },
  ];

  return (
    <div className="flex fixed bottom-[-24] left-1/2 -translate-x-1/2">
      {menuItems.map(({ title, icon, redirect, rotation }, index) => (
        <div
          key={title}
          className={`w-32 h-40 m-0 p-3 bg-secondary-light text-xs tracking-widest flex flex-col justify-between items-center rounded-2xl border-4 border-primary-light hover:-translate-y-2 transition-transform duration-200 cursor-pointer`}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <p>{title}</p>
          <Image
            src={icon}
            alt={`${title}`}
            width={56}
            height={56}
            priority={true}
          />
          <p className="rotate-180">{title}</p>
        </div>
      ))}
    </div>
  );
}
