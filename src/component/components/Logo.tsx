import Image from "next/image";

export default function Logo(){
    return <Image
                    width={200}
                    height={80}
                    alt="Logo"
                    className="px-2"
                    src="https://content.acetians.in/uploads/logo%20(2).png"
                  />;
}