import Image from "next/image";

export default function Blog() {
    return (
        <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            
            <Image 
                                height={10}
                                width={10}
                className="object-cover w-full h-64"
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Article"
            />
            <div className="p-4">

                <div className="mt-4">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <Image 
                                                height={10}
                                                width={10}
                                className="object-cover h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                                alt="Avatar"
                            />
                            <a
                                href="#"
                                className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                                tabIndex={0}
                                role="link"
                            >
                                Jone Doe
                            </a>
                        </div>
                        <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                            21 SEP 2015
                        </span>
                    </div>
                </div>
                <div>
                   
                    <a
                        href="#"
                        className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                        tabIndex={0}
                        role="link"
                    >
                        I Built A Successful Blog In One Year
                    </a>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Molestie parturient et sem ipsum volutpat vel. Natoque sem et
                        aliquam mauris egestas quam volutpat viverra. In pretium nec
                        senectus erat. Et malesuada lobortis.
                    </p>
                </div>
            </div>
        </div>
    );
}
