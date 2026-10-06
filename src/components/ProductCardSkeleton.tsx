import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

// Samma struktur som ProductCard så att layouten inte hoppar när datan laddats
function ProductCardSkeleton() {
    return (
        <Card className="h-full">
            <CardHeader>
                <Skeleton className="h-5 w-3/4" />
            </CardHeader>
            <CardContent>
                <Skeleton className="h-40 w-full" />
            </CardContent>
            <CardFooter className="mt-auto justify-between">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-8 w-36" />
            </CardFooter>
        </Card>
    )
}

export default ProductCardSkeleton
