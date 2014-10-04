petulant-wookie
===============

### Turns a file like this:

01 MAY ABC 1 2
02 MAY ABC 1 2
DEF
03 MAY STU 1 2
WXY

### Into this:

01 MAY	ABC	1	2
02 MAY	ABC DEF	1	2
03 MAY	STU WXY 	1	2

Dependencies
------------
* Node.js
* jasmine-node

Usage
-----
```
node main.js test-data.txt  > test-data.csv
```
