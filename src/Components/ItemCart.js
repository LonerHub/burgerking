import { AddRounded, Favorite, StarRounded } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { Items } from './Data';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';

let cartData = [];

const ItemCart = ({itemId, imgSrc, name, ratings, price}) => {
  const [isFavourite,setFavourite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));

  const [iscart,setCart] = useState(null);
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    if(iscart) {
      cartData.push(iscart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData
      })
    }
  },[iscart])

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  return (
    <div className='itemCard' id={itemId}>
      <div className={`isfavourite ${isFavourite? `active`: ''}`}
        onClick={()=> setFavourite(!isFavourite)}
      >
        <Favorite />
      </div>

      <div className='imgBox'>
        <img src={imgSrc} alt={name} className='itemImg' />
      </div>
      <div className='itemContent'>
        <h3>{name}</h3>
        <div className='bottom'>
          <div className='ratings'>
            {Array.apply(null, {length: 5}).map((e,i) => (
              <i key={i} className={`rating ${currentValue > i ? `orange`: `gray`}`}
                onClick={() => handleClick(i+1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className='price'>
              <span>$</span> {price}
            </h3>
          </div>
          <i className='addtoCart' 
            onClick={() => setCart(Items.find(el => el.imgSrc === imgSrc))}
          >
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;