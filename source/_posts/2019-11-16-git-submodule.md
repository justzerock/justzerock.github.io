---
title: git子模块：git submodule
abbrlink: 80f3
date: 2019-11-16 18:59:52
description: 在一个 GitHub 仓库中添加另一个 GitHub 仓库， 使用 Git 的 git submodule 命令
tags:
  - git
  - submodule
---

### 添加子模块

进入 `project` 目录，使用 `git submodule add` 添加子模块：
```` bash
git clone https://github.com/justzerock/project.git
cd project
git submodule add https://github.com/justzerock/subproject.git
````

### 更新子模块

更新 `subproject` ：
```` bash
cd subproject
git fetch
git merge origin/master
````
