import { calculateInvestmentResults } from "../investment";

export default function ResultTable({ data }) {
  const items = calculateInvestmentResults(data).map((item) => {
    return (
      <tr key={item.year}>
        <td>{item.year}</td>
        <td>{item.valueEndOfYear}</td>
        <td>{item.interest}</td>
        <td>{item.totalInterest}</td>
        <td>{item.investedCapital}</td>
      </tr>
    );
  });

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interes (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{items}</tbody>
    </table>
  );
}
