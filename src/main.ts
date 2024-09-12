// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

/**

 * @git工具设置
 * --设置全局用户名：git config --global user.name "Your Name"
 * --设置全局邮箱：git config --global user.email "your_email@example.com"
   */

/**

 * @git代码到github
 * 方法一：
 * --利用vscode功能实现
 * 方法二：
 * --初始化本地仓库：git init
 * --添加GitHub远程仓库地址：git remote add origin https://github.com/yourusername/yourrepository.git
 * --添加文件到暂存区：git add .
 * --提交更改：git commit -m "这里输入描述语"
 * --将更改推送到GitHub：git push -u origin main
   */

/**

 * @分支操作
 * --使用git branch命令创建新分支，例如：git branch new-branch-name
 * --使用git checkout命令切换到新分支，例如：git checkout new-branch-name
 * --删除本地分支：git branch -d branch_name
 * 如果分支没有被合并并且有未被提交的更改，使用 -D 代替 -d 强制删除。
 * --删除远程分支：git push origin --delete branch_name
 * 或者，你也可以直接在GitHub的网页界面上删除分支：打开GitHub仓库页面。
 * 点击“Branches”菜单找到要删除的分支，在分支旁边点击“Delete”按钮。
   */

/**
 * @版本管理
 * 要在GitHub上将main分支回退到某个版本，你可以按照以下步骤操作：
 * --找到你想要回退到的那个提交的commit hash。你可以在GitHub的提交历史中找到这个hash。
 * --打开终端或命令行界面。
 * --克隆你的仓库（如果你还没有克隆的话）
 * --检出你想要回退到的那个提交：git checkout commit_hash
 * --强制推送当前分支到远程仓库的main分支：git push origin commit_hash:main --force
 * 请注意，强制推送会重写远程仓库的历史，这可能会影响其他协作者的工作。
 * 在执行这些操作之前，请确保这是你想要的，并且已经通知了所有协作者。
 */

/**
 * @删除git
 * 在Windows 10中删除项目中的Git，你可以按照以下步骤操作：
 * --打开命令提示符或PowerShell。
 * --使用cd命令导航到你的项目目录。
 * --执行git rm -r --cached .以删除.git文件夹中的所有内容，但保留项目文件。
 * --执行del /Q /F .git\*来删除.git文件夹中的所有文件。
 * --最后，执行rmdir /S /Q .git来删除.git文件夹。
 */
