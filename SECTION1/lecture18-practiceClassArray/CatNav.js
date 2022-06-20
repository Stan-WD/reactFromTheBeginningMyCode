// change this Component to a class!
// function CatNav(props){
//     // get data from props and use map to build an array of <li>
//     // ... code goes here
//     return(
//         <div>
//             {/* Your Code Here */}
//         </div>
//     )
// }

class CatNav extends React.Component{

    constructor(){
        super();

        console.log("Constructor ran");
    }

    render(){
        return(
            <ul className="cat-nav center-align">
			    <li className="cat-link left valign-wrapper">
				    <i className="material-icons">{this.props.data.icon}</i>{this.props.data.title}
                </li>
            </ul>
        )
    }
}