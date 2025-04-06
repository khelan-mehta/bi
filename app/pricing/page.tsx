"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type InquiryForm = {
  name: string;
  number: string;
  businessType: string;
  target: string;
};

enum typeOfBusiness {
  CAFE = "cafe",
  RESTAURANTS = "restaurants",
  CORPORATES = "corporates",
}

enum typeOfServices {
  INSTAFB = "duo",
  INSTATRIO = "trio",
}

const serviceDescription = {
  cafe: {
    duo: {
      name: "insta,fb",
      growth: {
        price: "₹14,999",
        features: [
          "Branding",
          "Manage social media accounts across instagram & FB",
          "8 reels & 4 promotional designs",
          "Monthly 1 shoot day",
          "Advanced analytics",
          "48-hour support response time",
        ],
      },
      boost: {
        price: "₹24,999",
        features: [
          "Everything in growth",
          "4k video production",
          "Additional 4 reels & 6 design posts",
          "UGC & story posting",
          "Custom brand growth strategy",
          "Support with Influencer collaboration",
          "Meme Marketing",
          "Sales funnel creation",
          "Dedicated Account Support",
        ],
      },
    },
    trio: {
      name: "insta,fb,google",
      growth: {
        price: "₹24,999",
        features: [
          "Everything in INSTA,FB growth plan",
          "Sales funnel creation",
          "Google business profile management",
          "Website management",
          "Google SEO",
          "Google Ads management",
        ],
      },
      boost: {
        price: "₹34,999",
        features: [
          "Everything in INSTA,FB boost plan",
          "Everything in INSTA,FB,GOOGLE growth plan",
          "Whatsapp automations",
          "50 Custom Backlinks",
          "Reputation Management",
          "Weekly blogs",
          "Dedicated Account support",
        ],
      },
    },
  },
  restaurants: {
    duo: {
      name: "insta,fb",
      growth: {
        price: "₹29,999",
        features: [
          "Branding",
          "Socials management on Instagram & FB",
          "4K Video Shoots, Images & Drone Footage",
          "Story driven content creation",
          "10 performance driven Reels",
          "12 Images & Motion graphics",
          "Review management: Video reviews",
          "Weekend ad campaigns from our side >>>",
          "Compitetion analysis: To stay ahead of the curve",
        ],
      },
      boost: {
        price: "₹39,999",
        features: [
          "Everything in the growth plan",
          "+4 reels which performs(obviously)",
          "Alternate/Daily story posting to keep the engangement",
          "Meme marketing",
          "Support in Influencer Collaboration",
          "Event promotion: Campaigns tailored to make your next event a success",
          "Custom branding options",
          "Dedicated Account Support",
        ],
      },
    },
    trio: {
      name: "insta,fb,google",
      growth: {
        price: "₹44,999",
        features: [
          "Branding",
          "Socials management on Instagram & FB",
          "4K Video Shoots, Images & Drone Footage",
          "Story driven content creation",
          "14 performance driven Reels",
          "16 Images & Motion graphics",
          "Review management: Video reviews",
          "Weekend ad campaigns from our side >>>",
          "Compitetion analysis: To stay ahead of the curve",
          "Google business profile management",
          "Website Management",
          "Weekly blogs",
          "Google seo",
          "50 Backlinks",
          "Google Ads Management",
          "Support in Influencer Collaboration",
          "Meme Marketing",
        ],
      },
      boost: {
        price: "₹59,999",
        features: [
          "Everything in growth plan",
          "Whatsapp automation",
          "AI-powered marketing automations",
          "Youtube management",
          "Content for youtube",
          "Youtube Ads Managements",
          "Dedicated account manager",
          "24/7 priority support",
        ],
      },
    },
  },
  corporates: {
    duo: {
      name: "insta,fb",
      growth: {
        price: "₹29,999",
        features: [
          "Branding",
          "Socials management on Instagram & FB",
          "4K Video Shoots, Images & Drone Footage",
          "Story driven content creation",
          "10 performance driven Reels",
          "12 Images & Motion graphics",
          "Review management: Video reviews",
          "Weekend ad campaigns from our side >>>",
          "Compitetion analysis: To stay ahead of the curve",
        ],
      },
      boost: {
        price: "₹39,999",
        features: [
          "Everything in the growth plan",
          "+4 reels which performs(obviously)",
          "Alternate/Daily story posting to keep the engangement",
          "Meme marketing",
          "Support in Influencer Collaboration",
          "Event promotion: Campaigns tailored to make your next event a success",
          "Custom branding options",
          "Dedicated Account Support",
        ],
      },
    },
    trio: {
      name: "insta,fb,google",
      growth: {
        price: "₹44,999",
        features: [
          "Branding",
          "Socials management on Instagram & FB",
          "4K Video Shoots, Images & Drone Footage",
          "Story driven content creation",
          "14 performance driven Reels",
          "16 Images & Motion graphics",
          "Review management: Video reviews",
          "Weekend ad campaigns from our side >>>",
          "Compitetion analysis: To stay ahead of the curve",
          "Google business profile management",
          "Website Management",
          "Weekly blogs",
          "Google seo",
          "50 Backlinks",
          "Google Ads Management",
          "Support in Influencer Collaboration",
          "Meme Marketing",
        ],
      },
      boost: {
        price: "₹59,999",
        features: [
          "Everything in growth plan",
          "Whatsapp automation",
          "AI-powered marketing automations",
          "Youtube management",
          "Content for youtube",
          "Youtube Ads Managements",
          "Dedicated account manager",
          "24/7 priority support",
        ],
      },
    },
    // "li": {
    //   name: "LinkedIN"
    // }
  },
};

