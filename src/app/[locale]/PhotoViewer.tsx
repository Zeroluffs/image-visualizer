import { Basic as Photo } from "unsplash-js/dist/methods/photos/types";
import { Header } from "./Header";
import { PhotoGrid } from "./PhotoGrid";
import { useTranslations } from "next-intl";

type Props = {
  coverPhoto: Photo | undefined | null;
  photos: Photo[] | undefined;
};

export function PhotoViewer({ coverPhoto, photos }: Props) {
  const t = useTranslations("PhotoViewer");

  return (
    <>
      <Header
        backgroundUrl={coverPhoto?.urls.full}
        title={t("title")}
        description={t("description")}
      />
      <PhotoGrid photos={photos} />
    </>
  );
}
