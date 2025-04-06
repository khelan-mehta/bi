"use client";
import { ChangeEvent, MouseEvent, useState } from "react";

interface FormData {
    role: string;
    name: string;
    number: string;
    email: string;
    cover: string;
    resumeLink: string;
}

interface Errors {
    role?: string;
    name?: string;
    number?: string;
    email?: string;
    cover?: string;
    resumeLink?: string;
}

export default function Joinus() {


    const [formData, setFormData] = useState({
        role: '',
        name: '',
        number: '',
        email: '',
        cover: '',
        resumeLink: '',
    });

    const [errors, setErrors] = useState<Errors>({});

    const [coverLetterLength, setCoverLetterLength] = useState(0);
    const MAX_COVER_LETTER_LENGTH = 500;

    const roles = ["Video Editor", "Graphic designer", "UI/UX Designer", "Digital Marketer", "Social Media Manager/Marketer", "Business Development Manager"];

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });

        if (name === 'cover') {
            setCoverLetterLength(value.length);
            if (value.length > MAX_COVER_LETTER_LENGTH) {
                setErrors({ ...errors, cover: `Cover letter must be under ${MAX_COVER_LETTER_LENGTH} characters.` });
            }
        }
    };

    const validateForm = () => {
        let newErrors: Errors = {};
        if (!formData.role) newErrors.role = "Role is required";
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.number) newErrors.number = "Number is required";
        else if (!/^[6-9]\d{9}$/.test(formData.number)) newErrors.number = "Invalid Indian number";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
        if (!formData.cover) newErrors.cover = "Cover letter is required";
        else if (formData.cover.length > MAX_COVER_LETTER_LENGTH) newErrors.cover = `Cover letter must be under ${MAX_COVER_LETTER_LENGTH} characters.`;
        if (!formData.resumeLink) newErrors.resumeLink = "Resume link is required";
        else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(formData.resumeLink)) {
            newErrors.resumeLink = "Invalid URL format";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const mailtoLink = `mailto:team@brownion.com?subject=Job Application @ brown.ion for ${formData.role}&body=${encodeURIComponent(
            `Role: ${formData.role}\nName: ${formData.name}\nNumber: ${formData.number}\nEmail: ${formData.email}\nCover Letter: ${formData.cover}\nResume Link: ${formData.resumeLink}`
        )}`;

        window.open(mailtoLink);

        setFormData({
            role: '',
            name: '',
            number: '',
            email: '',
            cover: '',
            resumeLink: '',
        });
        alert("Application submitted.");
    };


    return (
        <section className="relative flex justify-center items-center">
            <form onSubmit={handleSubmit} className="border font-sans rounded md:w-4/6 lg:w-1/2 p-6 flex flex-col gap-4">
            <h1 className="font-sans font-bold sm:text-xl">Join us <span className="font-mono text-gray-200 text-4xl font-extrabold">@</span> <span className="font-serif">brown.ion</span></h1>
            <p className="font-mono text-xs">Forge Your Legend at Brown.ion!<br /><hr className="my-4" /> Are you a mage of design, sorcerer of code, or wizard of words? Brown.ion seeks skilled artisans to join our fellowship. Embark on a quest for innovation, where your talents will be honed and your contributions will weave magic. Join us, and craft legendary brands. Here's a sneak peek to the items that we bring to your spell: </p>
            <ul className="font-mono text-xs px-2">
            <li>Apprenticeship in Branding Arts</li>
  <li>Mastery of Web & Mobile Spellcraft</li>
  <li>A Guild of Collaborative Mages</li>
  <li>Treasures of Competitive Reward</li>
            </ul>

            <div className="flex flex-col gap-2 mx-auto w-full sm:px-3 font-mono">
                <label htmlFor="role" className="text-sm font-semibold capitalize">Role</label>
                <select name="role" id="role" value={formData.role} onChange={handleChange} className="rounded-sm border px-4 py-3 font-mono w-full bg-transparent focus:outline-none outline-none">
                    <option value="">Select a role</option>
                    {roles.map(role => (
                        <option key={role} value={role}>{role}</option>
                    ))}
                </select>
                {errors.role && <p className="text-red-500 text-xs">{errors.role}</p>}
            </div>

            <div className="flex flex-col gap-2 mx-auto w-full sm:px-3 font-mono">
                <label htmlFor="name" className="text-sm font-semibold capitalize">Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="rounded-sm border px-4 py-3 font-mono w-full bg-transparent focus:outline-none outline-none" />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            <div className="flex flex-col gap-2 mx-auto w-full sm:px-3 font-mono">
                <label htmlFor="number" className="text-sm font-semibold capitalize">Number</label>
                <input type="tel" name="number" id="number" value={formData.number} onChange={handleChange} className="rounded-sm border px-4 py-3 font-mono w-full bg-transparent focus:outline-none outline-none" />
                {errors.number && <p className="text-red-500 text-xs">{errors.number}</p>}
            </div>

            <div className="flex flex-col gap-2 mx-auto w-full sm:px-3 font-mono">
                <label htmlFor="email" className="text-sm font-semibold capitalize">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="rounded-sm border px-4 py-3 font-mono w-full bg-transparent focus:outline-none outline-none" />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            <div className="flex flex-col gap-2 mx-auto w-full sm:px-3 font-mono">
                <label htmlFor="cover" className="text-sm font-semibold capitalize">Cover Letter</label>
                <textarea name="cover" id="cover" value={formData.cover} onChange={handleChange} className="rounded-sm border px-4 py-3 font-mono w-full bg-transparent focus:outline-none outline-none" />
                {errors.cover && <p className="text-red-500 text-xs">{errors.cover}</p>}
                <p className="text-xs text-gray-500">{coverLetterLength} / {MAX_COVER_LETTER_LENGTH} characters</p>
            </div>

            <div className="flex flex-col gap-2 mx-auto w-full sm:px-3 font-mono">
                <label htmlFor="resumeLink" className="text-sm font-semibold capitalize">Resume (Google Drive/Other Link)</label>
                <input type="url" name="resumeLink" id="resumeLink" value={formData.resumeLink} onChange={handleChange} className="rounded-sm border px-4 py-3 font-mono w-full bg-transparent focus:outline-none outline-none" placeholder="Paste link here" />
                {errors.resumeLink && <p className="text-red-500 text-xs">{errors.resumeLink}</p>}
            </div>

            <button type="submit" className="w-full sm:w-auto my-4 py-3 px-4 bg-black font-sans text-xs sm:text-sm font-semibold text-white rounded">
                Become a Wizard
            </button>
        </form>
        </section>
    )
}