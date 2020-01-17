import React from 'react';
import SponsorsContainer from './container/sponsors-container.view';
// tera
import MLH from '../../../assets/images/sponsors/tera/mlh.svg';
import CIED from '../../../assets/images/sponsors/tera/cied.svg';
import Amazon from '../../../assets/images/sponsors/tera/amazon.svg';
import Poly from '../../../assets/images/sponsors/tera/poly.svg';
// giga
import ProductOps from '../../../assets/images/sponsors/giga/productops.svg';
import Baskin from '../../../assets/images/sponsors/giga/baskin.svg';
import Looker from '../../../assets/images/sponsors/giga/looker.svg';
// kilo
import GradDivision from '../../../assets/images/sponsors/kilo/gradDiv.svg';
import CITRIS from '../../../assets/images/sponsors/kilo/citris.svg';
import ChooseSantaCruz from '../../../assets/images/sponsors/kilo/chooseSantaCruz.svg';
import Microsoft from '../../../assets/images/sponsors/kilo/microsoft.svg';
import GoogleCloud from '../../../assets/images/sponsors/kilo/googleCloud.svg';
import SouthSwell from '../../../assets/images/sponsors/kilo/southSwell.svg';
// mega
import EarthHacks from '../../../assets/images/sponsors/mega/earthHacks.svg';
import iDTech from '../../../assets/images/sponsors/mega/idTech.svg';
import TheArts from '../../../assets/images/sponsors/mega/theArts.svg';
import LifeAid from '../../../assets/images/sponsors/mega/lifeAid.svg';
import SCTB from '../../../assets/images/sponsors/mega/santaCruzTechBeat.svg';
import SantaCruzWorks from '../../../assets/images/sponsors/mega/santaCruzWorks.svg';
import Notivize from '../../../assets/images/sponsors/mega/notivize.svg';
import Stickermule from '../../../assets/images/sponsors/mega/stickermule.svg';
import Shawee from '../../../assets/images/sponsors/mega/shawee.svg';
import Guayaki from '../../../assets/images/sponsors/mega/guayaki.svg';
import Pathrise from '../../../assets/images/sponsors/mega/pathrise.svg';
import RippleMatch from '../../../assets/images/sponsors/mega/ripplematch.svg';

const logos = [
  {
    tier: 'tera',
    logo: MLH,
    URL: 'https://mlh.io/',
    name: 'Major League Hacking',
    class: 'mlh',
  },
  {
    tier: 'tera',
    logo: CIED,
    URL: 'https://cied.ucsc.edu/',
    name: 'Center for Innovation and Entrepreneurial Development',
    class: 'cied',
  },
  {
    tier: 'tera',
    logo: Amazon,
    URL: 'https://aws.amazon.com/education/awseducate/',
    name: 'Amazon',
    class: 'amazon',
  },
  {
    tier: 'tera',
    logo: Poly,
    URL: 'https://www.poly.com/us/en',
    name: 'Poly',
    class: 'poly',
  },
  {
    tier: 'giga',
    logo: ProductOps,
    URL: 'https://www.productops.com/',
    name: 'productOps',
    class: 'productops',
  },
  {
    tier: 'giga',
    logo: Baskin,
    URL: 'https://www.soe.ucsc.edu/',
    name: 'Jack Baskin School of Engineering',
    class: 'baskin',
  },
  {
    tier: 'giga',
    logo: Looker,
    URL: 'https://looker.com/',
    name: 'Looker',
    class: 'looker',
  },
  {
    tier: 'kilo',
    logo: GradDivision,
    URL: 'https://graddiv.ucsc.edu/',
    name: 'UCSC Division of Graduate Studies',
    class: 'gradDiv',
  },
  {
    tier: 'kilo',
    logo: CITRIS,
    URL: 'https://citris-uc.org/',
    name: 'CITRIS and the Banatao Institute',
    class: 'citris',
  },
  {
    tier: 'kilo',
    logo: ChooseSantaCruz,
    URL: 'https://choosesantacruz.com/',
    name: 'Santa Cruz Economic Development',
    class: 'chooseSC',
  },
  {
    tier: 'kilo',
    logo: Microsoft,
    URL: 'https://microsoft.com/',
    name: 'Microsoft',
    class: 'microsoft',
  },
  {
    tier: 'kilo',
    logo: GoogleCloud,
    URL: 'https://cloud.google.com/',
    name: 'Google Cloud',
    class: 'gcp',
  },
  {
    tier: 'kilo',
    logo: SouthSwell,
    URL: 'https://www.facebook.com/South-Swell-Ventures-422070777891517/',
    name: 'South Swell Ventures',
    class: 'southSwell',
  },
  {
    tier: 'mega',
    logo: EarthHacks,
    URL: 'https://earthhacks.vcu.edu/',
    name: 'EarthHacks',
    class: 'earthHacks',
  },
  {
    tier: 'mega',
    logo: iDTech,
    URL: 'https://www.idtech.com/',
    name: 'iD Tech',
    class: 'iD',
  },
  {
    tier: 'mega',
    logo: TheArts,
    URL: 'https://arts.ucsc.edu/',
    name: 'UCSC Arts Division',
    class: 'theArts',
  },
  {
    tier: 'mega',
    logo: LifeAid,
    URL: 'https://www.lifeaidbevco.com/',
    name: 'LIFEAID',
    class: 'lifeaid',
  },
  {
    tier: 'mega',
    logo: SCTB,
    URL: 'http://www.santacruztechbeat.com/',
    name: 'Santa Cruz Tech Beat',
    class: 'sctb',
  },
  {
    tier: 'mega',
    logo: SantaCruzWorks,
    URL: 'https://www.santacruzworks.org/',
    name: 'Santa Cruz Works',
    class: 'scw',
  },
  {
    tier: 'mega',
    logo: Notivize,
    URL: 'https://www.notivize.com/',
    name: 'Notivize',
    class: 'notivize',
  },
  {
    tier: 'mega',
    logo: Stickermule,
    URL: 'https://www.stickermule.com/',
    name: 'Stickermule',
    class: 'stickermule',
  },
  {
    tier: 'mega',
    logo: Shawee,
    URL: 'https://shawee.io/',
    name: 'Shawee',
    class: 'shawee',
  },
  {
    tier: 'mega',
    logo: Guayaki,
    URL: 'https://guayaki.com/',
    name: 'Guayaki',
    class: 'guayaki',
  },
  {
    tier: 'mega',
    logo: Pathrise,
    URL: 'https://www.pathrise.com/',
    name: 'Pathrise',
    class: 'pathrise',
  },
  {
    tier: 'mega',
    logo: RippleMatch,
    URL: 'https://ripplematch.com/',
    name: 'RippleMatch',
    class: 'ripplematch',
  },
];

const SponsorsView: React.FC = () => {
  return (
    <div className="sponsors__container">
      <SponsorsContainer logos={logos} />
    </div>
  );
};

export default SponsorsView;
