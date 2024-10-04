import Frame from '../Image/Frame.png'
import Ellipse from '../Image/Ellipse 11.png'

export default function MapSection () {
    return (
        <div className='map-section'>
            <div className='map-title'>
                <p>ارتقای جهانی</p>
                <img src={Ellipse} alt='ellipse' />
            </div>
            <p>کسب‌وکارها معمولاً برند، محصولات و خدمات خود را با شناسایی مخاطبان تبلیغ می‌کنند. جای تعجب نیست که استراتژی <br />ارتقاء یکی از مهمترین فرآیندهای بازاریابی است.</p>
            <img src={Frame} alt='frame' />
        </div>
    )
}