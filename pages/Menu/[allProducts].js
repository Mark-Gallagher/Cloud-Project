//Dynamic Routing
import { useRouter } from 'next/router';


function ProductsPage() {
    const router = useRouter();

    const allProducts = router.query.allProducts;

    return <h1>The Product Page</h1>
}
export default ProductsPage;
