import React, { Component } from 'react';

class Header extends Component {
    //takes in predefined parameters - sets defaults for us
    constructor() {
        //super is an ES6 keyword
        //calls the constructor of what we are creating
        super()

        this.state = {
            itemCurrentlyOnSale: 'A Hammer!',
            editSaleItem: false
        }
    }

    toggleEditSaleItem = () => {
        console.log('hit toggle')
        this.setState({editSaleItem: !this.state.editSaleItem})
    }

    render() {
        return (
            <div>
                <h1>Hardware Store</h1>
                <p>Currently On Sale: {this.state.itemCurrentlyOnSale}</p>
                <button onClick={this.toggleEditSaleItem}>Edit sale Item</button>
                <div>
                    {this.state.editSaleItem ? <input type="text" placeholder={this.state.itemCurrentlyOnSale} /> : null}
                </div>
            </div>
        )
    }
}

export default Header;