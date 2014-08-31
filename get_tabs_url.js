
function list(tabs) {
  var windows = '';

  var ul = "<ul>"

  for (var i = 0; i < tabs.length; i++) {  	   	 
	 ul += "<li> <strong>" + ( tabs[i].index + 1  )+ " ) </strong>"+ tabs[i].title +" </li>"; 
  }

  ul += "</ul>";
  
  document.getElementById('tabInfo').innerHTML = ul;
}


function getTabInfo()
{
	chrome.tabs.getAllInWindow(null, list);
}

getTabInfo();