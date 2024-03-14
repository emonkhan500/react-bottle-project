import './bottle.css'


const Bottle = ({bottle,handlePurchase}) => {
    const{name,seller,img}=bottle
    return (
        <div className='bottle'>
            <h1>{name}</h1>
            <h2>{seller}</h2>
            <img style={{height:'350px'}} src={img} alt="" />
            <button onClick={()=>handlePurchase( bottle)} className='btn'>Purchase</button>
        </div>
    );
};

export default Bottle;