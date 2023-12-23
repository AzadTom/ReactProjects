
const Product=({title,description,price,image})=>{



    return(
        <>
         <div>
            <div>
                <img src={image} alt="heroImg" className="bg-center bg-cover object-cover" />
            </div>
            <div className="flex flex-col gap-2 p-4  bg-black">
                <h2 className="text-xl">{title}</h2>
                <p className="text-sm font-thin">{description}</p>
                <span>{`$${price}`}</span>
                <button  className="px-4 py-2 bg-white text-black"    >Add to cart</button>
            </div>
         </div>
        </>
    )


}


export default Product;