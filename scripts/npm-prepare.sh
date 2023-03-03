#!/bin/bash
if [[ $NODE_ENV != 'production' ]]
then
  husky install
fi