import React, { useState } from "react";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (name, price) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { name, price, quantity: 1 }];
    });
    setTotalPrice((prevTotal) => prevTotal + price);
  };

  const removeItemFromCart = (name, price) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.name !== name);
      setTotalPrice((prevTotal) => prevTotal - price);
      return updatedItems;
    });
  };

  return (
    <div className="App">
      <nav>
        <div className="nav-container">
          <div className="logo">
            <a href="#">CAKE SHOP</a>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#special-edition">Special Edition</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#cart">Cart</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-text">
          <h1>CAKE SHOP</h1>
          <p>Where Cake Meets Art</p>
          <a href="#special-edition" className="cta-button">Explore Special Editions</a>
        </div>
      </section>

      <section className="special-edition" id="special-edition">
        <h2>Special Edition Cakes</h2>
        <div className="cakes-grid">
          {[
            { name: "Navratri Special", price: 450, imgSrc: "https://bkmedia.bakingo.com/choco-vanilla-cake0006chva-AAA.jpg?tr=w-320,h-320,dpr-1.5,q-70" },
            { name: "Birthday Cake", price: 560, imgSrc: "https://bkmedia.bakingo.com/dreamy-chocolate-cake-cake4053choc-b_0.jpg" },
            { name: "Photo Cake", price: 659, imgSrc: "https://bkmedia.bakingo.com/paw-patrol-adventure-birthday-cake-phot4001flav-a_0.jpg" },
          ].map((cake, index) => (
            <div className="cake-card" key={index}>
              <div className="cake-image">
                <img src={cake.imgSrc} alt={cake.name} />
              </div>
              <div className="cake-info">
                <h3>{cake.name}</h3>
                <p>&#8377; {cake.price}</p>
                <button onClick={() => addItemToCart(cake.name, cake.price)} className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery" id="gallery">
        <h2>Cake Gallery</h2>
        <div className="gallery-grid">
          <img src="https://bkmedia.bakingo.com/choco-truffle-cake0005choc-a.jpg" alt="Cake 1" />
          <img src="https://bkmedia.bakingo.com/butterscotch-cake0003butt-AAAA.jpg" alt="Cake 2" />
          <img src="https://bkmedia.bakingo.com/fresh-fruit-cake0014frui-AAA.jpg" alt="Cake 3" />
          <img src="https://bkmedia.bakingo.com/sq-snicker-chocolate-cake0028choc-AA.jpg" alt="Cake 4" />
        </div>
      </section>

      <section className="cart" id="cart">
        <h2>Your Cart</h2>
        <div className="cart-container">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>&#8377; {item.price}</td>
                  <td>{item.quantity}</td>
                  <td>&#8377; {(item.price * item.quantity).toFixed(2)}</td>
                  <td><button onClick={() => removeItemFromCart(item.name, item.price)} className="remove-item">Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <p>Total: <span>&#8377; {totalPrice.toFixed(2)}</span></p>
            <button id="checkout-btn">Checkout</button>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-container">
          <p>Contact Us: info@cakeshop.com | 987-654-3210</p>
          <p>Follow us: <a href="#">Instagram</a> | <a href="#">Facebook</a> | <a href="#">Twitter</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
