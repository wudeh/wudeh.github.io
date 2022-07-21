/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "05.JavaScript/2021-09/04.async..await的错误处理.html",
    "revision": "eaea5f993ea668e1c109dc34c8d78edc"
  },
  {
    "url": "404.html",
    "revision": "6af6db17b1a345cb62bfd729def2ef93"
  },
  {
    "url": "archives/index.html",
    "revision": "c005d52d6d61d8585cbb4c3f70bc5d71"
  },
  {
    "url": "assets/css/0.styles.f1c93842.css",
    "revision": "2af98ebd4c404b23c8f8ff2b112a23c5"
  },
  {
    "url": "assets/img/loading.18d75e19.gif",
    "revision": "18d75e19791c1d042f102e088f463d8a"
  },
  {
    "url": "assets/js/10.6af8e60a.js",
    "revision": "e5b94e630e3b59bc46aa65aca9e91953"
  },
  {
    "url": "assets/js/100.65f1c0d4.js",
    "revision": "1171e01644d23820216e89d06f61f913"
  },
  {
    "url": "assets/js/101.4ba661b6.js",
    "revision": "44f0c4e2973388bb96ffdb0d6847abc3"
  },
  {
    "url": "assets/js/102.8b274397.js",
    "revision": "8770c9e8a85e7e5b5a1417de407d8cc1"
  },
  {
    "url": "assets/js/103.a7abd78b.js",
    "revision": "a16a5d40c5b75c95adb3b4a5db60b5f3"
  },
  {
    "url": "assets/js/104.da3de7b6.js",
    "revision": "3b79a6123ac66c0c12642dd68fd25cb5"
  },
  {
    "url": "assets/js/105.17774dae.js",
    "revision": "c2c158e73987aa02be7ffbb00889aba6"
  },
  {
    "url": "assets/js/106.901833f6.js",
    "revision": "c730ef6d009ac07278110706da9eee57"
  },
  {
    "url": "assets/js/107.390827a3.js",
    "revision": "032fa08900fae5016d31c69be75fed20"
  },
  {
    "url": "assets/js/108.9966de7e.js",
    "revision": "243819f029c5bc62f01024b9a258fc0c"
  },
  {
    "url": "assets/js/109.c0be28cf.js",
    "revision": "d6bb5eb9ee84604cf4a9351c76dd0b26"
  },
  {
    "url": "assets/js/11.b1cd6de1.js",
    "revision": "37be3625ed331f31b5b80347f10cf7de"
  },
  {
    "url": "assets/js/110.92c20fa4.js",
    "revision": "bdc79cfba9441991952cdf977e43c567"
  },
  {
    "url": "assets/js/111.7a407a13.js",
    "revision": "0fa5c6e0777039158029bc466bdb55bd"
  },
  {
    "url": "assets/js/112.4fc11972.js",
    "revision": "cac698144bb25556cd8de330c58db455"
  },
  {
    "url": "assets/js/113.8ca34279.js",
    "revision": "9f261c5d2845827cab5191e74ef16ed2"
  },
  {
    "url": "assets/js/114.881776b3.js",
    "revision": "0a4b983010927712de2eec3bc71bf4c7"
  },
  {
    "url": "assets/js/115.b9c70d53.js",
    "revision": "598f12960f36ca9abf656abc3c7df35a"
  },
  {
    "url": "assets/js/116.13de6c9c.js",
    "revision": "0db355d1bdf3c8f2265592b2ff6cfced"
  },
  {
    "url": "assets/js/117.0cbd62ec.js",
    "revision": "aca2d99bc4edebf7e05b275549308534"
  },
  {
    "url": "assets/js/118.6d708a70.js",
    "revision": "e6d2f40e22138f90535810e809000657"
  },
  {
    "url": "assets/js/119.4211dd9e.js",
    "revision": "a2cd62d6cc643818841fc4ae598ebe83"
  },
  {
    "url": "assets/js/12.d98b340a.js",
    "revision": "a67e5d3ecf434eefdd859206b86ff2de"
  },
  {
    "url": "assets/js/120.7662af27.js",
    "revision": "1df5cdd1d56e1484e6a00c3ad41c8c00"
  },
  {
    "url": "assets/js/121.1d24c29e.js",
    "revision": "ade1f95d7cd07d96fe9243af74761c23"
  },
  {
    "url": "assets/js/122.7d88904a.js",
    "revision": "a52d91bef54cb4f6adf5d996eb94a294"
  },
  {
    "url": "assets/js/123.614aacf0.js",
    "revision": "be1bbdabf4d4a10a56a72c2afc541a7b"
  },
  {
    "url": "assets/js/124.0b2f53f9.js",
    "revision": "276e2151d5182c44c941b2b7b7b0c77b"
  },
  {
    "url": "assets/js/125.fa03739b.js",
    "revision": "75e78d1c8bbe2e7eb741143246d9a697"
  },
  {
    "url": "assets/js/126.d3d64db8.js",
    "revision": "26acdebbf9f3863cccd3980ddacffd20"
  },
  {
    "url": "assets/js/127.60185ab5.js",
    "revision": "f99d4e44e5552eed146218bb04814394"
  },
  {
    "url": "assets/js/128.f4cf6c8c.js",
    "revision": "de04db49022d9911b8234e7c3454c62c"
  },
  {
    "url": "assets/js/129.514023ec.js",
    "revision": "6972b6cb67c552dc5e0a32d7b4ff1275"
  },
  {
    "url": "assets/js/13.cf01d197.js",
    "revision": "eea1f645e90b0c12ef1108c7e40163bd"
  },
  {
    "url": "assets/js/130.906ab821.js",
    "revision": "aef927090d0fa3b96f69ba25a52b4635"
  },
  {
    "url": "assets/js/131.e4ee3c73.js",
    "revision": "bebe2e27d2b7d4b20a5bab06e6633682"
  },
  {
    "url": "assets/js/132.8e33d557.js",
    "revision": "73d25f523c2cb71859b817725666cb38"
  },
  {
    "url": "assets/js/133.cdd8a2a9.js",
    "revision": "3b3fd38ba3848c0b1231e8486a0478d5"
  },
  {
    "url": "assets/js/134.e179c788.js",
    "revision": "f7511096875f2c6aeb37ec78569ae767"
  },
  {
    "url": "assets/js/135.6bfdadd1.js",
    "revision": "04041426102a6c22792c39a5bca5c3e3"
  },
  {
    "url": "assets/js/136.f1f1f135.js",
    "revision": "e1d4090755ec43d24a27a6dbcea9b2e2"
  },
  {
    "url": "assets/js/137.6fa1ef58.js",
    "revision": "03a821d835c79fcfb172f75672c77bff"
  },
  {
    "url": "assets/js/138.54602fbd.js",
    "revision": "ca381f9eabb839b2f8344cf5a8eb7486"
  },
  {
    "url": "assets/js/139.22e2c8db.js",
    "revision": "e11c581099f8cd5b10da699efde3e15e"
  },
  {
    "url": "assets/js/14.71fbe208.js",
    "revision": "2272e388e60feb09713d42cd97329816"
  },
  {
    "url": "assets/js/140.1c18b626.js",
    "revision": "6b7dbd2c30f8fd75c17e78f84b614c3a"
  },
  {
    "url": "assets/js/141.2ec77369.js",
    "revision": "1a2f170bdd014954199aa5ee273a2dfd"
  },
  {
    "url": "assets/js/142.8512fd0b.js",
    "revision": "da546206f44e19aa7a699aad585f5247"
  },
  {
    "url": "assets/js/143.bdde3ad8.js",
    "revision": "616d8752359ed11c9ca9f9e038dca43d"
  },
  {
    "url": "assets/js/144.ef5a3c74.js",
    "revision": "7bdab3df5fd630ad741f9f38395d0d92"
  },
  {
    "url": "assets/js/145.b4b4073e.js",
    "revision": "d188a8c524f967fd6ade47b01c4d1330"
  },
  {
    "url": "assets/js/146.f664d7c1.js",
    "revision": "f1b3714a33cecdb007de9b6539ec86c9"
  },
  {
    "url": "assets/js/147.65182e78.js",
    "revision": "287290b4a20acbed50179c95c375b212"
  },
  {
    "url": "assets/js/148.79fb6231.js",
    "revision": "2d3e16da3996c984a095d2b77de8d3cb"
  },
  {
    "url": "assets/js/149.e2c026c5.js",
    "revision": "b10d514af0113822435a13442daa290a"
  },
  {
    "url": "assets/js/15.56502ffc.js",
    "revision": "f288467ca7aff6a5d7408df0ff6440e0"
  },
  {
    "url": "assets/js/150.9a56ae5b.js",
    "revision": "a9e06cf0a288e20b604690fe28ab755f"
  },
  {
    "url": "assets/js/151.81a640b1.js",
    "revision": "6414e035b782dac5a2ddcb1493817920"
  },
  {
    "url": "assets/js/152.496777d6.js",
    "revision": "0074f694c9a22087d72bf86d78d81306"
  },
  {
    "url": "assets/js/153.1952e194.js",
    "revision": "831ffe87341f8aa187bccfe2b2cc416d"
  },
  {
    "url": "assets/js/154.6e6bb751.js",
    "revision": "ad135bb579b2af52ac1a9b1b74463172"
  },
  {
    "url": "assets/js/155.c1547b6f.js",
    "revision": "281e594d974b1dcbf92050e537c4fb78"
  },
  {
    "url": "assets/js/156.2eeba0ed.js",
    "revision": "de2d0174149a523a31694bb25bc08bda"
  },
  {
    "url": "assets/js/157.07db42e9.js",
    "revision": "5fcd35ae4c3bc4149a2f9811af32f1ff"
  },
  {
    "url": "assets/js/16.4b46ab3f.js",
    "revision": "1b4c2e94e97143e329655f99a3511dbd"
  },
  {
    "url": "assets/js/17.e596f7e6.js",
    "revision": "011f3ed00d1ae5aa6e53547adc0472b0"
  },
  {
    "url": "assets/js/18.7e7290fa.js",
    "revision": "5d7c5a8f763fee4bfafaf536e9b96567"
  },
  {
    "url": "assets/js/19.1b67b426.js",
    "revision": "e9b057825b91e18d09c2b1c7040f9b2e"
  },
  {
    "url": "assets/js/2.d5aa5fdd.js",
    "revision": "017900826f0fa4bf4684692b0aa069d8"
  },
  {
    "url": "assets/js/20.58bf1afd.js",
    "revision": "907b5790506c54c65d271d5c62d52577"
  },
  {
    "url": "assets/js/21.f69539a7.js",
    "revision": "a6daae0df008b2111da7db007fd27ee4"
  },
  {
    "url": "assets/js/22.7db24912.js",
    "revision": "834d8a6c8f8e7c1891036b66b6d3d411"
  },
  {
    "url": "assets/js/23.f8a15d95.js",
    "revision": "1da014d5ce837928ecbd2b38923118de"
  },
  {
    "url": "assets/js/24.2404f96d.js",
    "revision": "7fb4174e5881ece5246fd148afc66796"
  },
  {
    "url": "assets/js/25.ce401652.js",
    "revision": "6aae191001cea8b3bffbaedd422adf45"
  },
  {
    "url": "assets/js/26.3d446029.js",
    "revision": "a90b87a68ad1b282c54daa58884ba439"
  },
  {
    "url": "assets/js/27.28c95f52.js",
    "revision": "6c6c1fba340c34a192d18185f0c49f62"
  },
  {
    "url": "assets/js/28.8db441fa.js",
    "revision": "9f233485e5fa29b86b8471cd0a5fb19e"
  },
  {
    "url": "assets/js/29.aad66b79.js",
    "revision": "3ea9e7120654fab8a5a3c100073d5ebe"
  },
  {
    "url": "assets/js/3.6353ca7f.js",
    "revision": "9ad633769d8dbbf894ea7efad759b56d"
  },
  {
    "url": "assets/js/30.49b6604b.js",
    "revision": "2d3989324298e82eb394ccf1d8ee7195"
  },
  {
    "url": "assets/js/31.9ec64d73.js",
    "revision": "011fe3c702c874ee730c558fb3288849"
  },
  {
    "url": "assets/js/32.b8558cb8.js",
    "revision": "b5f9392c5dea4f7cfc56c719c8454a80"
  },
  {
    "url": "assets/js/33.f761662c.js",
    "revision": "33e3502c0e907d3eaa931b89389f0d1d"
  },
  {
    "url": "assets/js/34.e5d32753.js",
    "revision": "a87ec3b920a47e30ba2d9fc56f0f6703"
  },
  {
    "url": "assets/js/35.8b8120f2.js",
    "revision": "7ce087590198ebb7b6e6626a52b73356"
  },
  {
    "url": "assets/js/36.43cb565f.js",
    "revision": "d29167c3c8bd6c2726f07eebe32d85be"
  },
  {
    "url": "assets/js/37.301de0eb.js",
    "revision": "3ef0d42ad29cc1c82f820a324f3a566c"
  },
  {
    "url": "assets/js/38.d8696448.js",
    "revision": "228517b9998a98bdaf1022e559798475"
  },
  {
    "url": "assets/js/39.91e72e6f.js",
    "revision": "4110b18f29dd1e427b6928a8dd20c6d0"
  },
  {
    "url": "assets/js/4.461c790c.js",
    "revision": "af0d797b60d6ef0124a9373fd87d2895"
  },
  {
    "url": "assets/js/40.99898b82.js",
    "revision": "7849c57331f25f9669690ff27a1f8570"
  },
  {
    "url": "assets/js/41.f03199a2.js",
    "revision": "168c54236998fb5259a46d25bbfb7936"
  },
  {
    "url": "assets/js/42.b5fe17f7.js",
    "revision": "bcfb8e5911fef6b6ede918e61ce193b2"
  },
  {
    "url": "assets/js/43.ed819b35.js",
    "revision": "1a52671509946c87a57e1264071f43d6"
  },
  {
    "url": "assets/js/44.6603dc8f.js",
    "revision": "60307481cbedb716310f5012bae16ac6"
  },
  {
    "url": "assets/js/45.fb309fa6.js",
    "revision": "205cf715c8002a0aa4843bd382a4e2e5"
  },
  {
    "url": "assets/js/46.563c0339.js",
    "revision": "d26709cdd43574f6fce3be66b0a28b1a"
  },
  {
    "url": "assets/js/47.ea83ea27.js",
    "revision": "a627fa6bfcb3b09027eefdfbff3f37fc"
  },
  {
    "url": "assets/js/48.d0475ef1.js",
    "revision": "d6863c5f335a8529e00fbf559f24ec69"
  },
  {
    "url": "assets/js/49.68fd8b11.js",
    "revision": "1502afc24111440246684a6ff9c09610"
  },
  {
    "url": "assets/js/5.1b00a2e8.js",
    "revision": "86a7d516a6413b3a93d246ed504e1ca6"
  },
  {
    "url": "assets/js/50.0b386e98.js",
    "revision": "e41420b3c55e5778f7b23c0e5f254774"
  },
  {
    "url": "assets/js/51.a6e1f1ac.js",
    "revision": "dbcd0b7e6c6f78cacb0f981729aaa604"
  },
  {
    "url": "assets/js/52.dc5bcf09.js",
    "revision": "febe7b50f3633516c56773ccd76371c9"
  },
  {
    "url": "assets/js/53.905f2ea1.js",
    "revision": "c09a1290aa3b78981cbb43b2ba9ccbd2"
  },
  {
    "url": "assets/js/54.a74cbf03.js",
    "revision": "cdb88420b67d923b76a84c5ff20e291d"
  },
  {
    "url": "assets/js/55.0c2c800a.js",
    "revision": "d0c121688635c20e7384688e92ec6e06"
  },
  {
    "url": "assets/js/56.40fe34da.js",
    "revision": "2a4e837467836123f567d05bd9c8d3c4"
  },
  {
    "url": "assets/js/57.d9db5625.js",
    "revision": "3a3f4b88eba0d9a73d65e07d0f497fc4"
  },
  {
    "url": "assets/js/58.dd9b78f9.js",
    "revision": "58cb46efb8ecc38826104d012b0c9fea"
  },
  {
    "url": "assets/js/59.2d914e3d.js",
    "revision": "677ef311c9a6098325a8e6d11bd2930c"
  },
  {
    "url": "assets/js/6.120f31f2.js",
    "revision": "b5402366a7ce79c2f0c05e4303800ae4"
  },
  {
    "url": "assets/js/60.2425dae7.js",
    "revision": "f7f0f1d4ed693c76465d69c690692720"
  },
  {
    "url": "assets/js/61.4dcf5290.js",
    "revision": "8058cd0dcd0a7559c14d3002b842e944"
  },
  {
    "url": "assets/js/62.4e7877e0.js",
    "revision": "7335003f702d323c4850e51944dad0a9"
  },
  {
    "url": "assets/js/63.76358851.js",
    "revision": "fba1317e06932cb28edb420aa1d31eca"
  },
  {
    "url": "assets/js/64.4080e243.js",
    "revision": "7a97b5e00959835e7036fbc732ec1bf4"
  },
  {
    "url": "assets/js/65.41ffdc8d.js",
    "revision": "0b42634723bc7a0b01ccdc81ffb7380c"
  },
  {
    "url": "assets/js/66.2a918592.js",
    "revision": "8a6cc30207f57f028612d527e76fc889"
  },
  {
    "url": "assets/js/67.25b8611f.js",
    "revision": "11387b138219e6ac4a5737fdf9cf5143"
  },
  {
    "url": "assets/js/68.5e13ced0.js",
    "revision": "1eecb30768ef9118f8948ae2950ea36e"
  },
  {
    "url": "assets/js/69.dd4cfe32.js",
    "revision": "25a73dd1dfc621ac3c6bcdc8e8b5e3a0"
  },
  {
    "url": "assets/js/7.820eda1f.js",
    "revision": "ae3369e35bec806b7ac218d28db87675"
  },
  {
    "url": "assets/js/70.87c4164e.js",
    "revision": "32897c44b9d8ac1eed21f03082d0eeaf"
  },
  {
    "url": "assets/js/71.8aa9c8b1.js",
    "revision": "3480064fc48689f4caf05852f6fd3986"
  },
  {
    "url": "assets/js/72.e5656deb.js",
    "revision": "4dfcd0513af8cda5086fbabe99612b36"
  },
  {
    "url": "assets/js/73.0e2c3ef6.js",
    "revision": "3878deeb781353ff27b96392582f648a"
  },
  {
    "url": "assets/js/74.d30c0813.js",
    "revision": "df32d8ca6359b2cb4f82034dce7c340f"
  },
  {
    "url": "assets/js/75.b8eaa752.js",
    "revision": "c59013c4acb77c5238fa0e651b28dcc9"
  },
  {
    "url": "assets/js/76.00301325.js",
    "revision": "e73a1bd5e9b3c99d03bae15998f3a1a9"
  },
  {
    "url": "assets/js/77.2823dd10.js",
    "revision": "7fb2b68b9b0864a75b6ecabca3e2343f"
  },
  {
    "url": "assets/js/78.f9f0ee73.js",
    "revision": "94d80aed0152bf5c3b062e8cc8148e72"
  },
  {
    "url": "assets/js/79.586abcdf.js",
    "revision": "d9334da0304475c2e1a106f54409e8ae"
  },
  {
    "url": "assets/js/8.2734be14.js",
    "revision": "3133e84db67b4dd07613e09513c44ef9"
  },
  {
    "url": "assets/js/80.0970dbc7.js",
    "revision": "41ece8575133d68562fb3bb1206bebd8"
  },
  {
    "url": "assets/js/81.e5a73fa2.js",
    "revision": "3d5210cc88b39b1b4ca5dc3a987e009b"
  },
  {
    "url": "assets/js/82.4a981979.js",
    "revision": "9b21636b35703722c77ec1eed4b08e3c"
  },
  {
    "url": "assets/js/83.5f3ffc11.js",
    "revision": "6d01c680254e458a10e10f8b4023f2d9"
  },
  {
    "url": "assets/js/84.e75369a0.js",
    "revision": "eaba22aa14d3e1b3c624a7e39c79dba9"
  },
  {
    "url": "assets/js/85.9af4edba.js",
    "revision": "8e6bffc6c2be9f242b4deeab5d3a6938"
  },
  {
    "url": "assets/js/86.fe85af93.js",
    "revision": "6007cbaa8f795966ce6d3390cfb15062"
  },
  {
    "url": "assets/js/87.183dabcd.js",
    "revision": "ed5bce5c6595d0b2bd9c36460e663c7d"
  },
  {
    "url": "assets/js/88.cbc6f40a.js",
    "revision": "c6cc1a7eba5f5246ba89394bfd731edb"
  },
  {
    "url": "assets/js/89.b18cfd93.js",
    "revision": "d35f22fa7e3f1d254327dd62e75be192"
  },
  {
    "url": "assets/js/9.7c2a2d67.js",
    "revision": "5a1af5688c7b0860a50ddc2acb78dfbc"
  },
  {
    "url": "assets/js/90.7ac0a099.js",
    "revision": "dff6bbebe3e4b9492981e75a8aa1f125"
  },
  {
    "url": "assets/js/91.02f4d1dd.js",
    "revision": "e4985074a36762b684060fb65ff9d4af"
  },
  {
    "url": "assets/js/92.6f111232.js",
    "revision": "1521f25bbd71c5709bf7db33257c5f55"
  },
  {
    "url": "assets/js/93.97e9049c.js",
    "revision": "a65820021bb371dff6c89ea216c26aa6"
  },
  {
    "url": "assets/js/94.ba08b154.js",
    "revision": "0f603357ce6c5d4d7814cd4de6fcff56"
  },
  {
    "url": "assets/js/95.c67dd65d.js",
    "revision": "4801838a7b905db8a38fe93589a50db0"
  },
  {
    "url": "assets/js/96.eddf7f9f.js",
    "revision": "84990242f83539664b9395e6f4dc88f0"
  },
  {
    "url": "assets/js/97.c8889a87.js",
    "revision": "fbea33637730a376a65c597ae2102546"
  },
  {
    "url": "assets/js/98.bd89fae2.js",
    "revision": "56ec6beeb147a8441eb650c0cd442cbd"
  },
  {
    "url": "assets/js/99.b2349005.js",
    "revision": "42cb41f579d9dcb8b746fc10dcd1f108"
  },
  {
    "url": "assets/js/app.62f7081f.js",
    "revision": "b0ca924c913a776780ee9c3a76f414e4"
  },
  {
    "url": "bookshop/friendslink/index.html",
    "revision": "a3e998607bb4c8cb20f40f62d04616c8"
  },
  {
    "url": "bookshop/linkme/index.html",
    "revision": "c699304e4c702d86a4aa2eabf452f243"
  },
  {
    "url": "bookshop/message-board/index.html",
    "revision": "190e9ec6b53c6f39651e0ba0b9a2f47a"
  },
  {
    "url": "categories/index.html",
    "revision": "cf0a32ea33c63c70255064bec6267560"
  },
  {
    "url": "fe-optimize-ppt/dist/index.css",
    "revision": "6a85ecbd56893b84c2ced56cac0d87ad"
  },
  {
    "url": "fe-optimize-ppt/dist/reset.css",
    "revision": "4042c1a43777d540673cabc97cec67b2"
  },
  {
    "url": "fe-optimize-ppt/dist/reveal.css",
    "revision": "fb190b58a8ad7e758578f8908f66e738"
  },
  {
    "url": "fe-optimize-ppt/dist/reveal.esm.js",
    "revision": "551ac08d8cf1e54d9f864fd9d997a977"
  },
  {
    "url": "fe-optimize-ppt/dist/reveal.js",
    "revision": "0d51b30ccefb9fa78c3b0299f70e8ba4"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/beige.css",
    "revision": "168843d058f77ce1b862753eca43d30c"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/black.css",
    "revision": "8a3401cc1e186995a9a7fc8a4b99bb82"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/blood.css",
    "revision": "19425df0662435565eb8e1a63e65dddc"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/league-gothic/league-gothic.css",
    "revision": "488966d15e97f072801d7e348f4b5141"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/league-gothic/league-gothic.eot",
    "revision": "9900a4643cc63c5d8f969d2196f72572"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/league-gothic/league-gothic.ttf",
    "revision": "91295fa87df918411b49b7531da5d558"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/league-gothic/league-gothic.woff",
    "revision": "cd382dc8a9d6317864b5810a320effc5"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.eot",
    "revision": "72217712eb8d28872e7069322f3fda23"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.ttf",
    "revision": "8256cfd7e4017a7690814879409212cd"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.woff",
    "revision": "e74f0128884561828ce8c9cf5c284ab8"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.eot",
    "revision": "1d71438462d532b62b05cdd7e6d7197d"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.ttf",
    "revision": "2da39ecf9246383937da11b44b7bd9b4"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.woff",
    "revision": "e7acc589bb558fe58936a853f570193c"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.eot",
    "revision": "0f3da1edf1b5c6a94a6ad948a7664451"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.ttf",
    "revision": "f3565095e6c9158140444970f5a2c5ed"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.woff",
    "revision": "1cb8e94f1185f1131a0c895165998f2b"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.eot",
    "revision": "58153ac7194e141d1e73ea88c6b63861"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.ttf",
    "revision": "c7e698a4d0956f4a939f42a05685bbf5"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.woff",
    "revision": "6b058fc2634b01d837c3432316c3141f"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/fonts/source-sans-pro/source-sans-pro.css",
    "revision": "5ae239fba183e7f0dd606e4c79caf533"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/league.css",
    "revision": "2fab5ea22adfd7f54895534568de3a6c"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/moon.css",
    "revision": "4b5c35dbcf6447be91bdb5e8cc503057"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/night.css",
    "revision": "ab28f9552296fbef915916adf1d2bd8f"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/serif.css",
    "revision": "2a041eb1d6931608f224bd30c174f48c"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/simple.css",
    "revision": "a7b43905ec2f19f2e74d38233d45d44f"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/sky.css",
    "revision": "105ae904114465f48da51860171b6858"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/solarized.css",
    "revision": "ef1a9af27a4f36d2bf2955801b598b5a"
  },
  {
    "url": "fe-optimize-ppt/dist/theme/white.css",
    "revision": "a3b0a31c1d49bbed890bf1a4b2222a29"
  },
  {
    "url": "fe-optimize-ppt/index.html",
    "revision": "a1702a4c48bd1cd94a0bce939fb2eb3d"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/highlight.esm.js",
    "revision": "a8d0717a9a746848cff76bafdcdc295d"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/highlight.js",
    "revision": "691702d292e8fc58261570028f7af601"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/monokai.css",
    "revision": "8c43a819e1268fc57605f500adff816b"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/plugin.js",
    "revision": "f6168dfe21b1bd3d98d09916fb6bd641"
  },
  {
    "url": "fe-optimize-ppt/plugin/highlight/zenburn.css",
    "revision": "28d5b9497037a12cb5a15644fea2f1c3"
  },
  {
    "url": "fe-optimize-ppt/plugin/markdown/markdown.esm.js",
    "revision": "fdfa34f2c1d23b8386ea91464acaf7ff"
  },
  {
    "url": "fe-optimize-ppt/plugin/markdown/markdown.js",
    "revision": "9166010a6466bbad0ea0ae00c52b2927"
  },
  {
    "url": "fe-optimize-ppt/plugin/markdown/plugin.js",
    "revision": "2fe72cc983411cf94dd81d679955f141"
  },
  {
    "url": "fe-optimize-ppt/plugin/math/math.esm.js",
    "revision": "1475913f4862b5e8f7f1536391893a18"
  },
  {
    "url": "fe-optimize-ppt/plugin/math/math.js",
    "revision": "533dd2f86ac5475cd0d20d2f77efde36"
  },
  {
    "url": "fe-optimize-ppt/plugin/math/plugin.js",
    "revision": "9be0251dd9411c0a96ee050d5bc3bef1"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/notes.esm.js",
    "revision": "22a20e5a835c1ce6ec06c8f87ba8dd44"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/notes.js",
    "revision": "25124c87ba29154deecbec4a95f12005"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/plugin.js",
    "revision": "49924c937e252f47ac915f643e01ec43"
  },
  {
    "url": "fe-optimize-ppt/plugin/notes/speaker-view.html",
    "revision": "1599c3637c3db09d47992d53891f7e08"
  },
  {
    "url": "fe-optimize-ppt/plugin/search/plugin.js",
    "revision": "032f7408cd38991c3bd861582dd6322d"
  },
  {
    "url": "fe-optimize-ppt/plugin/search/search.esm.js",
    "revision": "132b99229d67db17feda69678556142a"
  },
  {
    "url": "fe-optimize-ppt/plugin/search/search.js",
    "revision": "ecc723fcbd433db7b74fd2cab115ff67"
  },
  {
    "url": "fe-optimize-ppt/plugin/zoom/plugin.js",
    "revision": "20eb10e380080e9f750ec77dedb76618"
  },
  {
    "url": "fe-optimize-ppt/plugin/zoom/zoom.esm.js",
    "revision": "8e430e6444e4f75223fd407e59d20488"
  },
  {
    "url": "fe-optimize-ppt/plugin/zoom/zoom.js",
    "revision": "b209a75b6c4cc6df8dd5383cf9b6ee22"
  },
  {
    "url": "img/avatar-2.jpg",
    "revision": "55b9603cdb0caff91ecd803d047730b1"
  },
  {
    "url": "img/avatar-2.png",
    "revision": "d3a1ca94d8290aa71371dda0664aaf14"
  },
  {
    "url": "img/avatar.jpg",
    "revision": "037dec754a042491ae29f2bc02eb1814"
  },
  {
    "url": "img/avatar.png",
    "revision": "a19cc6aacf9b570b8a4047da4796146f"
  },
  {
    "url": "img/bg.jpg",
    "revision": "c8f26794a0ee092e62abbd0f99857064"
  },
  {
    "url": "img/logo.png",
    "revision": "421642f8c4c77139f133d7d1ec05168c"
  },
  {
    "url": "img/pikapika.jpg",
    "revision": "0b6e65b4475bc068ac04c9c24204f1d4"
  },
  {
    "url": "img/wechat.jpg",
    "revision": "cba13023b10d8a863a2dee6d1a24ca53"
  },
  {
    "url": "img/wx-global.jpg",
    "revision": "cba13023b10d8a863a2dee6d1a24ca53"
  },
  {
    "url": "index.html",
    "revision": "04f3800c99512ff0a491bb18e2108ca0"
  },
  {
    "url": "pages/002bb68b6be2d/index.html",
    "revision": "8b81016a493c08897c68d61a12ad01f4"
  },
  {
    "url": "pages/005afb7501ebf/index.html",
    "revision": "8ba3a966329b22abdf67ecc5aaea7b10"
  },
  {
    "url": "pages/03f1606617caf/index.html",
    "revision": "65b04e7bcbca11161a041ab88502b735"
  },
  {
    "url": "pages/04ac7e87719d9/index.html",
    "revision": "6955589d629d6008d59fd03b4865a9c7"
  },
  {
    "url": "pages/05263678f5475/index.html",
    "revision": "97735e8634d7a3a599227e82fc6d4399"
  },
  {
    "url": "pages/05c534dbae294/index.html",
    "revision": "6708d6a826cc9b8561faa68162681be4"
  },
  {
    "url": "pages/06b79b205eae9/index.html",
    "revision": "a093e7d30d4bfc80b768d9e172918de8"
  },
  {
    "url": "pages/08ba2be5142fe/index.html",
    "revision": "93fb83d0b0be60b9e01eba6545cea4d1"
  },
  {
    "url": "pages/0a21c67ad91b8/index.html",
    "revision": "9c968b0a4fda7b433bbcfffa8c4545dd"
  },
  {
    "url": "pages/0aef6b379d95e/index.html",
    "revision": "5878fe57256a3e43332d8a22b259859a"
  },
  {
    "url": "pages/0b0e1b463ac7/index.html",
    "revision": "d266a6e419f74055e2628fa85b8efcca"
  },
  {
    "url": "pages/0b1f4ac58e0ec/index.html",
    "revision": "a43b9772a3e95253aa73dbf567484684"
  },
  {
    "url": "pages/0d5c101d17afe/index.html",
    "revision": "5a288cdb7b35cbd41c30550d8880e3e4"
  },
  {
    "url": "pages/0e1076dc81463/index.html",
    "revision": "904b02b33b299bd8f4ae413da7550589"
  },
  {
    "url": "pages/1248a29e9d98c/index.html",
    "revision": "2961c8e91b4b8afe4a60ad5419e3fa86"
  },
  {
    "url": "pages/12bb6ee186b54/index.html",
    "revision": "3da9ff266a15ee8a3163bc794526bcbc"
  },
  {
    "url": "pages/136f8f068dffe/index.html",
    "revision": "e94f27dbf560c688f11071326dde17bc"
  },
  {
    "url": "pages/1736b20fa8753/index.html",
    "revision": "173042805b1d43c1c72b007a5ebca520"
  },
  {
    "url": "pages/179bb558dda9a/index.html",
    "revision": "76d2f7d7c53885ada0d039b3d7b02aa4"
  },
  {
    "url": "pages/1db666865fc6a/index.html",
    "revision": "06dcadfd0d7c941c29f568ec52a084ad"
  },
  {
    "url": "pages/1e3e7c3cb310f/index.html",
    "revision": "33934a538091c17ada75b66440916578"
  },
  {
    "url": "pages/20c73b6b3fe29/index.html",
    "revision": "aa3593081c3bb491df40c16970910fe1"
  },
  {
    "url": "pages/263b22ebdc394/index.html",
    "revision": "5204899ec96c092d76d86437e27e95a8"
  },
  {
    "url": "pages/264c192471fa6/index.html",
    "revision": "4ab5d79af9a0cf4c039b3f71d558d5b8"
  },
  {
    "url": "pages/268b341244a92/index.html",
    "revision": "f6e550a807700638e5927de46ea0e0f3"
  },
  {
    "url": "pages/283170f5aae0d/index.html",
    "revision": "9a8f8410e80884540add421b99c9a493"
  },
  {
    "url": "pages/290a2fbb1e629/index.html",
    "revision": "6df448c6c856c97fbc48e86b1652edd0"
  },
  {
    "url": "pages/290c4692fed84/index.html",
    "revision": "071444918b0f349420202af8c854ebf5"
  },
  {
    "url": "pages/38a448a32b1a5/index.html",
    "revision": "a2b93249463c2ed910917bcc7aa410b6"
  },
  {
    "url": "pages/38ec7c0471d45/index.html",
    "revision": "b41fec4f33e173b4b91d9b6358cee601"
  },
  {
    "url": "pages/3cea8c7d5577f/index.html",
    "revision": "c014dfc2d73ca4e44abac989a3833f93"
  },
  {
    "url": "pages/3d292acfbd9ca/index.html",
    "revision": "1da9a4863001ee330362149839901040"
  },
  {
    "url": "pages/416517735bb6/index.html",
    "revision": "edcea8cf52a79cfbe7136fc9cff289e8"
  },
  {
    "url": "pages/4265332f4a648/index.html",
    "revision": "573539c99ca0d1b9f4249daeaa93928f"
  },
  {
    "url": "pages/43208fed3974c/index.html",
    "revision": "bd594fd9928e5da79109ff6eaa1ac23b"
  },
  {
    "url": "pages/434457264620a/index.html",
    "revision": "8577d74b1115a0129dacd629e2bd6b1e"
  },
  {
    "url": "pages/43d40ebb150ac/index.html",
    "revision": "3f1ffb242d1eaccee5ee8fc4fd423ed0"
  },
  {
    "url": "pages/444d876c76509/index.html",
    "revision": "90b758ce2418da2e84a99e8631bb3133"
  },
  {
    "url": "pages/453eb0efb3c81/index.html",
    "revision": "02f4f6d32fbe25d45cf8eb9824f3d4de"
  },
  {
    "url": "pages/463caf542a8ff/index.html",
    "revision": "07c600cd598308d8029cd7e14833516e"
  },
  {
    "url": "pages/4645ad84a3fd4/index.html",
    "revision": "c108d08efaf1645356de3c4eba791a6d"
  },
  {
    "url": "pages/469dd7f468fb/index.html",
    "revision": "e16ac1add24a92b6e329a505092fbe79"
  },
  {
    "url": "pages/47cd7451bbb9b/index.html",
    "revision": "d1f900c9d425ada2760060731deb770b"
  },
  {
    "url": "pages/49e2a780662e9/index.html",
    "revision": "0295d02689ab0a4e5bfa6b0975d0e4ba"
  },
  {
    "url": "pages/4b68ee9079a3e/index.html",
    "revision": "f769dcaa992cef750d2751775b85b566"
  },
  {
    "url": "pages/4bfeb3b5252/index.html",
    "revision": "7718ede3d140e88a2ef2b2f6a470851a"
  },
  {
    "url": "pages/4e3130c16c521/index.html",
    "revision": "3e06b9a7e7fff0300a418a201cdd37bd"
  },
  {
    "url": "pages/4e384f69ef6f/index.html",
    "revision": "d6779150adf06a15f5c749928f326005"
  },
  {
    "url": "pages/4e5aefd9d013e/index.html",
    "revision": "cb4dece8878cbcd61cb090dbaa34b86e"
  },
  {
    "url": "pages/4f1b0f2bd9475/index.html",
    "revision": "c3fe68f44c725cd5e62cfb53f6786eca"
  },
  {
    "url": "pages/4fc3d46ab5911/index.html",
    "revision": "a28cc13e26796682d98c78235ca7c423"
  },
  {
    "url": "pages/512f6ae339a31/index.html",
    "revision": "f84a34570bd81b27cbc266a1e64c9a2f"
  },
  {
    "url": "pages/51e542b98251d/index.html",
    "revision": "02242f195180f0dc7a3a80afbea3810e"
  },
  {
    "url": "pages/5557218c66bf9/index.html",
    "revision": "3f4a27e346957e6f70f51be94fe02419"
  },
  {
    "url": "pages/55e7bb3eb7802/index.html",
    "revision": "5606ed3cd9ff620216232e3320139dec"
  },
  {
    "url": "pages/568530cba6e6a/index.html",
    "revision": "3cb810e054b3091c88951eb2d81c2be9"
  },
  {
    "url": "pages/57a4c8a168dc4/index.html",
    "revision": "06376effb2a8ffef2c6fe92dcda94099"
  },
  {
    "url": "pages/57d57b7618e19/index.html",
    "revision": "86cb53b382f60f61cd6c4817ed230690"
  },
  {
    "url": "pages/6570dacbfb84b/index.html",
    "revision": "e78e1c735a28af23e2c2a71331042aab"
  },
  {
    "url": "pages/698791731692d/index.html",
    "revision": "74d47b8f867cefce1d04521c667ba918"
  },
  {
    "url": "pages/6a3e67354e25e/index.html",
    "revision": "a6dbe75c3f0c6e04fb9b32c22ab76a78"
  },
  {
    "url": "pages/6d69cdf2a661f/index.html",
    "revision": "5457a8299fc1b3420c28e25f709c7437"
  },
  {
    "url": "pages/7030e2814205f/index.html",
    "revision": "2618196e6d935e407ee88e74cac782e0"
  },
  {
    "url": "pages/72dcdd7f52781/index.html",
    "revision": "5f82fce492b0120aee411843466307f3"
  },
  {
    "url": "pages/73a0a674682e8/index.html",
    "revision": "1ef4791fbe488b099b29928208015a5e"
  },
  {
    "url": "pages/74b89136d37c/index.html",
    "revision": "907f7e82b96509ee010f8f4d0d159210"
  },
  {
    "url": "pages/74d1ca7cc9b12/index.html",
    "revision": "072bf90e28127307f22cecb99aefa5da"
  },
  {
    "url": "pages/750acceb11c26/index.html",
    "revision": "e25840312d9c3905de4a3b671828a18d"
  },
  {
    "url": "pages/779996332598f/index.html",
    "revision": "34e9511e737f7f6da21fb78c373eb865"
  },
  {
    "url": "pages/785710818c193/index.html",
    "revision": "4a9f497008690197205a055ea62e6d89"
  },
  {
    "url": "pages/7a2436e534e3e/index.html",
    "revision": "15609ba8b69d71a835910b0838804321"
  },
  {
    "url": "pages/7a395b1193684/index.html",
    "revision": "de0e83ae886399f59532a2946f8b0023"
  },
  {
    "url": "pages/7c42f47b55907/index.html",
    "revision": "5d75f6fbbdd5f523c0dcb359147fc186"
  },
  {
    "url": "pages/7e55f36db0d68/index.html",
    "revision": "41278b6c56d34ea01b79170c833c00d7"
  },
  {
    "url": "pages/847fa12ceb953/index.html",
    "revision": "2dcaea25c4949dfa30f341a31e1fef46"
  },
  {
    "url": "pages/87c496997255/index.html",
    "revision": "d412f19d91b9f4743b5a5deab9b08be2"
  },
  {
    "url": "pages/8a459743d4ad5/index.html",
    "revision": "6e69e99a9ad0bd1a6cbdddcd5a7c97a1"
  },
  {
    "url": "pages/8c4ef214c7886/index.html",
    "revision": "6f7e8b740b644169e365fde9df6aa30b"
  },
  {
    "url": "pages/947c7b9b9db79/index.html",
    "revision": "f35145eb46b5617de1b6c558bda4d8a1"
  },
  {
    "url": "pages/9764240c8551b/index.html",
    "revision": "e4b9d9601457c495278136a9281cbfda"
  },
  {
    "url": "pages/98a7a4ab3b308/index.html",
    "revision": "15b37bdb0872635792e704b59596aed7"
  },
  {
    "url": "pages/9ad28e2dda11e/index.html",
    "revision": "9972ad2747a9af0af36aa4f19f22dd93"
  },
  {
    "url": "pages/9c687ea799c4e/index.html",
    "revision": "4fa4c9646c8034d2e6a4b507329f34dd"
  },
  {
    "url": "pages/9c7717d989fc6/index.html",
    "revision": "ace3bdac099c7ba842a832edc1834e46"
  },
  {
    "url": "pages/9ec14b4f64f3e/index.html",
    "revision": "56b2e203b7997b9328736fdd7b215adc"
  },
  {
    "url": "pages/a336385364f8/index.html",
    "revision": "bd50c7835954405c818a39260aab3061"
  },
  {
    "url": "pages/a606010c57cc5/index.html",
    "revision": "eed24ba77e09c65f78e72255e4df042b"
  },
  {
    "url": "pages/a6927d2ca1363/index.html",
    "revision": "88ac74e4ad4e623a8fe8e7b9932cd03b"
  },
  {
    "url": "pages/a8bf9866e9de8/index.html",
    "revision": "f853dc717a418b782489a26ecfb88cb2"
  },
  {
    "url": "pages/aa9d140ec6135/index.html",
    "revision": "504352443ea201a5f4298429f2719483"
  },
  {
    "url": "pages/ac34940436a4a/index.html",
    "revision": "12a10f1bc6b00f7a72af567937d07d66"
  },
  {
    "url": "pages/ac4047e2547c2/index.html",
    "revision": "dcc0ca339263e9766db089ea64086c5e"
  },
  {
    "url": "pages/add6814207646/index.html",
    "revision": "5df90b28af5b63332a6952c95b4b6660"
  },
  {
    "url": "pages/ae21b75e82658/index.html",
    "revision": "578cea1d5876522c3d9536ee84718b17"
  },
  {
    "url": "pages/b0c63028d916e/index.html",
    "revision": "47dbfcaf29c5e679eaf93258f49f7cc6"
  },
  {
    "url": "pages/b131604d144e7/index.html",
    "revision": "eace601a78d9f256a1a707c0e6ef9156"
  },
  {
    "url": "pages/b3ef129d20aa7/index.html",
    "revision": "5da43cfac8daaa5fc2ddad1c51b75bec"
  },
  {
    "url": "pages/b50d916f7471d/index.html",
    "revision": "43b7f74780a95551154aad11cad2e8c2"
  },
  {
    "url": "pages/b6d8dd375463c/index.html",
    "revision": "fd5f99f9998fcf4a36494899a96fa86f"
  },
  {
    "url": "pages/b992d45b69edc/index.html",
    "revision": "14e28d3752e2a0b1c5ada0c3372ab861"
  },
  {
    "url": "pages/be18cb94e364/index.html",
    "revision": "20a0dd30ce0d0e52893436bfc5b50dda"
  },
  {
    "url": "pages/c60b6dbcf5e5a/index.html",
    "revision": "27cdec1ff2b7f0bbbc2506fcdbffcb7f"
  },
  {
    "url": "pages/c6bb1267fe63e/index.html",
    "revision": "3d19e0ef378d030d513dde84815a68c7"
  },
  {
    "url": "pages/c863681e7285f/index.html",
    "revision": "42588120e59e2f578ddd8f68aa55dbc7"
  },
  {
    "url": "pages/c949f76a9d7a5/index.html",
    "revision": "4d4b5dc7bca906a5b14dd9aed12c8bef"
  },
  {
    "url": "pages/c97be6f9b007/index.html",
    "revision": "b6744f802d4ce58d35ec2c9bda152d33"
  },
  {
    "url": "pages/c9e6eb74a1978/index.html",
    "revision": "98496297c3efaff83bacbf0b290581bd"
  },
  {
    "url": "pages/cb56a8232176b/index.html",
    "revision": "c569db49897745caaa4a63670451e924"
  },
  {
    "url": "pages/cce4fea9f855e/index.html",
    "revision": "a1b0695c018fc1562175855323ab1d8d"
  },
  {
    "url": "pages/d15cf0393f49/index.html",
    "revision": "8269712fbab777c721ae1c090370543c"
  },
  {
    "url": "pages/d1d9ff27d34a5/index.html",
    "revision": "e9297230136f553ed6f2d4cac024a1bd"
  },
  {
    "url": "pages/d3e96522b08ef/index.html",
    "revision": "c167c07282f2b326549965c9733f4740"
  },
  {
    "url": "pages/d78f313d5605e/index.html",
    "revision": "9625005a1b9c6ce83c5fa4c2d947a530"
  },
  {
    "url": "pages/d92955c05d014/index.html",
    "revision": "f33c9412d45d5f7bf95c80eb0106159b"
  },
  {
    "url": "pages/dc00f73d9d1d9/index.html",
    "revision": "f81f492ee3fd733115fe99b723c51e0a"
  },
  {
    "url": "pages/dc024693bd189/index.html",
    "revision": "84f3cbbdf044f305c370c3f887edb70d"
  },
  {
    "url": "pages/dde56ae8a6985/index.html",
    "revision": "5802e1dc1f059e2225668cbd18af04c9"
  },
  {
    "url": "pages/df8b362adc4df/index.html",
    "revision": "f5aadb74b0d3834a495161ab61d88f1c"
  },
  {
    "url": "pages/e679f50369fa2/index.html",
    "revision": "fa061a23718bcd80ff8e7a6ac81282de"
  },
  {
    "url": "pages/eaca6b104f0f4/index.html",
    "revision": "9e5d8557151d0c2d56ba55cac6534113"
  },
  {
    "url": "pages/eb00ff6790769/index.html",
    "revision": "5cd7de7541abd513ebd0664f3b19be47"
  },
  {
    "url": "pages/ebb460710fd62/index.html",
    "revision": "381ee1a1077dcd9b1bbe2481da0ed501"
  },
  {
    "url": "pages/ee75b93677eaf/index.html",
    "revision": "96bc3ed552f1a3e7fbcc90da66d08ab0"
  },
  {
    "url": "pages/ef5b9c9dd32a7/index.html",
    "revision": "de1b49f99ac019f8cdf83bcd1060eb74"
  },
  {
    "url": "pages/f10dfe9226313/index.html",
    "revision": "44c722f781e77e1cdc0b6e8cb749dca1"
  },
  {
    "url": "pages/f15a7725f87e7/index.html",
    "revision": "6d853eb066db169445e1d76b474f17de"
  },
  {
    "url": "pages/f160b2c4eda0e/index.html",
    "revision": "475c858a28ec6fabf169f3e17cceb6a6"
  },
  {
    "url": "pages/f16531008c5a4/index.html",
    "revision": "79d2a16136d10be5c1ff24ccd5ee8995"
  },
  {
    "url": "pages/f3a3b251e1984/index.html",
    "revision": "1f8e1513cd1b33d3ef805f3dff377547"
  },
  {
    "url": "pages/f593514e1a9d6/index.html",
    "revision": "e5da0165cd30fa608d531e4b1a4610d0"
  },
  {
    "url": "pages/f6fd0267078de/index.html",
    "revision": "910b8d9efbe99f3baf31f8728518ab03"
  },
  {
    "url": "pages/f83fb19d191d9/index.html",
    "revision": "7deb78bc36048d48914f0587b1595432"
  },
  {
    "url": "pages/fe8b749eac6ac/index.html",
    "revision": "b32b829268fd3aa672e21aaa7ec6907e"
  },
  {
    "url": "resource-tools/44207a5ef0a8a/index.html",
    "revision": "878a14a6f843ef806e6951e051efd21b"
  },
  {
    "url": "resource-tools/4c19c32335465/index.html",
    "revision": "9d49bcac379f1ea6f754176a5c00e477"
  },
  {
    "url": "resource-tools/5f440c9bb4359/index.html",
    "revision": "282450e08a2d21a674c8dc77ea5ea6dd"
  },
  {
    "url": "resource-tools/7566c0ff5a24c/index.html",
    "revision": "4918b87d67fee621c17ed35758885bd0"
  },
  {
    "url": "resource-tools/8396c1c08f1b6/index.html",
    "revision": "94f40db09e981c340392d18176e67d6e"
  },
  {
    "url": "resource-tools/9d5d91d08c126/index.html",
    "revision": "d72be49674953de20a3584d0cbb1a821"
  },
  {
    "url": "resource-tools/c618db4b32e39/index.html",
    "revision": "21501e47b2776e67bde62438aaad1c51"
  },
  {
    "url": "resource-tools/c9e44ab0fce9a/index.html",
    "revision": "579052974cf5fbb8cfb03196903adc96"
  },
  {
    "url": "resource-tools/ed602e9a815f6/index.html",
    "revision": "c04df371161ebb74f5a6c299910ae5ac"
  },
  {
    "url": "study/css/reset.css",
    "revision": "c8df9e9e48e86c4fcd3972a0111e46fc"
  },
  {
    "url": "study/index.html",
    "revision": "e47cfce58f5ad15967cd6f570c00b9a5"
  },
  {
    "url": "study/precache-manifest.05b24b6636bd972f0f436263abc9dea0.js",
    "revision": "05b24b6636bd972f0f436263abc9dea0"
  },
  {
    "url": "study/static/css/2.8f6577cd.chunk.css",
    "revision": "8aacd14455dd3a1064dca30097202e31"
  },
  {
    "url": "study/static/css/main.61320533.chunk.css",
    "revision": "0ff1be3b98657889bb1d1ba0da308239"
  },
  {
    "url": "study/static/js/main.f022aa25.chunk.js",
    "revision": "3a155967cd4f04f1d021d96afdef5e1b"
  },
  {
    "url": "study/static/js/runtime-main.3725ae0b.js",
    "revision": "371fc4c0b43299ae7ad805c2e21ff81d"
  },
  {
    "url": "study/static/media/404.9161e238.png",
    "revision": "9161e238b798c444b732dbbb7420a09e"
  },
  {
    "url": "study/static/media/logo.421642f8.png",
    "revision": "421642f8c4c77139f133d7d1ec05168c"
  },
  {
    "url": "tags/index.html",
    "revision": "4a16b3d70ed71b09401d91d45938c8c9"
  },
  {
    "url": "vue-iframe-print/css/app.80764a13.css",
    "revision": "41670c952da5bab26acafc6186da19b0"
  },
  {
    "url": "vue-iframe-print/index.html",
    "revision": "96237c9fbc239de1496d1c1e8c36d7b9"
  },
  {
    "url": "vue-iframe-print/js/app.47469697.js",
    "revision": "254b0b873897c7cf693642569a0b2413"
  },
  {
    "url": "vue-iframe-print/js/chunk-vendors.4f44ce85.js",
    "revision": "5d2e1c01d27e71fb2895708d03590996"
  },
  {
    "url": "web/git/f85d0c838f3f3/index.html",
    "revision": "b0aab2c28712b043f42a56a6c15a95a6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
