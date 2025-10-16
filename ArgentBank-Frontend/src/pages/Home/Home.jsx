import Hero from '../../components/Hero/HeroIndex'
import Features from '../../components/Features/FeaturesIndex.jsx'
import {heroData, featureData} from '../../assets/Data/homeData.js'


/*Page Accueil */

const Home = () => {
    return (
        <>
            <Hero 
            subtitles={heroData.subtitles}
            text={heroData.text}
            />
            <Features features={featureData} />
        </>
    )
}

export default Home