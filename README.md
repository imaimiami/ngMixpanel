# ngMixpanel

AngularJS Directive for [Mixpanel](https://mixpanel.com)

## Functionality

- Sending events

## Installation

- `bower install ng-mixpanel`
- download src/ng-mixpanel[.min].js

## Usage

- include ng-mixpanel[.min].js in your index.html before your module definition

```
<script type="text/javascript" src="src/ng-mixpanel.min.js"></script>
```

- add the ng-mixpanel module to your module/app dependencies

```
var myApp = angular.module('myApp', ['ngMixpanel']);
```

## Directives

### mixpanel-event

Sending events

#### Usage

```
<a mixpanel-event="Click A" mixpanel-on="click">A</a>
```

#### Attributes

- __mixpanel-event__ (required) 
- __mixpanel-on__ (required) 