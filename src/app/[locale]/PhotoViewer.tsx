import { Basic as Photo } from "unsplash-js/dist/methods/photos/types";
import { Header } from "./Header";
import { PhotoGrid } from "./PhotoGrid";
import { useTranslations } from "next-intl";
import { OrderBy } from "unsplash-js";
import { OrderBySelect } from "./OrderBySelect";
import PageInfo, { Pagination } from "./Pagination";

type Props = {
  coverPhoto: Photo | undefined | null;
  photos: Photo[] | undefined;
  orderBy: OrderBy;
  pageInfo: PageInfo;
};

export function PhotoViewer({ coverPhoto, photos, orderBy, pageInfo }: Props) {
  const t = useTranslations("PhotoViewer");

  return (
    <>
      <Header
        backgroundUrl={coverPhoto?.urls.full}
        title={t("title")}
        description={t("description")}
      />
      <div className="flex justify-start items-center">
        <OrderBySelect orderBy={orderBy}>
          {[OrderBy.POPULAR, OrderBy.LATEST].map((value) => (
            <option key={value} value={value}>
              {t("orderBy", { value })}
            </option>
          ))}
        </OrderBySelect>
      </div>
      <PhotoGrid photos={photos} />
      <Pagination orderBy={orderBy} pageInfo={pageInfo} />
    </>
  );
}
