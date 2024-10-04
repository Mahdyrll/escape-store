import Play from '../Icon/Polygon 1.svg'
import Quote from '../Icon/straight-quotes 1.svg'
import Star from '../Icon/star.svg'
import HeroMain from '../Image/hero main component.png'
import Group15 from '../Image/Group 15.png'
import Group33 from '../Image/Group 33760.png'

export default function StartSection () {
    return (
        <div className='start-container'>
            <div className='start-right'>
                <div className='start-title'>
                    <h2>مکانی عالی برای ارتقای کسب و کار شما✌️</h2>
                    <p>کسب‌وکارها معمولاً برند، محصولات و خدمات خود را با شناسایی مخاطبان تبلیغ می‌کنند.</p>
                </div>
                <div className='start-btn'>
                    <a>شروع کنید</a>
                    <div className='start-play'>
                        <img src={Play} />
                    </div>
                </div>
                <div className='start-cm'>
                    <div className='start-cm-box'>
                        <img src={Quote} />
                        <div className='start-rate'>
                            <p>۴.۹</p>
                            <img src={Star} />
                        </div>
                    </div>
                    <p>فروشگاه رابط کاربری آماده اسکیپ با اسکیپ حرفه ای باش</p>
                </div>
            </div>
            <div className='start-left'>
                <img src={HeroMain} />
                <div className='start-img'>
                    <img src={Group15} />
                    <img src={Group33} />
                </div>
            </div>
        </div>
    )
}