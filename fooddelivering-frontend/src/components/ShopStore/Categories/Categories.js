import React from 'react';
import './style.css';

const Categories = prosp => {
    return (
        <React.Fragment>
            <span>Categories</span>
            <ul class="CategoryList">
                <li>
                    <span>
                        <a href="#">Accessories</a>
                    </span>
                    <ul>
                        <li><a href="#">Pizzas</a></li>
                        <li><a href="#">Burgers</a></li>
                        <li><a href="#">Sushi</a></li>
                    </ul>
                </li>
                <li>
                    <span>
                        <a href="#">Cakes</a>
                    </span>
                </li>
                <li>
                    <span>
                        <a href="#">Sweets</a>
                    </span>
                </li>
            </ul>
        </React.Fragment>
    );
}

export default Categories;

