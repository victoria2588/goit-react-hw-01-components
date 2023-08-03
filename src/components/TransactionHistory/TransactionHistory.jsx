import { TransactionHistoryItem } from './TransactionHistoryItem';
import PropTypes from 'prop-types';
import { TransactionHistoryTable } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionHistoryItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
