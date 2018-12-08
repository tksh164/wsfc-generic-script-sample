# Sample script for generic script resource in Windows Server Failover Cluster

## Wait time in Online call

The Online call handler in this script has the wait time capability. You can set the wait time in seconds via OnlineSleepSeconds resource parameter using regedit.exe.

![OnlineSleepSeconds resource parameter](./images/regedit.png)

## Cluster log

This script writes some logs into the cluster log.

```
INFO  [RES] Generic Script <GenericScript Script>: Script-wide code begins execution.

INFO  [RES] Generic Script <GenericScript Script>: Entering Open function of [GenericScript Script (undefined)].
INFO  [RES] Generic Script <GenericScript Script>: Added OnlineSleep property. The Value is 1.

INFO  [RES] Generic Script <GenericScript Script>: Entering Close function of [GenericScript Script (undefined)].

INFO  [RES] Generic Script <GenericScript Script>: Entering Online function of [GenericScript Script (S:\GenericScript.js)].

INFO  [RES] Generic Script <GenericScript Script>: Entering LooksAlive function of [GenericScript Script (S:\GenericScript.js)].

INFO  [RES] Generic Script <GenericScript Script>: Entering IsAlive function of [GenericScript Script (S:\GenericScript.js)].
```
