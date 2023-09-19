# Git

## github pull request

### 1.fork主仓库

### 2.fork后的仓库克隆到你的电脑

### 3.创建功能/特性分支

```zsh
git checkout -b fix-issue
```

### 4.将特性分支推到你fork的仓库

```zsh
git push origin fix-issue
```

### 5.针对主仓库提出Pull Request（PR）

### 6.处理评论并合并PR

### 7.将主存储库作为上游添加到克隆仓库中

```zsh
git remote add upstream git@github.com:google/guava.git
```

使用以下命令验证上游设置是否正确：

```zsh
git remote -v
```

它应该显示以下值，以确认源和上游指向正确的仓库：

```zsh
origin      <git@github.com>:theawesomenayak/guava.git (fetch)
origin      <git@github.com>:theawesomenayak/guava.git (push)
upstream    <git@github.com>:google/guava.git (fetch)
upstream    <git@github.com>:google/guava.git (push)
```

### 8.从上游更新你的master分支

```zsh
git pull upstream master
```

### 9.将主分支push到你的fork仓库

```zsh
git push origin master
```

### （可选）删除特性分支

特性合并到主仓库后，便不再需要它，可以将其删除：

```zsh
git branch -d fix-issue
```

你还可以从fork的仓库中删除远程分支：

```zsh
git push origin --delete fix-issue
```
