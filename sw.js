importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/css/basic.min.css",
    "revision": "822b3306af2588e7ec8614d0c497176e"
  },
  {
    "url": "assets/css/style.css",
    "revision": "a2cb52bef29ae27b5c8cc736c39d7915"
  },
  {
    "url": "assets/data/data.json",
    "revision": "b3d9156184d448e8cbdd5d33719a5091"
  },
  {
    "url": "assets/icons/icon-144.png",
    "revision": "9ea07292f96828d28b4a2e470807fa8b"
  },
  {
    "url": "assets/icons/icon-192.png",
    "revision": "5aba332a4e82964955c75fbc0b420f5f"
  },
  {
    "url": "assets/icons/icon-240.png",
    "revision": "7bae0fcc3e5e452e57a046df9cee672b"
  },
  {
    "url": "assets/icons/icon-48.png",
    "revision": "0e1bc6bb8bd11d7a1a73a7e045e0b7f8"
  },
  {
    "url": "assets/icons/icon-512.png",
    "revision": "dced1da85dbea7992009924979da121d"
  },
  {
    "url": "assets/icons/icon-96.png",
    "revision": "08f25738afdd3e9f149b5cf975288ab1"
  },
  {
    "url": "assets/icons/icon.svg",
    "revision": "2440ce926033563babc0e625a314c274"
  },
  {
    "url": "assets/images/portfolio/antojo-taco-wrap.png",
    "revision": "58a8c0ed0d111d7d8500b558afe22bab"
  },
  {
    "url": "assets/images/portfolio/apex-furniture-refinishing.png",
    "revision": "bd05eaa8694e2195b4b67af4613f2b31"
  },
  {
    "url": "assets/images/portfolio/once-in-a-lifetime-bridal-boutique.png",
    "revision": "98a9a7104d6f35f4424aec16c9f75c9a"
  },
  {
    "url": "assets/images/portfolio/sistemas-y-arquitectura.png",
    "revision": "3dc22f790db50dacfc1e1c4e05f50467"
  },
  {
    "url": "assets/images/portfolio/systems-and-architecture.png",
    "revision": "90b6ac86bf6e6128098068569f7187e8"
  },
  {
    "url": "assets/images/portfolio/taxi-familiar.png",
    "revision": "ffce0e1484b6101d5ede4706c2364b36"
  },
  {
    "url": "assets/images/portfolio/tech-feed.png",
    "revision": "3e01ca74cc516d1026d197371bbf5c7a"
  },
  {
    "url": "assets/images/portfolio/tripoli-halal-meat.png",
    "revision": "592391b8621a27c68410276da38a166d"
  },
  {
    "url": "assets/images/sergio-perez-logo.png",
    "revision": "e0643e34eb0bc81644dc4017763c0675"
  },
  {
    "url": "assets/js/basic.min.js",
    "revision": "b04532186fd75b2291895ee831a6889e"
  },
  {
    "url": "assets/js/script.js",
    "revision": "655006cabde658868e1707df166f9d7c"
  },
  {
    "url": "favicon.ico",
    "revision": "80ab5a8f099a92907e51824e4ca43128"
  },
  {
    "url": "index.html",
    "revision": "a3396ef48e97fd10fde16f7c2662e22f"
  },
  {
    "url": "manifest.json",
    "revision": "9641b9bd0f969d84ad8d9a960fbbefeb"
  },
  {
    "url": "pages/about.html",
    "revision": "deb66c67332e2c4299e7dacd5ddd206c"
  },
  {
    "url": "pages/contact.html",
    "revision": "78f82cb9cbc013e3b59bbf400b59c9b3"
  },
  {
    "url": "pages/home.html",
    "revision": "a328ca435256aa27cad04f383abac757"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
