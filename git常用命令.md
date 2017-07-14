## 分支

```
git branch -a	// 查看所有分支
git branch -r	// 查看远程分支
git checkout dev	// 切换到dev分支
git checkout -b dev	// 新建并切换到dev分支
git branch -d dev	// 删除dev分支
git merge branch-name	// 指定分支合并至当前分支
```

## 提交

```
git add .	// 提交工作区变化到暂存区
git commit -m ""	// 提交暂存区变化到本能版本库
git push origin master	// 更新版本至远程仓库
```

## 获取

```
git pull origin master	// 从远程版本库更新本地工作区内容
git clone #地址	// 克隆项目
```

## 封存

```
git stash	// 把当前内容封存起来（不想提交的i情况下）
git stash pop	// 解封出来并删除stash的内容
git stash apply	// 解封但保留stash的内容
git stash list	// 查看封印的内容列表
git stash apply stash{0}	// 恢复制定的stash内容
```

## 版本

```
git reset --hard HEAD^	// 回到上一个版本
git reset --hard 2df098e	// 回到某一个版本
git reflog	// 查看之前所有的版本
```

## 建立连接

```
git branch --set-upstream branch-name origin/branch-name
```

