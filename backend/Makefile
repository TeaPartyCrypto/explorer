run:
	@KO_DATA_PATH=cmd/kodata/ go run cmd/main.go

build:
	@cd ../ && yarn && yarn build
	@cd ../ && rm -rf backend/cmd/kodata  &&  mv dist kodata && mv kodata backend/cmd/kodata 

debug:
	@make build
	@make run

image:
	@docker build -t imaybeagod/tea . && docker push imaybeagod/tea