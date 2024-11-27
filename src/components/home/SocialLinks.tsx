
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
        url: ''
    },
    {
        icon: <FaLinkedin />,
        url: ''
    },
    {
        icon: <FaTwitter />,
        url: ''
    }
]

const SocialLinks: React.FC<PropsType> = ({containerStyle, iconStyle}) => {
    return (
        <div className={containerStyle}>
            {
                social_links.map((item, index) => {
                    return <Link href={item.url} key={index} className={iconStyle}>
                        {item.icon}
                    </Link>
                })
            }
        </div>
    )
}

export default SocialLinks