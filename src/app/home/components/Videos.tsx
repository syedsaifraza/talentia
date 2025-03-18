

export default function Post() {
    return (


        <div className=" p-4 rounded-lg ">
            <div className="w-full h-40 h-[70vh] bg-gray-300 rounded-lg mb-2">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/x2PAr0e62pE?si=n1FadyJc5uJdoy0u"
                    title="YouTube video player"
                    
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
            <h2 className="text-lg font-semibold">Video Title 1</h2>
            <p className="text-sm text-gray-600">
                Description of the video post.
            </p>
        </div>


    );
}
