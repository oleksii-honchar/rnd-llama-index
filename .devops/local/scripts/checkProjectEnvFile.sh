#!/bin/bash
scriptDir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$scriptDir/blablo.sh"

CPEF_RED='\033[38;5;196m'
CPEF_YELLOW='\033[38;5;226m'
CPEF_CYAN1='\033[38;5;51m'
CPEF_NC='\033[0m' # No Color
CPEF_BOLD_ON='\033[1m'
CPEF_BOLD_OFF='\033[22m'
CPEF_NC='\033[0m' # No Color

function checkProjectEnvFile () {
  projectEnvFile="${1}"
  if [ -f "$projectEnvFile" ]; then
      blablo.log "File ${CPEF_CYAN1}'${projectEnvFile}'${CPEF_NC} found in: $PWD"
      blablo.finish
      return 0
  else
      blablo.cleanLog "${CPEF_RED}No ${CPEF_BOLD_ON}'${projectEnvFile}'${CPEF_BOLD_OFF} file found in: ${CPEF_NC}$PWD"
      blablo.cleanLog "${CPEF_YELLOW}Please create copy of ${CPEF_BOLD_ON}'project.env.dist'${CPEF_BOLD_OFF} as ${CPEF_BOLD_ON}'project.env'${CPEF_BOLD_OFF} and fill the placeholders ${CPEF_NC}"
      return 1
  fi
}

export checkProjectEnvFile