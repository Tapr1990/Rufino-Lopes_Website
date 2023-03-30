import hero from '../assets/hero.jpg';
import '../styles/hero.css';




const Hero: React.FC = () => {
    return(
        <div>
            <div className="hero_container bg-no-repeat bg-center bg-cover flex justify-center items-center flex-col"
                style={{backgroundImage: `url(${hero})`}}
            >
                <h2 className="m-5 text-6xl font-bold text-white relative z-10">Construimos os seus Sonhos</h2>
                <button className="bg-red-500 hover:bg-red-700 text-white
                    font-bold py-4 px-6 rounded relative z-10"
                >Para mais informações</button>
            </div>
        </div>

    )
}
                

export default Hero;