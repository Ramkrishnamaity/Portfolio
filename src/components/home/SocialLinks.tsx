
import React from "react"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

interface PropsType {
    containerStyle: string
    iconStyle: string
}

const social_links = [
    {
        icon: <FaGithub />,
        url: 'https://github.com/Ramkrishnamaity/'
    },
    {
        icon: <FaLinkedin />,
        url: 'https://www.linkedin.com/in/ramkrishna-maity/'
    },
    {
        icon: <FaTwitter />,
        url: 'https://x.com/_ramkrishna02'
    }
]

const SocialLinks: React.FC<PropsType> = ({containerStyle, iconStyle}) => {
    return (
        <div className={containerStyle}>
            {
                social_links.map((item, index) => {
                    return <Link href={item.url} key={index} className={iconStyle} passHref>
                        {item.icon}
                    </Link>
                })
            }
        </div>
    )
}

export default SocialLinks