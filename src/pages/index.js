import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import {translate} from '@docusaurus/Translate';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroBlob} aria-hidden="true" />
        <Heading as="h1" className={styles.heroTitle}>
          {translate({
            id: 'homepage.hero.titlePrefix',
            message: 'Documentación de',
            description: 'Hero title prefix on the homepage',
          })}{' '}
          <span className={styles.heroGradient}>URUBOTS</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          {translate({
            id: 'homepage.hero.subtitle',
            message: 'Equipo de competencias en robótica ubicado en UTEC.',
            description: 'Hero subtitle on the homepage',
          })}
        </p>
        <div className={styles.buttons}>
          <Link className={styles.primaryButton} to="/docs/intro">
            {translate({
              id: 'homepage.hero.cta',
              message: 'Empezar',
              description: 'Primary call-to-action button label',
            })}
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
  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: 'Documentación',
        description: 'Homepage document title',
      })}
      description={translate({
        id: 'homepage.description',
        message: 'Documentación de UruBots, el equipo de robótica de UTEC.',
        description: 'Homepage meta description',
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
