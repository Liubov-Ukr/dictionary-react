import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import Footer from "./Footer";

function App() {
  return (
    <div className="App container">
      <Search defaultWord="nature" />

      <Footer />
    </div>
  );
}

export default App;
