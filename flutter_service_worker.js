'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ded7652ed64eef330eeb2fc75e101f22",
"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "f4d8b150cb0f99e0dcad511db90fece0",
"/": "f4d8b150cb0f99e0dcad511db90fece0",
"main.dart.js": "37467874aa754df00eca0525fd02e347",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.wasm.map": "e9c7f734ea1763cf622d137be9b178bf",
"favicon.png": "d4c37465a4c4d567d3dfef54feb9132a",
"main.dart.mjs": "7175812843df6c81bda57edada053572",
"icons/Icon-192.png": "cd617fb49ae08b72817b40df5ccd0817",
"icons/Icon-maskable-192.png": "cd617fb49ae08b72817b40df5ccd0817",
"icons/Icon-maskable-512.png": "e9229d36abc22e8ee87ab561e634b8b9",
"icons/Icon-512.png": "e9229d36abc22e8ee87ab561e634b8b9",
"manifest.json": "5f56109c5826ecdf99668db61750238d",
"main.dart.wasm": "91a2af5630db01b26b187fa34c5144f1",
"assets/AssetManifest.json": "0151003f229b561f4f8bcef23008fc1c",
"assets/NOTICES": "fc76697c7790d383e7987d66214c56a1",
"assets/FontManifest.json": "b3db1a64677293628bd8367032155c4a",
"assets/AssetManifest.bin.json": "4c408d42f3d06830043c0755492acfc0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e832b765ce2c8c355f9b8171de663918",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/images/me.webp": "6c8960cb5a76f934e444a9d7a50858fb",
"assets/assets/svgs/rahal.svg": "d55826d55daa7b1ae3e2826cc4bc6fe2",
"assets/assets/svgs/google_drive.svg": "34174287fcb82f933a963418c6ba1e07",
"assets/assets/svgs/desktop_dev.svg": "9f2cf4921be701b1bf6133ba2c410d30",
"assets/assets/svgs/linkedin_icon.svg": "c6b1b241fad00785851be2188d340d7a",
"assets/assets/svgs/afran.svg": "6ce5501f9253682a6845bf38fb6a8720",
"assets/assets/svgs/yalla_ticket_icon.svg": "5e226fe03ca6d51fd36b3be94c9e755b",
"assets/assets/svgs/web_dev.svg": "e458f25afed627f5d22bdb0ba3c6a213",
"assets/assets/svgs/delivery.svg": "0606376722befb25e6778d844898248d",
"assets/assets/svgs/fix_click.svg": "21a373391a45a1fbd3b24f4fd3a1c4db",
"assets/assets/svgs/tamercom.svg": "72a0e863cb8acd36c872a6e66faeaca8",
"assets/assets/svgs/cv_icon.svg": "88ddd1198e5237b5fc758d48e08ec158",
"assets/assets/svgs/town_key.svg": "d19b3177d168c7e66ed558343b3622b2",
"assets/assets/svgs/wayyakum.svg": "0718c4d3de4e28ef69ae0c1dfaf5f777",
"assets/assets/svgs/github_icon.svg": "f14661b4e8bea86d62721d0158af3076",
"assets/assets/svgs/app_store.svg": "6061eed6a1f61f5989000e976904b871",
"assets/assets/svgs/whatsapp_icon.svg": "c9dbf608e80ab3d4921863d66f903855",
"assets/assets/svgs/google_play.svg": "09618a85ec02a05a1526c9b77ebd9cc7",
"assets/assets/svgs/mobile_dev.svg": "bf210d445acf7cab9037fbc7859c7521",
"assets/assets/svgs/fawtra.svg": "876ab3a3a727acb9ac1bf8993f5fb6e6",
"assets/assets/svgs/facebook_icon.svg": "c847f2e5bc763033d2d6dfe9a32dd93b",
"assets/assets/svgs/email_icon.svg": "30666c99cfc48b880650293aafbffdb0",
"assets/assets/svgs/home_made.svg": "b025c523c5fdeaf7d3cfe9a6b6d39694",
"assets/assets/svgs/logo.svg": "82277dc36dbd111358132a675887e68c",
"assets/assets/svgs/wiregcc.svg": "88af3e015315e99294650b7706708644",
"assets/assets/svgs/trkar.svg": "896fa4b7ffe17c2c9a7faaf88665b42b",
"assets/assets/svgs/mustkhdm.svg": "75fe1c8c8182fa83509a3bafd2540f4f",
"assets/assets/svgs/call_icon.svg": "086bbe830b33f46c2954a8db0a90538e",
"assets/assets/icons/fahs.webp": "06d808295cfb747fce8ce2c4f605681d",
"assets/assets/icons/gomla_plus.webp": "a38255dfc7b7c6264e04293209a0539e",
"assets/assets/icons/tqnee.webp": "0e01dd4c2392ced2552ed18407ed8a5d",
"assets/assets/icons/skyCrow.webp": "9c2f1a05cfa3f734b2b85dfca2ba7246",
"assets/assets/icons/exception_tech.webp": "821df68a8486b237f0383af8ecff646e",
"assets/assets/icons/umrah_albdal.webp": "1518655ad21d4d400cc19f853f1f6047",
"assets/assets/icons/wiregcc.webp": "3c8b6fae813252723b583e418ddf72ba",
"assets/assets/icons/elaraby_group.webp": "f6e98356d27180e3fe7635e6808dad51",
"assets/assets/icons/dr_ehab.webp": "34dcf8ae0208254686757b6be90d4b8d",
"assets/assets/icons/vision.webp": "a04e4c5e8e6635119a149ba2dd39d9a0",
"assets/assets/icons/la_casa_code.webp": "ff33d04a8925c27f4fbeee1e80fad7fb",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/montserrat/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/open_sans/OpenSans-Bold.ttf": "0a191f83602623628320f3d3c667a276",
"assets/assets/fonts/open_sans/OpenSans-Regular.ttf": "931aebd37b54b3e5df2fedfce1432d52",
"assets/assets/animations/magic.json": "599fae1096bee2212b543416cb815f9a",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
