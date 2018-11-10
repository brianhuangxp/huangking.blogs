'use strict';

hexo.hexoUtils = {};

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
    let version = commonParametersFilter.siteVersion + "." + (new Date()).getTime();
    content = content.replace(new RegExp(`@{version}`, "igm"), version);
    return content;
};
