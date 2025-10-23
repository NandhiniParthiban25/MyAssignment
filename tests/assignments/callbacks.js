let browser = "Chrome"
function checkBrowserVersion(br,callback){
    setTimeout(() => {
        callback(br)
    },2000)
    
}
function browserVersion(b){
    console.log("Browser version using " + b)
}
checkBrowserVersion(browser,browserVersion)