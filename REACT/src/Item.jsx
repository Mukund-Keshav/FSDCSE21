function Item(props) {
    return (
        <div style={{border:"2px solid black", margin:"5px", height:"420px", width:"300px"}}>
            <img src={props.src} style={{width: "250px"}}/>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default Item;