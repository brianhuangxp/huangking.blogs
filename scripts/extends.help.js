'use strict';
hexo.extend.helper.register('get_setting', function (...keys) {
    let result = keys.reduce((p, key) => (p || this.config[key] || this.theme[key]), void 0);
    return hexo.hexoUtils.contentReplace(result);
});

hexo.extend.helper.register('join', function (...args) {
    let result = args.join("");
    return hexo.hexoUtils.contentReplace(result);
});

hexo.extend.helper.register('latest_post', function (len = 4) {
    const getTime = date => (new Date(this.date_xml(date))).getTime();

    let posts = this.site.posts.data
        .sort((first, next) => getTime(next.date) - getTime(first.date))
        .slice(0, len);

    return `
        <ul class="block-list latest-post-list">
            ${ posts.reduce((p, post) => {
                let mini;
                if(post.coverIframe) {
                    let coverIrame = hexo.hexoUtils.contentReplace(post.coverIframe);
                    mini = `<iframe width="100%" src="${coverIrame}" frameborder="0" allowfullscreen=""></iframe>`
                } else {
                    mini = `<img src="${ hexo.hexoUtils.contentReplace(post.cover || hexo.config.default_cover)}" alt="${ post.title }" />`;
                }
        return p + `
                    <li class="latest-post-item">
                        <a href="${ this.url_for(post.path) }" title="${ post.title }">
                            <div class="item__cover">
                                ${mini}
                            </div>
                            <div class="item__info">
                                <h3 class="item__title">${ post.title }</h3>
                                <span class="item__text">${ this.date(post.date) }</span>
                            </div>
                        </a>
                    </li>
                `;
    }, '') }
        </ul>
    `;
});