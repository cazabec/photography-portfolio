import styled from '@emotion/styled'
import React from 'react'

const Div = styled.div`
  div {
    text-align: center;
    padding: 150px;
    font: 20px Helvetica, sans-serif;
    color: #333;
  }
  h1 {
    font-size: 50px;
  }
  section {
    padding-top: 40px;
  }
  article {
    display: block;
    text-align: left;
    width: 650px;
    margin: 0 auto;
  }
  a {
    color: #dc8100;
    text-decoration: none;
  }
  a:hover {
    color: #333;
    text-decoration: none;
  }
`

const Maintenance = () => 
<Div>
  <div>
    <article>
        <h1>Le site sera bientôt de retour !</h1>
        <section>
            <p>Nous sommes actuellement en train de mettre à jour le site web, pour voir mes dernières photos, rendez vous ici: <a href="http://www.hanslucas.com/lcazabet/photo">Lilian Cazabet - Hans Lucas</a>, le site sera bientôt de retour en ligne</p>
            <br />
            <br />
            <p>&mdash; Lilian Cazabet</p>
        </section>
    </article>
  </div>
</Div>
;

export default Maintenance;
