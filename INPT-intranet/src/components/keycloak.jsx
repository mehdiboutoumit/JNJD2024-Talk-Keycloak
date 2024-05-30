// keycloak.js
import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080/',
  realm: 'JNJD',
  clientId: 'company-portal',
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
