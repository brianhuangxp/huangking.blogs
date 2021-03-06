<article itemscope itemtype="http://schema.org/Article" class="page__mini-article">
    <div class="mini-article__cover">
        {% if post.coverIframe %}
            <iframe width="100%" src="{{ join(post.coverIframe)}}" frameborder="0" allowfullscreen=""></iframe>
        {% elseif not post.cover %}
            <img itemprop="image" src="{{ get_setting('default_cover') }}" alt="{{ post.title }}"/>
        {% else %}
            <img itemprop="image" src="{{ join(post.cover) }}" style="{{ post.miniStyle }}" alt="{{ post.title }}"/>
        {% endif %}

        <div itemprop="datePublished" content="{{ data_xml(post.date || post.update) }}" class="mini-article__date">
            <span class="date__day">{{ date(post.date || post.update, 'D') }}</span>
            {% if config.language == 'zh-cn' %}
                <span class="date__month">{{ date(post.date || post.update, 'MMMM') }}</span>
            {% else %}
                <span class="date__month">{{ date(post.date || post.update, 'MMM') }}</span>
            {% endif %}
        </div>
        <a itemprop="url" class="iconfont icon-enter" href="{{ url_for(post.path) }}"></a>
    </div>
    <div class="mini-article__info">
        <h3 itemprop="name" class="mini-article__title">
            <a itemprop="url" href="{{ url_for(post.path) }}" title="{{ post.title }}">{{ post.title }}</a>
        </h3>
        <p class="mini-article__author">by 
            <span itemprop="author" itemscope itemtype="http://schema.org/Person">
                {% if post.author.link %}
                    <a itemprop="url" href="{{ post.author.link }}" target="_blank">
                        <span itemprop="name">{{ titlecase(post.author.nick|default(get_setting('author'))) }}</span>
                    </a>
                {% else %}
                    <span itemprop="name">{{ titlecase(post.author.nick|default(get_setting('author'))) }}</span>
                {% endif %}
            </span>
        </p>
        <p itemprop="articleSection" class="min-article__desc">
            {{ post.subtitle }}
        </p>
        <div class="min-article__tags">
            <i class="iconfont icon-tab"></i>
            <ul class="tags__list clearfix">
                {% for tag in post.tags %}
                    <li class="tags__item">
                        <a href="{{ url_for(tag.path) }}">{{ tag.name }}</a>
                    </li>
                {% endfor %}
            </ul>
        </div>
    </div>
</article>
