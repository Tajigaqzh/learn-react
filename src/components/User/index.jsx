import React from "react"
import './user.module.css'
import img from '../../assets/images/20220801052557693.jpg'


const user = {
    name: 'hello tony',
    imgUrl: img,
    imageSize:90
}
const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

const listItems = products.map(product => 
    <li key={product.id}>
        {product.title}
    </li>
)
class User extends React.Component {
    render(){
        return(
            <>
                <img className="myImg" src={user.imgUrl} alt={user.name}/>
                <ul>
                    {listItems}
                </ul>
            </>
        )
    }
}
export default User