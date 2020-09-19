import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-7.jpg"
                            text="Relax on the cliff right at the hidden Tegal Wangi beach"
                            label='Beach'
                            path='/journey'
                        />
                        <CardItem
                            src="images/img-5.jpg"
                            text="Soak up the sun at the dinosaur land in Bali"
                            label='Beach'
                            path='/journey'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-4.jpg"
                            text="Jog at the hidden beach near Baluran National Park"
                            label='Beach'
                            path='/journey'
                        />
                        <CardItem
                            src="images/img-3.jpg"
                            text="Hike the most famous volcano in Java island"
                            label='Mountains'
                            path='/journey'
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Learn the history of Hindu temple in Yogyakarta"
                            label='History'
                            path='/journey'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
