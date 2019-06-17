_satellite.pushAsyncScript(function(event, target, $variables){
  var length = digitalData.event.length;
var chapter1 = encodeURIComponent(digitalData.event[length-1].eventInfo.origin);
var chapter2 = encodeURIComponent(digitalData.event[length-1].eventInfo.eventName);
var chapter3 = encodeURIComponent(digitalData.event[length-1].category.primaryCategory + ": " + digitalData.event[length-1].category.subCategory1);
var name = encodeURIComponent((digitalData.event[length-1].eventInfo.action || "click"));

atInternetTag.click.send({
	name: name, 
	chapter1: chapter1, 
	chapter2: chapter2, 
	chapter3: chapter3, 
	level2: _satellite.getVar('level2'), 
	type: 'navigation'  
});
});
