import React, { useState } from "react"

export const EducationalFooter = ({
  institutionName = "Manav Rachna Educational Institutions",
  institutionShort = "Manav Rachna Vidyanatariksha",
  websiteCredit = "Sterco Digitex",
  campusAddress = {
    location: "Sector – 43, Aravalli Hills, Delhi – Surajkund Road",
    city: "Faridabad – 121004, (Haryana), India"
  },
  contactInfo = {
    MRIIRS: "+91-129-4198000",
    MRU: "+91-129-4268500", 
    MRDC: "+91-129-4268800",
    "MR Online": "1800-2024-30",
    MRIS: ["+91 90-98-99-1000", "0129-4259000"]
  },
  emailAddress = "admissions@manavrachna.edu.in", // Renamed from 'email' to 'emailAddress'
  cityOffices = [
    "Delhi", "Guwahati", "Indore", "Kota", 
    "Lucknow", "Varanasi", "Patna", "Hyderabad"
  ],
  socialLinks = [
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "YouTube", icon: "📺", url: "#" }
  ]
}) => {
  const [email, setEmail] = useState("") // State variable for newsletter subscription
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Campus Information */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏫</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">MREI Campus</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400 mt-1">📍</span>
                    <div>
                      <p className="leading-relaxed">{campusAddress.location}</p>
                      <p className="leading-relaxed">{campusAddress.city}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <span className="text-emerald-400">📞</span>
                <span>General Enquiry</span>
              </h3>
              <div className="space-y-4">
                {Object.entries(contactInfo).map(([department, contact]) => (
                  <div key={department} className="space-y-2">
                    <h4 className="font-semibold text-blue-300">{department}:</h4>
                    {Array.isArray(contact) ? (
                      <div className="space-y-1">
                        {contact.map((phone, index) => (
                          <a
                            key={index}
                            href={`tel:${phone}`}
                            className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm pl-4"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={`tel:${contact}`}
                        className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm pl-4"
                      >
                        {contact}
                      </a>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-700">
                  <a
                    href={`mailto:${emailAddress}`} // Updated to use 'emailAddress'
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <span className="text-yellow-400">✉️</span>
                    <span className="text-sm">{emailAddress}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* City Offices */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <span className="text-purple-400">🏢</span>
                <span>City Offices</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cityOffices.map((city, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-3 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm font-medium">
                      {city}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media & Newsletter */}
            <div className="lg:col-span-1">
              {/* Follow Us */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                  <span className="text-pink-400">👥</span>
                  <span>Follow Us</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 group"
                      title={social.name}
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                  <span className="text-green-400">📧</span>
                  <span>Subscribe Newsletter</span>
                </h3>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-700/50 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm leading-relaxed">
                  © Copyright 2025 - {institutionShort} - {institutionName}. All Rights Reserved.
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  Website Design & Development by{" "}
                  <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer">
                    {websiteCredit}
                  </span>
                </p>
              </div>
              <div className="text-center md:text-right">
                <div className="flex justify-center md:justify-end items-center space-x-4 text-gray-500 text-sm">
                  <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                  <span>|</span>
                  <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                  <span>|</span>
                  <a href="#" className="hover:text-white transition-colors duration-300">Sitemap</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}