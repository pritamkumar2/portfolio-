import Image from "next/image";

const TechStack = () => {
  const gridItems = [
    { src: "/react.png", alt: "react" },
    { src: "/next.png", alt: "next" },
    { src: "/vite.png", alt: "vite" },
    { src: "/tailwind.png", alt: "tailwind" },
    { src: "/gitbash.png", alt: "gitbash" },
    { src: "/git.png", alt: "git" },
    { src: "/javascript.png", alt: "javascript" },
    { src: "/typescript.png", alt: "typescript" },
    { src: "/mongoDb.png", alt: "mongodb" },
    { src: "/nodejs.png", alt: "nodejs" },
    { src: "/pub.png", alt: "pug" },
   

  ];

  return (
    <div>
      {" "}
      <div className="flex items-center justify-center flex-wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-24 ">
          {gridItems.map((item, index) => (
            <div
              key={index}
              className="relative w-full group overflow-hidden hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={item.src}
                alt={item.alt}
                className="rounded-lg"
                height={100}
                width={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
