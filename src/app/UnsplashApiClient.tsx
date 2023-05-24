import { createApi } from "unsplash-js";

const UnsplashApiClient = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY || "",
});
console.log("hi");
export default UnsplashApiClient;
