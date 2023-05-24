import Image from "next/image";

type Props = {
  backgroundUrl: string | undefined;
  title: string;
  description: string;
};

export function Header({ backgroundUrl, title, description }: Props) {
  return (
    <div className="relative w-screen h-[300px] m-auto">
      <Image fill className="object-cover" src={backgroundUrl!!} alt="" />
    </div>
  );
}
