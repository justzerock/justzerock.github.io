---
title: git子模块：git submodule
abbrlink: 80f3
date: 2019-11-16 18:59:52
tags:
  - git
---

### 1.添加子模块

进入 `hexo` 目录，使用 `git submodule add` 添加子模块：
```` bash
git clone https://github.com/justzerock/project.git
cd hexo
git submodule add https://github.com/justzerock/subproject.git
````