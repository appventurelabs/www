import { FooterCopyright } from '@/components/FooterCopyright';
import { Section } from '@/components/Section';
import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <div className="pt-5">
    <Section>
      <FooterCopyright site_name={AppConfig.site_name} />
    </Section>
  </div>
);

export { Footer };
