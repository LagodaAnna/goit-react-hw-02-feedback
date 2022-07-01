import styled from 'styled-components';

export const List = styled.ul`
  margin-bottom: ${p => p.theme.space[5]};
`;

export const ListItem = styled.li`
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeights.bold};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]};
  }
`;

export const Total = styled.p`
  margin-bottom: ${p => p.theme.space[3]};
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Positive = styled.p`
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
