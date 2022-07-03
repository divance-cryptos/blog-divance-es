import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <p>
        Divance es un communidad sobre desarollo de software, gestión de
        proyectos.
      </p>
    </Content>
  </Main>
);

export default About;
