## x-doc

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

 If you add a '-m' flag to your search, this will display a List of all the methods of a module, previously this was not optional.

--------

#### I am quite new to Node_Module maintenance so any help in that regard would be great.
### And all Contribution including pull requests or filing bugs are  greatly appreciated.

--------

### Change Log
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
