//Dynamic Route
import Link from 'next/link';
import {useRouter} from 'next/router'
import CoffeStoreData from '../../data/coffee-store.json';

export function getStaticProps(staticProps){
    const params = staticProps.params;
    // staticProps is pre-build
    console.log('1',params)
    return {
        props: {
            coffeStore : CoffeStoreData.find(ele=>{
                return ele.id.toString() ===  params.id
                //if params id match then preRender
            })
        }
    }
}

export function getStaticPaths(){
    return {
        paths : [
            {params: {id : '0'}},
            {params: {id : '1'}},
        ],
        fallback: false
    }
}

const CoffeStore = (props) => {
    const router = useRouter()
    // router.query.id => Next js Params

    return <div>
        Coffee Store {router.query.id}
        <Link href='/'>
            <a>Back To Home</a>
        </Link>
        <br />
        <Link href='/coffee-store/dynamic'>
            <a>Go to Dynamic Page</a>
        </Link>
        <br />
        <Link href='/'>
            <a>Go to Main Page</a>
        </Link>
        <br />
        <p>{props.coffeStore.address}</p>
    </div>
}
 
export default CoffeStore;