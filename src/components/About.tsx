// -- MUI Components
import { Chip } from '@mui/material';

// -- MUI Icons
import TerminalIcon from '@mui/icons-material/Terminal';
import PersonIcon from '@mui/icons-material/Person';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';

const About: Function = (props: { language: boolean }): any => {
    return (
        <>
            {/* About */}
            <div className="w-screen h-screen flex items-center justify-center" id="about">
                <div className="w-[80vw] h-[80vh] lg:flex">
                    {/* Images */}
                    <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
                        <div>
                            <div className="flex">
                                <div className="LogoAbout border-b border-r">
                                    <PersonIcon sx={{ fontSize: "8rem" }} />
                                </div>
                                <div className="LogoAbout border-b border-l">
                                    <TerminalIcon sx={{ fontSize: "8rem" }} />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="LogoAbout border-t border-r">
                                    <SportsCricketIcon sx={{ fontSize: "8rem" }} />
                                </div>
                                <div className="LogoAbout border-t border-l">
                                    <SchoolIcon sx={{ fontSize: "8rem" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 h-full">
                        <h3 className="text-sm font-semibold text-gray-700">{props.language ? "ABOUT ME" : "TENTANG SAYA"}</h3>

                        <div className="mt-8">
                            <h1 className="text-6xl font-bold">{props.language ? "About Anything" : "Semuan tentang"}</h1>
                            <h2 className="text-6xl font-bold">{props.language ? "From Me" : "Dari Saya"}</h2>
                        </div>

                        <div className="mt-4 text-xl">
                            <p>
                                <span>{props.language ? "I am Jonathan Gilbert Marpaung. " : "Saya adalah Jonathan Gilbert Marpaung. "}</span>
                                <span>{props.language ? "I am now a 10th grader. " : "Saya sekarang adalah Mahasiswa kelas 10. "}</span>
                                <span>{props.language ? "For more, see below: " : "Untuk lebih jauh lihat dibawah ini: "}</span>
                            </p>

                            {/* Github */}
                            <div className="w-full lg:flex lg:justify-between mt-4">
                                <div className="w-full lg:w-1/2 p-1 flex items-center">
                                    <GitHubIcon />
                                    <p className="ml-2">@jonathanmarp</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="w-full lg:flex lg:justify-between">
                                <div className="w-full lg:w-1/2 p-1 flex items-center">
                                    <MailIcon />
                                    <p className="ml-2">jonathanmarpaung88@gmail.com</p>
                                </div>
                            </div>

                            {/* More */}
                            <div className="w-full lg:flex lg:justify-between">
                                {/* School */}
                                <div className="w-full lg:w-1/2 p-1 flex items-center">
                                    <AccountBalanceIcon />
                                    <p className="ml-2">{props.language ? "State High School 2 Kisaran" : "SMA Negeri 2 Kisaran"}</p>
                                </div>

                                {/* Hoby */}
                                <div className="w-full lg:w-1/2 p-1 flex items-center">
                                    <FavoriteIcon />

                                    <div className="flex items-center ml-2">
                                        <Chip className="mx-1" label="Badminton" />
                                        <Chip className="mx-1" label="Coding" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;