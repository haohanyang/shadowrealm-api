timeout 10s test262-harness --hostType=chrome --hostPath=$(find .cache -type f -name "chrome-headless-shell") --prelude=test/helpers.js --prelude=dist/polyfill.js --transformer=test/transformer.js --test262Dir=test/test262 --error-for-failures test/test262/test/built-ins/ShadowRealm/**/*.js
if [ $? -eq 124 ]
then
  echo "ok"
else
  exit 1
fi