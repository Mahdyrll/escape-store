// import DynamicPack from '../DynamicPackage.js'
import Next from '../Icon/next-14.svg'
import Prev from '../Icon/previous-page-17.svg'
import pack from '../Image/Frame 16.png'
import Frame17 from '../Image/Frame 16 (1).png'
import Frame18 from '../Image/Frame 16 (2).png'
import Frame19 from '../Image/Frame 16 (3).png'
import { useState } from 'react'
import Group35 from '../Image/Group 35.png'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'

export default function Packages () {
    const info = [
        {
            id: 1,
            image: pack,
            title: 'بسته واحد برای شروع تبلیغات شما',
            price: '$۸۹.۰۰',
            userNumber: '۲۰۰K+ users'
        },

        {
            id: 2,
            image: Frame17,
            title: 'بسته حق بیمه به ارتقای خود را تقویت کنید',
            price: '$۱۴۹.۰۰',
            userNumber: '۹۹K+ users'
        },

        {
            id: 3,
            image: Frame18,
            title: 'بسته استاندارد به کسب و کار خود را رشد دهید',
            price: '$۱۰۹.۰۰',
            userNumber: '۱۴۰K+ users'
        },

        {
            id: 4,
            image: Frame19,
            title: 'بسته اولیه',
            price: '$۱۰۹.۰۰'
        }
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === info.length - 1 ? 0 : prevIndex + 1));
    };
    
    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? info.length - 1 : prevIndex - 1));
    };
    console.log(handleRightClick)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className='package-section'>
            <div className='package-title'>
                <p>بسته های محبوب</p>
                <div className='package-arrow'>
                    <img onClick={handleLeftClick} src={Prev} alt='next' />
                    <img onClick={handleRightClick} src={Next} alt='prev' />
                </div>
            </div>
            <div className="packages">
                {info.map((item, index) => (
                    <div key={item.id} className={`package-box ${index === currentIndex ? 'selected' : ''}`}>
                        <img src={item.image} alt="iasdf" />
                        <p>{item.title}</p>
                        <div className="package-price">
                            <p>{item.price}</p>
                            <div className="package-users">
                                <p>{item.userNumber}</p>
                                <img src={Group35} alt="user" />
                            </div>
                        </div>
                    </div>
                ))}
                {/* <div className='package-box'>
                    <img src={Frame19} alt="iasdf" />
                    <p>بسته اولیه</p>
                    <div className="package-price">
                        <p>$۱۰۹.۰۰</p>
                    </div>
                </div> */}
            </div>
            <div className='mobile-packages'>
                <Slider {...settings}>
                    {info.map((item) => (
                        <div key={item.id} className={'package-box'}>
                            <img src={item.image} alt="iasdf" />
                            <p>{item.title}</p>
                            <div className="package-price">
                                <p>{item.price}</p>
                                <div className="package-users">
                                    <p>{item.userNumber}</p>
                                    <img src={Group35} alt="user" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}