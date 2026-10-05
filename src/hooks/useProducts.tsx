import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/product.service";

// Servicen vet hur produkterna hämtas, hooken vet under vilken nyckel de cachas.
// Alla komponenter som använder useProducts delar samma cache.
function useProducts() {
    return useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    })
}

export default useProducts
