build: node_modules
	node build

node_modules: package.json
	npm install

serve: piecies
	node serve

.PHONY: build
