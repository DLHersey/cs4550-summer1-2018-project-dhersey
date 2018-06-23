import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class DetailPage
    extends React.Component {

        constructor(props) {
            super(props);
            this.state = {}
            this.addToFavorites=this.addToFavorites.bind(this);
        }

        addToFavorites() {
            console.log('added to favorites');
        }

        render() {
            return (
                <div>
                    <div>
                        <h3>Chicken Ramen</h3>
                        <img src='https://picsum.photos/200/300/?random' alt='Chicken Ramen' />
                        <button className={"btn btn-success"}
                                onClick={this.addToFavorites}>
                            Add to My Favorites
                        </button>
                    </div>
                    <div>
                        Nutritional Info
                        <h4>Calories: 9,000+</h4>
                        <h4>Ingredients: </h4>
                        <ul>
                            <li>1 - Ramen</li>
                            <li>1 - Bowl</li>
                            <li>2 - Handwarmers</li>
                            <li>10 - Pairs of Chopsticks</li>
                        </ul>
                    </div>
                    <h6>Full Recipe: https://www.SomeRecipe.place</h6>
                </div>
            )
            /*
            return (
                <div>
                    <h3>{this.props.hit.recipe.label}</h3>
                    <img src={this.props.hit.recipe.image} alt={this.props.hit.recipe.label} />
                    <div>
                        Nutritional Info
                        <h4>Calories: {this.props.hit.recipe.calories}</h4>
                        <h4>Ingredients: {this.props.hit.recipe.ingridients}</h4>
                    </div>
                    <h6>Full Recipe: {this.props.hit.recipe.source}</h6>
                </div>
            )*/
        }


}