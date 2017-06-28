# git

1. 注册账户

2. 安装客户端 `msysgit`

3. 创建本地 `ssh key`

   ```shell
   $ ssh-keygen -t rsa -C 'your_email@youremail.com'  //引号里面输入你的邮箱
   ```

   之后会要求确认路径和输入密码，我们这使用默认的一路回车就行。成功的话会在~/下生成`.ssh`文件夹，进去，打开`id_rsa.pub`，复制里面的`key`。  

   回到github，进入Account Settings，左边选择SSH Keys，Add SSH Key,title随便填，粘贴key。    为了验证是否成功，在`git bash`下输入：

   ```shell
   $ ssh -T git@github.com
   ```

   如果是第一次的会提示是否continue，输入yes就会看到：You’ve successfully authenticated, but GitHub does not provide shell access 。这就表示已成功连上github。

4. 设置username和 email

   ```shell
   $ git config --global user.name "your name"
   $ git config --global user.email "your_email@youremail.com"
   ```

5. 创建一个远程仓库

6. 建立本地库  

   进入文件夹，`git init`

7. 绑定本地库和远程库

   ```shell
   $ git remote add origin git@github.com:你的用户名/cyan.git
   ```

8. 从远程库上更新本地库数据 

   ```
   $ git pull origin master
   ```

9. 将本地新数据提交到远程库

   ```shell
   $ git status
   $ git add .
   $ git commit -m "备注"
   $ git push origin master
   ```

   ​

   ​

   ​