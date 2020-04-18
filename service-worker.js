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

var precacheConfig = [["C:/Users/高冷的男神/Desktop/blog/public/archives/1462361889.html","f2fa47d10319c821062695d3025be237"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1517358039.html","1f6af5fa862eb40dec95ad501ed8e58c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/154867527.html","f8a883f3d8fd1a6944b256227b4fdcc8"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1856597008.html","c47280a5c7b06e120b3ded8146eb8c1d"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1973821148.html","fd5e39c20c45415154d38bb9f86ca735"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1988406376.html","364e828022110ea4f5ab0866f050fd99"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/02/index.html","dbaf4dd87daaf0cfa41bd19cd10a122a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/03/index.html","afdb07247b1537d7ecffd1745ec49bd2"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/index.html","9ff35507e56fa299a81fe5d7699d4407"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/page/2/index.html","4a5c9dd2424451e88322375ccf406d84"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/page/3/index.html","9e3ac9e5c8e12c4aa52a0bbae9ef87db"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/index.html","0dfac59f8a07785cdb9e5108b1dca77a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/2/index.html","e0c3dbbffc7d74df0afc9991624c3de9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/3/index.html","449fed4b26a28fa8bde4113eaac8b957"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/4/index.html","021827adf8ae7777b373f47b0f22f6b6"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2202648686.html","adb53d85412b28b5930283e6ca139bc8"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2447437047.html","d4cdd02179297f82a18d1707da9c8f99"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2669297123.html","48c5658b4bcb1c95cdd79f9c730a593d"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2900021104.html","b03c1eef877ef61bd7876b24ce3744f0"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3020691415.html","ff3474b9b2525fa19fa6a99ea58bb7fe"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3116909338.html","410032ab8c9cf6adc6b880f2e03b8e73"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3137458103.html","49061babb4d56541d586199dcbbfa3ec"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3139128020.html","53a4a7584e3576fc237fe6b2f7359044"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3278015703.html","d3b2f9db2a3d468a451c3d0a07452243"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3292414775.html","580c04e24048ddee168b42f1dfd2638c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3306406959.html","19419421a7f790242f4af94b3b39da96"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3583131316.html","ac38a28da3e709426b1ee2b686ad83bc"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3679495888.html","4c532769f5a859696e20bffedfda704e"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815078.html","e6d2099f0fcc2bae6b17b7b3535aa190"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815079.html","1c89dc90a628330ab13b9993cd6ab7ea"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815080.html","1aed141419113ad85588e467407e6f2a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4045953268.html","c2236c46db5bd510e39c348e792ec911"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4070222742.html","24b7684abfc242d3a0d32d52e55d6f62"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4086565940.html","b21a0d844b2bd8b4f203212779212e37"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4167823285.html","1bed83dd062c4dff34a5dbfed7829a85"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4257653461.html","1ff16613c641c783de850e903977a049"],["C:/Users/高冷的男神/Desktop/blog/public/archives/599829822.html","9181a185a62712b52b619cd23b45b506"],["C:/Users/高冷的男神/Desktop/blog/public/archives/643733303.html","32533fc77e7e22f5b849287795e73e9e"],["C:/Users/高冷的男神/Desktop/blog/public/archives/648391965.html","0e000fb01ce1c6e60217022197cec83d"],["C:/Users/高冷的男神/Desktop/blog/public/archives/657161319.html","eecee95288348fc0e00de04d9971eb46"],["C:/Users/高冷的男神/Desktop/blog/public/archives/743675268.html","170129afa783e91ca181b2e83ecf7557"],["C:/Users/高冷的男神/Desktop/blog/public/archives/815832981.html","66f1233304b2b267ffc4e5525e52dcc6"],["C:/Users/高冷的男神/Desktop/blog/public/archives/845073791.html","99e6cebe77d202552f6e0b888c86f819"],["C:/Users/高冷的男神/Desktop/blog/public/archives/9c040ea2.html","d6ce1b413d1008008f204bd76198ae05"],["C:/Users/高冷的男神/Desktop/blog/public/archives/index.html","b4b8478e9649db3bd4d2174621827649"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/2/index.html","25a315ecfdcb16c298898e6970effbd3"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/3/index.html","a9027f06d0a1d78ce1972ed3549a129a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/4/index.html","8aed153a2f4123d4c49a0867b263b67b"],["C:/Users/高冷的男神/Desktop/blog/public/categories/C语言学习笔记/index.html","0b2e6b20330807215d4f86720a98d1a0"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Hexo/index.html","2b194a7b3682cfc7b46fdc4010ee2911"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Java学习笔记/index.html","104d7b03d9dbc33b242e87500a36cff5"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Linux学习笔记/index.html","7321c305a56eab26c33f51673d539007"],["C:/Users/高冷的男神/Desktop/blog/public/categories/index.html","62b76808a5c0366fc74ab64dddd40b74"],["C:/Users/高冷的男神/Desktop/blog/public/categories/yilia/index.html","b9d96f0a79f2a772401721b776980d47"],["C:/Users/高冷的男神/Desktop/blog/public/categories/常见bug/index.html","e50aa2b6c5f560bf765c34d2e05404ad"],["C:/Users/高冷的男神/Desktop/blog/public/categories/计算机/index.html","fcdac4abcc56107e03f76193273cc448"],["C:/Users/高冷的男神/Desktop/blog/public/categories/软件工具/index.html","661cb33b3dacd8bf1dbb78ea81e07df9"],["C:/Users/高冷的男神/Desktop/blog/public/css/index.css","56cc863d39863078d48a06a7bd920b6e"],["C:/Users/高冷的男神/Desktop/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/高冷的男神/Desktop/blog/public/img/2.png","a707c97c1f534c24ae638d8026f78267"],["C:/Users/高冷的男神/Desktop/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/高冷的男神/Desktop/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/高冷的男神/Desktop/blog/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["C:/Users/高冷的男神/Desktop/blog/public/img/bq.jpg","19bbadd8563123dd6e0fa72e47f4b8b6"],["C:/Users/高冷的男神/Desktop/blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/高冷的男神/Desktop/blog/public/img/fenlei.jpg","84c493067ed7500cc5680da64d35a611"],["C:/Users/高冷的男神/Desktop/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/高冷的男神/Desktop/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/高冷的男神/Desktop/blog/public/img/index.jpg","9ab35940d1851a6d593490f48d450290"],["C:/Users/高冷的男神/Desktop/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/高冷的男神/Desktop/blog/public/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["C:/Users/高冷的男神/Desktop/blog/public/img/post2.jpg","d9183e4b5310574e687eac94c0a96a6e"],["C:/Users/高冷的男神/Desktop/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/高冷的男神/Desktop/blog/public/img/wc.png","920e8c5f7cecf5d16623757f80857bf0"],["C:/Users/高冷的男神/Desktop/blog/public/img/zfb.png","b37c5d5292744a25f067ee010cb7d92c"],["C:/Users/高冷的男神/Desktop/blog/public/index.html","25e0a212db60a501d8f8a8952806a28c"],["C:/Users/高冷的男神/Desktop/blog/public/js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["C:/Users/高冷的男神/Desktop/blog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["C:/Users/高冷的男神/Desktop/blog/public/js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["C:/Users/高冷的男神/Desktop/blog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["C:/Users/高冷的男神/Desktop/blog/public/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["C:/Users/高冷的男神/Desktop/blog/public/link/index.html","d6371dc4092bde3e2f0bc0cea8c29758"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/高冷的男神/Desktop/blog/public/movies/index.html","854099829fdef58e28eed96f8d2359e5"],["C:/Users/高冷的男神/Desktop/blog/public/music/index.html","85a2553bba132205e06aa59aeb82b7ed"],["C:/Users/高冷的男神/Desktop/blog/public/page/2/index.html","7cc795f9e4b37a4120ebd3b63bb9c230"],["C:/Users/高冷的男神/Desktop/blog/public/page/3/index.html","c4bf4369515d2fd7d2df5eb05084a6b7"],["C:/Users/高冷的男神/Desktop/blog/public/page/4/index.html","58053e84016050c9c4da1c54a9ace67d"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Centos/index.html","9c245586503e4d2d3049f124d10965a6"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Class类/index.html","dbb12f6ee14fe4077269e1ff01086e23"],["C:/Users/高冷的男神/Desktop/blog/public/tags/C语言基础/index.html","363f3755d638c76104b10af6481cd103"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Hexo搭建/index.html","26fb35440ba3cef99a6feb421b0ea2df"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Java基础/index.html","113c37dda2f46e499c78432b433e790e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Linux/index.html","f36dafa7ad8503080bbd3d2dfd9f180d"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Linux基本命令/index.html","4227f55549047a4de837926927970451"],["C:/Users/高冷的男神/Desktop/blog/public/tags/TCP/index.html","8c5b110ee41d5ab60d6725d110cc98ae"],["C:/Users/高冷的男神/Desktop/blog/public/tags/ViscualC-6-0工具/index.html","730c9632a01298000b2fa68f4d07fff7"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Vmware15/index.html","8da30557c0f4e7c7dc2706961983a871"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Win系统安装/index.html","2b4006248ab2b2a0fc278718774a9e69"],["C:/Users/高冷的男神/Desktop/blog/public/tags/butterfly/index.html","ce94511b700e44db9cec6866b9af8dc8"],["C:/Users/高冷的男神/Desktop/blog/public/tags/idea全家桶激活码/index.html","6498b45fc95d5bd0a95e6f80c8dff3e2"],["C:/Users/高冷的男神/Desktop/blog/public/tags/index.html","f8a5c65e6c9cc5cac4358f1bdd9ae844"],["C:/Users/高冷的男神/Desktop/blog/public/tags/office/index.html","8034156ce9d9408ae77208d51616a0f1"],["C:/Users/高冷的男神/Desktop/blog/public/tags/ssh/index.html","8bbcbfc00673f9a4ecb45546e7d7bbc7"],["C:/Users/高冷的男神/Desktop/blog/public/tags/tomcat/index.html","59256fc143f8711b93b581bc86e21204"],["C:/Users/高冷的男神/Desktop/blog/public/tags/令牌/index.html","1a552cd3282e6e36a81e17cd2c7e7999"],["C:/Users/高冷的男神/Desktop/blog/public/tags/公钥/index.html","9e4353c8d1c9e2af3897c9a626976e08"],["C:/Users/高冷的男神/Desktop/blog/public/tags/分类（categories）/index.html","6c33efc8230125ea0bc7da88b3d13d5e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/反射/index.html","b5de2be0a9b0fded32000c53a337d7b8"],["C:/Users/高冷的男神/Desktop/blog/public/tags/多线程/index.html","c4ea53ae5ba7964959484770e84c3d50"],["C:/Users/高冷的男神/Desktop/blog/public/tags/数据类型/index.html","894a3bcde3847f14efed1133298b1cfd"],["C:/Users/高冷的男神/Desktop/blog/public/tags/枚举/index.html","b7a5e4b85673a94a76aa5cbba6e0e86e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/标签（tags）/index.html","17a5188cd2452501eb4caa987dc7a72a"],["C:/Users/高冷的男神/Desktop/blog/public/tags/标识符/index.html","a06dc49a94413af28ce11eee43c626ad"],["C:/Users/高冷的男神/Desktop/blog/public/tags/汉化/index.html","97a7f90d8a6e31df0b8f80f1e297db0d"],["C:/Users/高冷的男神/Desktop/blog/public/tags/注解/index.html","9c32be61fa1037b72d8a2bf7667d00b0"],["C:/Users/高冷的男神/Desktop/blog/public/tags/看板娘/index.html","5b96b1a05b65debd4d5a8cef1a2d31df"],["C:/Users/高冷的男神/Desktop/blog/public/tags/端口冲突/index.html","d307e26321889cb7c382194af2359855"],["C:/Users/高冷的男神/Desktop/blog/public/tags/系统激活/index.html","a3f663cfba78e0f079b15f0bc5fe8898"],["C:/Users/高冷的男神/Desktop/blog/public/tags/网络编程/index.html","e63c05235b3a288001c08016328c2cc8"],["C:/Users/高冷的男神/Desktop/blog/public/tags/网络通讯/index.html","49205ad9c4f845b19f1b399f8b609fef"],["C:/Users/高冷的男神/Desktop/blog/public/tags/部署/index.html","cb38140dfde374f69ee3fba99359cf0f"],["C:/Users/高冷的男神/Desktop/blog/public/tags/铭飞cms/index.html","ec0c8465f60669b17c52624bade2a12e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/防火墙/index.html","469d343d60b5c440c1ac182c7ad4065b"],["C:/Users/高冷的男神/Desktop/blog/public/tags/随笔/index.html","22b0e80eae692b3e385f17fa521568b6"]];
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







