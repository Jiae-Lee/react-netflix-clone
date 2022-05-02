import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import "./Nav.css"

function Nav() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 50){
                setShow(true)
            }else{
                setShow(false)
            }
        })
        return ()=> {
            window.removeEventListener("scroll", ()=> {})
        }
    },[])
    
    const HandleChange=(e)=>{
        setSearchValue(e.target.value)
        navigate(`/search?q=${e.target.value}`)
    }

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
        <img 
            alt='Netflix logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png'
            className='nav__logo'
            onClick={()=> navigate('/')}
        />
        <input 
            value={searchValue}
            onChange={HandleChange}
            className="nav__input"
            type="text"
            placeholder="영화를 검색해주세요"
        />
        <img 
            alt='User logged'
            src='https://jhleeeme.github.io/assets/img/uploads/profile.png'
            className='nav__avatar'
        />
    </nav>
  )
}

export default Nav