---
########### THIS FILE IS AUTO GENERATED - ANY CHANGES WILL BE VOID ###########
title: commands add
description: OpenBB Discord Command
---

# commands add

This command allows the user to add an autopost command to a channel. It allows the user to receive notifications from OpenBB bot in the channel without having to manually query them. This can be used for all commands that appear in the list when you run "autopost commands add"

### Usage

```python wordwrap
/autopost commands add cmd interval [start_time] [stop_time]
```

---

## Parameters

| Name | Description | Optional | Choices |
| ---- | ----------- | -------- | ------- |
| cmd | Pick the command you want to assign for autoposting | False | List of commands that allow auto posting |
| interval | How oftern to post the autopost command | False | 5m, 15m, 30m, 1hr, 2hr, 4hr, 6hr |
| start_time | Time to start the autopost command - ex. If I want to start at 8am I do 8 | True | 24hr time |
| stop_time | Time to stop the autopost command - ex. If I want to stop at 6pm I do 18 | True | 24hr time |

---

## Examples

```
/autopost commands add cmd:/cm interval:1 Hour
```

```
/autopost commands add cmd: /cm interval: 1 Hour start_time: 9 stop_time: 10
```
