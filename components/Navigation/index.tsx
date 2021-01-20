import React from 'react'
import styles from './Navigation.module.scss'
import { useRouter } from 'next/router'
import NavAnchor from './NavAnchor'

interface LinkNav {
    name: string,
    path: string
}

const LINKS: LinkNav[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About',
        path: '/about'
    }
]

export default function Navigation() {
    const { pathname } = useRouter();

    return (
        <nav>
            <ul className={styles.navList}>
                {LINKS.map(({name, path}: LinkNav) => (
                    <li key={path} className={styles.navItem}>
                        {path === pathname 
                            ? <span className={styles.nonLink}>{name}</span>
                            : <NavAnchor path={path}>{name}</NavAnchor>
                        }
                    </li>
                ))}
            </ul>
        </nav>
    )
}
