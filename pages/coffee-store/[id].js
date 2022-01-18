//Dynamic Route
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CoffeStoreData from "../../data/coffee-store.json";
import styles from "../../styles/coffee-store.module.css";
import  cls  from "classnames";

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  // staticProps is pre-build
  console.log("1", params);
  return {
    props: {
      coffeStore: CoffeStoreData.find((ele) => {
        return ele.id.toString() === params.id;
        //if params id match then preRender
      }),
    },
  };
}

// Give next js a list of paths
export function getStaticPaths() {
  const paths = CoffeStoreData.map((ele) => {
    return {
      params: {
        id: ele.id.toString(),
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
  const { address, name, neighbourhood, imgUrl } = props.coffeStore;

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
              <a>Back To Home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>

          <Image
            src={imgUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          />
        </div>

        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/places.svg" width={24} height={24} />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/nearMe.svg" width={24} height={24} />
            <p className={styles.text}>{neighbourhood}</p>
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
