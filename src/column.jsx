import './column.css';

function Column({key,logo,title,description,backgroundColor}){
    const style={
        backgroundColor:backgroundColor
    }
    const buttonStyle={
        color:backgroundColor
    }
    return(
        <div className="column-container" style={style}>
            <img src={logo} alt="carlogo"/>
            <h1>{title}</h1>
            <p>{description}</p>
            <button style={buttonStyle}>Learn More</button>
        </div>
    )
}

export default Column;