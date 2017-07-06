```
# 克隆
git clone http://...
# 进入文件夹 （master）
cd test
# 查看分支
git branch -a
# 新建并切换到分支develop
git checkout -b develop
# 拉取分支内容（发现没有跟远程分支连接）
git pull
# 连接本地和远程分支
git branch --set-upstream-to=origin/<branch> develop
# 拉取远程分支的变化
git pull origin develop

# 合并分支的时候
# dev 分支上提交变化
git commit -a -m '备注'
# 切换到要合并的分支
git checkout master
# 合并分支前先拉取
git pull
# 合并
git merge dev
# 推送至远程仓库
git push origin master
```