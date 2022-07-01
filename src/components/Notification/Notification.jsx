import PropTypes from 'prop-types';
import { Message } from './Notification.styled';
import Box from '../Box';

const Notification = ({ message }) => {
  return (
    <Box
      width="70%"
      bg="secondaryBg"
      p={4}
      minHeight="160px"
      borderRadius="normal"
    >
      <Message>{message}</Message>
    </Box>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
