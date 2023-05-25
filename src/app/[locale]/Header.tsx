import Image from "next/image";

type Props = {
  backgroundUrl: string | undefined;
  title: string;
  description: string;
};

export function Header({ backgroundUrl, title, description }: Props) {
  return (
    <div className="relative w-screen h-[400px]  m-auto">
      <Image fill className="object-cover" src={backgroundUrl!!} alt="" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black-75">
        <div className="mx-8 flex flex-col items-center justify-center gap-4 h-full">
          <h1 className="text-4xl font-bold text-center text-white">{title}</h1>
          <p className="text-xl text-center text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}
