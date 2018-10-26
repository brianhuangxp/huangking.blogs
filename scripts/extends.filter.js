'use strict';
const hexoUtils = require("./utils");

hexo.extend.filter.register('before_post_render', function(data){
    data.content = hexoUtils.contentReplace(data.content);

    return data;
});
