SHELL=/bin/bash
RED=\033[0;31m
GREEN=\033[0;32m
BG_GREY=\033[48;5;237m
YELLOW=\033[38;5;202m
NC=\033[0m # No Color
BOLD_ON=\033[1m
BOLD_OFF=\033[21m
CLEAR=\033[2J

include project.env
export $(shell sed 's/=.*//' project.env)

.PHONY: help

help:
	@echo "rnd-llama-index" automation commands:
	@echo
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(firstword $(MAKEFILE_LIST)) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

check-project-env-vars:
	@bash ./.devops/local/scripts/check-project-env-vars.sh

# make run file=./src/starter.py
run: ## Running single file with option: file=<path-to-file.ts> 
	@printf "${BG_GREY}[run: ${file}] Start${NC}\n"
	@python ${file}
	@printf "${BG_GREY}[run: ${file}] DONE${NC}\n"

run-chroma: ## run chroma
	@python ./src/starter-chroma.py

activate-venv: ## activate-venv
	source ./.venv/bin/activate

deactivate-venv: ## deactivate-venv
	source ./.venv/bin/deactivate
