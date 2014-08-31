
function list(tabs) {
  var windows = '';

  var ul = "<ul>"

  for (var i = 0; i < tabs.length; i++) {  	   	 
	 ul += "<li> <strong>" + ( tabs[i].index + 1  )+ " ) </strong>"+ tabs[i].title +" </li>"; 	 
	 chrome.tabs.get(tabs[i].id, function(tab){	 	
		getTabDetails(tab); 	
	 });
  }

  ul += "</ul>";


  document.getElementById('tabInfo').innerHTML = ul;
}

function getTabDetails(tab)
{
	chrome.tabs.sendRequest(tab.id, {method: "getHTML"}, function(response) {
        if(response.method=="getHTML"){
            alltext = response.data;
            console.log ( alltext );
        }
    });	

}


function getTabInfo()
{
	chrome.tabs.getAllInWindow(null, list);
}

getTabInfo();