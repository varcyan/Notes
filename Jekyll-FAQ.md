# Jekyll 运行时遇到的问题

### plugins 和 gems

**描述**

```
Deprecation: The 'gems' configuration option has been renamed to 'plugins'. Plea
se update your config file accordingly.
```

**解决：**把 _config.yml 里的 gems 替换成 plugins 即可。（在提交github时需要换成 gems）\

### tzinfo

**描述**

```
no tzinfo ...
```

**解决：**安装tzinfo-data

```
gem install "tzinfo-data"
```

### jekyll-seo-tag 等依赖

**描述：**

```
Dependency Error: Yikes! It looks like you don't have jekyll-seo-tag or one of its dependencies installed. In order to use Jekyll a
s currently configured, you'll need to install this gem. The full error message from Ruby is: 'cannot load such file -- jekyll-seo-ta
g' If you run into trouble, you can find helpful resources at https://jekyllrb.com/help/!
```

**解决：**

```
gem install "jekyll-seo-tag"
```

