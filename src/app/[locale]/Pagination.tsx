import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { OrderBy } from "unsplash-js";
import { UrlObject } from "url";

type PageInfo = {
  page: number;
  size: number;
  totalElements: number;
};

export default PageInfo;
type Props = {
  pageInfo: PageInfo;
  orderBy: OrderBy;
};
export function Pagination({ pageInfo, orderBy }: Props) {
  const t = useTranslations("Pagination");
  const totalPages = Math.ceil(pageInfo.totalElements / pageInfo.size);

  function getHref(page: number): UrlObject {
    return {
      pathname: "/",
      query: { orderBy, page },
    };
  }
  return (
    <div className="flex gap-3 py-8 items-center justify-center">
      {pageInfo.page > 1 && (
        <Link aria-label={t("prev")} href={getHref(pageInfo.page - 1)}>
          <ArrowLeftIcon height={24} />
        </Link>
      )}
      <div>{t("info", { ...pageInfo, totalPages })}</div>
      {pageInfo.page < totalPages && (
        <Link aria-label={t("prev")} href={getHref(pageInfo.page + 1)}>
          <ArrowRightIcon height={24} />
        </Link>
      )}
    </div>
  );
}
