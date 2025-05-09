'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "281316efc051181c8fd8c90c50768d6a",
"assets/AssetManifest.bin.json": "48de0dd3fe82f74d910c2d767a22a01b",
"assets/AssetManifest.json": "f952ac12bb93cdf7e25489f072b8dbe4",
"assets/assets/images/default_profile.png": "41e64ad09da750e1539f6a10f74deaa3",
"assets/assets/images/logo.png": "dfababbba62737772b626c3465459af0",
"assets/assets/images/logo_a.png": "24b3bdfeb423b8eb4d5776628d1fc437",
"assets/assets/images/navbar/analisa.png": "05e228edba96bd941f8bea7646dd05fc",
"assets/assets/images/navbar/home.png": "4dc970508a99106e27516aae6374e2e6",
"assets/assets/images/navbar/profile.png": "242975ab122ffb7822e12f79cc1e93d4",
"assets/assets/images/navbar/tabungan.png": "9419983b94ed22f5943e5b41c10838c9",
"assets/assets/images/other/back.png": "c9697ec60e2d6ca33df082f1731af764",
"assets/assets/images/other/Bell.png": "f5555fe3d2d29497cef8ba883e6b2145",
"assets/assets/images/other/icon_add.png": "bda690ca62d7ff423cc007e55a16d547",
"assets/assets/images/other/icon_calender.png": "f1c2c3dccad16af9ac4f586ba6753a46",
"assets/assets/images/other/icon_category.png": "d582d764a281886aae6ce9b2f0ceb41c",
"assets/assets/images/other/icon_close.png": "6646ed7f97fcc3110b5dfe46c05d09a8",
"assets/assets/images/other/icon_edit.png": "c6295f8413cb9f5f8681480d5e5876e2",
"assets/assets/images/pemasukan/icon_catatan_pemasukan.png": "a50151eef22cfc2aa269915261811329",
"assets/assets/images/pemasukan/icon_pemasukan_transaksi.png": "3bfa5a185d1c67de8a3f9a2a6e6a9d0b",
"assets/assets/images/pemasukan/pemasukan.png": "b67905b66128f15bd138e98a6651698c",
"assets/assets/images/profile/icon_bantuan.png": "0c70037bdafa34803b83086266481176",
"assets/assets/images/profile/icon_dowload.png": "33aa2cab4cbf80c0ccdfb5dc439dea5f",
"assets/assets/images/profile/icon_edit_profile.png": "39c87a8c452c81c8cc5e03da24e6b9f1",
"assets/assets/images/profile/icon_kategori.png": "e5816e4299097369689d2e3bcd4d6b43",
"assets/assets/images/profile/icon_logout.png": "c52356205d734a7e93ce272dfb43218f",
"assets/assets/images/transaksi/all_transaction.png": "1a9f84db1d9da40bec4c7bf091bbfa39",
"assets/assets/images/transaksi/icon_donasi.png": "45294f4c8258de3ea6a3bea8d27d88c7",
"assets/assets/images/transaksi/icon_hiburan.png": "e7edf724df9eb058863f2e4f9b919281",
"assets/assets/images/transaksi/icon_kesehatan.png": "bc2f5a28d7e95c472da03bfb0eaebec6",
"assets/assets/images/transaksi/icon_makanan_minuman.png": "7e411366abe5b1270f0b8ac2b4408941",
"assets/assets/images/transaksi/icon_pendidikan.png": "a17fafa47fd8472095a6fde6bddac2e6",
"assets/assets/images/transaksi/icon_pengeluaran_transaksi.png": "589f8c90436f2a9de034c1b160ced3ae",
"assets/assets/images/transaksi/icon_tagihan.png": "6b1f8c460920244fb4c678cf7f7d3be8",
"assets/assets/images/transaksi/icon_transportasi.png": "396105211476bea909862a40141f874f",
"assets/assets/images/transaksi/lainya.png": "19808d3b3e83a843232ae2ae35819ab4",
"assets/assets/images/transaksi/pengeluaran.png": "621682b1b4ec8b2bc598d0d4258d8e1f",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "9039bcc0092b98a70fc18b19630d95ad",
"assets/NOTICES": "e76d578adf3e779724a7004961d60ef1",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "59faf563bbec9214bc43fbd00872a4cf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c5219e1da815aa3ce12a7a0841fc1cf8",
"/": "c5219e1da815aa3ce12a7a0841fc1cf8",
"main.dart.js": "c279cc96129abe6de03a1454ba88af1a",
"manifest.json": "34d60a83ae929f39054f2ceeb6d9fc85",
"version.json": "1d188648d780692ac1de8dff01bb090b"};
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
