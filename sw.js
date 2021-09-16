import { imageCache } from "workbox-recipes";
import { matchPrecache, precacheAndRoute } from "workbox-precaching";
import { setCatchHandler } from "workbox-routing";

precacheAndRoute(self.__WB_MANIFEST);
imageCache();

setCatchHandler(async ({ event }) => {
  switch (event.request.destination) {
    case "image":
      return matchPrecache("icons/manifest-icon-512.png");
    default:
      return Response.error();
  }
});
