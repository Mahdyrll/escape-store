import Group35 from '../components/Image/Group 35.png'

export default function DynamicPackage ({Photo, Title, Price, UserNumber}) {
    return (
        <div className="package-box">
            <img src={Photo} alt="iasdf" />
            <p>{Title}</p>
            <div className="package-price">
                <p>{Price}</p>
                <div className="package-users">
                    <p>{UserNumber}</p>
                    <img src={Group35} alt="user" />
                </div>
            </div>
        </div>
    )
}