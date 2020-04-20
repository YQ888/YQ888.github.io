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

var precacheConfig = [["C:/Users/高冷的男神/Desktop/blog/public/404.html","c6dee9f12eb11392f3acf400f51bb27e"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1462361889.html","61a71584d883e4fde6a8e4c25d8fffa9"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1517358039.html","f6153284ffaaefd5cafc0490b827d3d4"],["C:/Users/高冷的男神/Desktop/blog/public/archives/154867527.html","735707a8285aadfc35ef9a549d57509a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1856597008.html","2eac4fe80e20d02c9994b38515b210ad"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1973821148.html","98191d917ee0a7240e1b92e76630a34a"],["C:/Users/高冷的男神/Desktop/blog/public/archives/1988406376.html","4165d28e3115fc298e68998b8c3d8979"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/02/index.html","b2d4b00ef3ccb84fbc7403275678b86e"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/03/index.html","3beba81cf9323eb5d88c37e96ef22002"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/index.html","29b622d0cd70ee64ead3e6454dd0714c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/page/2/index.html","49b080c252fbad3bdc94843e22563156"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/page/3/index.html","509f4a9a52ea7a23fef75b81181ad4e5"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/04/page/4/index.html","e69f2e6d210483a0370474c5a2d17c15"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/index.html","e3d781e313dfce255ffb5b1db67db9e3"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/2/index.html","e58db2fe6c92a92f48c4072bbccc7f28"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/3/index.html","7be7207a968fc4df3ff273bcf0621ffe"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2020/page/4/index.html","34fad8eabe68e919cd088cfedb0791ee"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2202648686.html","1ba1fc5969c08f5b7647342b981edfd2"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2447437047.html","69bb57d8149814a0cef4d517560330de"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2669297123.html","a6e28fbe78c6835e44ef1b6ee078e2da"],["C:/Users/高冷的男神/Desktop/blog/public/archives/2900021104.html","097e4f3f5a017fde06093f2596996026"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3020691415.html","d5a64ea15a209f66089ae637a4fac569"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3116909338.html","1136b94e9a2be1c046d679fea11f4a2e"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3137458103.html","e6ab018e43024436b0df058156073124"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3139128020.html","eb647027d3ad1881ed350ef70cd6b3db"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3278015703.html","e614a39654ce249810608370eb03a3ee"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3292414775.html","1d268eb2d9a4d6143eed9ada382f36d6"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3306406959.html","aee73124a90013b8d34cec5d6b30474d"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3583131316.html","4f1e3d7552a9d4762d151c33abc8cdae"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3679495888.html","c1a2914de8a4f35ee2bdb365e085bd79"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815078.html","8e7b2b2cd7dab85fac02674ec17480da"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815079.html","64bd72b3503f6bb55d7420359ba7e42c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/3740815080.html","31d55080610a5daa8ba71224c3bc7060"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4045953268.html","1c8dfd60bcb8178d31701144a04c79f0"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4070222742.html","eb2eac7d5507780dd78b3f6943a352ac"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4086565940.html","8dfca8548c33f6986ec93d342685d215"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4167823285.html","8347a0d91a2117f6be5ca437994e5f22"],["C:/Users/高冷的男神/Desktop/blog/public/archives/4257653461.html","21fcad053fba8c58d71752d50136e35c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/599829822.html","cb844e15b2eccaeb61afe178a92a99c6"],["C:/Users/高冷的男神/Desktop/blog/public/archives/643733303.html","89184e6febe1396c03fed76288944214"],["C:/Users/高冷的男神/Desktop/blog/public/archives/648391965.html","1222f2818fd698aa03ca2ad3b08c4a93"],["C:/Users/高冷的男神/Desktop/blog/public/archives/657161319.html","db8552541280a09c96cc45f5e530805d"],["C:/Users/高冷的男神/Desktop/blog/public/archives/743675268.html","d79dc1398539d7f524fdcddaf84419a4"],["C:/Users/高冷的男神/Desktop/blog/public/archives/815832981.html","37f40167a40390aae0f40bade8a66475"],["C:/Users/高冷的男神/Desktop/blog/public/archives/845073791.html","056f18ce2aba2e954eebf69b69f6e7bb"],["C:/Users/高冷的男神/Desktop/blog/public/archives/8646cdf.html","2f8fb952dd592db676e4760711721cef"],["C:/Users/高冷的男神/Desktop/blog/public/archives/9c040ea2.html","219f61eef0bdfaa44e1ce0935eb265e3"],["C:/Users/高冷的男神/Desktop/blog/public/archives/adbc15c8.html","0ca9dea4a9c194ae6de296a0e11620a8"],["C:/Users/高冷的男神/Desktop/blog/public/archives/ff3ba4ff.html","c3bf27a37c862a6a0477a7ad8eae0205"],["C:/Users/高冷的男神/Desktop/blog/public/archives/index.html","b5f3fe6ce29a0240edb1d0b6ffa23a6c"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/2/index.html","3e616a1dec14152e255831f1ac8257b4"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/3/index.html","a771ecfee76898287ca7458e4ad85bfb"],["C:/Users/高冷的男神/Desktop/blog/public/archives/page/4/index.html","80c2a7c84c4081a67bb1efebd73c8f41"],["C:/Users/高冷的男神/Desktop/blog/public/baidu_verify_mcww0dSeSu.html","27be9afc24a3e1e62bcfe29bc3c84ac8"],["C:/Users/高冷的男神/Desktop/blog/public/categories/C语言学习笔记/index.html","b77ec852e893501440e8c494c1a02656"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Hexo/index.html","f492b4d2152c851e63e6f9fd4a62f6b5"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Hexo/page/2/index.html","da0df95ab9b7fd3f880d3c79f8569c91"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Java学习笔记/index.html","6b414d8bf86936cea20a549c3a324f58"],["C:/Users/高冷的男神/Desktop/blog/public/categories/Linux学习笔记/index.html","c3f380aff040bde9c464baab45921885"],["C:/Users/高冷的男神/Desktop/blog/public/categories/index.html","24da87eb4b40945b3c019c1fc7d067c2"],["C:/Users/高冷的男神/Desktop/blog/public/categories/yilia/index.html","a891f7e253f406371d28ea6af3192baf"],["C:/Users/高冷的男神/Desktop/blog/public/categories/常见bug/index.html","828b4af8e42dbb11f8098d6e556039e6"],["C:/Users/高冷的男神/Desktop/blog/public/categories/计算机/index.html","f2a6a7a682ddcd75c86e604871f74c70"],["C:/Users/高冷的男神/Desktop/blog/public/categories/软件工具/index.html","541d38de262b416f320278dc91257994"],["C:/Users/高冷的男神/Desktop/blog/public/css/index.css","930c89b4a2a1af825c551b569e8d7cb0"],["C:/Users/高冷的男神/Desktop/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/高冷的男神/Desktop/blog/public/img/2.png","a707c97c1f534c24ae638d8026f78267"],["C:/Users/高冷的男神/Desktop/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/高冷的男神/Desktop/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/高冷的男神/Desktop/blog/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["C:/Users/高冷的男神/Desktop/blog/public/img/bq.jpg","19bbadd8563123dd6e0fa72e47f4b8b6"],["C:/Users/高冷的男神/Desktop/blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/高冷的男神/Desktop/blog/public/img/fenlei.jpg","84c493067ed7500cc5680da64d35a611"],["C:/Users/高冷的男神/Desktop/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/高冷的男神/Desktop/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/高冷的男神/Desktop/blog/public/img/index.jpg","9ab35940d1851a6d593490f48d450290"],["C:/Users/高冷的男神/Desktop/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/高冷的男神/Desktop/blog/public/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["C:/Users/高冷的男神/Desktop/blog/public/img/post2.jpg","d9183e4b5310574e687eac94c0a96a6e"],["C:/Users/高冷的男神/Desktop/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/高冷的男神/Desktop/blog/public/img/wc.png","920e8c5f7cecf5d16623757f80857bf0"],["C:/Users/高冷的男神/Desktop/blog/public/img/zfb.png","b37c5d5292744a25f067ee010cb7d92c"],["C:/Users/高冷的男神/Desktop/blog/public/index.html","be366b82b999bf8211d595767f397b59"],["C:/Users/高冷的男神/Desktop/blog/public/js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["C:/Users/高冷的男神/Desktop/blog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["C:/Users/高冷的男神/Desktop/blog/public/js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["C:/Users/高冷的男神/Desktop/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["C:/Users/高冷的男神/Desktop/blog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["C:/Users/高冷的男神/Desktop/blog/public/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["C:/Users/高冷的男神/Desktop/blog/public/link/index.html","340812de396bf6d2063ec22adc893bd2"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/高冷的男神/Desktop/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/高冷的男神/Desktop/blog/public/movies/index.html","4cd695ec689c08656833269488c8f56a"],["C:/Users/高冷的男神/Desktop/blog/public/music/index.html","df854910e26fedc9b183e9629287c85a"],["C:/Users/高冷的男神/Desktop/blog/public/page/2/index.html","f890e80bbcb2060b524253585b65706f"],["C:/Users/高冷的男神/Desktop/blog/public/page/3/index.html","d5de38f2b73d20e66f1b9e1fb73e36c4"],["C:/Users/高冷的男神/Desktop/blog/public/page/4/index.html","3ff4b109ded1d1a6d9d2acaffee5272d"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Centos/index.html","5f85c7e221dbcbe692958191cc0efe1b"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Class类/index.html","6f688ca85dacc94651df55395787f35b"],["C:/Users/高冷的男神/Desktop/blog/public/tags/C语言基础/index.html","d1c58893e4051b4f731591d99b395aff"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Hexo搭建/index.html","5dd32c721f37d85ba827b52a2897e4ef"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Java基础/index.html","c6ef721be91b847371f61561355d5f1c"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Linux/index.html","f898c8958c8e1f7a78390bd035acb0a4"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Linux基本命令/index.html","85b4afa1bd17dda032f5a2184d55875e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/TCP/index.html","24b124d0131c974c085532a369edf42e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/ViscualC-6-0工具/index.html","037beb4c120bc69ae8d6d5ebca26c601"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Vmware15/index.html","70f7fda1697ad9d51c8a3e2002a83681"],["C:/Users/高冷的男神/Desktop/blog/public/tags/Win系统安装/index.html","964275f36191c8b61a332c7a64bd4871"],["C:/Users/高冷的男神/Desktop/blog/public/tags/butterfly/index.html","0a8d50abd1b93130d424dd0f6c43e29d"],["C:/Users/高冷的男神/Desktop/blog/public/tags/coding/index.html","36a2b2a1cf64272ece894ab8c4eb3023"],["C:/Users/高冷的男神/Desktop/blog/public/tags/idea全家桶激活码/index.html","7796618f4d689f2c89855be16438aeac"],["C:/Users/高冷的男神/Desktop/blog/public/tags/index.html","b229aef2b4850d0ed39f95d315b4fc4c"],["C:/Users/高冷的男神/Desktop/blog/public/tags/office/index.html","98ad47dd78895228a8f93c02e3e7e0da"],["C:/Users/高冷的男神/Desktop/blog/public/tags/ssh/index.html","2b1f2b9023a9222c0058f8ff10e02219"],["C:/Users/高冷的男神/Desktop/blog/public/tags/tomcat/index.html","225b8d8b345185135c4ccff4f87299b5"],["C:/Users/高冷的男神/Desktop/blog/public/tags/令牌/index.html","955d27c903f2362cf1c94a4f49b53878"],["C:/Users/高冷的男神/Desktop/blog/public/tags/优化/index.html","f231af1cf7192236feb54f42f9d3cbc8"],["C:/Users/高冷的男神/Desktop/blog/public/tags/公钥/index.html","342647a12c04e8cd78c1c510153da360"],["C:/Users/高冷的男神/Desktop/blog/public/tags/分类（categories）/index.html","5821a23bd04cd42c3fa41228cf3f584b"],["C:/Users/高冷的男神/Desktop/blog/public/tags/反射/index.html","752ba32efbeb4ff3a74d5cc7fab43bfe"],["C:/Users/高冷的男神/Desktop/blog/public/tags/图床/index.html","f7f78814cb57202509a242834f481530"],["C:/Users/高冷的男神/Desktop/blog/public/tags/多线程/index.html","e84a0f612bb67b56b043e02227b369ed"],["C:/Users/高冷的男神/Desktop/blog/public/tags/数据类型/index.html","7495c52c8e4c46b11615be522a7684d0"],["C:/Users/高冷的男神/Desktop/blog/public/tags/枚举/index.html","b175c4ff76c7d19d8ae8c298a73322d2"],["C:/Users/高冷的男神/Desktop/blog/public/tags/标签（tags）/index.html","6d59c72fac9686258dc30414d6383f7e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/标识符/index.html","533d7ce762ca13ef53a435d0c58dd9da"],["C:/Users/高冷的男神/Desktop/blog/public/tags/汉化/index.html","e3bae473196ad3b24f5bcf61e210e65f"],["C:/Users/高冷的男神/Desktop/blog/public/tags/注解/index.html","621c7c9a3754687c7edf71f1f8f19141"],["C:/Users/高冷的男神/Desktop/blog/public/tags/看板娘/index.html","ecf7149081fd0582be69bcbc333fdd38"],["C:/Users/高冷的男神/Desktop/blog/public/tags/端口冲突/index.html","97e19b16892e3e092d00b74d0b5a7001"],["C:/Users/高冷的男神/Desktop/blog/public/tags/系统激活/index.html","a8f3bc968eb82bdc50a7fe4658378a02"],["C:/Users/高冷的男神/Desktop/blog/public/tags/网络编程/index.html","f8ef5968cb92488d13252f141410992c"],["C:/Users/高冷的男神/Desktop/blog/public/tags/网络通讯/index.html","c3a4c451965930ecaa2aebe0019c7c8c"],["C:/Users/高冷的男神/Desktop/blog/public/tags/部署/index.html","b5412f0584303328333dffcc7bef5d90"],["C:/Users/高冷的男神/Desktop/blog/public/tags/铭飞cms/index.html","36c283bedb51611ec7fb7fe6c0e35f3e"],["C:/Users/高冷的男神/Desktop/blog/public/tags/防火墙/index.html","ff5b4b3b713f4e0d840fedf727ea9a41"],["C:/Users/高冷的男神/Desktop/blog/public/tags/随笔/index.html","3f43b2e3f2a1c07fe7aa36f05a2e2487"]];
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







