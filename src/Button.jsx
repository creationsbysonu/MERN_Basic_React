const Button = (props)=>{
    console.log(props)
    return(
        <>
        <button>{props.buttonvitrakocontent}</button>
        <button>{props.arkocontent}</button>
        </>
    )
}
Button.defaultpage = {
    buttonvitrakocontent : "yodefaultbataaakoho"
}
export default Button