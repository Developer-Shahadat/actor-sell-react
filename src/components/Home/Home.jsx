// import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
// import Cart from '../Cart/Cart';

const Home = () => {
  const [allActor, setActor] = useState([]);
  const [item, setSelectorActors] = useState([]);
  const [remaining,setRemaining] = useState(0);
  const [totalCost,setTotalCost] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActor(data));
  }, []);


  const handleCart = (actorId) => {
    const newCart = [...item, actorId];
    const isExist = item.find((card)=> card.id == actorId.id)
    let cost = actorId.salary;
    if(isExist){
        alert('Already this person booked')
    }
    
    else{
        item.forEach((priceAdd) => {
            cost = cost + priceAdd.salary
        }
        );
        const totalRemaining = 20000 - cost;
        if(cost > 20000){
            alert("Can't be more than 20000$")
        }
        else{
            setTotalCost(cost);
            setRemaining(totalRemaining)
            setSelectorActors(newCart);
        }
      
    }
  };

  return (
    <div className="flex gap-24">
      <div className="w-3/4 grid grid-cols-3">
        {allActor.map((actor) => (
          <div
            key={actor.id}
            className="card w-80 bg-base-100 shadow-lg mt-6 pt-4 pb-4"
          >
            <div className="">
              <img
                className="mx-28 avatar w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                src={actor.image}
              />
              <div className="flex mt-2 mx-8 gap-4">
                <h2>Name: {actor.name}</h2>
                <p>Age: {actor.age}</p>
              </div>
              <div className="flex gap-4 mt-2 mx-8">
                <p>Salary : {actor.salary}</p>
                <p>Role: {actor.role}</p>
              </div>
              <button
                onClick={() => handleCart(actor)}
                className="btn mx-28 mt-4 bg-red-400 p-2 rounded-lg text-white"
              >
                ADD NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <Cart item={item} remaining={remaining} totalCost={totalCost}></Cart>
      </div>
      
    </div>
  );
};

// Home.propTypes = {
//   handleCart: PropTypes.array.isRequired,
// };

export default Home;
