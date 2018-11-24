'use strict';

hexo.hexoUtils = {};

hexo.hexoUtils.getVersion = function() {
    if(this.hasOwnProperty('version')) {
        return this.version;
    }
    let commonParametersFilter = hexo.config.commonParametersFilter || {};
    this.version = commonParametersFilter.siteVersion + "." + (new Date()).getTime();
    return this.version;
};

hexo.hexoUtils.contentReplace = function (content) {
    if (content === undefined || typeof content.search !== 'function' || content.search(/@{.*}/g) == -1) {
        return content;
    }

    let commonParametersFilter = hexo.config.commonParametersFilter || {};
    for (let groupKey in commonParametersFilter) {
        let group = commonParametersFilter[groupKey];
        for (let key in group) {
            content = content.replace(new RegExp(`@{${key}}`, "igm"), group[key]);
        }
    }
    content = content.replace(new RegExp(`@{version}`, "igm"), hexo.hexoUtils.getVersion());
    return content;
};
