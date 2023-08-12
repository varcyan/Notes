清除某个文件的所有记录

```
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch vue/learn-vue/package-lock.json' --prune-empty --tag-name-filter cat -- --all
```

提交远程

```
git push origin --force --all
```
