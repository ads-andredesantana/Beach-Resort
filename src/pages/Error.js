import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

// Handling pages without routes that leads to nowhere.
export default function Error() {
    return (
        <Hero>
            <Banner title="404" subtitle="page not found">
                <Link to='/' className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
    )
}
