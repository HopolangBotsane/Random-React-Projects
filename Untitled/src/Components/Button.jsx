function Button() {

    let count = 0

    const handleClick = () => {
        count++
    }

    return(
        <button onClick={handleClick}>Click Me</button>
    )
}

export default Button