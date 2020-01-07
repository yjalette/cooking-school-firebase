import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';

const text = ', a Cretan native from Greece, introduces an innovative approach to Greek-inspired Mediterranean cuisine at Midtown West restaurant Ousia. “My hope is for guests to indulge in Greek food with some familiarity, thanks to American ingredients that help them connect to, and understand, each dish,” Vourliotaki explains. Aligning with the restaurant’s overall approach, the seasoned chef’s culinary style combines modern techniques, regional influences with a focus on the Mediterranean, and her rich Cretan heritage to present a one-of-a-kind take on Greek cooking that balances modernity with tradition. Alongside ingredients imported directly from Greece, methods from other European countries, such as France and Germany, also influence her kitchen magic. Vourliotaki’s foray into the culinary industry began happenstance, when a friend recommended her for an entry-level kitchen position at a restaurant in her native Athens, Greece, in 2006. Quickly hooked, she enrolled in the city’s Le Monde Institute of Hotel and Tourism Studies, earning her formal degree in culinary studies in 2008. With a solid foundation, Vourliotaki moved on to a five-star Small Luxury Hotels Collection property, Rodos Park Suites and Spa, building her practical skills and gourmet techniques. She also cut her teeth alongside acclaimed Greek chefs at fine dining restaurants including Kiku—the first Japanese restaurant in Athens, Vasilainas, and Gaspar Food and Mood. By the fall of 2011, Vourliotaki’s expertise caught the attention of the “MasterChef Greece” television series, which brought her onboard as a food expert. Hungry to learn more, Vourliotaki traveled to Germany in November 2012, spending a year as chef de partie at Freihaus Brenner Restaurant, located south of Munich. She then relocated to the city to study under Michelin-starred chef Alfons Schuhbeck at Schuhbecks Südtiroler Stuben. Come spring 2014, Vourliotaki set her sights on the U.S.A. The chef’s first experience in New York City came at highly regarded seafood-centric Oceana, at which chef Ben Pollinger taught her countless lessons in the kitchen. Roughly one year later, Vourliotaki hopped back across the Atlantic, this time landing in Paris at Michelin-starred Hélène Darroze. Working under its eponymous chef, who earned recognition as “Veuve Clicquot World’s Best Female Chef” at The World’s 50 Best in 2015, empowered Vourliotaki like nothing else before, with an ambitious environment and mostly female kitchen staff. Leaving Hélène late in 2015, Vourliotaki picked up a restaurant post in Monte Carlo, Monaco, before heading back to Greece by way of Mykonos. She returned to the U.S.A. to join the Ousia team in early 2017, eager to unleash her multi-faceted, yet homegrown approach to cooking in The Big Apple.'

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [readMore, setReadMore] = useState(" read more...")
    const handleClick = () => {
        setIsVisible(true);
        setReadMore(null)
    }
    return (
        <div className="flex">
            <Jumbotron>
                <h1>Vasiliki Vourliotaki</h1>
                <p><strong>Chef de Cuisine Vasiliki Vourliotaki</strong>{ !isVisible ? text.slice(0, 905): text}<span onClick={handleClick} className="text-danger" style={{cursor: 'pointer'}}>{readMore}</span></p>
            </Jumbotron>
        </div>
    )
}





export default About;