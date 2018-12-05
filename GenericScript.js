// Script level global variables.
Resource.LogInformation('Script-wide code begins execution.');

var _fso = new ActiveXObject('Scripting.FileSystemObject'),
    _sh = new ActiveXObject('WScript.Shell');

// Perform when the script opened.
function Open()
{
    Resource.LogInformation('Entering Open function of [' + Resource.Name + ' (' + Resource.ScriptFilepath + ')].');

    // Private property settings.
    if (!Resource.PropertyExists('OnlineSleepSeconds'))
    {
        Resource.AddProperty('OnlineSleepSeconds');
        Resource.OnlineSleepSeconds = 1;
        Resource.LogInformation('Added OnlineSleep property. The Value is ' + Resource.OnlineSleepSeconds + '.');
    }

    return 0;  // success
}

// Perform when the resource is placed online.
function Online()
{
    Resource.LogInformation('Entering Online function of [' + Resource.Name + ' (' + Resource.ScriptFilepath + ')].');

    // Sleep
    Resource.LogInformation('Start sleep ' + Resource.OnlineSleepSeconds + ' second(s)...');
    sleep(Resource.OnlineSleepSeconds);
    Resource.LogInformation('Done sleep');

    return 0;  // success
}

// Perform one or more very fast, cursory checks of the specified instance with
// the emphasis on detecting potential problems rather than verifying operational status.
function LooksAlive()
{
    Resource.LogInformation('Entering LooksAlive function of [' + Resource.Name + ' (' + Resource.ScriptFilepath + ')].');
    return 0;  // success
}

// Perform a complete check of the resource to see if it is functioning properly.
function IsAlive()
{
    Resource.LogInformation('Entering IsAlive function of [' + Resource.Name + ' (' + Resource.ScriptFilepath + ')].');
    return 0;  // success
}

// Perform when the resource is placed offline.
function Offline()
{
    Resource.LogInformation('Entering Offline function of [' + Resource.Name + ' (' + Resource.ScriptFilepath + ')].');
    return 0;  // success
}

// Perform when the script is closed.
function Close()
{
    Resource.LogInformation('Entering Close function of [' + Resource.Name + ' (' + Resource.ScriptFilepath + ')].');
    return 0;  // success
}


// Perform when terminating the script.
function Terminate()
{
    Resource.LogInformation('Entering Terminate function of [' + Resource.Name + ' (' + Resource.ScriptFilepath + ')].');
    return 0;  // success
}

//
function sleep(sleepSeconds)
{
    execWithExitWait('timeout.exe /t ' + sleepSeconds);
}

//
function execWithExitWait(cmdline)
{
    _sh.run(cmdline, 0, true);
}
