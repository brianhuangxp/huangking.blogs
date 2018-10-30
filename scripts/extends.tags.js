let request = require('sync-request');
let htmlEncode = require('js-htmlencode');

hexo.extend.tag.register('embed', function (args, content) {
    let src = args[0].startsWith("http") || args[0].startsWith("/") ? args[0] : `/assets/${args[0]}`;
    let width = args[1] || '100%';
    let height = args[2] || 'auto';
    return `<embed src="${src}" width="${width}" height="${height}"></embed>`;
});

hexo.extend.tag.register('join', function (...args) {
    let result = args.join("");
    return hexo.hexoUtils.contentReplace(result);
});


hexo.extend.tag.register('requestInclude', function (args) {
    let url = args[0];

    let content;
    try{
        var res = request('GET', url);
        content = res.getBody("utf-8");
        content = htmlEncode.htmlEncode(content);
    }catch (e) {
        content = `Fetch URL(${url}) fail.<br>Error:${e}`;
    }

    return `<blockquote style="overflow: auto;"><pre>${content}</pre></blockquote>`;
});
