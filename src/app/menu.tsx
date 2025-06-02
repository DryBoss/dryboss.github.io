import Image from "next/image";

export default function Menu() {
  const menuItems = [
    { title: "projects", icon: "./icons/rocket.svg", redirect: "" },
    { title: "achievements", icon: "./icons/achievements.svg", redirect: "" },
  ];

  return (
    <div className="flex">
      {menuItems.map(({ title, icon, redirect }, index) => (
        <div
          key={title}
          className="w-32 h-40 m-4 p-2 bg-secondary-light text-xs tracking-widest"
        >
          <p>{title}</p>
          <Image
            src={icon}
            alt={`${title}`}
            width={64}
            height={64}
            priority={true}
          />
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}
