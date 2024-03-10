#!/usr/bin/env bash
scriptDir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$scriptDir/blablo.sh"
source "$scriptDir/checkProjectEnvFile.sh"

BLUE='\033[0;34m'
LBLUE='\033[1;36m'
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW=$(tput setaf 3)
CYAN1='\033[38;5;51m'
NC='\033[0m' # No Color

projectEnvFile=${1:-'project.env.dist'}

function checkVar () {
    blablo.log "${CYAN1}$1${NC}";

    eval value='$'$1

    if [ -z "$value" ]
    then
        blablo.chainLog "${RED}[NOT FOUND]${NC}" 0
        blablo.finish 1
        return 1
    else
        blablo.chainLog "= $value" 0
        blablo.chainLog "${GREEN}[OK]${NC}" 0
        blablo.finish
        return 0
    fi
}

blablo.cleanLog "🎯 Check ${CYAN1}'project.env'${NC} vars"
checkProjectEnvFile $projectEnvFile
res=$?
if [ "$res" -eq 1 ]; then
  exit 1
fi

varsToCheck=($(grep -E -o '^[^#]+=' "$projectEnvFile" | sed 's/=.*//' | grep -v "^\s*$"))

blablo.cleanLog "";
for var in "${varsToCheck[@]}"; do
  checkVar "$var"
done

blablo.cleanLog "";
blablo.cleanLog "🎯 Check completed ✨";