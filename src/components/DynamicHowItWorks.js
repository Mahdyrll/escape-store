export default function DynamicHowItWorks ({Img, Title, Description}) {
    return (
        <div className="triple-box">
            <img src={Img} />
            <div className="triple-box-txt">
                <h3>{Title}</h3>
                <p>{Description}</p>
            </div>
        </div>
    )
}