/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : collection-item.component.jsx
 *******************************************/
//React
import React from 'react';

//Redux
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions'

//Components
import CustomButton from '../custom-button/custom-button.component'

//Styles
import './collection-item.styles.scss'

//Misc.


const CollectionItem =({item, addItem})=>{
    const {name, price, imageUrl} = item;

    return(
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage:`url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={ () => addItem(item) } inverted>ADD TO CART</CustomButton>
        </div>
    )};

const mapDistpatchToProps = distpatch=>({
    addItem:item => distpatch(addItem(item))
});

export default connect(null,mapDistpatchToProps)(CollectionItem);