import { useReducer } from 'react';
import AddUrl from './components/AddUrl';
import ViewUrl from './components/ViewUrl';
import { DataContext, DataDispatchContext } from './context/DataContext';
import { initialState, dataReducer } from './reducer/dataReducer';

function App() {
  const [data, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={data}>
      <DataDispatchContext.Provider value={dispatch}>
        <div className="my-12 mx-auto container">
          <p className="text-4xl text-center font-medium">URL Shortener</p>
          <AddUrl />
          <ViewUrl />
        </div>
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
