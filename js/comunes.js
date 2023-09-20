$(document).ready(function () {
  genesysWidget();
  Genesys("subscribe", "Journey.ready", () => {
    console.log("The journey plugin is ready!");
    Genesys("command", "Journey.pageview", {});
  });
  let currentUrl = window.location.href;
  if (currentUrl.indexOf("demo2.html") > 0) {
    console.log("activate formsTrack");
    Genesys("command", "Journey.formsTrack", {
      selector: "#formularioDemo",
      formName: "user registration",
      captureFormDataOnAbandon: true,
      customAttributes: { isVip: true },
      traitsMapper: [
        { fieldName: "firstName", traitName: "givenName" },
        { fieldName: "lastName", traitName: "familyName" },
      ],
    });
  }
});

var intervalID;
function genesysWidget() {
  (function (g, e, n, es, ys) {
    g["_genesysJs"] = e;
    g[e] =
      g[e] ||
      function () {
        (g[e].q = g[e].q || []).push(arguments);
      };
    g[e].t = 1 * new Date();
    g[e].c = es;
    ys = document.createElement("script");
    ys.async = 1;
    ys.src = n;
    ys.charset = "utf-8";
    document.head.appendChild(ys);
  })(window, "Genesys", "https://apps.mypurecloud.com/genesys-bootstrap/genesys.min.js", {
    environment: "prod",
    deploymentId: "4c108308-0722-4ebe-b89d-c91c01388dd2",
  });
}

function ToggleWidget() {
  var boton = document.getElementById("btnChat");
  if (boton.innerHTML == "Iniciar Chat") {
    Genesys("command", "Messenger.open", {}, function (o) {});
    boton.innerHTML = "Ocultar Chat";
  } else {
    Genesys("command", "Messenger.close", {}, function (o) {});
    boton.innerHTML = "Iniciar Chat";
  }
}
