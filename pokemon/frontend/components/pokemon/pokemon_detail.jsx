import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props)  {
    super(props);
  }

  componentDidMount() {
    this.props.requestPoke(this.props.match.params.id);
  }

  render() {
    console.log("Render");
    const { items } = this.props;

    let name;
    let image_url;
    if (this.props.poke){
      name = this.props.poke.name
      image_url = this.props.poke.image_url;
    }
    
    return (
      <div>
        {name}
        <img src={image_url} alt=""/> 
        {items.map(item => {
          return <li>{item.price}{item.happiness}</li>
        })}
      </div>
    );
  } 
}

export default PokemonDetail;