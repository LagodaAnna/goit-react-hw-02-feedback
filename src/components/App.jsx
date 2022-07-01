import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import Box from './Box';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChosenOption = evt => {
    const option = evt.currentTarget.textContent;
    this.setState(prevState => {
      return {
        ...prevState,
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = feedbacksValue => {
    return feedbacksValue.reduce((total, feedback) => {
      return (total += feedback);
    }, 0);
  };

  countPositiveFeedbackPercentage = (total, positive) => {
    return total === 0 ? 0 : ((positive / total) * 100).toFixed() + '%';
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback(Object.values(this.state));
    const positivePercentage = this.countPositiveFeedbackPercentage(
      total,
      good
    );

    return (
      <Box
        bg="mainBg"
        width="50%"
        my={0}
        mx="auto"
        minHeight="400px"
        borderRadius="normal"
        as="main"
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleChosenOption}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </Box>
    );
  }
}
