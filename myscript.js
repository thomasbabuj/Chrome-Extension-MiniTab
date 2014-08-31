

function getText(){
    return document.body.innerText
}
function getHTML(){
    return document.body.outerHTML
}

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "getHTML"){
            sendResponse({data: document.all[0].innerText, method: "getHTML"}); //same as innerText
        }
    }
);