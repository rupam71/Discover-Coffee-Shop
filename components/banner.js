import style from './banner.module.css'

const Banner = (props) => {
    return <div className={style.container}>
        <h1 className={style.title}>
            <span className={style.title1}>Coffee</span>
            <span className={style.title2}>Connoisseur</span> 
        </h1>
        <p className={style.subTitle}>Discover your local coffee shop...</p>
        <button className={style.button} onClick={props.handleOnClick}>
            {props.buttonText}
        </button>
    </div>
}
 
export default Banner;