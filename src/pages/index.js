import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroBlob} aria-hidden="true" />
        <Heading as="h1" className={styles.heroTitle}>
          Documentación de <span className={styles.heroGradient}>URUBOTS</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          Equipo de competencias en robótica ubicado en UTEC.
        </p>
        <div className={styles.buttons}>
          <Link className={styles.primaryButton} to="/docs/intro">
            Empezar
          </Link>
          <Link className={styles.secondaryButton} to="https://urubots.uy/">
            urubots.uy
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Documentación"
      description="Documentación de UruBots, el equipo de robótica de UTEC.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
