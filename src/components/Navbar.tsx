import '../App.css'
import logo from '../assets/rufino.jpg';



const Navbar: React.FC = () => {
    return(
        <div className="h-20 flex justify-between items-center px-52 py-8">
            <div>
                <h1><img className="w-1/3" src={logo} alt="" /></h1> 
            </div>
            <nav>
                <ul className="flex space-x-5">
                    <li className='text-xl'>Rufino&Lopes</li>
                    <li className='text-xl'>Serviços</li>
                    <li className='text-xl'>Portofólio</li>
                    <li className='text-xl'>Contactos</li>
                </ul>
            </nav>
        </div>
    )
}
                

export default Navbar;