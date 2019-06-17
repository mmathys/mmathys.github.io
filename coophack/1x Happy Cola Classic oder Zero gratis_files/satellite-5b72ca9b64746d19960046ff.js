_satellite.pushAsyncScript(function(event, target, $variables){
  atInternetTag.page.set({
  name: _satellite.getVar('pageName'), 
  chapter1: _satellite.getVar('chapter1'),
  chapter2: _satellite.getVar('chapter2'),
  chapter3: _satellite.getVar('chapter3'),
  level2: _satellite.getVar('level2')
});

atInternetTag.customVars.set({
  site: {
    /*
    4:'',  //Customer Age  
    5:'',  //Customer Residence  
    6:'',  //Number of Purchases 
    */
    7:"[" + _satellite.getVar('pageName') + "]",  //Screen / Page
    8:"[" + _satellite.getVar('userAgent') + "]",  //Useragent
    9:"[" + _satellite.getVar('language') + "]",  //Language
    10:"[" + _satellite.getVar('referrer') + "]",  //Referrer
    11: _satellite.getVar('level2'),  //Level2
    12:"[" + _satellite.getVar('url') + "]",  //URL
    13:"[" + _satellite.getVar('destinationURI') + "]",  //URI
    14:"[" + _satellite.getVar('level') + "]",  //Level
    15:"[" + _satellite.getVar('path') + "]",  //Path
    16:"[" + _satellite.getVar('viewport (screen)') + "]",  //Viewport
    17:'',  //Error Code
    18:'',  //Free
    19:'',  //Free
    20:"[" + _satellite.getVar('marketingUrl') + "]",  //Marketing URL
    21:"[" + _satellite.getVar('SAPHybrisID') + "]",  //SAP Hybris ID
    22:'',  //Free
    23:''  //Free
  }
});

_satellite.track("atiDispatchTag");

if(digitalData.event.length===1) {
	_satellite.track("atiSendClick");  
}
});
