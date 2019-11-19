---
title: 同步复刻
abbrlink: ca2a
date: 2019-11-19 22:44:59
tags:
  - git
  - fork
description: 同步仓库的复刻以通过上游仓库使其保持最新。
---

内容来自 [GitHub](https://help.github.com/articles/syncing-a-fork)

> 必须在 Git 中[配置指向上游仓库的远程仓库](/posts/a567.html)，然后才能将您的复刻与上游仓库同步。

### 打开 Terminal（终端）。

### 将当前工作目录更改为您的本地仓库。

### 从上游仓库获取分支及其各自的提交。 对 `master` 的提交将存储在本地分支 `upstream/master` 中。
````bash
$ git fetch upstream
> remote: Counting objects: 75, done.
> remote: Compressing objects: 100% (53/53), done.
> remote: Total 62 (delta 27), reused 44 (delta 9)
> Unpacking objects: 100% (62/62), done.
> From https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY>  ### [new branch]      master     -> upstream/master
````

### 检出复刻的本地 `master` 分支。
````bash
$ git checkout master
> Switched to branch 'master'
````

### 将来自 `upstream/master` 的更改合并到本地 `master` 分支中。 这会使复刻的 `master` 分支与上游仓库同步，而不会丢失本地更改。
````bash
$ git merge upstream/master
> Updating a422352..5fdff0f
> Fast-forward
>  README                    |    9 -------
>  README.md                 |    7 ++++++
>  2 files changed, 7 insertions(+), 9 deletions(-)
>  delete mode 100644 README
>  create mode 100644 README.md
````
  如果您的本地分支没有任何唯一的提交，则Git将执行 `fast-forward`：
````bash
$ git merge upstream/master
> Updating 34e91da..16c56ad
> Fast-forward
>  README.md                 |    5 +++--
>  1 file changed, 3 insertions(+), 2 deletions(-)
````

> 提示：同步复刻仅更新仓库的本地副本。 要在 GitHub 上更新复刻，您必须推送更改。
