import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      avatar=""
      socialButtons=""
      title={
        <>
          <GradientText>Supercharge</GradientText> Your Shopify Experience with
          AppVenture Labs
        </>
      }
      description={
        <>
          Welcome to AppVenture Labs - your gateway to advanced, feature-rich
          Shopify applications. We empower businesses, from start-ups to
          established enterprises, with the tools needed to make the most of
          their online retail platforms and outshine the competition.
        </>
      }
    />
  </Section>
);

export { Hero };
