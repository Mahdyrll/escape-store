import DynamicHowItWorks from '../DynamicHowItWorks'
import Ellipse11 from '../Image/Ellipse 11.png'
import Group20 from '../Image/Group 20.png'
import Group21 from '../Image/Group 20 (1).png'
import Group22 from '../Image/Group 20 (2).png'

export default function () {
    const BoxOne = {
        img: Group20,
        title: 'با هم رشد کنید',
        description: 'پیامک گاهی اوقات می تواند به عنوان یک روش غیر شخصی برای برقراری ارتباط باشد می تواند بسیار سودمند باشد.'
    }

    const BoxTwo = {
        img: Group21,
        title: 'قرار ملاقات را تعیین کنید',
        description: 'وقتی اطلاعات مهمی برای انتقال به افراد خود دارید، پیامک می‌تواند راهی عالی برای انجام آن باشد.'
    }

    const BoxThree = {
        img: Group22,
        title: 'بسته ها را انتخاب کنید',
        description: 'کسب و کارها عموماً برند، محصولات و خدمات خود را با شناسایی مخاطب یا کاربران تبلیغ می کنند.'
    }

    return (
        <div className='how-container'>
            <div className='how-title'>
                <h3>چگونه کار می کند</h3>
                <p>کسب‌وکارها معمولاً برند، محصولات و خدمات خود را با شناسایی مخاطبان تبلیغ می‌کنند.</p>
                <img src={Ellipse11} alt='qw' />
            </div>
            <div className='how-it-works'>
                <DynamicHowItWorks
                Img={BoxOne.img}
                Title={BoxOne.title}
                Description={BoxOne.description} />
                <DynamicHowItWorks
                Img={BoxTwo.img}
                Title={BoxTwo.title}
                Description={BoxTwo.description} />
                <DynamicHowItWorks
                Img={BoxThree.img}
                Title={BoxThree.title}
                Description={BoxThree.description} />
            </div>
        </div>
    )
}