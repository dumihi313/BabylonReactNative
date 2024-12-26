import {AppRegistry} from 'react-native';
// import App from '../playground-shared/App';
import App from './AppNe';
import {name as appName} from '../playground-shared/app.json';

AppRegistry.registerComponent(appName, () => App);