'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d69ffa35f64ccb14573d3070e7c36906",
"assets/AssetManifest.bin.json": "2bace88c29e25829a3a820c7ea4f5fd5",
"assets/AssetManifest.json": "491ccfb0ef7688c9af1f735e3ce33684",
"assets/assets/animations/magic.json": "599fae1096bee2212b543416cb815f9a",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/montserrat/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/open_sans/OpenSans-Bold.ttf": "0a191f83602623628320f3d3c667a276",
"assets/assets/fonts/open_sans/OpenSans-Regular.ttf": "931aebd37b54b3e5df2fedfce1432d52",
"assets/assets/icons/exception_tech.webp": "821df68a8486b237f0383af8ecff646e",
"assets/assets/icons/fahs.webp": "06d808295cfb747fce8ce2c4f605681d",
"assets/assets/icons/gomla_plus.webp": "a38255dfc7b7c6264e04293209a0539e",
"assets/assets/icons/la_casa_code.webp": "ff33d04a8925c27f4fbeee1e80fad7fb",
"assets/assets/icons/skyCrow.webp": "9c2f1a05cfa3f734b2b85dfca2ba7246",
"assets/assets/icons/tqnee.webp": "0e01dd4c2392ced2552ed18407ed8a5d",
"assets/assets/icons/vision.webp": "a04e4c5e8e6635119a149ba2dd39d9a0",
"assets/assets/images/me.webp": "6c8960cb5a76f934e444a9d7a50858fb",
"assets/assets/svgs/afran.svg": "6ce5501f9253682a6845bf38fb6a8720",
"assets/assets/svgs/app_store.svg": "6061eed6a1f61f5989000e976904b871",
"assets/assets/svgs/call_icon.svg": "086bbe830b33f46c2954a8db0a90538e",
"assets/assets/svgs/cv_icon.svg": "88ddd1198e5237b5fc758d48e08ec158",
"assets/assets/svgs/delivery.svg": "0606376722befb25e6778d844898248d",
"assets/assets/svgs/desktop_dev.svg": "9f2cf4921be701b1bf6133ba2c410d30",
"assets/assets/svgs/email_icon.svg": "30666c99cfc48b880650293aafbffdb0",
"assets/assets/svgs/facebook_icon.svg": "c847f2e5bc763033d2d6dfe9a32dd93b",
"assets/assets/svgs/fawtra.svg": "876ab3a3a727acb9ac1bf8993f5fb6e6",
"assets/assets/svgs/fix_click.svg": "21a373391a45a1fbd3b24f4fd3a1c4db",
"assets/assets/svgs/github_icon.svg": "f14661b4e8bea86d62721d0158af3076",
"assets/assets/svgs/google_drive.svg": "34174287fcb82f933a963418c6ba1e07",
"assets/assets/svgs/google_play.svg": "09618a85ec02a05a1526c9b77ebd9cc7",
"assets/assets/svgs/home_made.svg": "b025c523c5fdeaf7d3cfe9a6b6d39694",
"assets/assets/svgs/linkedin_icon.svg": "c6b1b241fad00785851be2188d340d7a",
"assets/assets/svgs/logo.svg": "82277dc36dbd111358132a675887e68c",
"assets/assets/svgs/mobile_dev.svg": "bf210d445acf7cab9037fbc7859c7521",
"assets/assets/svgs/mustkhdm.svg": "75fe1c8c8182fa83509a3bafd2540f4f",
"assets/assets/svgs/rahal.svg": "d55826d55daa7b1ae3e2826cc4bc6fe2",
"assets/assets/svgs/tamercom.svg": "72a0e863cb8acd36c872a6e66faeaca8",
"assets/assets/svgs/town_key.svg": "d19b3177d168c7e66ed558343b3622b2",
"assets/assets/svgs/trkar.svg": "896fa4b7ffe17c2c9a7faaf88665b42b",
"assets/assets/svgs/umrah_albdal.svg": "6f1f0d706fd6969b8099f07ac974d920",
"assets/assets/svgs/wayyakum.svg": "0718c4d3de4e28ef69ae0c1dfaf5f777",
"assets/assets/svgs/web_dev.svg": "e458f25afed627f5d22bdb0ba3c6a213",
"assets/assets/svgs/whatsapp_icon.svg": "c9dbf608e80ab3d4921863d66f903855",
"assets/assets/svgs/za_ticket.svg": "59a10f501a2b2db8c123c00e738a9590",
"assets/assets/svgs1b841cc3": "0d272e86c52924bec73525cbf6b3bd24",
"assets/assets/svgsa0d650e3": "f588d5f2042f3fd8d3639f4a82acb7cc",
"assets/assets/svgsc85f60b2": "4a354fffc02a5d89d690e39e1ec65bdf",
"assets/assets/svgsec4e6857": "cc8d7c3874fc1669319df2124e67ec5e",
"assets/FontManifest.json": "b3db1a64677293628bd8367032155c4a",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "6505416e98bfe21e8cd32f9bc02d4662",
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
"index.html": "1b08c9b2afb53edc75a32fec144d145e",
"/": "1b08c9b2afb53edc75a32fec144d145e",
"main.dart.js": "34cf548765b0a997626a2d8e6e01a7c6",
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
