#!/bin/bash

# This is terminal version of blablo - opinionated terminal logger for node
#
# Import it in your bash or makefile script
# source ./blablo.sh
#
# When you need to chain log in a single string, start with "log", continue with "chainLog".
# And "finish" when you want to start new line.
#
# Example usage:
#
# blablo.log "This is a log message"
# blablo.chainLog "chain1"
# blablo.chainLog "chain2"
# sleep 4
# blablo.finish
# blablo.cleanLog "Clean log"

BLABLO_LBLUE1='\033[38;5;123m'
BLABLO_NC='\033[0m' # No Color

declare -a blablo
declare -a blabloArgsQueue=()

blablo.log() {
    if [[ ${#blabloArgsQueue[@]} -gt 0 ]]; then
        # Check whether it is a new log or an update
        currPayload="${blabloArgsQueue[*]}"
        nextPayload="${*}"

        if [[ "${currPayload:0:40}" != "${nextPayload:0:40}" ]]; then
          blablo.finish
          return 0
        fi
    fi

    blabloArgsQueue=("⏳" "$@")
    printf "${blabloArgsQueue[*]}"

    return 0
}

blablo.cleanLog() {
    printf "${*}\n"
    return 0
}

# Params
# ${1} - text to chain log
# ${2} - (0|1) to show the chain connector or not, default "1"
blablo.chainLog() {
    toShowChainConnector="${2:-1}"

    if [ "$toShowChainConnector" -eq 0 ]; then
      blabloArgsQueue+=("${1}")
    else
      chainConnector="${BLABLO_LBLUE1}❱${BLABLO_NC}"
      blabloArgsQueue+=("${chainConnector}" "${1}")
    fi

    printf "\r${blabloArgsQueue[*]}"

    return 0
}

# Params
# ${1} - (0|1) - 0 - success status icon(default), 1 - error icon
blablo.finish() {
    statusIconType="${1:-0}"

    blabloArgsQueue[0]="\033[1;32m ✔\033[0m"

    if [ "$statusIconType" -eq 1 ]; then
      blabloArgsQueue[0]="\033[38;5;196m ⨯\033[0m"
    fi

    printf "\r${blabloArgsQueue[*]}\n"

    blabloArgsQueue=()
    return 0
}

export blablo