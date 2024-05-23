'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f16c9b03cdbd0d113d6acc5813c0778d",
"assets/AssetManifest.bin.json": "c2c429ec0947e78b79cb22d14038d5b7",
"assets/AssetManifest.json": "271425ecd0b878c5eae3e2bf831e97ad",
"assets/assets/animations/geni.json": "3e5524b4c08afaeae8686043751778ba",
"assets/assets/animations/magic.json": "599fae1096bee2212b543416cb815f9a",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/montserrat/Montserrat-ExtraBold.ttf": "9e07cac927a9b4d955e2138bf6136d6a",
"assets/assets/fonts/montserrat/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/montserrat/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/montserrat/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/assets/fonts/open_sans/OpenSans-Bold.ttf": "0a191f83602623628320f3d3c667a276",
"assets/assets/fonts/open_sans/OpenSans-ExtraBold.ttf": "f0af8434e183f500acf62135a577c739",
"assets/assets/fonts/open_sans/OpenSans-Medium.ttf": "dac0e601db6e3601159b4aae5c1fda39",
"assets/assets/fonts/open_sans/OpenSans-Regular.ttf": "931aebd37b54b3e5df2fedfce1432d52",
"assets/assets/fonts/open_sans/OpenSans-SemiBold.ttf": "e2ca235bf1ddc5b7a350199cf818c9c8",
"assets/assets/icons/delivery.png": "72237e51abdc8283666480b8233e79d9",
"assets/assets/icons/exception_tech.jpg": "66d55b6778319eaa6fcef2d9383603c3",
"assets/assets/icons/fawtra.png": "2fc64404d50d9b774894729cc7674322",
"assets/assets/icons/la_casa_code.png": "8d9594e26fd8fe4f16d80afb9d4cd949",
"assets/assets/icons/logo.png": "5f916d92d656a6c1785e0dadfe1624e1",
"assets/assets/icons/mustkhdm.png": "56eceee77eb7595e71ac9897d3fdf1b6",
"assets/assets/icons/skyCrow.jpg": "192c30f64dc683cd9de7155f8329e2c1",
"assets/assets/icons/tqnee.jpg": "6d39aa30524400638f7480ca4cbf574e",
"assets/assets/icons/umrah_albdal.png": "4330272f29756a8dcabc68e22c6abca7",
"assets/assets/icons/vision.jpg": "fe52b5ef78f0533f972f7c30136b6529",
"assets/assets/icons/wayyakum.png": "46e3c625e184896c0ff35f5b122fc076",
"assets/assets/icons/za_ticket.webp": "48bba11a1fa6ffe44cc308a990b42873",
"assets/assets/images/me.png": "faad021222efee844cbe3474ec39a9ec",
"assets/assets/svgs/app_store.svg": "85747858236d63b82c67dbef19b88c57",
"assets/assets/svgs/call_icon.svg": "49a6d8d80c75035800a6e5dc65797d3f",
"assets/assets/svgs/cv_icon.svg": "473ce6d4af97cd41ad605b885ef0b541",
"assets/assets/svgs/desktop_dev.svg": "0d272e86c52924bec73525cbf6b3bd24",
"assets/assets/svgs/email_icon.svg": "214235e2c7cc2fb081e0f679fcfb8158",
"assets/assets/svgs/facebook_icon.svg": "b6f19ab3e9ba7574eab66455774febcf",
"assets/assets/svgs/github_icon.svg": "82fcfef59fac63efa18a4b61a92636dc",
"assets/assets/svgs/google_drive.svg": "57da4833f5c34cb0dd6ec382e64ff2b7",
"assets/assets/svgs/google_play.svg": "4a354fffc02a5d89d690e39e1ec65bdf",
"assets/assets/svgs/linkedin_icon.svg": "a97e21057405ce12ad93f0150a08ef7d",
"assets/assets/svgs/mobile_dev.svg": "f588d5f2042f3fd8d3639f4a82acb7cc",
"assets/assets/svgs/web_dev.svg": "cc8d7c3874fc1669319df2124e67ec5e",
"assets/assets/svgs/whatsapp_icon.svg": "c9707074ca3e6e085b199f16f16512b3",
"assets/FontManifest.json": "b141fee69f0fb556176e15edeb2992a4",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "9cc29877adf01e6a4cb9532fdf4209f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "d4c37465a4c4d567d3dfef54feb9132a",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "05dab907f616d894fe1b53a70d7ff987",
"icons/Icon-192.png": "cd617fb49ae08b72817b40df5ccd0817",
"icons/Icon-512.png": "e9229d36abc22e8ee87ab561e634b8b9",
"icons/Icon-maskable-192.png": "cd617fb49ae08b72817b40df5ccd0817",
"icons/Icon-maskable-512.png": "e9229d36abc22e8ee87ab561e634b8b9",
"index.html": "72f7e448415faa4bb23756e7eef9ac9c",
"/": "72f7e448415faa4bb23756e7eef9ac9c",
"main.dart.js": "9529c743f159489aa059d77b403a76cb",
"manifest.json": "5f56109c5826ecdf99668db61750238d",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
