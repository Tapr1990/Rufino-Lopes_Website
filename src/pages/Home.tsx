import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Projetcs from '../components/Projects';

const Home: React.FC = () => {
    return(
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section>
                    <Hero />
                </section>
                <section>
                    <Projetcs />
                </section>

            </main>
        </>
            
    )
}

export default Home;