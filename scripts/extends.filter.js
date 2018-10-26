'use strict';
hexo.extend.filter.register('before_post_render', function(data){
    data.content = hexo.hexoUtils.contentReplace(data.content, hexo.config.commonParametersFilter);

    return data;
});
