import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";

const PropertyDetails = () => {
    const [singleProperty, setSingleProperty] = useState({})
    const [loading, setLoading] = useState(true)
    const property = useLoaderData()
    const { propertyId } = useParams()

    const handleApplyProperty = () => {
        // console.log(book)
        saveProperty(singleProperty)
    }

    const handleApplyWishlist = () => {
        console.log(singleProperty)
        saveWishlist(singleBook)

    }


    useEffect(() => {
        if (property && propertyId) {
            setLoading(true)
            const bookObj = books.find(book => book.bookId === +bookId)
            // console.log(bookObj)
            setSingleBook(bookObj)
            setLoading(false)
        }
    }, [books, bookId])


    // console.log(singleBook)
    const {Id, image, estate_title, segment, price, status, area, location, facilities } = singleProperty

    if (loading) {
        return
    }



    const PropertyDetails = () => {
        return (
            <div className="p-8">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{estate_title}</h1>
                            <p className="py-6">segment: {segment}</p>
                            <p className="py-6">price: {price}</p>
                            <p className="py-6">{status}</p>
                            <h1 className="font-bold flex items-center gap-2">Tags:
                                {
                                    tags.map(tag => <p key={tag} className=" bg-[#23BE0A0D] mr-2 p-2 rounded-lg">{tag}</p>)
                                }
                            </h1>
                            <div className="">
                                <ul className="font-bold">
                                    <li>Number of Pages: {totalPages}</li>
                                    <li>Publisher: {publisher}</li>
                                    <li>Year of Publishing: {yearOfPublishing}</li>
                                    <li>rating: {rating}</li>
                                </ul>
                            </div>
                            <div className="flex gap-4">
                                <button onClick={() => handleApplyProperty()} className="btn">Read</button>
                                <button onClick={() => handleApplyWishlist()} className="btn bg-[#50B1C9] text-white">Wishlist</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    };

    export default PropertyDetails;