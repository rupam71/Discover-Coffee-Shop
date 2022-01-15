import Image from "next/image";
import Link from "next/link";
import style from './card.module.css'
import cls from 'classnames'

const Card = (props) => {
    return <Link href={props.href}>
        <a className={style.cardLink}>
            <div className={cls("glass",style.container)}>
                <div className={style.cardHeaderWraper}>
                    <h2 className={style.cardHeader}>{props.name}</h2>
                </div>
                <div className={style.cardImageWraper}>
                    <Image className={style.cardImage}
                        src={props.imgUrl} 
                        width={260}
                        height={160} />
                </div>
            </div>
        </a>
    </Link>
}
 
export default Card;