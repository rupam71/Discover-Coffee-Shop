
import { useRouter } from 'next/router';
import  Head  from 'next/head';

const DynamicRoute = () => {
    const route = useRouter().query.dynamic
    return <div>
        <Head>
         <title>{route}</title> 
        </Head>
        <h1>Page {route}</h1>
    </div>
}
 
export default DynamicRoute;