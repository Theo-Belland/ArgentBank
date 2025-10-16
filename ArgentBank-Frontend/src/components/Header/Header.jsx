import { Link } from "react-router-dom";
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import '../../style/main.css'

function Header(){
    return (
        <Header className= {StylePropertyMap.header}>
            <Logo />
            <Nav />
        </Header>
    )
}

export default Header