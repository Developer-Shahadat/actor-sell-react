/* eslint-disable react/jsx-key */

import PropTypes from 'prop-types';
const Cart = ({item,totalCost,remaining}) => {
    console.log(item);
    return (
        <div className='mt-4 bg-slate-300 p-4 rounded-lg'>
            
            
            <h1 className='text-2xl mt-2'>Total Actor : {item.length}</h1>
            <p className='mt-2'>Total Cost: {totalCost}</p>
            <p className='mt-2'>Remaining : {remaining}</p>
             {
                item.map(actor =>(
                    <li className='mt-2' key={actor.id}>{actor.name}</li>
             ))}
            
        </div>
    );
};

Cart.propTypes = {
    item: PropTypes.array.isRequired,
    totalCost : PropTypes.object.isRequired,
    remaining : PropTypes.object.isRequired
};

export default Cart;