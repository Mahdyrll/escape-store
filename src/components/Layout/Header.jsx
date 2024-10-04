import Logo from '../Icon/Logo.svg'
import Menu from '../Icon/icons8-hamburger-menu.svg'

export default function Header () {
    return (
        <div className='header-container'>
            <div className='header'>
                <div className='logo-title'>
                    <img src={Logo} />
                    <h3>فروشگاه اسکیپ</h3>
                </div>
                <div className='navbar'>
                    <a href='#'>خانه</a>
                    <a href='#'>پشتیبانی</a>
                    <a href='#'>نظرات</a>
                    <a href='#'>سرویس</a>
                    <a href='#'>درباره ما</a>
                </div>
                <div className='sign-in-up'>
                    <a href='#'>شروع رایگان</a>
                    <a href='#'>ورود</a>
                </div>
                <img src={Menu} />
            </div>
        </div>
    )
}