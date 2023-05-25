import UnsplashApiClient from "./UnsplashApiClient";
import { PhotoViewer } from "./PhotoViewer";
import { OrderBy } from "unsplash-js";
import Loading from "./loading";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

type Props = {
  searchParams?: {
    orderBy?: OrderBy;
    page?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const topicSlug = "street-photography";
  const page = parseInt(searchParams?.page || "1");
  const orderBy = searchParams?.orderBy || OrderBy.POPULAR;
  const size = 4;
  const [topicRequest, photosRequest] = await Promise.all([
    UnsplashApiClient.topics.get({ topicIdOrSlug: topicSlug }),
    UnsplashApiClient.topics.getPhotos({
      topicIdOrSlug: topicSlug,
      perPage: size,
      orderBy,
      page,
    }),
  ]);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <PhotoViewer
          orderBy={orderBy}
          photos={photosRequest.response?.results}
          coverPhoto={topicRequest?.response?.cover_photo}
          pageInfo={{
            page,
            size,
            totalElements: photosRequest.response?.total!,
          }}
        />
      </Suspense>
    </div>
  );
}
