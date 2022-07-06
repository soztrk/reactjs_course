import {useParams,useNavigate} from "react-router-dom"

const ProductDetail = () => {

    const params = useParams()
    const navigate = useNavigate()

    console.log(params)

    const backHandler = () => {
        navigate(-1) // or name of route
    }

    return (
        <section>
            <h1>Product Detail</h1>
            <p>{params.productId}</p>
            <button onClick={backHandler}>Go back</button>
        </section>
    )
}

export default ProductDetail