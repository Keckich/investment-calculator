import Header from "./util/components/Header";
import InputData from "./util/components/InputData";
import ResultTable from "./util/components/ResultTable";

import { useState } from "react";

const DEFAULT_DATA = {
  initialInvestment: 10000,
  annualInvestment: 300,
  expectedReturn: 5.5,
  duration: 12,
};

function App() {
  const [inputData, setInputData] = useState(DEFAULT_DATA);
  const handleInputDate = (key, value) => {
    setInputData((prevData) => ({
      ...prevData,
      [key]: +value,
    }));
  };

  return (
    <>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <InputData
            title="Initial investment"
            titleKey="initialInvestment"
            onChange={handleInputDate}
            defaultValue={DEFAULT_DATA.initialInvestment}
          />
          <InputData
            title="Annual investment"
            titleKey="annualInvestment"
            onChange={handleInputDate}
            defaultValue={DEFAULT_DATA.annualInvestment}
          />
        </div>
        <div className="input-group">
          <InputData
            title="Expected return"
            titleKey="expectedReturn"
            onChange={handleInputDate}
            defaultValue={DEFAULT_DATA.expectedReturn}
          />
          <InputData
            title="Duration"
            titleKey="duration"
            onChange={handleInputDate}
            defaultValue={DEFAULT_DATA.duration}
          />
        </div>
      </section>
      <ResultTable data={inputData}></ResultTable>
    </>
  );
}

export default App;
