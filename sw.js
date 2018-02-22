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
    "revision": "0238cda72280f46a9b916e232580e5ca"
  },
  {
    "url": "assets/data/data.json",
    "revision": "bc42ce7d9433ab3f00ad6d5a235f5db2"
  },
  {
    "url": "assets/icons/icon-144.png",
    "revision": "8e519349340c8e9a83174b65a206ea56"
  },
  {
    "url": "assets/icons/icon-192.png",
    "revision": "dcf582c2e19a08a850efc3f654580d25"
  },
  {
    "url": "assets/icons/icon-240.png",
    "revision": "0c52696a7622795fd115d2f2e05e5636"
  },
  {
    "url": "assets/icons/icon-48.png",
    "revision": "546d2c95e03064c02a65cd7e77955087"
  },
  {
    "url": "assets/icons/icon-512.png",
    "revision": "c2a20e958f5435fed8cc61420e6fb7f8"
  },
  {
    "url": "assets/icons/icon-96.png",
    "revision": "fbb2c766165645871ee24d73127bbe80"
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
    "revision": "c2a20e958f5435fed8cc61420e6fb7f8"
  },
  {
    "url": "assets/js/basic.min.js",
    "revision": "b04532186fd75b2291895ee831a6889e"
  },
  {
    "url": "assets/js/script.js",
    "revision": "b3356c831fbc889af17492ef3ae24d59"
  },
  {
    "url": "favicon.ico",
    "revision": "80ab5a8f099a92907e51824e4ca43128"
  },
  {
    "url": "index.html",
    "revision": "6e9d951319c793be2196a4a6bee8f097"
  },
  {
    "url": "manifest.json",
    "revision": "c468c52fe19239e028cece6ca450b866"
  },
  {
    "url": "pages/about.html",
    "revision": "deb66c67332e2c4299e7dacd5ddd206c"
  },
  {
    "url": "pages/contact.html",
    "revision": "c15c4ef41248ae9853412e64f8aa3597"
  },
  {
    "url": "pages/home.html",
    "revision": "a328ca435256aa27cad04f383abac757"
  },
  {
    "url": "pages/services.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "README.md",
    "revision": "8b3811e862c8bdaa507348470397c329"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
