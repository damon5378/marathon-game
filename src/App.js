import "./App.css";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Footer } from "./components/Footer";
import pica from "./img/pica.jpg";

//

function App() {
  return (
    <div className="App">
      <Header title="Title" descr="Description" />
      <Layout title="Title" descr="Description" urlBg={pica} />
      <Layout title="Title" descr="Description" colorBg="#265" />
      <Layout title="Title" descr="Description" urlBg={pica} />
      <Footer />
    </div>
  );
}

export default App;
