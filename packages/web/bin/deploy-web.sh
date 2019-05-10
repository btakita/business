#!/bin/sh
pushd packages/web
npm run export
cp now.json __sapper__/export
now deploy __sapper__/export
popd