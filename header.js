import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Logo from '../../assets/images/img.png';
import CountryDropdown from '../CountryDropdown';
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { BsBasket3Fill } from "react-icons/bs";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import {MyContext} from "../../App";


const Header = () => {

    const { isLogin } = useContext(MyContext);

    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="Container">
                        <p className="mb-0 mt-0 text-center">Due to the <b>Under Processing,</b> 
                            order may be processed with a sligh dealay</p>

                    </div>
                </div>
                <header className="header">
                    <div className="Container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt='Logo' /> </Link>
                            </div>

                            <div className='center col-sm-10 d-flex align-items center part2'>

                        
                                <CountryDropdown />
                                <SearchBox />

                                <div className='part3 d-flex align-items-center ml-5 '>
                                    {
                                        isLogin ? <Button className='circle mr-3'><FiUser /></Button> :
                                           <Link to="/signIn"><Button className='btn-blue btn-round mr-3'>Sign In</Button></Link>
                                    }
                                    

                                    <Link to="/cart">
                                        <div className='ml-auto cartTab d-flex align-items center'>
                                            <span className='price'>$5.92</span>
                                            <div className='position-relative ml-2'>
                                                <Button className='circle'><BsBasket3Fill /></Button>
                                                <span className='count d-flex align-items center justify-content-center'>9</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                <Navigation/>



            </div>
        </>
    )
}

export default Header;
