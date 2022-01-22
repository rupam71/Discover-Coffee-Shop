//Dynamic Route
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// import CoffeStoreData from "../../data/coffee-store.json";
import styles from "../../styles/coffee-store.module.css";
import  cls  from "classnames";
import getCoffeeShop from "../../fetchCall/getCoffeeShop";
import { Authorization, coffeeApiKey } from "../../secret";
import { storeContext } from './../../store/store-context';

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  // staticProps is pre-build

  // call get api here
  var t = await getCoffeeShop()
  
  const y = t.find((ele) => {
    return ele.fsq_id.toString() === params.id;
    //if params id match then preRender
  });

  return {
    props: {
      // if ele y exists then print
      // else emply page "{}" load in the client side
      coffeStore: y ? y : {}
    },
  };
}

// Give next js a list of paths
export async function getStaticPaths() {
  // call get api here
  var t = await getCoffeeShop()
 const paths = t.map((ele) => {
    return {
      params: {
        id: ele.fsq_id
      },
    };
  });
  return {
    //  paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
    paths: paths,
    fallback: true,
    // ##   if fallback false :: Any params not exist in getStaticPaths() will return 404 page
    // ##   if fallback true :: Any params not exist in getStaticPaths() will download and cache
    //      for next time. But must use if(useRouter().isFallback) return loading in client side
    // ##   if fallback true :: Any params not exist in getStaticPaths() and database,, will will
    //      send error to chient side.
  };
}

const CoffeStore = (props) => {
  const router = useRouter();

  // router.query.id => Next js Params
  if (router.isFallback) return <div>Loading...</div>;

  // props should be next to router.isFallback
  const { location, name, neighbourhood, imgUrl,distance } = props.coffeStore;
  const handleUpvoteButton = () => {
    console.log('Up Vote !!')
  }

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a> Back To Home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>

          <Image
            src={imgUrl || "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80"}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          />
        </div>

        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/places.svg" width={24} height={24} />
            <p className={styles.text}>{location?.address || location?.locality }</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/nearMe.svg" width={24} height={24} />
            <p className={styles.text}>{location?.region}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/star.svg" width={24} height={24} />
            <p className={styles.text}>1</p>
          </div>

          <button onClick={handleUpvoteButton} 
          className={styles.upvoteButton}>
                Up vote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeStore;
