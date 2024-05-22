import "./App.css";
import Form from "./Form";
import Current from "./Current";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App weather-app">
      <header>
        <Form />
      </header>
      <main>
        <Current />
      </main>
      <Footer />
    </div>
  );
}
