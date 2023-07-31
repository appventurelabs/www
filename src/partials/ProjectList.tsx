import {
  ColorTags,
  GradientText,
  Section,
  Tags,
} from 'astro-boilerplate-components';

import { Project } from '@/components/Project';

const ProjectList = () => (
  <Section
    title={
      <>
        Our ⚡ <GradientText>High-Powered Apps</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="What's Left"
        link="https://apps.shopify.com/whats-left"
        description="What's Left is a user-friendly tool that helps you keep track of your stock. It looks at your sales and what you have in store to predict when you'll run out. This helps you reorder goods in good time, so you're less likely to run short. With this tool, you can stay on top of your stock levels. No need to worry about complex calculations or figures."
        img={{
          src: '/assets/images/whats-left-logo.png',
          alt: "What's Left Inventory Stock Forecast",
        }}
        category={
          <>
            <Tags color={ColorTags.EMERALD}>Shopify</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
