import Image from 'next/image'

export default function Footer() {
    const socialLinks = [{
        tooltip: 'Source on GitHub',
        path: '//github.com/slothpixel',
        icon: '/icons/github.svg',
    }, {
        tooltip: 'Discord',
        path: '//discord.gg/ND9bJKK',
        icon: '/icons/discord.svg',
    }, {
        tooltip: 'Twitter',
        path: '//twitter.com/slothpixel_me',
        icon: '/icons/twitter.svg',
    },/* {
        tooltip: 'Medium',
        path: '//medium.com/slothpixel',
        icon: '/icons/medium.svg',
    }*/];
    const pageLinks = [{
        name: 'About',
        path: '',
    }, {
        name: 'Privacy & Terms',
        path: '',
    }, {
        name: 'API Docs',
        path: '//docs.slothpixel.me',
    }, {
        name: 'Blog',
        path: '//medium.com/slothpixel',
    }];
    return (
        <footer className="bottom-0 h-[160px] w-full bg-black/40 p-[20px]">
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <h1 className="text-xl font-bold mr-2">Slothpixel.me</h1>
                    {
                        socialLinks.map((link) => (
                            <a
                                className="mx-1"
                                key={link.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-hint-position="top"
                                data-hint={link.tooltip}
                                href={link.path}
                            >
                                <Image width={18} height={18} src={link.icon} alt=""/>
                            </a>
                        ))
                    }
                </div>
                <p className="text-xs">Open source Hypixel data platform</p>
                <hr className="text-white/10 my-3"/>
                <div className="flex flex-row">
                    {
                        pageLinks.map((link) => (
                            <a className="pageLink" href={link.path} key={link.name} target="_blank"
                               rel="noopener noreferrer">{link.name}</a>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}
