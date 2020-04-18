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

var precacheConfig = [["C:/Users/高冷的男神/Desktop/blog/public/archives/1462361889.html","1591ca01ed0a75486bd7a12c10080f41"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1517358039.html","bb9edbc76fcc2f2bb75d4997e712b67f"],["C:/Users/高冷的男神/Desktop/blog/public/archives/154867527.html","c93d0595999fabc91516d28e5cf54641"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1856597008.html","f10af56a46b452ebc0bd7561f079b3c9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1973821148.html","05511cf945a8cf0a22b8db7abade2eca"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1988406376.html","0e29dd0ce17b1f67fd9da5f1740db672"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/02/index.html","b8c9642d4b4f05edb268095094db3cc2"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/03/index.html","2e993eddc757e1ac7eb6d0e961182026"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/index.html","70653bfbd64de29ded49d7a5a874e6de"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/page/2/index.html","e7ad90d64e2adcb7983cbce3b10eddfc"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/page/3/index.html","f21ec69864c9949e05f2d265d66eff56"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/index.html","8a468a13d0c1f10fe4a0d2d1f7addc2c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/2/index.html","211644a4adb654f69c2fb042c0038d7b"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/3/index.html","db4c53ff544a60a13d7d509f35813fbf"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/4/index.html","45924d7c5c04015b4552d93184136004"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2202648686.html","3fae4c429143bdc0e3e970fb01a90ca9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2447437047.html","b02fda9b2c88c76a85ea4fb857ebdc5e"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2669297123.html","26f737205e23062130f13a32d2d426f8"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2900021104.html","07c7811e48e4071edaf0d4c61b79a39b"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3020691415.html","e7c396c895b111859e9fa88e1717802b"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3116909338.html","479b67be0f8a269c9156ed7991d1ad91"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3137458103.html","53590721c6447722706d00956663ea75"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3139128020.html","560c109e24f4d3b3c3e6ce406305fac4"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3278015703.html","79646f1578e0173086e9c45d82fc4d7c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3292414775.html","53c445ac48994c1ca5f32c0bbd3fafc8"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3306406959.html","062c11d57c1323205bfe98ec64b71f5f"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3583131316.html","6c70b263aa3f815f50310687a30ed16a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3679495888.html","0b0fb0a73f6e7570c73b7882c980d8b4"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815078.html","8416f45c15cd6744226bbbc982af7426"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815079.html","770030b8114af60e1eb059c0dc1e0d95"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815080.html","b29044dbb01939bd4af651e6429e2d45"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4045953268.html","26a40f69e827fe387e3a5ed2875e6e9c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4070222742.html","33c6e4e235056ae771f0975f1dc0a5d3"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4086565940.html","5783a69523799795ff0bb4f2e5baccb8"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4167823285.html","46142c86e407ce920bc5ae2262099135"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4257653461.html","a3277ee6c035f6cd3e0049ea4ecad413"],["C:/Users/高冷的男神/Desktop/blog/public/archives/599829822.html","196ba48a749ed4f34be0c274c78f6b11"],["C:/Users/高冷的男神/Desktop/blog/public/archives/643733303.html","1300220f3659d8488cb73c4de761d0ab"],["C:/Users/高冷的男神/Desktop/blog/public/archives/648391965.html","9f9aa3788558ce711324c08e29662fe6"],["C:/Users/高冷的男神/Desktop/blog/public/archives/657161319.html","842d38f038e45e5bfe7104904953cada"],["C:/Users/高冷的男神/Desktop/blog/public/archives/743675268.html","3fbd59d42fb7f0542b23bbcc9a769f65"],["C:/Users/高冷的男神/Desktop/blog/public/archives/815832981.html","9e16950fc809b733d05ac908d98a9599"],["C:/Users/高冷的男神/Desktop/blog/public/archives/845073791.html","2446aa3aed741bb4cc3b1dfc5d470e97"],["C:/Users/高冷的男神/Desktop/blog/public/archives/9c040ea2.html","75d0c3022914d8594c2856a67999e0b2"],["C:/Users/高冷的男神/Desktop/blog/public/archives/index.html","635bee2448dda28b389c52eeabf87309"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/2/index.html","e7552896d71013e81794a86561cc767c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/3/index.html","5e10ee107d35300e0f9c693116a4f891"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/4/index.html","36b99a74fb2872aeb5b2534dce6c7f44"],["C:/Users/高冷的男神/Desktop/blog/public/categories/C语言学习笔记/index.html","469cc08f9c47c8844519671792539f87"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Hexo/index.html","df4c54459cf0c9ae268c27d13abb610e"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Java学习笔记/index.html","7efe1ca6defb0d4f973c9d00c9bfd652"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Linux学习笔记/index.html","c6c2cf817961f9b2bc7d864d6ae67e00"],["C:/Users/高冷的男神/Desktop/blog/public/categories/index.html","e8787f8f0ed9134b2056b22879ced4f6"],["C:/Users/高冷的男神/Desktop/blog/public/categories/yilia/index.html","bfd495b1b4db410b887f335930546632"],["C:/Users/高冷的男神/Desktop/blog/public/categories/常见bug/index.html","08ee7ce8f44ceff8aa431429d9403a3a"],["C:/Users/高冷的男神/Desktop/blog/public/categories/计算机/index.html","56bb8f8bda0c23641a596826415ebd2d"],["C:/Users/高冷的男神/Desktop/blog/public/categories/软件工具/index.html","ae1f88fcb3ee927ef0559d85e21db0a6"],["C:/Users/高冷的男神/Desktop/blog/public/css/index.css","56cc863d39863078d48a06a7bd920b6e"],["C:/Users/高冷的男神/Desktop/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/高冷的男神/Desktop/blog/public/img/2.png","a707c97c1f534c24ae638d8026f78267"],["C:/Users/高冷的男神/Desktop/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/高冷的男神/Desktop/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/高冷的男神/Desktop/blog/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["C:/Users/高冷的男神/Desktop/blog/public/img/bq.jpg","19bbadd8563123dd6e0fa72e47f4b8b6"],["C:/Users/高冷的男神/Desktop/blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/高冷的男神/Desktop/blog/public/img/fenlei.jpg","84c493067ed7500cc5680da64d35a611"],["C:/Users/高冷的男神/Desktop/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/高冷的男神/Desktop/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/高冷的男神/Desktop/blog/public/img/index.jpg","9ab35940d1851a6d593490f48d450290"],["C:/Users/高冷的男神/Desktop/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/高冷的男神/Desktop/blog/public/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["C:/Users/高冷的男神/Desktop/blog/public/img/post2.jpg","d9183e4b5310574e687eac94c0a96a6e"],["C:/Users/高冷的男神/Desktop/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/高冷的男神/Desktop/blog/public/img/wc.png","920e8c5f7cecf5d16623757f80857bf0"],["C:/Users/高冷的男神/Desktop/blog/public/img/zfb.png","b37c5d5292744a25f067ee010cb7d92c"],["C:/Users/高冷的男神/Desktop/blog/public/index.html","e73a36a313de67a3c12c8f284284ed37"],["C:/Users/高冷的男神/Desktop/blog/public/js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["C:/Users/高冷的男神/Desktop/blog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["C:/Users/高冷的男神/Desktop/blog/public/js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["C:/Users/高冷的男神/Desktop/blog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["C:/Users/高冷的男神/Desktop/blog/public/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["C:/Users/高冷的男神/Desktop/blog/public/link/index.html","6ce2b631b7364ab07cda9d04125b3d1e"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/高冷的男神/Desktop/blog/public/movies/index.html","bdd6c1497d9a1fd796c409ad9ec24b4f"],["C:/Users/高冷的男神/Desktop/blog/public/music/index.html","b2c7fda4e0f9b5ceca91438d15f7725d"],["C:/Users/高冷的男神/Desktop/blog/public/page/2/index.html","c7e981a36445aa1d27906a79f5cd60c3"],["C:/Users/高冷的男神/Desktop/blog/public/page/3/index.html","363e7f9778e0812608297eae2be5b329"],["C:/Users/高冷的男神/Desktop/blog/public/page/4/index.html","be05f8414f7da996ed789fd65a711d1b"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Centos/index.html","7d37d828153e6803d5bb5b080a8db10b"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Class类/index.html","6937fd15fbbea00bfebc3a07879287ca"],["C:/Users/高冷的男神/Desktop/blog/public/tags/C语言基础/index.html","59869f9f0836dd1563b20ca6c8a21fdb"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Hexo搭建/index.html","0f01019c9bebdea445be12428c4ebe5c"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Java基础/index.html","2cda1acb4af5084422193e11cfd3ce77"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Linux/index.html","dcf2efb5908b66a49f26414689ad7095"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Linux基本命令/index.html","6ea9691b1ed7d25b3f52c2e0d0c86699"],["C:/Users/高冷的男神/Desktop/blog/public/tags/TCP/index.html","166e6cda5cc28928115c864afb98e7e2"],["C:/Users/高冷的男神/Desktop/blog/public/tags/ViscualC-6-0工具/index.html","45e58edbe6b32b7d395068704b4d0aac"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Vmware15/index.html","6a36ceb4ed405653023d9674fefc5188"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Win系统安装/index.html","89855d5ed080682aac11a10e4365b32b"],["C:/Users/高冷的男神/Desktop/blog/public/tags/butterfly/index.html","611f137c9898d8e9cefb576cf8a53321"],["C:/Users/高冷的男神/Desktop/blog/public/tags/idea全家桶激活码/index.html","ce589a8512ee997aabc6d274c39d1307"],["C:/Users/高冷的男神/Desktop/blog/public/tags/index.html","c6ec7f23ad640880d1eb668228f36e60"],["C:/Users/高冷的男神/Desktop/blog/public/tags/office/index.html","ddd2990e488f96b7110dc1b8bd3d9023"],["C:/Users/高冷的男神/Desktop/blog/public/tags/ssh/index.html","a039106e4dc9d0409d7d418473af9ca4"],["C:/Users/高冷的男神/Desktop/blog/public/tags/tomcat/index.html","fdc1f21b2fb15c1b7b1a0705fbabf1fb"],["C:/Users/高冷的男神/Desktop/blog/public/tags/令牌/index.html","d860b4e64ad4c35614d70477d7dbe96e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/公钥/index.html","55d8a8b7d111633e7755c0b6b85015c1"],["C:/Users/高冷的男神/Desktop/blog/public/tags/分类（categories）/index.html","c9f8d4f57741355b6962ff88e0889304"],["C:/Users/高冷的男神/Desktop/blog/public/tags/反射/index.html","cc0edf2a2aed87bcc4a621304f68aeaf"],["C:/Users/高冷的男神/Desktop/blog/public/tags/多线程/index.html","35be05442e673dad02c5349b0f6d6465"],["C:/Users/高冷的男神/Desktop/blog/public/tags/数据类型/index.html","fa339b88d353816aa57ac8ae584b9785"],["C:/Users/高冷的男神/Desktop/blog/public/tags/枚举/index.html","e0b14f80ae323a4b7ef5d0f0058a936d"],["C:/Users/高冷的男神/Desktop/blog/public/tags/标签（tags）/index.html","fe98c9c5cc909ec15dc10a8446da171d"],["C:/Users/高冷的男神/Desktop/blog/public/tags/标识符/index.html","ecbb2681dfef70951f96b2c6a871602c"],["C:/Users/高冷的男神/Desktop/blog/public/tags/汉化/index.html","4e4ccb49b93e823e17e3f7b9ab94c4a5"],["C:/Users/高冷的男神/Desktop/blog/public/tags/注解/index.html","67edadb9ff1c69eea8b84641a4da3b78"],["C:/Users/高冷的男神/Desktop/blog/public/tags/看板娘/index.html","aa7936bf100985038d6c9accba58576c"],["C:/Users/高冷的男神/Desktop/blog/public/tags/端口冲突/index.html","2494f4e0ed1f798535b87df55a833416"],["C:/Users/高冷的男神/Desktop/blog/public/tags/系统激活/index.html","94039d7f902f3a97c8c4b5278cb8eef5"],["C:/Users/高冷的男神/Desktop/blog/public/tags/网络编程/index.html","ce7f7a6a23ad4b3796aa284fbf7b5769"],["C:/Users/高冷的男神/Desktop/blog/public/tags/网络通讯/index.html","e4e73ae2f5b49f01e39f6ef75e478f36"],["C:/Users/高冷的男神/Desktop/blog/public/tags/部署/index.html","760d5c0115eb363c81341ce29a3a0342"],["C:/Users/高冷的男神/Desktop/blog/public/tags/铭飞cms/index.html","53ae70164b493c415b2b0c3d87a68677"],["C:/Users/高冷的男神/Desktop/blog/public/tags/防火墙/index.html","60eb03bbb942b634f5bbc3c7aacdd857"],["C:/Users/高冷的男神/Desktop/blog/public/tags/随笔/index.html","3075ff70b9a0f788cea1bd18629f7712"]];
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







