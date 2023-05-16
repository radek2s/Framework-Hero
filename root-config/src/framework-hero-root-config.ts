import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@org1/react-app",
  app: () => System.import("@framework-hero/react"),
  activeWhen: ["/react"],
});

registerApplication({
  name: "angular",
  app: () => System.import("@framework-hero/angular"),
  activeWhen: ["/angular"],
});

start({
  urlRerouteOnly: true,
});