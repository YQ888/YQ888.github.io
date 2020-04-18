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

var precacheConfig = [["C:/Users/高冷的男神/Desktop/blog/public/archives/1462361889.html","9b001c77233bb8d1c6194bad066a64f8"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1517358039.html","5a29b8610b6cf84b2ba835ee81cc8c6b"],["C:/Users/高冷的男神/Desktop/blog/public/archives/154867527.html","536b4265b125f31777299432772f654c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1856597008.html","bf1970d2b52c96d37d03b34044dc822f"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1973821148.html","1b74abaecd57472be75f3be4a17f80b0"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1988406376.html","9a4c14609b60ad6976fa292b68073079"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/02/index.html","ba1a0d409189e55eb10bb234c02222cf"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/03/index.html","c292a020f1d01ad73f69e3485a81f1c0"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/index.html","d0ba2bd4a7827965975a5e67fa25f47c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/page/2/index.html","2b195589d0a6ced1fec948128908c277"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/page/3/index.html","77bacdd8c558dcd6ccbd9710de245e00"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/index.html","3067138c872c695ba6bfdb0d73ba1cba"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/2/index.html","6adf4f60c6a01a9725b5b289b82a2b3a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/3/index.html","f66da48439de0de2c3368a8d0cb7a966"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/4/index.html","57fa55a0ed75a168dcda68c1ddfdc53c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2202648686.html","4cb95d6d9f8ed3faa584188b30d356ee"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2447437047.html","d56a814e4d37d15f6b78e198fedc652f"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2669297123.html","dd2add4417e0de96f8a8036121c38728"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2900021104.html","43d4bfa96d5cca6c7b758cfe581ec697"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3020691415.html","2a396bbbae70367b02ba348c71069a1a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3116909338.html","379f00f91e08f7d0751d81f33b8664de"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3137458103.html","21c389dfd95a4099d03f95c65ddb95e1"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3139128020.html","ffb5eaa24deaa9dc68e38c8d36dc17f0"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3278015703.html","cf849ebaab37030b9ef0f9bb0e0aaad9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3292414775.html","1bdf7d11ae4156e1acc01d6d595a64fe"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3306406959.html","027c6114725de177c6084bf854ee606d"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3583131316.html","453a9458bc73f0634bb6d78a489e53c5"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3679495888.html","a8ff5c71de31f60074f89abb1a788970"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815078.html","3fca0a6b48ed33babf586c6e5d9e5b7b"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815079.html","4a367f62796b29ba3c368960c8e71bc7"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815080.html","04f671d5beccc436dbfdecc86eec0eca"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4045953268.html","5d96785c67b5ad4f89021a3a6ffee34f"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4070222742.html","7ff5951225b86ec81c8ddf8c8e29ab6e"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4086565940.html","a978dbd42e5178896b6ac35ce3490d14"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4167823285.html","16147aa018d969c038732c995b720e45"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4257653461.html","3399b526f3c6c7303742f96c4423e724"],["C:/Users/高冷的男神/Desktop/blog/public/archives/599829822.html","6bc7dba8679104a12dd3b8ec3550b295"],["C:/Users/高冷的男神/Desktop/blog/public/archives/643733303.html","675d5a50c5efd4746ed404ff25cbd5a9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/648391965.html","c5ac442c22c4714cdfc9796b6ceacffd"],["C:/Users/高冷的男神/Desktop/blog/public/archives/657161319.html","94789569cb6015c841d1887042d42203"],["C:/Users/高冷的男神/Desktop/blog/public/archives/743675268.html","a858e113a273f0b034d7b5db0d98cd4e"],["C:/Users/高冷的男神/Desktop/blog/public/archives/815832981.html","7c01d1ba7605bf63ae69c6a6a8d04732"],["C:/Users/高冷的男神/Desktop/blog/public/archives/845073791.html","8f0a2916de9ec131094c00b6bd76286f"],["C:/Users/高冷的男神/Desktop/blog/public/archives/9c040ea2.html","1078ec235f04720eb495c99a7d1f7748"],["C:/Users/高冷的男神/Desktop/blog/public/archives/index.html","c83cfd63bbe693544e7618dd0baeb885"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/2/index.html","8e80c0a36e376f32557cf1dfab35ec65"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/3/index.html","2e79d28abc978aea95965a14afde5017"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/4/index.html","90d75cc034fb12007cd727dbdf49027b"],["C:/Users/高冷的男神/Desktop/blog/public/baidu_verify_mcww0dSeSu.html","295d0f50c9914f494c84b5c3bfab504f"],["C:/Users/高冷的男神/Desktop/blog/public/categories/C语言学习笔记/index.html","f54044189c0217969c99ff1d7f51f303"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Hexo/index.html","1bf38254e11c6991aaf26568ce001965"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Java学习笔记/index.html","b2619cf36ecd24758f5980d51033ecdd"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Linux学习笔记/index.html","d969888ce7035a1d08fa90664726a500"],["C:/Users/高冷的男神/Desktop/blog/public/categories/index.html","6566e0401988ab019874ef46c92a3444"],["C:/Users/高冷的男神/Desktop/blog/public/categories/yilia/index.html","b1621fb37ce0ca3e39865bbff6d7bb2f"],["C:/Users/高冷的男神/Desktop/blog/public/categories/常见bug/index.html","54f77f4e61c6442e879d6c49e475d334"],["C:/Users/高冷的男神/Desktop/blog/public/categories/计算机/index.html","56f50b63bd39b354bd5f0e3a756529cd"],["C:/Users/高冷的男神/Desktop/blog/public/categories/软件工具/index.html","8b61820e7362cc7007a87cb6abb0973c"],["C:/Users/高冷的男神/Desktop/blog/public/css/index.css","56cc863d39863078d48a06a7bd920b6e"],["C:/Users/高冷的男神/Desktop/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/高冷的男神/Desktop/blog/public/img/2.png","a707c97c1f534c24ae638d8026f78267"],["C:/Users/高冷的男神/Desktop/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/高冷的男神/Desktop/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/高冷的男神/Desktop/blog/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["C:/Users/高冷的男神/Desktop/blog/public/img/bq.jpg","19bbadd8563123dd6e0fa72e47f4b8b6"],["C:/Users/高冷的男神/Desktop/blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/高冷的男神/Desktop/blog/public/img/fenlei.jpg","84c493067ed7500cc5680da64d35a611"],["C:/Users/高冷的男神/Desktop/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/高冷的男神/Desktop/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/高冷的男神/Desktop/blog/public/img/index.jpg","9ab35940d1851a6d593490f48d450290"],["C:/Users/高冷的男神/Desktop/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/高冷的男神/Desktop/blog/public/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["C:/Users/高冷的男神/Desktop/blog/public/img/post2.jpg","d9183e4b5310574e687eac94c0a96a6e"],["C:/Users/高冷的男神/Desktop/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/高冷的男神/Desktop/blog/public/img/wc.png","920e8c5f7cecf5d16623757f80857bf0"],["C:/Users/高冷的男神/Desktop/blog/public/img/zfb.png","b37c5d5292744a25f067ee010cb7d92c"],["C:/Users/高冷的男神/Desktop/blog/public/index.html","2027bb34a900581dc4cf92220bb2155f"],["C:/Users/高冷的男神/Desktop/blog/public/js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["C:/Users/高冷的男神/Desktop/blog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["C:/Users/高冷的男神/Desktop/blog/public/js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["C:/Users/高冷的男神/Desktop/blog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["C:/Users/高冷的男神/Desktop/blog/public/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["C:/Users/高冷的男神/Desktop/blog/public/link/index.html","f900df63dae6efba064020b7937d3e6c"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/高冷的男神/Desktop/blog/public/movies/index.html","778cd762e360f924a0188ea5ba2163b7"],["C:/Users/高冷的男神/Desktop/blog/public/music/index.html","30e5a0030117e60af4b91b152802ea07"],["C:/Users/高冷的男神/Desktop/blog/public/page/2/index.html","33dbba97227f76ee58e1eb45ebbf6dc7"],["C:/Users/高冷的男神/Desktop/blog/public/page/3/index.html","9b291122bbf409276a6f5cf11278e1ab"],["C:/Users/高冷的男神/Desktop/blog/public/page/4/index.html","61fd3bdadf263a43b4d07f0a9544284a"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Centos/index.html","00d3fcae61d5ed1b317afd1ee17793ce"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Class类/index.html","b31983a62aeb4464ec61fc28774ea949"],["C:/Users/高冷的男神/Desktop/blog/public/tags/C语言基础/index.html","f8cf3f2ac00a43717fe72e3a3e568f41"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Hexo搭建/index.html","ede79c761b89750e37b11c41b95c9ba7"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Java基础/index.html","96f4424ab18830ff879c15fca405ab72"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Linux/index.html","36b4efa4abff4f7d01d9d797c518311d"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Linux基本命令/index.html","ee0a429958d82830ee1951511ca131e2"],["C:/Users/高冷的男神/Desktop/blog/public/tags/TCP/index.html","7e20c60e14a7a6d8736fab0dc58756bc"],["C:/Users/高冷的男神/Desktop/blog/public/tags/ViscualC-6-0工具/index.html","08205093e4ade1df12921157dc0b6e98"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Vmware15/index.html","ba02bdbd8abb231ca604fd86c6b2477e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Win系统安装/index.html","95b54ce65f5f5f9c7742a5671207777e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/butterfly/index.html","73af6b731443198a99b253f7b112236f"],["C:/Users/高冷的男神/Desktop/blog/public/tags/idea全家桶激活码/index.html","904f8cda20507259743d030cf9367a6f"],["C:/Users/高冷的男神/Desktop/blog/public/tags/index.html","02c9f8d537846a3d5dcbb7e7f92edc39"],["C:/Users/高冷的男神/Desktop/blog/public/tags/office/index.html","c395ee3075a95feca6684fafa32d0e61"],["C:/Users/高冷的男神/Desktop/blog/public/tags/ssh/index.html","b70cbdb7aba7104193940f3ecc55460b"],["C:/Users/高冷的男神/Desktop/blog/public/tags/tomcat/index.html","cea78db26d83e2b668e877840d5a3059"],["C:/Users/高冷的男神/Desktop/blog/public/tags/令牌/index.html","c0551d5bd69ae5f284bb414faeed64ab"],["C:/Users/高冷的男神/Desktop/blog/public/tags/公钥/index.html","340bcc26ef45a6bf7f22f48bfa69db25"],["C:/Users/高冷的男神/Desktop/blog/public/tags/分类（categories）/index.html","5af329e139098c47720f9e80f970b538"],["C:/Users/高冷的男神/Desktop/blog/public/tags/反射/index.html","d6570d88188b7dd9404bdc0b13de909c"],["C:/Users/高冷的男神/Desktop/blog/public/tags/多线程/index.html","07ee95134820b7ac16cadf7eb30bd702"],["C:/Users/高冷的男神/Desktop/blog/public/tags/数据类型/index.html","a0371d39efa89570be2b62fc96c36c9e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/枚举/index.html","5e5fd8a062e3f874e6c464445754fc50"],["C:/Users/高冷的男神/Desktop/blog/public/tags/标签（tags）/index.html","ff2cd19756db1948395bf3ea916b7a87"],["C:/Users/高冷的男神/Desktop/blog/public/tags/标识符/index.html","f83a14c310de9144ebfc264158e2eb4f"],["C:/Users/高冷的男神/Desktop/blog/public/tags/汉化/index.html","726a8e7d1f26d7f3624c64c25c0f0f22"],["C:/Users/高冷的男神/Desktop/blog/public/tags/注解/index.html","6a6eba90e85588ec8c8789b4420a341d"],["C:/Users/高冷的男神/Desktop/blog/public/tags/看板娘/index.html","857b0dbd5845102bd694e93c791c8902"],["C:/Users/高冷的男神/Desktop/blog/public/tags/端口冲突/index.html","bcb95d8e29e6ebaba065834cce37c4c4"],["C:/Users/高冷的男神/Desktop/blog/public/tags/系统激活/index.html","bb5c240d446c8eefe914a3f8f1686a3b"],["C:/Users/高冷的男神/Desktop/blog/public/tags/网络编程/index.html","2e5208418694c1531adaf3eacb7c9e9f"],["C:/Users/高冷的男神/Desktop/blog/public/tags/网络通讯/index.html","e245804e6cbd6c3606c19e1b8149a76d"],["C:/Users/高冷的男神/Desktop/blog/public/tags/部署/index.html","1de6e8f48ca6cac9cc84e3b30b430120"],["C:/Users/高冷的男神/Desktop/blog/public/tags/铭飞cms/index.html","38dba5181ffc5853245535713762732a"],["C:/Users/高冷的男神/Desktop/blog/public/tags/防火墙/index.html","dc4f9c4fb2669462144f348a1e292f2b"],["C:/Users/高冷的男神/Desktop/blog/public/tags/随笔/index.html","22fbf7a5d0fe6ee88e5fc3c149968f5c"]];
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







