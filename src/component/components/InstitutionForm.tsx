'use client';
import Link from "next/link";
import { useState, useRef, ChangeEvent } from "react";
import { BiArrowBack } from "react-icons/bi";
import DefaultAvatar from "./defaultAvatar";
import Image from "next/image";
import { CgFacebook, CgInstagram, CgTwitter, CgWebsite } from "react-icons/cg";
import { CiLinkedin } from "react-icons/ci";
import { createInstitution } from "@/utils/apis/institute";
import { useRouter } from "next/router";

interface FormProps {
    setStep: (step: number) => void;
}

function BaseForm({ title, setStep }: { title: string, setStep: (step: number) => void }) {
    //const router = useRouter();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [affiliation, setAffiliation] = useState("");
    const [logo, setLogo] = useState<File | null>(null);
    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const [banner, setBanner] = useState<File | null>(null);
    const [bannerPreview, setBannerPreview] = useState<string | null>(null);
    const [facebook, setFacebook] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");
    const [terms, setTerms] = useState(false);

    const logoInputRef = useRef<HTMLInputElement>(null);
    const bannerInputRef = useRef<HTMLInputElement>(null);

    const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setLogo(file);
            setLogoPreview(URL.createObjectURL(file));
        }
    };

    const handleBannerChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setBanner(file);
            setBannerPreview(URL.createObjectURL(file));
        }
    };

    const triggerLogoInput = () => {
        logoInputRef.current?.click();
    };

    const triggerBannerInput = () => {
        bannerInputRef.current?.click();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!terms) {
            alert("You must agree to the terms and conditions.");
            return;
        }
        
        if (!name || !address || !contact || !email || !affiliation) {
            alert("Please fill all required fields");
            return;
        }

        const formData = new FormData();
        formData.append('institutionType', title);
        formData.append('name', name);
        formData.append('address', address);
        formData.append('city', city);
        formData.append('country', country);
        formData.append('contact', contact);
        formData.append('email', email);
        formData.append('website', website);
        formData.append('affiliation', affiliation);
        if (logo) formData.append('logo', logo);
        if (banner) formData.append('banner', banner);
        formData.append('facebook', facebook);
        formData.append('linkedin', linkedin);
        formData.append('twitter', twitter);
        formData.append('instagram', instagram);
        formData.append('terms', terms.toString());
        
        const response =await createInstitution(formData);

        alert(response.message)
        
        // router.push("/feed");
 

        // setStep(3);
    };

    return (
        <div className="">
            <h2 className="text-xl font-bold text-indigo-800 mb-2 flex justify-start items-center">
                <Link href="/page/create"><BiArrowBack /></Link>
                <span className="mx-4"></span>
                {title} Form
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4">
                        <div className="rounded-t-sm h-[20vh] overflow-hidden relative">
                            {bannerPreview ? (
                                <Image
                                    alt="banner preview"
                                    fill
                                    className="object-cover object-center w-full"
                                    src={bannerPreview}
                                />
                            ) : (
                                <Image
                                    alt="default banner"
                                    height={100}
                                    width={100}
                                    className="object-cover object-top w-full h-full"
                                    src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                                />
                            )}
                            <button
                                type="button"
                                onClick={triggerBannerInput}
                                className="absolute bottom-2 right-2 bg-white/80 text-gray-800 p-1 rounded-full hover:bg-white transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </button>
                            <input
                                type="file"
                                ref={bannerInputRef}
                                onChange={handleBannerChange}
                                accept="image/*"
                                className="hidden"
                            />
                        </div>
                        <div className="mx-auto w-[6vw] h-[6vw] relative left-4 md:left-[-80px] -mt-10 overflow-hidden rounded-full border-4 border-white bg-white">
                            <div className="relative w-full h-full">
                                {logoPreview ? (
                                    <Image
                                        alt="logo preview"
                                        fill
                                        className="object-cover rounded-full"
                                        src={logoPreview}
                                    />
                                ) : (
                                    <DefaultAvatar size={60} />
                                )}
                                <button
                                    type="button"
                                    onClick={triggerLogoInput}
                                    className="absolute bottom-0 right-0 bg-white/80 text-gray-800 p-1 rounded-full hover:bg-white transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>
                                <input
                                    type="file"
                                    ref={logoInputRef}
                                    onChange={handleLogoChange}
                                    accept="image/*"
                                    className="hidden"
                                />
                            </div>
                        </div>

                        <div className="mt-4 md:mt-12">
                            <div className="mb-2">
                                <div className="relative mb-2">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <CgWebsite/>
                                    </div>
                                    <input 
                                        type="url" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" 
                                        placeholder="your website link"
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="relative mb-2">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <CgFacebook/>
                                    </div>
                                    <input 
                                        type="url" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" 
                                        placeholder="Your Facebook account URL"
                                        value={facebook}
                                        onChange={(e) => setFacebook(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="relative mb-2">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <CiLinkedin/>
                                    </div>
                                    <input 
                                        type="url" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" 
                                        placeholder="your linkedin account link"
                                        value={linkedin}
                                        onChange={(e) => setLinkedin(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="relative mb-2">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <CgTwitter/>
                                    </div>
                                    <input 
                                        type="url" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" 
                                        placeholder="your twitter account link"
                                        value={twitter}
                                        onChange={(e) => setTwitter(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <CgInstagram/>
                                    </div>
                                    <input 
                                        type="url" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" 
                                        placeholder="your insta account link"
                                        value={instagram}
                                        onChange={(e) => setInstagram(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-3/4 p-2"> 
                        <div className="flex flex-col md:flex-row flex-wrap">
                            <div className="mb-4 w-full md:w-1/2 md:pr-2">
                                <label className="block text-gray-700">Institution Name:</label>
                                <input
                                    type="text"
                                    className="border w-full p-2 rounded"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4 w-full md:w-1/2 md:pl-2">
                                <label className="block text-gray-700">Affiliation & Accreditation:</label>
                                <select
                                    className="border w-full p-2 rounded"
                                    value={affiliation}
                                    onChange={(e) => setAffiliation(e.target.value)}
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="CBSE">CBSE</option>
                                    <option value="ICSE">ICSE</option>
                                    <option value="State Board">State Board</option>
                                     
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="mb-4 w-full">
                                <label className="block text-gray-700">Address:</label>
                                <textarea 
                                    className="border w-full p-2 rounded"
                                    cols={30}
                                    rows={3}
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-4 w-full md:w-1/2 md:pr-2">
                                <label className="block text-gray-700">City:</label>
                                <input
                                    type="text"
                                    className="border w-full p-2 rounded"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4 w-full md:w-1/2 md:pl-2">
                                <label className="block text-gray-700">Country:</label>
                                <input
                                    type="text"
                                    className="border w-full p-2 rounded"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4 w-full md:w-1/2 md:pr-2">
                                <label className="block text-gray-700">Contact Number:</label>
                                <input
                                    type="tel"
                                    className="border w-full p-2 rounded"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4 w-full md:w-1/2 md:pl-2">
                                <label className="block text-gray-700">Contact Email:</label>
                                <input
                                    type="email"
                                    className="border w-full p-2 rounded"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-center mb-4">
                    <input 
                        id="checked-checkbox" 
                        type="checkbox" 
                        checked={terms}
                        onChange={(e) => setTerms(e.target.checked)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2" 
                        required
                    />
                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900">
                        I agree to talentia Terms and conditions
                    </label>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-4 py-2 rounded min-w-[200px] hover:bg-indigo-700 transition-colors"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

/* Export different form types */
export function SchoolForm({ setStep }: FormProps) {
    return <BaseForm title="School" setStep={setStep} />;
}

export function CollegeForm({ setStep }: FormProps) {
    return <BaseForm title="College" setStep={setStep} />;
}

export function UniversityForm({ setStep }: FormProps) {
    return <BaseForm title="University" setStep={setStep} />;
}

export function EnggMgmtForm({ setStep }: FormProps) {
    return <BaseForm title="Engineering & Management Institute" setStep={setStep} />;
}

export function MedicalInstituteForm({ setStep }: FormProps) {
    return <BaseForm title="Medical Institute" setStep={setStep} />;
}

export function PolytechnicForm({ setStep }: FormProps) {
    return <BaseForm title="Polytechnic Institute" setStep={setStep} />;
}

export function TrainingCenterForm({ setStep }: FormProps) {
    return <BaseForm title="Training Center" setStep={setStep} />;
}

export function CoachingInstituteForm({ setStep }: FormProps) {
    return <BaseForm title="Coaching Institute" setStep={setStep} />;
}

export function OtherInstituteForm({ setStep }: FormProps) {
    return <BaseForm title="Other Institute" setStep={setStep} />;
}