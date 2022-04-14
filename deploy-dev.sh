#!/bin/bash

rsync -avzh  ./dist/*  centos@35.222.204.160:/opt/webeye/sandman-admin-ui/dist
