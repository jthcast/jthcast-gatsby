import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { HelmetProvider } from 'react-helmet-async';
import Meta from '.';

it('renders Meta', () => {
  render(
    <RecoilRoot>
      <HelmetProvider>
        <Meta title="title" description="description" />
      </HelmetProvider>
    </RecoilRoot>
  );
});

it('renders Meta with fbAppId state', () => {
  render(
    <RecoilRoot>
      <HelmetProvider>
        <Meta fbAppId="fbAppId" />
      </HelmetProvider>
    </RecoilRoot>
  );
});

it('renders Meta with image state', () => {
  render(
    <RecoilRoot>
      <HelmetProvider>
        <Meta image="../testImage.svg" />
      </HelmetProvider>
    </RecoilRoot>
  );
});

it('renders Meta with video state', () => {
  render(
    <RecoilRoot>
      <HelmetProvider>
        <Meta video="https://testvideo.test" />
      </HelmetProvider>
    </RecoilRoot>
  );
});
