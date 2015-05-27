## x-doc

x-dox is a tiny node CLI app to browse the official Node Documentation.

### Install
 > npm install x-doc

 This should install the CLI app.

### Usage
 Using it is as simple as typing

 >x-doc fs.readFileSync

 >x-doc http

 If you add '-m' flag to your search, this will display a List of all the methods of a module
 Previously this was not optional.

 >x-doc http -m

### Please Note
All the current docs are based on IOjs(v2.1.0) and not NodeJS, but this will be soon fixed.
This is in very early stages of Development, expect it to be a little quirky. Please file bugs when you find them.

And all Contribution are appreciated.

### Change Log
#### v0.0.6 -v0.1.5 (27-5-15)
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
