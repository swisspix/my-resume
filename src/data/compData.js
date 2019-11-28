import React from 'react'
import {Anchor} from 'antd'

import CSSLogo from '../img/logos/css.png'
import HTMLLogo from '../img/logos/html.png'
import JSLogo from '../img/logos/javascript.png'
import PHPLogo from '../img/logos/php.png'
import ReactLogo from '../img/logos/react.png'
import Wordpress from '../img/logos/wordpress.png'
import XDLogo from '../img/logos/xd.png'

import AELogo from '../img/logos/after-effects.png'
import PremiereLogo from '../img/logos/premiere.png'

import DocLogo from '../img/logos/doc.png'
import AILogo from '../img/logos/illustrator.png'
import IDLogo from '../img/logos/indesign.png'
import PPTLogo from '../img/logos/ppt.png'
import XLSLogo from '../img/logos/xls.png'

import Prestashop from '../img/logos/prestashop.png'
import Channable from '../img/logos/channable.jpg'
import Beezup from '../img/logos/beezup.png'



import {Icon, Avatar, Tooltip   } from 'antd';
const {Link} = Anchor

const WebLogos = [
    {
      id:0,
      src:HTMLLogo,
      nom:'HTML'
    },
    {
      id:1,
      src:CSSLogo,
      nom:'CSS'
    },
    {
      id:2,
      src:PHPLogo,
      nom:'PHP'
    },
    {
      id:3,
      src:JSLogo,
      nom:'Javascript'
    },
    {
      id:4,
      src:ReactLogo,
      nom:'React JS'
    },
    {
      id:5,
      src:Wordpress,
      nom:'Wordpress'
    },
    {
      id:6,
      src:XDLogo,
      nom:'Adobe XD'
    },
  ]
const VideoLogos = [
    {
      id:0,
      src:PremiereLogo,
      nom:'Adobe Premiere Pro'
    },
    {
      id:1,
      src:AELogo,
      nom:'Adobe After Effets'
    },
]
const CDLogos = [
    {
      id:0,
      src:AILogo,
      nom:'Adobe Illustrator'
    },
    {
      id:1,
      src:IDLogo,
      nom:'Adobe InDesign'
    },
    {
      id:2,
      src:DocLogo,
      nom:'Microsoft Word'
    },
    {
      id:3,
      src:XLSLogo,
      nom:'Microsoft Excel'
    },
    {
      id:4,
      src:PPTLogo,
      nom:'Microsoft PowerPoint'
    },
]
const ECLogos = [
  {
    id:0,
    src:Prestashop,
    nom:'Prestashop'
  },
  {
    id:1,
    src:Wordpress,
    nom:'Wordpress'
  },
  {
    id:2,
    src:Beezup,
    nom:'Beezup'
  },
  {
    id:3,
    src:Channable,
    nom:'Channable'
  },
]

const webavatars = WebLogos.map(item =>
  <Tooltip key={item.id} title={item.nom}>
    <Avatar shape="square" src={item.src} />{" "}
  </Tooltip>
)
const videoavatars = VideoLogos.map(item =>
  <Tooltip key={item.id} title={item.nom}>
    <Avatar shape="square" src={item.src} />{" "}
  </Tooltip>
)
const cdavatars = CDLogos.map(item =>
  <Tooltip key={item.id} title={item.nom}>
    <Avatar shape="square" src={item.src} />{" "}
  </Tooltip>
)
const ecavatar = ECLogos.map(item =>
  <Tooltip key={item.id} title={item.nom}>
    <Avatar shape="square" src={item.src} />{" "}
  </Tooltip>
)

export const CompPanelData = [
  {
    id:0,
    header:'Web',
    icon:<Icon type="chrome" />,
    text:`Avec 2 ans d'experience dans le domaines de la création et de la gestion web. Je suis toujours en quête de nouveaux défis`,
    listAvatars:webavatars
  },
  {
    id:1,
    header:"Video",
    icon:<Icon type="video-camera" />,
    text:`La vidéo a toujours été une de mes plus grandes passions. Que ce soit derrière la caméra, en post production ou sur un projet de motion design. ${<Link href="#acceuil" title="Acceuil"/>}`,
    listAvatars:videoavatars
  },
  {
    id:2,
    header:"Communication",
    icon:<Icon type="picture" />,
    text:`Création et animation de logo, composition d'affiches, de pages web... Je me fais un plaisir de réfléchir à des solutions viables et esthétiques dans la création Web.`,
    listAvatars:cdavatars
  },
  {
    id:3,
    header:"E-Commerce",
    icon:<Icon type="shop" />,
    text:`J'ai su développer des compétences dans la gestion de E-commerce d'un magasin en ligne. Du travail de gestion d'interface, d'indexation de produits et d'optimisation de l'UX ont été de mise. `,
    listAvatars:ecavatar
  },
]