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

var precacheConfig = [["C:/Users/高冷的男神/Desktop/blog/public/archives/1462361889.html","7c20b737c702181afaa0afddeb59c0cc"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1517358039.html","31c0dbd7a1eea0a3c7e0b08b86ca307a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/154867527.html","2243880363b4fad1dc0f2d8fb27e4a59"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1856597008.html","0c1577d8cef4453f161d0634e873199b"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1973821148.html","69a0f7386a4567d8b56c0ab4022dd274"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1988406376.html","9741645a3cd37cb4caed3c9fd56f9f95"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/02/index.html","ed060360af691b768f6e5293d8fef00d"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/03/index.html","8a5962d19d98133c692a453943d64623"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/index.html","2aae7646864f9dcc5fcfe62561ce7fa9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/page/2/index.html","e74958a2ed2f413087e41fb531fe5fe4"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/page/3/index.html","2cf1a09f20c30a37cbf94ffdf48aadc5"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/index.html","837343f62e3400905daa5db3410bf274"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/2/index.html","0e23e3bbdf5a3321c02001bad1c34f92"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/3/index.html","a7732ef6582efa1209f180d98f8e521c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/4/index.html","fc4551051728a140ef16732ba48a9855"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2202648686.html","b947c09c802bc808d3b60bab1c4dc6b6"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2447437047.html","434f119cbfb5207cb2afa3481d5e248e"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2669297123.html","50f2c2f076f86aa2943056c925763b2a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2900021104.html","65c5830494a88a26d97f4ea9cdf8b958"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3020691415.html","16e41fa1755b4a2f7d984ea62e27c7c9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3116909338.html","779bc22930c67d646e98c018daac81e4"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3137458103.html","f1bf5b96343b4aa97bdd1c7c431ebf70"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3139128020.html","f06f7c8a921931347fd9f16d7f2f764d"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3278015703.html","3083b97c103c9a971bd8a3f729cc42db"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3292414775.html","51d451326ff09ae328f07a6c8a8353f6"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3306406959.html","951ae2b5ef1a100007c2b3f0f9cfd2d9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3583131316.html","5e1c2639ef8e99df72e2cecc4f708b0b"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3679495888.html","2b22e6874ab6866d55f34719d514aa1b"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815078.html","3ef7dad3f6590b04855b9b53eb4bb552"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815079.html","193334afb35480c0a8dbf55dac857538"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815080.html","bdfb6ee2858ba692060ad0e785555ba1"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4045953268.html","f11728225fb885e306e8720445c1f2f3"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4070222742.html","5c122f37f6bc941d77168bb512f05170"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4086565940.html","d0592211f613f6328005c999a4db792a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4167823285.html","f9bc9ed1167875337e5a015fb9bbf2b4"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4257653461.html","74ca62346e52c46654dadacbb10826aa"],["C:/Users/高冷的男神/Desktop/blog/public/archives/599829822.html","6cbd52dede5eade10f7f140adc7f77a9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/643733303.html","bb26018b89520987dd2dc6c1230d97e3"],["C:/Users/高冷的男神/Desktop/blog/public/archives/648391965.html","1173eba9908ba0d53bae682b33762aa1"],["C:/Users/高冷的男神/Desktop/blog/public/archives/657161319.html","8f4fe87b6effbf43791624d8bb3b4db9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/743675268.html","c4d407d87085dc4ec8c371e4d0531183"],["C:/Users/高冷的男神/Desktop/blog/public/archives/815832981.html","76bc5d9826b0928546e84457b9daf2d4"],["C:/Users/高冷的男神/Desktop/blog/public/archives/845073791.html","d59a084b2d3ba34f845c9053bd2a40e4"],["C:/Users/高冷的男神/Desktop/blog/public/archives/9c040ea2.html","d5c64f3e1c024ad22e4ea63945da7aa0"],["C:/Users/高冷的男神/Desktop/blog/public/archives/index.html","875748317f8438828d849336d03f3c6e"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/2/index.html","4313c01d3ea27b94c9e89d7ce57a476f"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/3/index.html","b4581ef6730319a651a0fb6cc32d9543"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/4/index.html","8987f1f3e2a424c660ebf1c16c15ee88"],["C:/Users/高冷的男神/Desktop/blog/public/categories/C语言学习笔记/index.html","725919da1b5c75e826623e1689195578"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Hexo/index.html","0f6dbda5fdd92c4670266f6a9163497a"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Java学习笔记/index.html","411670c588aa08be6efc71485a4914df"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Linux学习笔记/index.html","eddb86ab0b65d0417bde65abbc614285"],["C:/Users/高冷的男神/Desktop/blog/public/categories/index.html","b95a426d8f259ee1c70b0b4d8b9c18e2"],["C:/Users/高冷的男神/Desktop/blog/public/categories/yilia/index.html","b4888716f7f768483c1261839c20baad"],["C:/Users/高冷的男神/Desktop/blog/public/categories/常见bug/index.html","8980938a3ed303208f760f3184488b67"],["C:/Users/高冷的男神/Desktop/blog/public/categories/计算机/index.html","86dcabd7ef7c5b1629ddf4e3aec2f8d2"],["C:/Users/高冷的男神/Desktop/blog/public/categories/软件工具/index.html","67c89e45782a7053bb46d6091bb6278e"],["C:/Users/高冷的男神/Desktop/blog/public/css/index.css","56cc863d39863078d48a06a7bd920b6e"],["C:/Users/高冷的男神/Desktop/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/高冷的男神/Desktop/blog/public/img/2.png","a707c97c1f534c24ae638d8026f78267"],["C:/Users/高冷的男神/Desktop/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/高冷的男神/Desktop/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/高冷的男神/Desktop/blog/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["C:/Users/高冷的男神/Desktop/blog/public/img/bq.jpg","19bbadd8563123dd6e0fa72e47f4b8b6"],["C:/Users/高冷的男神/Desktop/blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/高冷的男神/Desktop/blog/public/img/fenlei.jpg","84c493067ed7500cc5680da64d35a611"],["C:/Users/高冷的男神/Desktop/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/高冷的男神/Desktop/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/高冷的男神/Desktop/blog/public/img/index.jpg","9ab35940d1851a6d593490f48d450290"],["C:/Users/高冷的男神/Desktop/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/高冷的男神/Desktop/blog/public/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["C:/Users/高冷的男神/Desktop/blog/public/img/post2.jpg","d9183e4b5310574e687eac94c0a96a6e"],["C:/Users/高冷的男神/Desktop/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/高冷的男神/Desktop/blog/public/img/wc.png","920e8c5f7cecf5d16623757f80857bf0"],["C:/Users/高冷的男神/Desktop/blog/public/img/zfb.png","b37c5d5292744a25f067ee010cb7d92c"],["C:/Users/高冷的男神/Desktop/blog/public/index.html","56d3aa33012e2005210f9e9d1326aa1f"],["C:/Users/高冷的男神/Desktop/blog/public/js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["C:/Users/高冷的男神/Desktop/blog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["C:/Users/高冷的男神/Desktop/blog/public/js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["C:/Users/高冷的男神/Desktop/blog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["C:/Users/高冷的男神/Desktop/blog/public/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["C:/Users/高冷的男神/Desktop/blog/public/link/index.html","6fe324051859e91ff50586f066c8b6c0"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/高冷的男神/Desktop/blog/public/movies/index.html","0247f192b62e06bb1c8cec6cbd51e7ed"],["C:/Users/高冷的男神/Desktop/blog/public/music/index.html","fae43378d6436937ed1106b77022faea"],["C:/Users/高冷的男神/Desktop/blog/public/page/2/index.html","d5f563a5cc49aff1542ce0b94fe63d34"],["C:/Users/高冷的男神/Desktop/blog/public/page/3/index.html","4c7bf9b7c6a782ebcd9575acf1b8546f"],["C:/Users/高冷的男神/Desktop/blog/public/page/4/index.html","882383c2e6975c3c103e368117c8d691"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Centos/index.html","4db6752de3f7f8068bd59c779023cbed"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Class类/index.html","b920853c6115e59b2e074da63f283cfd"],["C:/Users/高冷的男神/Desktop/blog/public/tags/C语言基础/index.html","d09d7439e06b1cc2c91aab72a1b57864"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Hexo搭建/index.html","b85003562df332a386554b5812c7bd9c"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Java基础/index.html","f2b63b161264fdf80f1b5bad9004bcdf"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Linux/index.html","e030649913c4fd9efdf202c9364c9894"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Linux基本命令/index.html","697dcfd3c60f1eaa7957b4b3995c2e0c"],["C:/Users/高冷的男神/Desktop/blog/public/tags/TCP/index.html","6abdbee4aff4ebb26e7f689be50eb866"],["C:/Users/高冷的男神/Desktop/blog/public/tags/ViscualC-6-0工具/index.html","81c5f8ebeba2e5fd3911f4fdee605314"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Vmware15/index.html","d7fe60b8e21b48629e4524dd5a555739"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Win系统安装/index.html","28a5298caf0ff1fe9ce1ee1acd2c9f17"],["C:/Users/高冷的男神/Desktop/blog/public/tags/butterfly/index.html","15ca985c3e1563e63756191ef649ea51"],["C:/Users/高冷的男神/Desktop/blog/public/tags/idea全家桶激活码/index.html","5f74d9406420955eb874dba932704bbe"],["C:/Users/高冷的男神/Desktop/blog/public/tags/index.html","2f406c9c09c587914cf3e0f4ab8db0a4"],["C:/Users/高冷的男神/Desktop/blog/public/tags/office/index.html","cc4b3017656285eeb216be9d469fe859"],["C:/Users/高冷的男神/Desktop/blog/public/tags/ssh/index.html","7295c11d7884dfd68c2d589193cb1b59"],["C:/Users/高冷的男神/Desktop/blog/public/tags/tomcat/index.html","a12f05bd667b192826193175f10020b2"],["C:/Users/高冷的男神/Desktop/blog/public/tags/令牌/index.html","dbc9570c8ad95ea362908bbcd379ec6a"],["C:/Users/高冷的男神/Desktop/blog/public/tags/公钥/index.html","6f9112be3df5c3ac5774a60bdff7b240"],["C:/Users/高冷的男神/Desktop/blog/public/tags/分类（categories）/index.html","f4bd03dde46eb981aade67b8ca0cfdf2"],["C:/Users/高冷的男神/Desktop/blog/public/tags/反射/index.html","68a8f184977eab1a27d803597b78ae30"],["C:/Users/高冷的男神/Desktop/blog/public/tags/多线程/index.html","a4ce029c50b51266a187e49cfd957052"],["C:/Users/高冷的男神/Desktop/blog/public/tags/数据类型/index.html","a269456ad662f7a8517495960551e606"],["C:/Users/高冷的男神/Desktop/blog/public/tags/枚举/index.html","8c455671ea7e8c146bcc785042fba9d1"],["C:/Users/高冷的男神/Desktop/blog/public/tags/标签（tags）/index.html","ab465a2a6c7f51421adc07bf6f5f76ae"],["C:/Users/高冷的男神/Desktop/blog/public/tags/标识符/index.html","9e2ba322cf5f12b7c0584e88caeef372"],["C:/Users/高冷的男神/Desktop/blog/public/tags/汉化/index.html","f0d838caa75f430ceb0bf389cd5a65ff"],["C:/Users/高冷的男神/Desktop/blog/public/tags/注解/index.html","056fac3c2b7c0c346ee94ab43c749c9d"],["C:/Users/高冷的男神/Desktop/blog/public/tags/看板娘/index.html","58a2fa2259109af88443a8ffcebeb8a8"],["C:/Users/高冷的男神/Desktop/blog/public/tags/端口冲突/index.html","ce83b0177e236749cb3c9d9f3b24edc9"],["C:/Users/高冷的男神/Desktop/blog/public/tags/系统激活/index.html","756f7c8ce7cfb0df0f8743aad2232a80"],["C:/Users/高冷的男神/Desktop/blog/public/tags/网络编程/index.html","10c8270cce6ea715a9391e5d96c9b3f9"],["C:/Users/高冷的男神/Desktop/blog/public/tags/网络通讯/index.html","9ab29161159eea6c5cea2b43f15ace03"],["C:/Users/高冷的男神/Desktop/blog/public/tags/部署/index.html","73e3ef3d2b2974cb46b255062faabdb6"],["C:/Users/高冷的男神/Desktop/blog/public/tags/铭飞cms/index.html","10d0ee1a21a82bf27feb0893ac9440f5"],["C:/Users/高冷的男神/Desktop/blog/public/tags/防火墙/index.html","9c84490231d4f2cc0b947c9913bd7156"],["C:/Users/高冷的男神/Desktop/blog/public/tags/随笔/index.html","d1cb9dc8bbc5ef580e92d2e0ce5f617f"]];
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







