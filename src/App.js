import { store } from './store/slices'
import { Provider } from 'react-redux'
import Navigation from './navigation/Navigation'

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
