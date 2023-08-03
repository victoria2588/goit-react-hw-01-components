import PropTypes from 'prop-types';
import { TransactionHistoryTableRow } from './TransactionHistory.styled';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <TransactionHistoryTableRow>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TransactionHistoryTableRow>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
