import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
}; 

const FeatureList: FeatureItem[] = [
  {
    title: 'Serviços',
    Svg: require('@site/static/img/servicos.svg').default,
    description: (
      <>
        OFICINA WINRAR, foi criada para ter o melhor servço possível. Um conjunto de possibilidades para a sua satisfação.
      </>
    ),
  },
  {
    title: 'Cortesia',
    Svg: require('@site/static/img/cortesia.svg').default,
    description: (
      <>
        Viaturas de cortesia para substituição do seu veículo, ou aluguer. <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Recrutamento',
    Svg: require('@site/static/img/recrutamento.svg').default,
    description: (
      <>
        Desejamos recrutar pessoas qualificadas para fazerem parte da nossa empresa, e evoluirem com a mesma.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
