import Image from 'next/image'
import styles from './styles.module.css'

//import OpenSource from '@/public/opensource.svg'

export default function Home() {
    return (
        <div className={styles.home}>
            <main className="flex min-h-screen flex-col items-center justify-between p-8">
                <div className="justify-center mt-32">
                    <h1 className="font-medium uppercase text-[90px] drop-shadow">Slothpixel.me</h1>
                    <h2 className="text-3xl text-center">Open source Hypixel data platform</h2>
                    <div className="h-80"></div>
                </div>

                <div className="flex flex-row justify-between my-12">
                    <div className="max-w-[25%] mx-2 grid justify-items-center">
                       <Image
                           className=""
                           src="/icons/opensource.svg"
                           alt=""
                           width={85}
                           height={85}
                           style={{fill: 'rgb(102, 187, 255)', color: 'rgb(102, 187, 255)'}}
                           unoptimized
                       />
                        <h1 className="text-2xl font-medium my-3">Open Source</h1>
                        <p className="font-light text-center">All project code is open source and available for contributors to
                            improve and modify.</p>
                    </div>
                    <div className="max-w-[25%] mx-2 grid justify-items-center">
                        <Image
                            className="text-blue-400"
                            src="/icons/stats.svg"
                            alt=""
                            width={85}
                            height={85}
                            priority
                        />
                        <h1 className="text-2xl font-medium my-3">In-Depth Data</h1>
                        <p className="font-light text-center">Slothpixel.me provides highly detailed data from players, guilds and
                            boosters.</p>
                    </div>
                    <div className="max-w-[25%] mx-2 grid justify-items-center">
                        <Image
                            className="text-blue-400"
                            src="/icons/compass.svg"
                            alt=""
                            width={85}
                            height={85}
                            priority
                        />
                        <h1 className="text-2xl font-medium my-3">Third Item</h1>
                        <p className="font-light text-center">Lorem ipsum... This is something amazing that needs to be
                            highlighted</p>
                    </div>
                </div>


            </main>
        </div>
    )
}
