$(document).ready(function () {
  genesysWidget();
  Genesys("subscribe", "Journey.ready", () => {
    console.log("The journey plugin is ready!");
    Genesys("command", "Journey.pageview", {});
  });
});
