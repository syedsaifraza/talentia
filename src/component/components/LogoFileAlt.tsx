import Image from "next/image";
const LogoFileAlt=()=>{
    return <><Image
                    width={50}
                    height={50}
                    alt="Logo"
                    className="m-auto"
                    src="/assets/logo.png"
                  />  <h1>Talentia</h1></>;
}

export default LogoFileAlt;