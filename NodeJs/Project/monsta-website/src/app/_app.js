import { Provider } from 'react-redux';
import { store } from './Redux Store/store';

function MyApp() {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;