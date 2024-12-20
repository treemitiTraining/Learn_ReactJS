export const NavLinkBTN = ({ data, index }) => {
    return (
        <><a className="navLink" href={data.link} key={index}>{data.name}</a></>
    )
}

export const IconBtn = ({ btnText, icon, classa }) => {
    return (
        <button className={`IconBtn ${classa}`}>{icon}{btnText}</button>
    )
}