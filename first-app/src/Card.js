import Image from "./Image"

export function Card (props){
    let title = "This is a card"
    return (
        <>
            <h2 style={
                {
                 fontSize:'10px',
                 color: 'red'
                }
            }>
                {title}
            </h2>
            <h3>{props.name} </h3>
            <Image src={props.image}/>

        </>
    )
    
}

// export default Card;