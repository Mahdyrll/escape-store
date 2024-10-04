import DynamicAboutUs from '../DynamicAboutUs'
import Frame14 from '../Image/Frame 14.png'
import Frame15 from '../Image/Frame 15.png'
import Image from '../Image/image.png'
import Group25 from '../Image/Group 25.png'

export default function AboutUs () {
    const data = [
        {
            img: Frame14,
            title: 'امن و ایمن',
            description: 'استراتژی ارتقای ایمن و مطمئن یکی از مهمترین فرآیندهای بازاریابی است.'
        },

        {
            img: Frame15,
            title: 'تیم بسیار متخصص',
            description: 'ما از صداهای بازاریابی شما برای رسیدن به مخاطبان هدف شما پشتیبانی می کنیم، علاقه ایجاد می کنیم.'
        }
    ]

    return (
        <div className='about-us'>
            <div className='us-right'>
                <div className='us-title'>
                    <p>درباره ما</p>
                    <p>جای تعجب نیست که استراتژی ارتقاء یکی از مهمترین فرآیندهای بازاریابی است.<br />
                    در واقع، از صداهای بازاریابی شما برای رسیدن به مخاطب هدف شما پشتیبانی می کند، علاقه ایجاد می کند و به شما کمک می کند تا با آنها درگیر شوید.</p>
                </div>
                <div className='us-icon'>
                    {data.map((item, index) => (
                        <DynamicAboutUs
                        key={index}
                        Img={item.img}
                        Title={item.title}
                        Description={item.description} />
                    ))}
                </div>
            </div>
            <div className='us-left'>
                <img alt='image' src={Image} />
                <img alt='group25' src={Group25} />
            </div>
        </div>
    )
}