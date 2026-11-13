import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Bienvenida',
    to: '/docs/bienvenida/que-es-urubots',
    description:
      'Conocé qué es UruBots, las normas de seguridad y qué hacer en tu primera semana.',
  },
  {
    title: 'Rutas formativas',
    to: '/docs/rutas/primeros-pasos',
    description:
      'Cursos prácticos de Git y GitHub, Linux y Python, ROS 2, autos autónomos y RoboCup @Home.',
  },
  {
    title: 'Plantillas y reuniones',
    to: '/docs/plantillas/plantilla-tarea',
    description:
      'Modelos estándar para tareas, actas de reunión y decisiones técnicas.',
  },
];

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
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
