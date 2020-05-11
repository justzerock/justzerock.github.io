#!/bin/bash
# 判断public文件夹是否存在
hugoPath=`pwd`
publicPath=`pwd`"/public"
if [ ! -d $publicPath ];then
  echo public not exist
  exit
fi

# 进入public文件夹，并清空之前生成文件
cd $publicPath
rm -r ./*

# 回到根目录，并生成新的静态文件
cd $hugoPath
hugo

# 回到public，并进行提交
cd $publicPath

# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master

cd $hugoPath

git add .

git commit -m "update"

git push origin hugo
