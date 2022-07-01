import PropTypes from 'prop-types';
import Box from '../Box';
import { List, ListItem, Total, Positive } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Box
      width="70%"
      bg="secondaryBg"
      p={4}
      minHeight="160px"
      borderRadius="normal"
    >
      <List>
        <ListItem>Good: {good}</ListItem>
        <ListItem>Neutral: {neutral}</ListItem>
        <ListItem>Bad: {bad}</ListItem>
      </List>
      <Total>Total: {total}</Total>
      <Positive>Positive feedback: {positivePercentage}</Positive>
    </Box>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
