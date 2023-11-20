---
to: packages/<%= name %>/package.json
---
{
	"name": "@rn-solito-test/<%= name %>",
	"version": "0.0.0",
	"main": "index.ts",
	"scripts": {
		"typecheck": "tsc --noEmit"
	}
}