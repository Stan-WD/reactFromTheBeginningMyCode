import React, {Component} from 'react';

class CardSet extends Component{
        constructor(){
        super();

        this.state = {
            chosenCards: []
        }
    }

    handleSave = (index)=>{
        // console.log("User clicked a course!")

        console.log(index)
        // BAD!!!! this.state.chosenCards.push(this.props.cards[index] BAD!!!!
        const copyOfCards = [...this.state.chosenCards];
        // const copyofCards = this.state.chosenCards.slice();
        copyOfCards.push(this.props.cards[index])

        this.setState({
            chosenCards: copyOfCards
        })

    }

    render(){
        // console.log(this.props.cards)

        console.log(this.state.chosenCards)

        const savedCards = this.state.chosenCards.map((card,i)=>{
            return <h3 key={i}>{card.course}</h3>
        })

        const cardList = this.props.cards.map((card, i)=>{
            return(
                <div className="col s2" key={i}>
                    <div className="card hoverable small">
                        <div className="card-image">
                            <img src={card.image} />
                        </div>
                        <div className="card-content">
                            <p>{card.course}</p>
                            <p>{card.instructor}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">$9.99</a>
                        </div>
                    </div>
                    <button onClick={()=>{this.handleSave(i)}} className="btn waves-light waves-effect">Save</button>
                </div>	
            )
        })

        return(
            <div>
                {cardList}
                {savedCards}
            </div>
        )
    }
}

export default CardSet;