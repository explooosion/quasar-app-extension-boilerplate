import Component from './components/Component';
import Example from './components/Example.vue';

const version = __UI_VERSION__;

function install(app) {
  app.component(Component.name, Component);
  app.component(Example.name, Example);
}

export { version, Component, Example, install };
