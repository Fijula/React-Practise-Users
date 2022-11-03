import "./Card.css"

function Card(props) {
    const classes= 'card ' + props.className;
      return <div className={classes}>{props.children}</div>

}
// function Card(props) {
//     const classes = 'card ' + props.className;
    
//     return <div className={classes}>{props.children}</div>;
//   }
 export default Card

 //value of children props is content btw opening and closing tag of custom component
 // in this case Card is custom component
 
 // in place of <div className= 'card' use the below