import "./App.css";
import Header from "./components/header/header";
import NavBar from "./components/navbar/navbar";

function App() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <NavBar />
      <Header />
    </header>
  );
}

export default App;
