import {Provider} from 'react-redux';

import {store} from './redux';
import RoutesNavigation from './routes';

import './global.css';

function App() {
  return (
    <Provider store={store}>
      <RoutesNavigation />
    </Provider>
  );
}

export default App;
