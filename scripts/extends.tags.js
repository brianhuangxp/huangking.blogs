'use strict';

hexo.extend.tag.register('embed', function(args, content){
    let src = args[0].startsWith("http") || args[0].startsWith("/") ? args[0] : `/assets/${args[0]}`;
    let width = args[1] || '100%';
    let height = args[2] || 'auto';
    return `<embed src="${src}" width="${width}" height="${height}"></embed>`;
});