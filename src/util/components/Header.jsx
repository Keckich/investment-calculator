import headerImg from '../../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <div id="header">
      <img src={headerImg} />
      <h1>Investment calculator</h1>
    </div>
  );
}