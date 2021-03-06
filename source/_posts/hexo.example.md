---
title: Hexo tags example
subtitle: Hexo标签汇总
date: 2018-08-20
cover: '@{qiNiu}/post/markdown-example.jpg?v=@{version}'
coverShow: true
coverStyle: max-height:300px;object-fit:contain;
miniStyle: height:100%;
tags: [hexo, hexo-tag]
author: 
  nick: brian
  link: https://brianhuangxp.github.io
categories: hexo
---
本文汇总Hexo官方以及自定义标签
# 官方支持标签
## Block Quote
### Interface
```
{% blockquote [author[, source]] [link] [source_link_title] %}
content
{% endblockquote %}
```
### Example

#### 标准
```
{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}
```
{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}

#### 引用来着一本书
```
{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}
```
{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

#### 引用来着Twitter
```
{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}
```
{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

## Code Block
### Interface
```
{% codeblock [title] [lang:language] [url] [link text] %}
code snippet
{% endcodeblock %}
```
### Example

#### 标准
```
{% codeblock %}
alert('Hello World!');
{% endcodeblock %}
```
{% codeblock %}
alert('Hello World!');
{% endcodeblock %}

#### 带title和url
```
{% codeblock Array.map https://hexo.io/docs/tag-plugins.html#Code-Block Code-Block%}
array.map(callback[, thisArg])
{% endcodeblock %}
```

{% codeblock Array.map https://hexo.io/docs/tag-plugins.html#Code-Block Code-Block%}
array.map(callback[, thisArg])
{% endcodeblock %}

>```js title https://hexo.io/docs/tag-plugins.html#Code-Block Code-Block
>1
>```

```js title https://hexo.io/docs/tag-plugins.html#Code-Block Code-Block
1
```


## iframe
```
{% iframe url [width] [height] %}
```
{% iframe http://www.baidu.com 100% 50px%}

## Image

```
{% img [class names] /path/to/image [width] [height] [title text [alt text]] %}
```

{% img //www.baidu.com/img/baidu_jgylogo3.gif title%}

## Link
```
{% link text url [external] [title] %}
```
{% link 百度 http://www.baidu.com 百度title %}

## Include Code
```
本站代码导入，外站see #requestInclude
{% include_code [title] [lang:language] path/to/file %}
```
{% include_code title example.txt %}

![alt](//www.baidu.com/img/baidu_jgylogo3.gif)

# 自定义标签

## embed
```
{%embed src [width] [height]%}
```

```
{%embed swf/xfish.swf%}
or
{%embed /assets/swf/xfish.swf 100% auto%}
or
{%embed http://xxxxx/assets/swf/xfish.swf%}
or
{%embed //xxxxx/assets/swf/xfish.swf%}
```

{%embed swf/xfish.swf%}

## requestInclude
```
类似include_code, 允许有效的https站点
例如 导入百度首页html
{% requestInclude https://brianhuangxp.github.io/downloads/code/example.txt%}
```
{% requestInclude https://brianhuangxp.github.io/downloads/code/example.txt%}

# 自定义filter

```
before_post_render filter
@{xxx} 将被替换。其中xxxx：为_config.yml的commonParametersFilter key替换为value

例如
@{qiNiu}/image/blog-bg.jpg
```
过滤后: @{qiNiu}/image/blog-bg.jpg?v=@{version}
![test image](@{qiNiu}/image/blog-bg.jpg?v=@{version})