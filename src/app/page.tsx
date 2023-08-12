import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <Link href={'https://go5.run/'}>
                <h1 className="text-center">go5.run</h1>
            </Link>
            <div id={'detail'} className="text-center">
                <Link href="https://status.go5.run/">
                    <div className="cursor-pointer">
                        👣MyStatus
                    </div>
                </Link>
                <Link href="https://go5.run/csv/">
                    <div className="cursor-pointer">
                        📒CSV Viewer
                    </div>
                </Link>
            </div>
        </main>
    )
}
