build: node_modules
	node build

node_modules: package.json
	npm install

serve: pieces
	node serve

.PHONY: build
