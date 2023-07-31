import type { MarkdownInstance } from 'astro';
import { GradientText, Section } from 'astro-boilerplate-components';

import { BlogGallery } from '@/components/BlogGallery';
import type { IFrontmatter } from '@/types/IFrontMatter';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Posts and Updates</GradientText>
        </div>

        <div className="text-sm">
          <a href="/posts/">View all Posts →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentPosts };
