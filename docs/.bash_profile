# Colors!
export PS1="\[\033[36m\]\u\[\033[m\]$ "
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad # google to figure out which colors are being applied to what

alias ls="ls -aFG --color"
alias ll="ls -lahFG --color"

# Display todos in current project:
alias todos="fgrep -r -n -I 'TODO' *"

# Start a http server
alias create-server="python -m SimpleHTTPServer"

# Make Library visible in Finder (OS/X):
chflags nohidden ~/Library/

# Make all files visible (in Finder) or not,
# and restart Finder for the changes to be apparent (OS/X)
# (If Finder acts up after this, force-restart it via Alt + Right Clicking)
alias showallYES="defaults write com.apple.Finder AppleShowAllFiles YES
                killall Finder && open /System/Library/CoreServices/Finder.app"
alias showallNO="defaults write com.apple.Finder AppleShowAllFiles NO
                killall Finder && open /System/Library/CoreServices/Finder.app"

# Script for command separation and timestamping:
# (from http://pastebin.com/raw.php?i=cx9SqmB0)
############################################
# Modified from emilis bash prompt script
# from https://github.com/emilis/emilis-config/blob/master/.bash_ps1
#
# Modified for Mac OS X by
# @corndogcomputer
###########################################
# Fill with minuses
# (this is recalculated every time the prompt is shown in function prompt_command):
fill="--- "

reset_style='\[\033[00m\]'
status_style=$reset_style'\[\033[0;90m\]' # gray color; use 0;37m for lighter color
prompt_style=$reset_style
command_style=$reset_style'\[\033[1;29m\]' # bold black

# Prompt variable:
PS1="$status_style"'$fill \t\n'"$prompt_style"'${debian_chroot:+($debian_chroot)}\[\033[36m\]\u\[\033[m\]$'"$command_style "

# Reset color for command output
# (this one is invoked every time before a command is executed):
trap 'echo -ne "\033[00m"' DEBUG

function prompt_command {
    # create a $fill of all screen width minus the time string and a space:
    let fillsize=${COLUMNS}-9
    fill=""
    while [ "$fillsize" -gt "0" ]
    do
        fill="-${fill}" # fill with underscores to work on
        let fillsize=${fillsize}-1
    done
}
PROMPT_COMMAND=prompt_command

