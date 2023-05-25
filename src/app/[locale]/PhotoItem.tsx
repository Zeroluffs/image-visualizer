import Image from "next/image";
import { useFormatter } from "next-intl";
import { Basic as Photo } from "unsplash-js/dist/methods/photos/types";

type Props = {
  photo: Photo;
};
export function PhotoItem({ photo }: Props) {
  const format = useFormatter();
  const updateAt = new Date(photo.updated_at);
  const formattedDate = format.relativeTime(updateAt);
  return (
    <a
      href={photo.links.html + "?utm_source=403665&utm_medium=referral"}
      target="_blank"
      className="w-[324px] md:w-[496px] lg:w-[600px] shadow-md rounded-xl"
    >
      <div className="relative w-full h-[300px] lg:h-[600px]">
        <Image
          src={photo.urls.regular}
          fill
          className="object-cover w-full h-full"
          alt={photo.alt_description || photo.description || photo.id}
        />
      </div>
      <div className="flex flex-col my-6 gap-2">
        <div className="flex flex-row items-center gap-3 justify-between mx-2 ">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src={photo.user.profile_image.small}
              width={24}
              height={24}
              alt={photo.user.name}
              className="rounded-full flex shrink-0"
            />
            <p className="text-base font-semibold truncate">
              {photo.user.name}
            </p>
          </div>
          <p className="text-sm">{formattedDate}</p>
        </div>
      </div>
    </a>
  );
}
