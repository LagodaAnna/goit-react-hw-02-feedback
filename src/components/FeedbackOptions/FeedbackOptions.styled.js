import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  padding-top: ${p => p.theme.space[3]};
  padding-bottom: ${p => p.theme.space[3]};
  font-size: ${p => p.theme.fontSizes.m};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.buttonBg};
  box-shadow: ${p => p.theme.shadows.normal};
  font-family: inherit;
  border: none;
  outline: none;
  transition: box-shadow 250ms;

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[4]};
  }

  &:hover {
    box-shadow: ${p => p.theme.shadows.hover};
  }

  & > svg {
    margin-right: ${p => p.theme.space[3]};
    fill: ${p => p.theme.colors.icon};
  }
`;
