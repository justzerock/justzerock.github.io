---
title: 为复刻配置远程仓库
abbrlink: a567
date: 2019-11-19 23:12:53
tags:
  - git
  - fork
description: 必须在 Git 中配置指向上游仓库的远程仓库，才能将您在复刻中所做的更改同步 到原始仓库。 这也允许您将在原始仓库中所做的更改同步到复刻中。
---
内容来自 [GitHub](https://help.github.com/cn/articles/configuring-a-remote-for-a-fork)

> 必须在 Git 中配置指向上游仓库的远程仓库，才能[将您在复刻中所做的更改同步](/posts/ca2a.html) 到原始仓库。 这也允许您将在原始仓库中所做的更改同步到复刻中。

### 打开 Terminal（终端）。

### 列出当前为复刻配置的远程仓库。
````bash
$ git remote -v
> origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
> origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
````

### 指定将与复刻同步的新远程上游仓库。
````bash
$ git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
````

### 验证为复刻指定的新上游仓库。
````bash
$ git remote -v
> origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
> origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
> upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
> upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
````
