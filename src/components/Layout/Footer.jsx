import FooterLink from "./FooterLink";
import Logo from '../Icon/Logo.svg'
import Twitter from '../Image/Twitter.png'
import Linkedin from '../Image/LinkedIn.png'
import Instagram from '../Image/Instagram.png'
import Facebook from '../Image/Facebook.png'

export default function Footer () {
    const linkOne = {
        title: 'اطلاعات',
        link: [
            'سیاست حفظ',
            'شرایط و ضوابط',
            'سوالات متداول'
        ]
    };

    const linkTwo = {
        title: 'شرکت',
        link: [
            'درباره',
            'مخاطب',
            'مشاغل',
            'مطبوعات'
        ]
    };

    const linkThree = {
        title: 'لینک های سریع',
        link: [
            'صفحه اصلی',
            'درباره',
            'وقت ملاقات',
            'وبلاگ',
            'مخاطب'
        ]
    }

    return (
        <div className="footer">
            <div className="footer-right">
                <div className="footer-logo-title">
                    <img src={Logo} alt="Logo" />
                    <p>فروشگاه رابط کاربری آماده اسکیپ</p>
                </div>
                <p>این یک موضوع بزرگ است و من آن را یکی از مهمترین چیزها برای یک تجارت می دانم.</p>
                <div className="socials">
                    <img src={Twitter} alt="Twitter" />
                    <img src={Linkedin} alt="Linkedin" />
                    <img src={Instagram} alt="Instagram" />
                    <img src={Facebook} alt="Facebook" />
                </div>
            </div>
            <FooterLink Title={linkOne.title} Link={linkOne.link} />
            <FooterLink Title={linkTwo.title} Link={linkTwo.link} />
            <FooterLink Title={linkThree.title} Link={linkThree.link} />
        </div>
    )
}