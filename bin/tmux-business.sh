#!/bin/sh
BUSINESS_DIR_DEFAULT=~/work/business/
BUSINESS_DIR="${BUSINESS_DIR:-$BUSINESS_DIR_DEFAULT}"

cd $BUSINESS_DIR

tmux rename-window business
tmux split-window -v
tmux send-keys 'tig' 'C-m'
tmux select-pane -t 0

cd $BUSINESS_DIR/packages/ctx-core

tmux new-window
tmux rename-window ctx-core
tmux split-window -v
tmux send-keys 'tig' 'C-m'
tmux select-pane -t 0

cd $BUSINESS_DIR

tmux new-window
tmux rename-window util
tmux split-window -v
tmux split-window -v
tmux select-layout even-vertical
tmux select-pane -t 0

cd $BUSINESS_DIR/packages/web

tmux new-window
tmux rename-window web
tmux split-window -v
tmux send-keys 'yarn run dev' 'C-m'
tmux select-layout even-vertical
tmux select-pane -t 0

tmux select-window -t 0
