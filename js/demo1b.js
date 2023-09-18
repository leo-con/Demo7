$(document).ready(function () {
    genesysWidget();
});

function createSShareConfig(){
        var config = {
            // Webchat service URL
            "webchatServiceUrl": "https://realtime.mypurecloud.com:443",

            //Webchat app URL
            "webchatAppUrl": "https://apps.mypurecloud.com/webchat",

            // Numeric organization ID
            "orgId": 30907,

            // String organization ID
            "orgName": "LatamPS",

            // Log level (DEBUG, INFO, WARN, ERROR, or FATAL)
            "logLevel": "DEBUG",

            // Locale code of end-user which will be used to localize the widget
            "locale": "es",

            "orgGuid": "c8bb9493-2b8c-415a-b7b1-44cef16960f8",

            // CSS class if widget is rendered as frame
            "cssClass": "screenshare-frame",

            // Additional CSS properties if widget is rendered as an iframe.
            // These properties apply to the iframe itself, not to its content.
            "css": {
                "width": "480px",
                "height": "282px",
                "border": "none"
            },

            // The URL of a CSS file to apply to the content of the iframe.
            //"contentCssUrl": "https://leo-con.github.io/DemoBanColombia/site2/css/sshare.css",
            "contentCssUrl": "https://leonel1.s3.us-east-2.amazonaws.com/sshare.css?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLWVhc3QtMSJGMEQCIBjN6NpQ6z%2FZOW9s6bTtIjXMsD82UFj8BraMvXKgV928AiBo1%2F9rJgOt%2FRbOrRSxN68ty8pC797mZZvmlRbpY3KPvir7AghGEAMaDDgyMzY2OTMzNjA5MSIMPmLMkIgA1im%2BQYbRKtgC%2BtgUefF5Cfuoj%2FlYsOQTcbSr7a4yVmd1gm2j8MA%2FzF5UdjOB36Gv9lk5H03rUv0MUjTYMXNlxTCn0c4CR0KS%2FPTc1lN9gMLWwrwsiugeisWMTi%2FnpspMHca6S%2FMKW7jMXLxpEkwLu%2BDEVd9Ai6nKrKvJiSKVhZfY09bvD0B8b3PdQ0KP1NyQHysBNJKiYbI03nGyaYaarjv88JtxbsODrJ%2Bp6w7mGM9ytO6u4fWCjwzxUIVx%2F7RQbxG8ilvkLn1%2BdGmdcDUCTaGMP7Q6Fd6HOuHsyKhKxkMmnrkSGblGzViZ5RRMG4FWy3s0CKMp1OnyVyf%2BPwgxSQCtk8QQgk2V4%2BSwXESAX3HKVQkr4sRhAM8zDFof4sYQGMB50JycB06fLkYDNtClbMHMTG0oVbQbfw2QS4gWMrpFdW5ogdYm%2B4Kuitf%2Bi4TdirHXi%2BkGwz8qcphdPfB2CFcwgtPkjwY6tAIX%2Bv8es404Z53xG1SjhzRjX58TrRxUW2H6O%2BCQrAK3nuNRv7Jc%2BrCNtAmD%2BkJOAHCb8BAe3HnwznvpkeoCo0EjltZx6DRLXhL%2Fba0UVBzIMvupBbfpZdBa%2BRc2x97ndeXvL%2FuEVq0T9PXTWdGzeEQuanGOTrBN2R3PrUn0HfzrdqXEQB8AZvoGw0fTyoAhRRph%2FPQtfkUtTe3JYQwzlfDIEeMvYrHluuGbsmN1Qk0cROrhVUee0PMOuNvFGcig16ZKT6QdtuOyKn3XyupUwSY0hMj4u6tknm%2F0VSH1BSlPfqkvdCvXEaq2OoX5HoWUAiudmgbcAit2BRh%2Fp%2BWQryAYa%2F4vmiXJ8oWXoPpAC74NOCci7hGYSPahP19w%2BJKdgqFPiuF4FVELI28GlkokUXgOSJCvSA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220201T124040Z&X-Amz-SignedHeaders=host&X-Amz-Expires=36000&X-Amz-Credential=ASIA37RUEVANUGXK5QAA%2F20220201%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=309972522d7c94bcc38f7b299fe2bb9c9663d9e673aeb63689e1613ce9851d83",

            //Some customers may use an external application and browser support will not prohibit the initiation of screen share in that case
            "standAloneApplication": false,

            "webchatDeploymentKey": "10623e40-97b6-4cd5-9c70-466b210d7ce0"

        };
      return config;
    }


function startSShare() {
    let config = createSShareConfig();
    ININ.screenshare.create(config, function(err, screenshare) {
        if (err) {
            // You should change this block to properly handle errors.
            console.error(err);
            if (err.name === 'UNSUPPORTED_BROWSER') {
                // Redirect to instructions for unsupported browser, or handle appropriately
                alert('Sorry, either your browser is not supported, or the page is not being served over TLS (HTTPS).');
                return;
            }
            alert('An error occurred launching the screen share widget. See console for details');
        }
    screenshare.renderScreenShareForm({
        containerEl: 'screenshareContainer'
    });
  });

}


