import PropTypes from 'prop-types';
import { BsEmojiHeartEyes, BsEmojiNeutral, BsEmojiFrown } from 'react-icons/bs';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const icons = [BsEmojiHeartEyes, BsEmojiNeutral, BsEmojiFrown];
  const updateOptions = options.map((option, index) => {
    return {
      label: option,
      icon: icons[index],
    };
  });

  return updateOptions.map(({ label, icon: Icon }) => {
    return (
      <Button type="button" onClick={onLeaveFeedback} key={label}>
        <Icon />
        {label}
      </Button>
    );
  });
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
