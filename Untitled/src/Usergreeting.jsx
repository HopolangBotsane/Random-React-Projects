function Usergreeting(props) {

    return(props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Please Login</h2>)
}

export default Usergreeting