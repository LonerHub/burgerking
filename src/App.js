import React, { useEffect, useState } from 'react';
import { 
  AccountBalance, 
  Chat, 
  Favorite, 
  HomeRounded, 
  Settings, 
  SummarizeRounded 
} from '@mui/icons-material';
import './App.css';
import Header from './Components/Header'
import MenuContainer from './Components/MenuContainer';
import Banner from './Components/Banner';
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import { MenuItems, Items } from './Components/Data';
import ItemCart from './Components/ItemCart';
import DebitCard from './Components/DebitCard';
import CartItem from './Components/CartItem';
import { useStateValue } from './Components/StateProvider';

function App() {
  const [isMainData, setMainData] = useState(
    Items.filter(el => el.itemId === 'buger01')
  );

  const [{cart}, dispatch] = useStateValue();

  useEffect(() => {
    // Setting active class to selected menu
    const menuLi = document.querySelectorAll('#menu li');
    function setMenuListActive() {
      menuLi.forEach(list => list.classList.remove('active'));
      this.classList.add('active');
    };
    menuLi.forEach(liItem => liItem.addEventListener('click', setMenuListActive));

    // Menucard active toggle
    const menuCards = document.querySelector('.rowContainer').querySelectorAll('.rowMenuCard');
    function setMenuActive() {
      menuCards.forEach(card => card.classList.remove('active'));
      this.classList.add('active');
    }
    menuCards.forEach(menu => menu.addEventListener('click', setMenuActive)) 
  }, [isMainData, cart]);

  // setting menu filter
  const setData = (itemId) => {
    setMainData(Items.filter(el => el.itemId === itemId));
  };

  return (
    <div className="App">
     
     {/* Header Section */}
      <Header />

     {/* Main Container */}
      <main>
        <div className='mainContainer'>
          {/* Banner */}
          <div className='banner'>
            <Banner name={'Krishna'} discount={'20'} link={'#'} />
            <img 
              src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337' 
              alt='Banner'
              className='deliveryPic'
            />
          </div>
          {/* Dish container */}
          <div className='dishContainer'>
            <div className='menuCard'>
              <SubMenuContainer name={'Menu Category'}/>
            </div>
            <div className='rowContainer'>
              {MenuItems && 
                MenuItems.map(menu => (
                  <div key={menu.id} onClick={() => setData(menu.itemId)}>
                    <MenuCard 
                      imgSrc={menu.imgSrc} 
                      name={menu.name}
                      isActive={menu.id === 1 ? true : false}
                    />
                  </div>
                ))}
            </div>
            <div className='dishitemContainer'>
              {
                isMainData && isMainData.map((data)=>(
                  <ItemCart 
                    itemId={data.itemId}
                    key={data.id}
                    imgSrc={data.imgSrc} 
                    name={data.name} 
                    ratings={data.ratings} 
                    price={data.price}
                  />
                ))
              }
            </div>
          </div>
        </div>
        <div className='rightMenu'>
          <div className='debitCardContainer'>
            <div className='debitCard'>
              <DebitCard />
            </div>
          </div>

          {
            !cart ? ( 
              <div></div> 
              ) : (    
              <div>      
                <div className='cartChecOutContainer'>
                  <SubMenuContainer name={'Cart Items'} />
                  <div className='cartContainer'>
                    <div className='cartItems'>
                      {
                        cart && cart.map(data => (
                          <CartItem 
                            key={data.id}
                            itemId={data.itemId}
                            name={data.name}
                            imgSrc={data.imgSrc}
                            qty={data.qty}
                            price={data.price}
                          />
                        ))
                      }
                    </div>
                  </div>
                </div>

                <div className='totalSection'>
                  <h3>Total</h3>
                  <p>
                    <span>$ </span>45.0
                  </p>
                </div>

                <button className='checkOut'>Check Out</button> 
              </div>
            )}
        </div>
      </main>

     {/* Bottom Menu */}

     <div className='bottomMenu'>
       <ul id='menu'>
         <MenuContainer link={'#'} icon={<HomeRounded />} isHome/>
         <MenuContainer link={'#'} icon={<Chat />} />
         <MenuContainer link={'#'} icon={<AccountBalance />} />
         <MenuContainer link={'#'} icon={<Favorite />} />
         <MenuContainer link={'#'} icon={<SummarizeRounded />} />
         <MenuContainer link={'#'} icon={<Settings />} />

         <div className='indicator'></div>
       </ul>
     </div>
    </div>
  );
}

export default App;