// [Your existing serviceDescription object remains unchanged]

const Pricing = () => {
  const [business, setBusiness] = useState<typeOfBusiness>(
    typeOfBusiness.RESTAURANTS
  );
  const [service, setService] = useState<typeOfServices>(
    typeOfServices.INSTAFB
  );
  const [isOpen, setIsOpen] = useState(true); // Modal starts open on Pricing page
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<InquiryForm>({
    name: "",
    number: "",
    businessType: "",
    target: "Brand Awareness",
  });

  const targets = [
    "Brand Awareness",
    "Lead Generation",
    "Sales",
    "Customer Retention",
  ];

  const [errors, setErrors] = useState({
    name: "",
    number: "",
    businessType: "",
    target: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = { name: "", number: "", businessType: "", target: "" };
    const phoneRegex = /^[+]?[0-9]{7,15}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.number.trim()) {
      newErrors.number = "Number is required";
    } else if (!phoneRegex.test(formData.number)) {
      newErrors.number = "Invalid phone number";
    }

    if (!formData.businessType.trim())
      newErrors.businessType = "Business type is required";

    if (!formData.target.trim()) newErrors.target = "Please select a target";

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Add your API call here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay
      console.log("Form submitted:", formData);
      setIsOpen(false); // Close modal only after successful submission
    } catch (error) {
      console.error("Submission error:", error);
      setErrors((prev) => ({
        ...prev,
        target: "Submission failed. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed w-[100vw] h-[100vh] overflow-y-hidden left-[0px] top-[0px] bg-[#0f0f0f] flex justify-center items-center z-50"
        >
          <motion.form
            initial={{ y: 50, opacity: 0 }}
            animate={
              isSubmitting ? { y: -400, opacity: 0 } : { y: 0, opacity: 1 }
            }
            exit={{ y: -50, opacity: 0 }}
            onSubmit={handleSubmit}
            className="bg-[#131313] p-6 rounded-md w-full max-w-md flex flex-col gap-4 font-mono border"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-white text-lg font-serif">br.</h2>

            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-transparent border p-3 text-white rounded-sm outline-none w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Your Number"
                className="bg-transparent border p-3 text-white rounded-sm outline-none w-full"
              />
              {errors.number && (
                <p className="text-red-500 text-sm mt-1">{errors.number}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                placeholder="Type of Business"
                className="bg-transparent border p-3 text-white rounded-sm outline-none w-full"
              />
              {errors.businessType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.businessType}
                </p>
              )}
            </div>

            <div>
              <select
                name="target"
                value={formData.target}
                onChange={handleChange}
                className="bg-transparent border p-3 text-white rounded-sm outline-none w-full"
              >
                <option value="" className="text-black">
                  Select a target
                </option>
                {targets.map((t) => (
                  <option key={t} value={t} className="text-black">
                    {t}
                  </option>
                ))}
              </select>
              {errors.target && (
                <p className="text-red-500 text-sm mt-1">{errors.target}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-black py-3 rounded-sm font-bold disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </button>
          </motion.form>
        </motion.div>
      )}

      <section className="justify-center items-center w-full lg:px-6 py-4 ">
        <section className="justify-center items-center w-full lg:px-6 py-4">
          <div className="section-title flex flex-col sm:flex-row gap-8 sm:gap-4 sm:items-center sm:justify-between">
            <h1 className="font-bold text-2xl tracking-wide font-sans">
              PRICING{" "}
              <span className="font-serif font-semibold text-sm">
                @ brown.ion
              </span>
              <br />
              <small className="font-sans text-xs text-gray-700 font-medium">
                That blows your customers' mind 🤯, and makes your brand go 🪄
              </small>
            </h1>

            {/* Business Selection */}
            <ul className="flex gap-3 sm:gap-6 w-80 scrollbar-hide sm:w-auto overflow-x-scroll">
              {Object.values(typeOfBusiness).map((biz) => (
                <li
                  key={biz}
                  className={`px-5 cursor-pointer py-3 rounded-full border border-gray-200 text-xs uppercase transition-all 
              ${
                business === biz
                  ? "bg-gray-950 text-gray-100 border-gray-900"
                  : ""
              }`}
                  onClick={() => setBusiness(biz)}
                >
                  {biz.charAt(0).toUpperCase() + biz.slice(1)}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Selection */}
          <section className="grid grid-cols-1 sm:grid-cols-8 gap-6 mt-10">
            <div className="col-span-8 overflow-x-visible sm:col-span-2 flex flex-wrap sm:flex-col gap-4">
              {Object.keys(serviceDescription[business]).map((cat) => (
                <div
                  key={cat}
                  className={`relative w-full border-animation flex justify-center items-center h-12 rounded-full transition-all 
              ${
                service === cat ? "border-wrapper" : "border-wrapper-unactive"
              }`}
                  onClick={() => setService(cat as typeOfServices)}
                >
                  <div className="bg-white cursor-pointer uppercase text-sm font-medium flex items-center px-2 w-[calc(100%-4px)] rounded-full h-[calc(100%-4px)] z-10">
                    {serviceDescription[business][cat as typeOfServices].name}
                  </div>
                </div>
              ))}
            </div>

            {/* Render Selected Service Data */}
            <div className="col-span-6 rounded-md p-4">
              <h2 className="text-lg uppercase tracking-wider font-semibold">
                {serviceDescription[business][service]?.name ||
                  "No Service Selected"}
              </h2>
              {/* <div className="pricing-plan-title flex justify-center gap-6 w-full">
                        <h2 className="px-5 py-3 bg-gray-950 rounded-xl text-sm text-white">Growth @ brown.ion</h2>
                        <h2 className="px-5 py-3 rounded-xl text-sm">Boost @ brown.ion</h2>
                    </div> */}

              <div className="pricing-plan-description text-sm my-4 font-mono">
                Growth plan is best suited for businesses looking to make their
                way to establish themeselves in the digital market.
              </div>

              <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2 font-sans">
                <div className="bg-white/60 p-8 sm:p-10 lg:mx-0">
                  <h3 id="tier-hobby" className="text-base/7 font-semibold">
                    Growth
                  </h3>
                  <p className="mt-4 flex items-baseline gap-x-2">
                    <span className="text-5xl font-semibold tracking-tight text-foreground">
                      {serviceDescription[business][service].growth.price}
                    </span>
                    <span className="text-base text-gray-500">/month</span>
                  </p>
                  <p className="mt-6 text-base/7 text-gray-600">
                    The perfect plan if you&#039;re just getting started with
                    your magical journey.
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10"
                  >
                    {serviceDescription[business][service].growth.features.map(
                      (feature, idx) => {
                        return (
                          <li className="flex gap-x-3" key={idx}>
                            <svg
                              className="h-6 w-5 text-gray-900 flex-none"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              data-slot="icon"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            {feature}
                          </li>
                        );
                      }
                    )}
                  </ul>
                  <a
                    href="#"
                    aria-describedby="tier-hobby"
                    className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold ring-1 ring-gray-200 ring-inset hover:ring-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-10"
                  >
                    Get started today
                  </a>
                </div>
                <div className="relative p-8 sm:p-10">
                  <div className="absolute pricing-special-tier top-0 left-0 w-full z-[100] p-2 mb-2 h-full sm:h-[744px]"></div>
                  <h3 id="tier-hobby" className="text-base/7 font-semibold">
                    Boost
                  </h3>
                  <p className="mt-4 flex items-baseline gap-x-2">
                    <span className="text-5xl font-semibold tracking-tight text-foreground">
                      {serviceDescription[business][service].boost.price}
                    </span>
                    <span className="text-base text-gray-500">/month</span>
                  </p>
                  <p className="mt-6 text-base/7 text-gray-600">
                    Boost your capibilities even further with us.
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10"
                  >
                    {serviceDescription[business][service].boost.features.map(
                      (feature, idx) => {
                        return (
                          <li className="flex gap-x-3" key={idx}>
                            <svg
                              className="h-6 w-5 text-gray-900 flex-none"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              data-slot="icon"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            {feature}
                          </li>
                        );
                      }
                    )}
                  </ul>
                  <a
                    href="#"
                    aria-describedby="tier-enterprise"
                    className="mt-8 block rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 sm:mt-10"
                  >
                    Get started today
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Pricing;
