/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/高冷的男神/Desktop/blog/public/archives/1462361889.html","7c20b737c702181afaa0afddeb59c0cc"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1517358039.html","31c0dbd7a1eea0a3c7e0b08b86ca307a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/154867527.html","2243880363b4fad1dc0f2d8fb27e4a59"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1856597008.html","0c1577d8cef4453f161d0634e873199b"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1973821148.html","69a0f7386a4567d8b56c0ab4022dd274"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1988406376.html","9741645a3cd37cb4caed3c9fd56f9f95"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/02/index.html","ec839f132da258a21a4e6ec73ace1956"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/03/index.html","acc0a5394a03cb3de3d9bea4e261b0bc"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/index.html","aec94cc98eefda58cbd00112e45bbc71"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/page/2/index.html","d21bd433663988fabaa38da74656c763"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/page/3/index.html","54bc3c31c161bbe0d38adabad5c40371"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/index.html","2db92b93112317c7ce36ad9053d5f88c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/2/index.html","4e3024f02d8b13816f6a868aabf68cc7"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/3/index.html","21c22aab22382c4c5bd304fb4af12f84"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/4/index.html","ea0d9769abd9e047febaa95166b6fec7"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2202648686.html","b947c09c802bc808d3b60bab1c4dc6b6"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2447437047.html","434f119cbfb5207cb2afa3481d5e248e"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2669297123.html","50f2c2f076f86aa2943056c925763b2a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2900021104.html","65c5830494a88a26d97f4ea9cdf8b958"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3020691415.html","16e41fa1755b4a2f7d984ea62e27c7c9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3116909338.html","779bc22930c67d646e98c018daac81e4"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3137458103.html","f1bf5b96343b4aa97bdd1c7c431ebf70"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3139128020.html","f06f7c8a921931347fd9f16d7f2f764d"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3278015703.html","3083b97c103c9a971bd8a3f729cc42db"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3292414775.html","a43138ed07bf581d2ed85bb1a816b760"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3306406959.html","951ae2b5ef1a100007c2b3f0f9cfd2d9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3583131316.html","9741802ae0914a4117f06d143770b9da"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3679495888.html","920a076624071bc38cf5f072966889ba"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815078.html","3ef7dad3f6590b04855b9b53eb4bb552"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815079.html","193334afb35480c0a8dbf55dac857538"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815080.html","bdfb6ee2858ba692060ad0e785555ba1"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4045953268.html","f11728225fb885e306e8720445c1f2f3"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4070222742.html","5c122f37f6bc941d77168bb512f05170"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4086565940.html","d0592211f613f6328005c999a4db792a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4167823285.html","ef13034a722b5c5a48365403791ec490"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4257653461.html","74ca62346e52c46654dadacbb10826aa"],["C:/Users/高冷的男神/Desktop/blog/public/archives/599829822.html","6cbd52dede5eade10f7f140adc7f77a9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/643733303.html","bb26018b89520987dd2dc6c1230d97e3"],["C:/Users/高冷的男神/Desktop/blog/public/archives/648391965.html","1173eba9908ba0d53bae682b33762aa1"],["C:/Users/高冷的男神/Desktop/blog/public/archives/657161319.html","8f4fe87b6effbf43791624d8bb3b4db9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/743675268.html","6307acc66ae0d1dedc60286ab71d179c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/815832981.html","76bc5d9826b0928546e84457b9daf2d4"],["C:/Users/高冷的男神/Desktop/blog/public/archives/845073791.html","d59a084b2d3ba34f845c9053bd2a40e4"],["C:/Users/高冷的男神/Desktop/blog/public/archives/9c040ea2.html","d5c64f3e1c024ad22e4ea63945da7aa0"],["C:/Users/高冷的男神/Desktop/blog/public/archives/index.html","e01d8fa6638fd38b5845d4200626823c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/2/index.html","51c11c8cc4ba689ad447b8c781585cc3"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/3/index.html","87ba51001f975b884906f4193a75f93d"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/4/index.html","ea1f6c0c91a7668fc994f9234386023f"],["C:/Users/高冷的男神/Desktop/blog/public/categories/C语言学习笔记/index.html","337de86d93779a71792b11e8ced46ae7"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Hexo/index.html","67c5f45fc4edf57a63a9149073af3ce2"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Java学习笔记/index.html","9309ed9191a7b7b8072d2389e7ae0707"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Linux学习笔记/index.html","2b3626315d1ad118f53f099e7159c2c5"],["C:/Users/高冷的男神/Desktop/blog/public/categories/index.html","0126223bacd79bda1f4185f486a1bf5c"],["C:/Users/高冷的男神/Desktop/blog/public/categories/yilia/index.html","2e6c9908fdd71230dccedd93f63b6efc"],["C:/Users/高冷的男神/Desktop/blog/public/categories/常见bug/index.html","fc77f8e3d1766876e54244feb58f4bb8"],["C:/Users/高冷的男神/Desktop/blog/public/categories/计算机/index.html","fe826b3d90c025c959e4989ffb029c6b"],["C:/Users/高冷的男神/Desktop/blog/public/categories/软件工具/index.html","de1c1337f6f1d87bce6c9ef35ae4439a"],["C:/Users/高冷的男神/Desktop/blog/public/css/index.css","56cc863d39863078d48a06a7bd920b6e"],["C:/Users/高冷的男神/Desktop/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/高冷的男神/Desktop/blog/public/img/2.png","a707c97c1f534c24ae638d8026f78267"],["C:/Users/高冷的男神/Desktop/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/高冷的男神/Desktop/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/高冷的男神/Desktop/blog/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["C:/Users/高冷的男神/Desktop/blog/public/img/bq.jpg","19bbadd8563123dd6e0fa72e47f4b8b6"],["C:/Users/高冷的男神/Desktop/blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/高冷的男神/Desktop/blog/public/img/fenlei.jpg","84c493067ed7500cc5680da64d35a611"],["C:/Users/高冷的男神/Desktop/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/高冷的男神/Desktop/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/高冷的男神/Desktop/blog/public/img/index.jpg","9ab35940d1851a6d593490f48d450290"],["C:/Users/高冷的男神/Desktop/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/高冷的男神/Desktop/blog/public/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["C:/Users/高冷的男神/Desktop/blog/public/img/post2.jpg","d9183e4b5310574e687eac94c0a96a6e"],["C:/Users/高冷的男神/Desktop/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/高冷的男神/Desktop/blog/public/img/wc.png","920e8c5f7cecf5d16623757f80857bf0"],["C:/Users/高冷的男神/Desktop/blog/public/img/zfb.png","b37c5d5292744a25f067ee010cb7d92c"],["C:/Users/高冷的男神/Desktop/blog/public/index.html","b5ee28775b7c097e3d1c480ff92850bd"],["C:/Users/高冷的男神/Desktop/blog/public/js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["C:/Users/高冷的男神/Desktop/blog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["C:/Users/高冷的男神/Desktop/blog/public/js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["C:/Users/高冷的男神/Desktop/blog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["C:/Users/高冷的男神/Desktop/blog/public/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["C:/Users/高冷的男神/Desktop/blog/public/link/index.html","b522fc4d9e0896817e48302768ea406c"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/高冷的男神/Desktop/blog/public/movies/index.html","5ae2b344395514f767d4d89205deecc5"],["C:/Users/高冷的男神/Desktop/blog/public/music/index.html","0237588abbbe78abb6ae5700eb430fd3"],["C:/Users/高冷的男神/Desktop/blog/public/page/2/index.html","03c38599b69115912a8dde8427485386"],["C:/Users/高冷的男神/Desktop/blog/public/page/3/index.html","e7a667f7b995504824b1fa94c577cb82"],["C:/Users/高冷的男神/Desktop/blog/public/page/4/index.html","f2d7d5c190bbaef9a686b6b939dbe59c"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Centos/index.html","b9adfe94a304589aa21fab63a143a070"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Class类/index.html","3aa13bcb1a877c6361d6296c12b1dcb0"],["C:/Users/高冷的男神/Desktop/blog/public/tags/C语言基础/index.html","a815445e8bf851ea67c858264e675448"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Hexo搭建/index.html","e7fa3d8d17bedf6c184a59302410c28c"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Java基础/index.html","697d2817a94a8fc9123c9e515a7d674a"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Linux/index.html","7cfb75d035341940fd4fa4398b8999f3"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Linux基本命令/index.html","3aea7950b89a89fbde625b4066cab76c"],["C:/Users/高冷的男神/Desktop/blog/public/tags/TCP/index.html","ee940828c96cf9cd58c255f6fe7c6731"],["C:/Users/高冷的男神/Desktop/blog/public/tags/ViscualC-6-0工具/index.html","cb02297214f2ce98cfafc885072c71e2"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Vmware15/index.html","d32b111c6b443dd9224ac9b0f4ae6600"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Win系统安装/index.html","d27a750aac50856e9e2ce3528a6edcc9"],["C:/Users/高冷的男神/Desktop/blog/public/tags/butterfly/index.html","f1bf4cb184613accefdf53f283e70020"],["C:/Users/高冷的男神/Desktop/blog/public/tags/idea全家桶激活码/index.html","94a6d90cde5d0c787e8dabe752fc3100"],["C:/Users/高冷的男神/Desktop/blog/public/tags/index.html","95539003219f2575c96310bec458834e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/office/index.html","7692d89a1af72e1496e2e4fa59e47a9c"],["C:/Users/高冷的男神/Desktop/blog/public/tags/ssh/index.html","77095125080662cc1fa772be0f6ad78e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/tomcat/index.html","48c6b3565e0fbbf7f0fb4b26bba5407f"],["C:/Users/高冷的男神/Desktop/blog/public/tags/令牌/index.html","60843057e2a5e5354407b1429b516a3c"],["C:/Users/高冷的男神/Desktop/blog/public/tags/公钥/index.html","3c40ff5ad46cac00ce14b9820f3cf2bc"],["C:/Users/高冷的男神/Desktop/blog/public/tags/分类（categories）/index.html","525df79fa446c614bc3f6a04c76cfd3e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/反射/index.html","3ee71aba75034a0f63e1a5bcb31508b1"],["C:/Users/高冷的男神/Desktop/blog/public/tags/多线程/index.html","425eadd01723096416438121f3fbf8a0"],["C:/Users/高冷的男神/Desktop/blog/public/tags/数据类型/index.html","660a3c98c57833f63991dbf32576d415"],["C:/Users/高冷的男神/Desktop/blog/public/tags/枚举/index.html","be20fd0919228aafe3c97dadc7732094"],["C:/Users/高冷的男神/Desktop/blog/public/tags/标签（tags）/index.html","2de4fcb39092792d618448cc8526d6e3"],["C:/Users/高冷的男神/Desktop/blog/public/tags/标识符/index.html","8b4ceb0c41eb4c14d191c7e66e924258"],["C:/Users/高冷的男神/Desktop/blog/public/tags/汉化/index.html","48bed52eac7fe0ec95e6b11300f6ed8d"],["C:/Users/高冷的男神/Desktop/blog/public/tags/注解/index.html","bf80f0323061b712d8f99881ff8e0a72"],["C:/Users/高冷的男神/Desktop/blog/public/tags/看板娘/index.html","585cc0fb808f913326782ca7a60839c1"],["C:/Users/高冷的男神/Desktop/blog/public/tags/端口冲突/index.html","62429e56596992f95a1c65ab4406aedf"],["C:/Users/高冷的男神/Desktop/blog/public/tags/系统激活/index.html","a411d71a7ff621ef009cff061ab5e276"],["C:/Users/高冷的男神/Desktop/blog/public/tags/网络编程/index.html","7d04ace384f2b98c9dfa7f246f89799f"],["C:/Users/高冷的男神/Desktop/blog/public/tags/网络通讯/index.html","e2f42b3b6161815920787eb52de3fc83"],["C:/Users/高冷的男神/Desktop/blog/public/tags/部署/index.html","ada026710ff700b51440e1cbb9d911bc"],["C:/Users/高冷的男神/Desktop/blog/public/tags/铭飞cms/index.html","6244e95f3de3e2ee125e7dfcc14d480a"],["C:/Users/高冷的男神/Desktop/blog/public/tags/防火墙/index.html","ba9c90845c37f2c5faa5093d63b9f82e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/随笔/index.html","ba3c39853962e6187f826673a7a88998"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







