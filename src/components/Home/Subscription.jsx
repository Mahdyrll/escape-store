import University from '../Image/university-study-abroad-lifestyle-concept-satisfied-happy-asian-male-student-glasses-shirt-showing-thumbs-up-approval-likes-studying-college-holding-laptop-backpack 1.png'
import Ellipse from '../Image/Ellipse 11.png'

export default function Subscription () {
    return (
        <div className='subscription'>
            <div className='sub-container'>
                <div className='sub-right'>
                    <div className='sub-title'>
                        <p>مشترک شدن در خبرنامه</p>
                        <img src={Ellipse} alt='ellipse11' />
                    </div>
                    <p>کسب‌وکارها معمولاً برند، محصولات و خدمات خود را با شناسایی مخاطبان تبلیغ می‌کنند. جای تعجب نیست که استراتژی ارتقاء یکی از مهمترین فرآیندهای بازاریابی است.</p>
                    <div className='sub-form'>
                        <form action='#'>
                            <input type="email" name="email" placeholder="آدرس ایمیل را وارد کن" />
                            <input type="submit" value={'اشتراک در'} />
                        </form>
                    </div>
                </div>
                <div className='sub-left'>
                    <img src={University} alt='university' />
                </div>
            </div>
        </div>
    )
}