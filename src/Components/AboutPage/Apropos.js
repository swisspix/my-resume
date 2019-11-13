import React from 'react'
import {Typography} from 'antd'
const { Title, Paragraph, Text } = Typography;

export default function Apropos() {
    return (
        <>
            <Paragraph>
                <i>Bonjour et bienvenue !</i>
            </Paragraph>
            <Paragraph>
                Je m’appelle Antoine Lot j’ai 25 ans et j’ai été diplômé en 2018 comme <b>ingénieur des médias</b> à <b>la HEIG-VD</b> d’Yverdon en Suisse. 
                Passionné par les <b>nouvelles technologies</b>, <b>le monde du design</b> et la <b>culture web</b>.
            </Paragraph>
            <Paragraph>
                Passionné par le monde de la <b>communication</b>, la <b>vidéo</b>, et plus récemment par le <b>développement web</b>, me voilà aujourd’hui en quête de nouvelles expériences qui puissent enrichir mes compétences dans le domaine du digital. 
                Vous trouverez ici un résumé de mon parcours professionnel ainsi qu’une sélection des projets vidéo dont j’ai été responsable ces 5 dernières années.
            </Paragraph>
            <Paragraph>
            Faire vivre mes idées, être curieux les mettre en pratique à travers des opportunités professionnelles 
            constituent aujourd’hui un moteur pour me développer autant humainement que professionnellement.
            </Paragraph>
            <Paragraph>
                Bonne visite ! 
            </Paragraph>
            <Text mark>Antoine Lot</Text>
        </>
    )
}