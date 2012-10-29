JBreadCrumbs
============

JQuery BreadCrumbs plugin

Basic Usage
===========

```javascript

var randomData = [{name: "Somthing", data: 12},
             {name: "Someone", data: 32},
             {name: "foobar", data: 42}];

$("#crumbs1").breadCrumbs({crumb: "name", data: randomData, crumbClicked: function(crumb){
  console.log(crumb," clicked");
}});
```

```html
<div id="crumbs1">
	<a style="margin-left:10px;margin-right:10px;display:inline-block;text-decoration:none" crumb="S" href="#" class="breadCrumb" id="bcS">S</a>
	<a style="margin-left:10px;margin-right:10px;display:inline-block;text-decoration:none" crumb="F" href="#" class="breadCrumb" id="bcF">F</a>
</div>
```