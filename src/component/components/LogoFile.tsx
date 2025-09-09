import Image from "next/image";
import AppLogo from "../../assets/WebLogo-Talentia.png"



const LogoFile=()=>{
    return <Image
                    width={200}
                    height={80}
                    alt="Logo"
                    className=""
                    src={AppLogo}
                  />;
}

export default LogoFile;