//Dynamic Route
import Link from 'next/link';
import {useRouter} from 'next/router'

const CoffeStore = () => {
    const router = useRouter()
    // router.query.id => Next js Params

    return <div>
        Coffee Store {router.query.id}
        <Link href='/'>
            <a>Back To Home</a>
        </Link>
        <Link href='/coffe-store/dynamic'>
            <a>Go to Dynamic Page</a>
        </Link>
    </div>
}
 
export default CoffeStore;