// import React, { Component } from 'react'
// import Menu from './svg/bars-solid.svg'
// import Close from './svg/times-solid.svg'
// import CartIcon from './svg/shopping-cart-solid.svg'
// import {Link} from 'react-router-dom'
// import './css/Header.css'
// import {DataContext} from './Context'



// export class Header extends Component {
//     static contextType = DataContext;

//     state = {
//         toggle: false
//     }

//     menuToggle = () =>{
//         this.setState({toggle: !this.state.toggle})
//     }


//     render() {
//         const {toggle} = this.state;
//         const {cart} = this.context;
//         return (
//             <header>
//                 <div className="menu" onClick={this.menuToggle}>
//                     <img src={Menu} alt="" width="20"/>
//                 </div>
//                 <div className="logo">
//                     <h1><Link to="/">Nike</Link></h1>
//                 </div>
//                 <nav>
//                     <ul className={toggle ? "toggle" : ""}>
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/product">Product</Link></li>
//                         <li><Link to="/contact">Contact</Link></li>
//                         <li><Link to="/about">About</Link></li>
//                         <li><Link to="/login">Login / Register</Link></li>
//                         <li className="close" onClick={this.menuToggle}>
//                             <img src={Close} alt="" width="20"/>
//                         </li>
//                     </ul>
//                     <div className="nav-cart">
//                         <span>{cart.length}</span>
//                         <Link to="/cart">
//                             <img src={CartIcon} alt="" width="20"/>
//                         </Link>
//                     </div>
//                 </nav>
//             </header>
//         )
//     }
// }

// // export default Header

// // function Card({title,imageurl,body}) {
// //     return(
// //     <div className="card container">
// //         <div className='image-container'>
// //             <img src={imageurl} alt='' />
           
// //         </div>
// //         <div className='card-content'>
// //         <div className='card-title'>
// //            <h3>{title}</h3> 
// //         </div>
// //         <div className='card-body'>
// //             <p>{body}</p>

// //         </div>
// //         </div>
        

// //         <div className='btn'>
// //             <button><a onClick=''>view more</a></button>
// //         </div>

// //     </div>
// //     );
// // };

// export default Card;