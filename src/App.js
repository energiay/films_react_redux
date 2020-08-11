import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import ListFilmsConteiner from './Components/ListFilmsConteiner'

function App() {
    
    return (
        <Provider store={store}>
            <div className="App">
                <ListFilmsConteiner />
            </div>
        </Provider>
    );
}

export default App;
