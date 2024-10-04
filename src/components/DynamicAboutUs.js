export default function DynamicAboutUs ({Img, Title, Description}) {
    return (
        <div className="us-icon-box">
            <div className="icon-box-img">
                <img src={Img} />
            </div>
            <div className="icon-box-title">
                <p>{Title}</p>
                <p>{Description}</p>
            </div>
        </div>
    )
}