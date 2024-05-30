// keycloak.js
import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080/',
  realm: 'JNJD',
  clientId: 'employee-portal',
};

const keycloakInst = new Keycloak(keycloakConfig);

export default keycloakInst;
