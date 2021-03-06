import React from 'react';

class Pokemon extends React.Component {
    render() {

        const { name, type, averageWeight, image } = this.props.objetoMon;

        return(
            <div className = "pokemon">
                <div>
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>{`Average weight: ${ averageWeight} ${averageWeight.measurementUnit}`}</p>
                </div>
                <img src = {image} alt = {`${name} sprite`}/>
            </div>
        )

    }
}

export default Pokemon;