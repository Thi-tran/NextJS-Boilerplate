import React, { ReactNode } from 'react'
import styles from './Navigation.module.scss'
import Link from 'next/link'

interface Props {
    path: string,
    children: ReactNode
}

export default function NavAnchor({path, children}: Props) {
    return (
        <Link href={path}>
            <a className={styles.navLink}>{children}</a>
        </Link>
    )
}
