In a makefile:

````
test-typings:
 	if [ ! -f $(BIN)/tsc ]; then npm install typescript; fi
 	$(BIN)/tsc --noEmit --noImplicitAny src/__tests__/typescript-typings-test.ts
 
 ```

 See [here](https://github.com/acdlite/redux-actions/pull/85/files)