import AddUrl from "./components/AddUrl";
import ViewUrl from "./components/ViewUrl";

function App() {
  return (
    <div className="my-12 mx-auto container">
      <p className="text-4xl text-center font-medium">URL Shortener</p>
      <AddUrl />
      <ViewUrl />
    </div>
  );
}

export default App;
