import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa'; // Import icons
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/FashionablyNate"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.icon}>
            <FaGithub />
          </a>
          <a
            href="https://gitlab.com/nspelts"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitLab"
            className={styles.icon}>
            <FaGitlab />
          </a>
          <a
            href="https://linkedin.com/in/nathanspelts"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.icon}>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Home Page for nathanspelts.com">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
