import PropTypes from 'prop-types';
import { BsEmojiHeartEyes, BsEmojiNeutral, BsEmojiFrown } from 'react-icons/bs';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const icons = [BsEmojiHeartEyes, BsEmojiNeutral, BsEmojiFrown];
  console.log(icons);
  // const updateOptions = options.map((option, index) => {
  //   return {
  //     label: option,
  //     icon: icons[index],
  //   };
  // });

  const updateOptions = [
    { label: 'a', icon: BsEmojiHeartEyes },
    { label: 'b', icon: BsEmojiNeutral },
    { label: 'c', icon: BsEmojiFrown },
  ];

  console.log(updateOptions);
  return options.map(({ label, icon: Icon }) => {
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
