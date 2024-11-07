import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='not-found__box'>
            <h2>404</h2>
            <p>Page Not Found</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}