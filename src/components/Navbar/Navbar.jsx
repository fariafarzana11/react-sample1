
const Navbar = ({route}) => {
console.log(route)
    const {path, element} = route
    return (
        <div>
<div>
    <a href={element}>{path}</a>
</div>
        </div>
    )
}
export default Navbar;