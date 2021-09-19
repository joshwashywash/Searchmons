import { precacheAndRoute } from 'workbox-precaching';
import { imageCache, offlineFallback } from 'workbox-recipes';
import { setDefaultHandler } from 'workbox-routing';
import { NetworkOnly } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

setDefaultHandler(new NetworkOnly());

offlineFallback({ imageFallback: '/searchmons/icons/manifest-icon-512.png' });
imageCache();
