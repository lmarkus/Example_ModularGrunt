#Modular Gruntfile Proof-of-concept
> This repo shows a barebones example of how a Grunt build can be modularized

Make sure you read the [accompanying article](lmarkus.github.io/2014/12/29/Grunt-Sanity.html) before starting.

##Running:

**Note: This example contains two mistakes on purpose (mixed quote styles) to show that jshint is working as intended**

###Setup
* Clone the repo: `git clone https://github.com/lmarkus/Example_ModularGrunt.git`
* Install dependencies: `npm install`
* Make sure you've installed grunt globally (See: [getting started with grunt](http://gruntjs.com/getting-started))

###Execution
To "build" both modules (ignoring lint errors):
```bash
$ grunt lint --force
```
To build a single modules:
```bash
$ grunt lint:client
```

