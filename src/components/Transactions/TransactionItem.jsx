import css from 'components/Transactions/TransactionHistory.module.css';

export const TransactionItem = ({ type, amount, currency }) => (
  <tr className={css.column}>
    <td className={css.elem}>{type}</td>
    <td className={css.elem}>{amount}</td>
    <td className={css.elem}>{currency}</td>
  </tr>
);
