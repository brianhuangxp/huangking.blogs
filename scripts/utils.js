'use strict';

function contentReplace(content) {
    if (content === undefined || typeof content.search !== 'function' || content.search(/@{.*}/g) == -1) {
        return content;
    }

    let commonParametersFilter = hexo.config.commonParametersFilter || {};
    for (let groupKey in commonParametersFilter) {
        let group = commonParametersFilter[groupKey];
        for (let key in group) {
            content = content.replace(new RegExp(`@{${key}}`, "gm"), group[key]);
        }
    }
    return content;
}

let utils = {
    contentReplace: contentReplace
};



module.exports = utils;