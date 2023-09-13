/* eslint-disable react/jsx-key */

import PropTypes from 'prop-types';
const Cart = ({item,totalCost,remaining}) => {
    console.log(item);
    return (
        <div className='mt-4 bg-slate-300 p-4 rounded-lg'>
            
            
            <h1 className='text-2xl'>Total Cart : {item.length}</h1>
            <p>Total Cost: {totalCost}</p>
            <p>Remaining : {remaining}</p>
             {
                item.map(actor =>(
                    <li key={actor.id}>{actor.name}</li>
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