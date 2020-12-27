import React from 'react';
import { render } from '@testing-library/react';
import {
  IconAngleDown,
  IconArrowToTop,
  IconBars,
  IconCommentDots,
  IconEnvelope,
  IconEye,
  IconEyeSlash,
  IconGithub,
  IconHome,
  IconLaptopCode,
  IconLink,
  IconLinkedIn,
  IconObjectGroup,
  IconPlay,
  IconSearch,
  IconSearchPlus,
  IconSpinner,
  IconTimes,
  IconTimesCircle,
  IconUser,
  IconUserTie,
  IconLogo,
} from '.';

it('renders IconAngleDown with className and rotate and spin state', () => {
  render(<IconAngleDown className="test" rotate={90} spin />);
});

it('renders IconArrowToTop', () => {
  render(<IconArrowToTop />);
});

it('renders IconBars', () => {
  render(<IconBars />);
});

it('renders IconCommentDots', () => {
  render(<IconCommentDots />);
});

it('renders IconEye', () => {
  render(<IconEye />);
});

it('renders IconEnvelope', () => {
  render(<IconEnvelope />);
});

it('renders IconEyeSlash', () => {
  render(<IconEyeSlash />);
});

it('renders IconGithub', () => {
  render(<IconGithub />);
});

it('renders IconHome', () => {
  render(<IconHome />);
});

it('renders IconLaptopCode', () => {
  render(<IconLaptopCode />);
});

it('renders IconLink', () => {
  render(<IconLink />);
});

it('renders IconLinkedIn', () => {
  render(<IconLinkedIn />);
});

it('renders IconObjectGroup', () => {
  render(<IconObjectGroup />);
});

it('renders IconPlay', () => {
  render(<IconPlay />);
});

it('renders IconSearch', () => {
  render(<IconSearch />);
});

it('renders IconSearchPlus', () => {
  render(<IconSearchPlus />);
});

it('renders IconSpinner', () => {
  render(<IconSpinner />);
});

it('renders IconTimes', () => {
  render(<IconTimes />);
});

it('renders IconTimesCircle', () => {
  render(<IconTimesCircle />);
});

it('renders IconUser', () => {
  render(<IconUser />);
});

it('renders IconUserTie', () => {
  render(<IconUserTie />);
});

it('renders IconLogo', () => {
  render(<IconLogo />);
});
