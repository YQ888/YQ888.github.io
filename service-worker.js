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

var precacheConfig = [["C:/Users/高冷的男神/Desktop/blog/public/archives/1462361889.html","96564eeadfbb9b9ee9165a810fea05d6"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1517358039.html","c5492cddbd5257303e73b797529bf017"],["C:/Users/高冷的男神/Desktop/blog/public/archives/154867527.html","177e427fa4ed965904bbcd216f13665f"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1856597008.html","b892a93cbb645b1118af1c981e6cb67a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1973821148.html","93d2b1c34a881bcbe34fed3264692ef8"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1988406376.html","6a5a69c449e481de611d66c4343a63ba"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/02/index.html","a8e3561c1c729fef6cd1ec653223863f"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/03/index.html","cc0383b86caa3fbface41bffbad1461b"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/index.html","da1a6bfa6b731a83a4b838dd8ce8fea3"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/page/2/index.html","18673bf34b96ccc1f73fc4041d03eeb2"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/page/3/index.html","609d78ca02704c5474454eeefd8fb519"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/index.html","7f917659bf822c7cb612583a5c2a44e7"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/2/index.html","13773eea50714e6396bf489eae24bfe9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/3/index.html","277e24d13e58fbdb7994d5d8077b3b12"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/4/index.html","462910642ac3596b15bb60470cc06333"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2202648686.html","43db3adeeb26ca2544ba6415f47dc33e"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2447437047.html","04831c3b7ec2fb7ce4edf2a91af09ad0"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2669297123.html","7e5f6dca216c4c17cc56635d77443696"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2900021104.html","4158f24c805e7cf59e138fb1a78e4fdd"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3020691415.html","39ddfcc9d18e1b294b77b6014a24216f"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3116909338.html","e64aba707d154c941862a08ea512ce26"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3137458103.html","8b88be7e0483afcecdde10419a031162"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3139128020.html","2999710eb11a5dec24207100613ca1ed"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3278015703.html","7e6e4b2c9ddfd5169d74f6f5dc00d411"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3292414775.html","1ce0247ef92f8a6baf681572a3bc6a98"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3306406959.html","942c17a976853b06e9345946ab68bb0b"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3583131316.html","f4f550c8e1ef94becbc7d8322568c190"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3679495888.html","b640dd14161f7d4dcf6b129fd2eb07e8"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815078.html","95dddf6b4f4537185c0dca953d35b5ef"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815079.html","6aaf66fb4808054354bdfa863356b425"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815080.html","ef79f3aa3844ad5e4b9f897c0db340b9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4045953268.html","cd3f4c3c836dc939f0b77c6e340b7cdb"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4070222742.html","1ccf0a6920572434733a7a9831d3aae2"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4086565940.html","d2927d2bcde4e8f53d9ec08fe205fd23"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4167823285.html","d3d04307b9d4873a2140e9abd3c8309c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4257653461.html","720d6f609cf53801ece6ffef32f022c5"],["C:/Users/高冷的男神/Desktop/blog/public/archives/599829822.html","3ca1e287b7be6f86c2d35d8bdc350882"],["C:/Users/高冷的男神/Desktop/blog/public/archives/643733303.html","39acd95b9ac6cc5695efccc851fb685a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/648391965.html","d507dbd1c06f18fcf8ffaccaad9f1272"],["C:/Users/高冷的男神/Desktop/blog/public/archives/657161319.html","33b3640bbc1afa701e6c57be56b924fb"],["C:/Users/高冷的男神/Desktop/blog/public/archives/743675268.html","a46ca24d921d95fc9beb958875fb51df"],["C:/Users/高冷的男神/Desktop/blog/public/archives/815832981.html","3ef31c5021648c8335a8af5cd7f5b72a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/845073791.html","2256a72897067727871d7a855063781b"],["C:/Users/高冷的男神/Desktop/blog/public/archives/9c040ea2.html","22285b3e6697e216d05e234603a3935d"],["C:/Users/高冷的男神/Desktop/blog/public/archives/index.html","d6199866a529e91fdff6790e233fa2ba"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/2/index.html","ce4f875c61fe463eb6c77c769bbf3f0f"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/3/index.html","29aacd9262b39afd384e1d4043ed58b1"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/4/index.html","938e467c1a44f16e59ee15cd9665920d"],["C:/Users/高冷的男神/Desktop/blog/public/categories/C语言学习笔记/index.html","c70e52f02ac462b7437cac554a0419bb"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Hexo/index.html","81d53f8a311f3f3fed0db0391bfc2441"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Java学习笔记/index.html","45248572d68adc976f3b53b25b0586aa"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Linux学习笔记/index.html","cfc7ef3ce1c2a0e7efa83a0bf579f565"],["C:/Users/高冷的男神/Desktop/blog/public/categories/index.html","08678ca65639f8894b02e70a28208d39"],["C:/Users/高冷的男神/Desktop/blog/public/categories/yilia/index.html","992350340272c04e28332084721ba360"],["C:/Users/高冷的男神/Desktop/blog/public/categories/常见bug/index.html","9b4c82534fcbc1057123bd682cb8e343"],["C:/Users/高冷的男神/Desktop/blog/public/categories/计算机/index.html","16c05a897fe562885298ceae35e71950"],["C:/Users/高冷的男神/Desktop/blog/public/categories/软件工具/index.html","9c3be49676fbbe1303b8068f7f4e0c8e"],["C:/Users/高冷的男神/Desktop/blog/public/css/index.css","56cc863d39863078d48a06a7bd920b6e"],["C:/Users/高冷的男神/Desktop/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/高冷的男神/Desktop/blog/public/img/2.png","a707c97c1f534c24ae638d8026f78267"],["C:/Users/高冷的男神/Desktop/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/高冷的男神/Desktop/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/高冷的男神/Desktop/blog/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["C:/Users/高冷的男神/Desktop/blog/public/img/bq.jpg","19bbadd8563123dd6e0fa72e47f4b8b6"],["C:/Users/高冷的男神/Desktop/blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/高冷的男神/Desktop/blog/public/img/fenlei.jpg","84c493067ed7500cc5680da64d35a611"],["C:/Users/高冷的男神/Desktop/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/高冷的男神/Desktop/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/高冷的男神/Desktop/blog/public/img/index.jpg","9ab35940d1851a6d593490f48d450290"],["C:/Users/高冷的男神/Desktop/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/高冷的男神/Desktop/blog/public/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["C:/Users/高冷的男神/Desktop/blog/public/img/post2.jpg","d9183e4b5310574e687eac94c0a96a6e"],["C:/Users/高冷的男神/Desktop/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/高冷的男神/Desktop/blog/public/img/wc.png","920e8c5f7cecf5d16623757f80857bf0"],["C:/Users/高冷的男神/Desktop/blog/public/img/zfb.png","b37c5d5292744a25f067ee010cb7d92c"],["C:/Users/高冷的男神/Desktop/blog/public/index.html","181550a3b4dcb8441a176a0525977ccd"],["C:/Users/高冷的男神/Desktop/blog/public/js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["C:/Users/高冷的男神/Desktop/blog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["C:/Users/高冷的男神/Desktop/blog/public/js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["C:/Users/高冷的男神/Desktop/blog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["C:/Users/高冷的男神/Desktop/blog/public/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["C:/Users/高冷的男神/Desktop/blog/public/link/index.html","40e17c663e42cdd4d9089ff1e5ff5401"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/高冷的男神/Desktop/blog/public/movies/index.html","3ef46264ecac7a8eabeca9af0f40be17"],["C:/Users/高冷的男神/Desktop/blog/public/music/index.html","738d7ff4011ee5e238da5a693e708352"],["C:/Users/高冷的男神/Desktop/blog/public/page/2/index.html","fd5bb79e74ebfe668150c1c0fc2a037b"],["C:/Users/高冷的男神/Desktop/blog/public/page/3/index.html","7738c61f35b9154c97385d2061b064ef"],["C:/Users/高冷的男神/Desktop/blog/public/page/4/index.html","10a2d7a70ed2fed5593ba7fbcff5133c"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Centos/index.html","95d970e75e1039bd21397eee88400ee1"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Class类/index.html","b6bc3af3d8b2f85f52b917ae3bf87014"],["C:/Users/高冷的男神/Desktop/blog/public/tags/C语言基础/index.html","a5cb5084445ea0b65816da632bfc5ba0"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Hexo搭建/index.html","37fde9a0c672d709601d453d91724274"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Java基础/index.html","1af07402f4dd0dcae2170e6f2a953811"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Linux/index.html","90ee3c29c09d2420882e2e65a36c3c97"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Linux基本命令/index.html","52b4a84426568925f87b2c7e9ed29018"],["C:/Users/高冷的男神/Desktop/blog/public/tags/TCP/index.html","2c6e6779855fa0c8580794b193b9b4d6"],["C:/Users/高冷的男神/Desktop/blog/public/tags/ViscualC-6-0工具/index.html","4b6cd390d2e36cb09313f821a827975d"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Vmware15/index.html","fc6d886b55460c7599988157bf0834cf"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Win系统安装/index.html","975e78634c7c5679742f491873c54191"],["C:/Users/高冷的男神/Desktop/blog/public/tags/butterfly/index.html","9c42937256d99db33c78537da6ec6ee3"],["C:/Users/高冷的男神/Desktop/blog/public/tags/idea全家桶激活码/index.html","5cecfeb9e0dd7fda3a5a3d7d72414de1"],["C:/Users/高冷的男神/Desktop/blog/public/tags/index.html","c56603d30310a385bf55a8ee9085ed00"],["C:/Users/高冷的男神/Desktop/blog/public/tags/office/index.html","e108b26d0bb80026afa32f66c21015f5"],["C:/Users/高冷的男神/Desktop/blog/public/tags/ssh/index.html","22c294deca1aa33ee952274184f6891e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/tomcat/index.html","ec2b1e21534cb29e9a5777d01305fcbb"],["C:/Users/高冷的男神/Desktop/blog/public/tags/令牌/index.html","64c07e5471901ed5f2fa7f729be2855b"],["C:/Users/高冷的男神/Desktop/blog/public/tags/公钥/index.html","72fc4bbae7045fb6af7dcccd0b55f7cf"],["C:/Users/高冷的男神/Desktop/blog/public/tags/分类（categories）/index.html","403f7b607184d7f55b9f475e488b8526"],["C:/Users/高冷的男神/Desktop/blog/public/tags/反射/index.html","9693dca552f1b3acfc8180faa176e9c1"],["C:/Users/高冷的男神/Desktop/blog/public/tags/多线程/index.html","a88cfe40c9b3a0e44d9043ea15f43d78"],["C:/Users/高冷的男神/Desktop/blog/public/tags/数据类型/index.html","7e19d268bc54bed33edc3419350ad3a7"],["C:/Users/高冷的男神/Desktop/blog/public/tags/枚举/index.html","5298e16c0d73c6b724be36e7a64bfbbf"],["C:/Users/高冷的男神/Desktop/blog/public/tags/标签（tags）/index.html","9e28ae99ebe39e48f3abaf1347dcfd4d"],["C:/Users/高冷的男神/Desktop/blog/public/tags/标识符/index.html","8b17406a3ecdd32081ea5cbf2d6c62ea"],["C:/Users/高冷的男神/Desktop/blog/public/tags/汉化/index.html","511b182dca0a2f79c78481a595ae7169"],["C:/Users/高冷的男神/Desktop/blog/public/tags/注解/index.html","f10e674afac1d66a79d37e507684bd9f"],["C:/Users/高冷的男神/Desktop/blog/public/tags/看板娘/index.html","0883ea7bb5fee16d393ce8ed4c2128b5"],["C:/Users/高冷的男神/Desktop/blog/public/tags/端口冲突/index.html","d7425ddf06ce6f0e1bb42ebb7b886886"],["C:/Users/高冷的男神/Desktop/blog/public/tags/系统激活/index.html","cf3897d39137d2b7e709ff78c6de7dd7"],["C:/Users/高冷的男神/Desktop/blog/public/tags/网络编程/index.html","b4e93a62783de403dfb641eac8584e7a"],["C:/Users/高冷的男神/Desktop/blog/public/tags/网络通讯/index.html","171ccf55734901a69e745ba0acbf3854"],["C:/Users/高冷的男神/Desktop/blog/public/tags/部署/index.html","2f815fca0ed9e79fd522b31bc2bd15a7"],["C:/Users/高冷的男神/Desktop/blog/public/tags/铭飞cms/index.html","121138028e18c312cd27aff69bad1cba"],["C:/Users/高冷的男神/Desktop/blog/public/tags/防火墙/index.html","b87e5f82c675808f24a779e74df70bb4"],["C:/Users/高冷的男神/Desktop/blog/public/tags/随笔/index.html","9e2962f9334e4184bc57724c445f273a"]];
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







