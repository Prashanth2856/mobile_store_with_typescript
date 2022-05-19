import React from 'react'
import {useNavigate} from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  const navigate = useNavigate()

  const goToHomepage = () => navigate('/')

  const handleLogin = () => navigate('/login')

  const handleSignup = () => navigate('/signup')

  return (
    <div>
      <div className={styles.Navbar}>
        <div onClick={goToHomepage}>
          <img src="https://www.seekpng.com/png/full/355-3556294_mad-mobile-inc-mad-mobile-logo.png" alt="Mad Modile Logo" />
        </div>
        <div className={styles.navLinks}>
          <div>English</div>
          <div>INR(₹)</div>
          <div>Wishlist</div>
          <div onClick={() => { navigate('/cart') }}>Cart</div>
          <div>Help</div>
          <div onClick={handleLogin} >Log In</div>
          <button onClick={handleSignup}>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar