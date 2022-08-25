import {AppRegistry} from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('vivian', () => App);

AppRegistry.runApplication('vivian', {
  rootTag: document.getElementById('root'),
});
