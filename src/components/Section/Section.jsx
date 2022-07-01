import PropTypes from 'prop-types';
import Box from '../Box';
import { Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Box p={4} as="section">
      <Title>{title}</Title>
      {children}
    </Box>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
