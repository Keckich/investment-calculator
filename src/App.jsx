import Header from "./util/components/Header";
import InputData from "./util/components/InputData";

function App() {
  return (
    <>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <InputData title="Initial investment" />
          <InputData title="Annual investment" />
        </div>
        <div className="input-group">
          <InputData title="Expected return" />
          <InputData title="Duration" />
        </div>
      </section>
    </>
  );
}

export default App;
