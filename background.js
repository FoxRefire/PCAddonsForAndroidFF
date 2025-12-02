chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (new RegExp("https://addons.mozilla.org/.*?/android").test(changeInfo.url)) {
        chrome.tabs.update(tab.id, { url: changeInfo.url.replace("/android/", "/firefox/") })
    }
});
