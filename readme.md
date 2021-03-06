# x-doc

#### Would it not be very convenient if you could browse all of Node's DOCs right from the command line?

x-doc lets you do just that.

x-doc is a tiny CLI app that aims to reduce the need to open a browser window to search for NodeJS / IOjs Documentation, the only catch is that it doesn't look as pretty but this is the compromise we make for saving a few minutes daily.

Right now documentation for all modules and their methods are available but more will be available soon.

Somethings are still a little quirky as this is very early stages of development.

### Install
 > npm install x-doc

 This should install the CLI app.

### Usage
 Using it is as simple as typing

 >x-doc fs.readFileSync

 >x-doc http

 >x-doc http -m

 >x-doc path --m-only

## Options
 - `-m` : Displays a list of all the methods of a Module at the end the Module description
 - `--m-only` : Displays only the methods of a Specified Module

--------

### And all Contribution are greatly appreciated.

--------

### Change Log
#### v0.1.7 (22-7-15)
 - Added `--m-only` flag
 - Tiny tweeks to the Search function

#### v0.1.6 (29-5-15)
 - Tweaked the search to perform a tiny bit faster
 - Updated README with some more info
 - Added a 'backup.json' in-case the original Documentation file is corrupt or did not download
 - Closed all modules within Anonymous Functions
 - Minor changes to the code base that don't really help anything.

#### v0.0.6 - v0.1.5 (27-5-15)
 - Partially implemented Version Specific Documentations
 - Added 'postinstall' script to download a JSON file Specific for your Version of Node or IOjs
 - Added '-m' CLI flag to display a List of all the methods of a module
 - Replaced Colors.js with Chalk, no visual difference
 - Added minimist to work with CLI Options and Arguments

#### v0.0.5 (26-5-15)
 - Added support to view all the methods of a module
 - Added support for rendering Unicode '&#039;'
 - Codes in the Documentation look a little pretty
 - Separated each piece of functionality into it's own module

#### v0.0.4 (25-5-15)
 - Added support for Colored output, this feature is best viewed in Terminal with Black Background

#### v0.0.3 (25-5-15)
 - Minor release with no Feature

#### v0.0.2 (24-5-15)
 - Added jsDoc for most function in the Program

#### v0.0.1 (24-5-15)
 - First working Version
