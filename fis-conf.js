//基本配置
fis.set('project.charset', 'gbk');

fis.set('project.ignore', [
    'output/**',
    'node_modules/**',
    'test/**',
    '.git/**',
    '.svn/**'
]);

//文件属性配置（http://fis.baidu.com/fis3/docs/api/config-props.html）

fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});


fis.match('*', {
  useHash: false
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});


fis.match('*.sass', {
    parser: fis.plugin('node-sass'), //启用fis-parser-node-sass插件
    rExt: '.css'
});



// fis.match('*.{png,js,css}', {
//     release: '/static/$0'
// });


// // optimize
// fis.media('deploy')
//     .match('*.js', {
//         optimizer: fis.plugin('uglify-js', {
//             mangle: {
//                 expect: ['require', 'define', 'some string'] //不想被压的
//             }
//         })
//     })
//     .match('*.css', {
//         optimizer: fis.plugin('clean-css', {
//             'keepBreaks': true //保持一个规则一个换行
//         })
//     });
//
//
// // pack
// fis.media('prod')
// // 启用打包插件，必须匹配 ::package
//     .match('::package', {
//         packager: fis.plugin('map'),
//         spriter: fis.plugin('csssprites', {
//             layout: 'matrix',
//             margin: '15'
//         })
//     })
//     .match('*.js', {
//         packTo: '/static/all_others.js'
//     })
//     .match('*.css', {
//         packTo: '/staitc/all_others.css'
//     })
//     .match('/widget/**/*.js', {
//         packTo: '/static/all_comp.js'
//     })
//     .match('/widget/**/*.css', {
//         packTo: '/static/all_comp.css'
//     });
// fis.media('debug').match('*.{js,css,png}', {
//     useHash: false,
//     useSprite: false,
//     optimizer: null
// })

// fis.media('qa').match('**', {
//     deploy:  fis.plugin('http-push', {
//         receiver: 'http:///receiver.php',
//         to: '/home/work/www'
//     })
// });
// fis3 release qa 当执行时就会部署到配置的 qa 的机器上。


// fis.match('*.inline.css', {
//     // 设置 release 为 FALSE，不再产出此文件
//     release: false
// })

