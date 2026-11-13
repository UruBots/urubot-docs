import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

function Feature({title, to, description}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={to} className={styles.cardLink}>
        <div className={styles.card}>
          <Heading as="h3" className={styles.cardTitle}>
            {title}
          </Heading>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  const features = [
    {
      title: translate({
        id: 'homepage.features.welcome.title',
        message: 'Bienvenida',
        description: 'Feature card title',
      }),
      to: '/docs/bienvenida/que-es-urubots',
      description: translate({
        id: 'homepage.features.welcome.description',
        message:
          'Conocé qué es UruBots, las normas de seguridad y qué hacer en tu primera semana.',
        description: 'Feature card description',
      }),
    },
    {
      title: translate({
        id: 'homepage.features.routes.title',
        message: 'Rutas formativas',
        description: 'Feature card title',
      }),
      to: '/docs/rutas/primeros-pasos',
      description: translate({
        id: 'homepage.features.routes.description',
        message:
          'Cursos prácticos de Git y GitHub, Linux y Python, ROS 2, autos autónomos y RoboCup @Home.',
        description: 'Feature card description',
      }),
    },
    {
      title: translate({
        id: 'homepage.features.templates.title',
        message: 'Plantillas y reuniones',
        description: 'Feature card title',
      }),
      to: '/docs/plantillas/plantilla-tarea',
      description: translate({
        id: 'homepage.features.templates.description',
        message:
          'Modelos estándar para tareas, actas de reunión y decisiones técnicas.',
        description: 'Feature card description',
      }),
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
