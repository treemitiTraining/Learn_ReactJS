import { banner, logo } from "../assets/assets.index"
import { IoHomeSharp } from "react-icons/io5";
import { NavLinkBTN, IconBtn } from "./components/shared/buttons";
import { IoCall } from "react-icons/io5";




export const Nav = () => {

    const NavLinks = [
        {
            name: "home",
            link: "/"
        },
        {
            name: 'about us',
            link: "/"
        },
        {
            name: "contact us",
            link: "/"
        },
        {
            name: "home",
            link: "/"
        },
        {
            name: 'about us',
            link: "/"
        },
        {
            name: "contact us",
            link: "/"
        }
    ]

    return (
        <nav>
            <ul>
                <h1><a href="/"><img src={logo} alt="" /></a></h1>
                {NavLinks.map((content, i) => (
                    <>
                        <NavLinkBTN data={content} index={i} />
                    </>
                ))}
            </ul>
            <IconBtn btnText={'Call me'} icon={<IoCall />} />
            <IconBtn btnText={"Submit"} classa={'blaBla'} icon={null}/>


            <IoHomeSharp style={{ fontSize: "24px", color: "green", cursor: "pointer" }} />
        </nav>
    )
}