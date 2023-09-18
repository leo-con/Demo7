Genesys("command", "Journey.formsTrack", {
  selector: "#registration-form",
  formName: "user registration",
  captureFormDataOnAbandon: true,
  customAttributes: { isVip: true },
  traitsMapper: [
    { fieldName: "firstName", traitName: "givenName" },
    { fieldName: "lastName", traitName: "familyName" },
  ],
});
