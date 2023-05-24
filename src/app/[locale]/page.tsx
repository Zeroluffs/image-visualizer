import Image from "next/image";
import UnsplashApiClient from "./UnsplashApiClient";
import { PhotoGrid } from "./PhotoGrid";
import { PhotoViewer } from "./PhotoViewer";

export default async function Home() {
  const topicSlug = "street-photography";
  const page = 1;
  const size = 4;
  const [topicRequest, photosRequest] = await Promise.all([
    UnsplashApiClient.topics.get({ topicIdOrSlug: topicSlug }),
    UnsplashApiClient.topics.getPhotos({
      topicIdOrSlug: topicSlug,
      perPage: size,
      page,
    }),
  ]);

  return (
    <div>
      <PhotoViewer
        photos={photosRequest.response?.results}
        coverPhoto={topicRequest?.response?.cover_photo}
      />
    </div>
  );
}
