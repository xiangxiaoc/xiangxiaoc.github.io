#!/bin/bash

npm run docs:build

# OSSUTIL_PATH: 本地 ossutil 命令的路径
# BUCKET_NAME: OSS桶名称
"${OSSUTIL_PATH}" sync ./src/.vuepress/dist "oss://${BUCKET_NAME}" --delete -f