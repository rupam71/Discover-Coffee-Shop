import getCoffeeShop from "../../fetchCall/getCoffeeShop";

const getCoffeeStoresByLocation = async(req,res) => {

    try {
        const {latLong} = req.query

        const respose = await getCoffeeShop(latLong)
        console.log({respose})
        res.status(200).json(respose)
    } catch (error) {
        res.status(500).json({message: 'Oh no! Something went wrong!!',error})
    }
}

export default getCoffeeStoresByLocation;
