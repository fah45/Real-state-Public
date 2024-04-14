import { useLoaderData } from "react-router-dom";
import PropertyCard from "./PropertyCard";

const Property = () => {

     const property = useLoaderData()

    return (
        <div>
            <div className="text-center" >
                <h1 className="text-5xl">Property</h1>
            </div>
            <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {property.map(property => (<PropertyCard property={property} key={property.propertyId}></PropertyCard>))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Property;