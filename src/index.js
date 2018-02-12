import App from './App';
import { AppRegistry } from 'react-native';
import registerServiceWorker from './registerServiceWorker';

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root')
});

registerServiceWorker();
