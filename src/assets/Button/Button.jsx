// Inline Styling
// function Button(){
//     const inlineStyle = {
//         backgroundColor : "red",
//         color:"white",
//     }
// return(
//     <button style={inlineStyle}>Click Me!</button>
// )
// }
// export default Button
// End
// External Module CSS
import stylex from "./button.module.css";

function Button() {
    return (
        <div className={stylex.container}>
            <h1 className={stylex.heads}>Today Is Your Day</h1>
            <button className={stylex.buttonss}>Click Me!</button>
        </div>
    );
}

export default Button;


