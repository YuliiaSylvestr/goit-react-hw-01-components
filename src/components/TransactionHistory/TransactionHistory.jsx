import React from 'react';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={`${s.transactionHistory} ${s.table}`}>
      <thead className={s.tread}>
        <tr>
          <th className={s.type}>Type</th>
          <th className={s.amount}>Amount</th>
          <th className={s.currency}>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={s.type}>{type}</td>
            <td className={s.amount}>{amount}</td>
            <td className={s.currency}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
