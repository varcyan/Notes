# 安装 jekyll

## 安装 Ruby

jekyll是基于ruby的，因此在安装jekyll之前得首先要安装ruby。

1. [下载](https://rubyinstaller.org/downloads/) Ruby

2. 安装时勾选 Add Ruby executables to your PATH

3. 测试是否安装成功，cmd中输入

   ```powershell
   ruby -v
   ```

   返回相应的版本号即安装成功。

## 安装 DevKit

1. [下载](https://rubyinstaller.org/downloads/) DevKit

2. 初始化 devkit 并将其绑定到 Ruby 安装。打开命令行工具，到 RubyDevKit 文件夹下。

   ```powershell
   # 进入文件夹
   cd RubyDevKit
   # init
   ruby dk.rb init
   # install
   ruby dk.rb install
   ```

## 设置镜像

尽可能使用比较新的 RubyGems 版本，建议2.6.x以上(参考[http://gems.ruby-china.org/](http://gems.ruby-china.org/))

```
$ gem update --system # 这里请翻墙下
$ gem -v
2.6.12
```

```
$ gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/
$ gem sources -l
https://gems.ruby-china.org
# 确保只有 gems.ruby-china.org
```

### FAQ

- 如果遇到 SSL 证书问题，你又无法解决，请直接用 `http://gems.ruby-china.org` 避免 SSL 的问题。

## 安装 jekyll

命令行输入

```
gem install jekyll
```

测试安装是否成功

```
jekyll -v
```

