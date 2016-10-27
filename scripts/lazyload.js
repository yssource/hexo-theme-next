// 'use strict';
// var cheerio = require('cheerio');
// // var cdnUrl = "http://ofjaqrxxj.bkt.clouddn.com";
// var cdnUrl = '';
// var loading = '/images/loading.gif';
// var oldsrc = '';
// // var baseUrl = cdnUrl;
// var baseUrl = 'x';
// function stringStartsWith(string, prefix) {
//   return string.slice(0, prefix.length) == prefix;
// }
// function lazyloadImg(source) {
//   var $ = cheerio.load(source, {
//     decodeEntities: false
//   });
//   $('img').each(function(index, element) {
//     oldsrc = $(element).attr('src');
//     if (oldsrc && !stringStartsWith(oldsrc, baseUrl) && !$(element).hasClass('hx_lazyimg') && !$(element).hasClass('skip')) {
//       debugger;
//       $(element).addClass('hx_lazyimg');
//       $(element).attr({
//         src: loading,
//         'data-original': cdnUrl + oldsrc
//       });
//       console.log(`src -------- $(element).attr('src')`);
//     }
//   });
//   return $.html();
// }
// hexo.extend.filter.register('after_render:html', lazyloadImg);
