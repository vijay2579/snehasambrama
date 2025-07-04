import Image from 'next/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { Button } from './Button'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import Link from 'next/link';

// Use charity's actual contact info or placeholders
const contactInfo = {
  phone: ['+91 9113013283', '+91 XXXXXXXXXX'], // Replace with actual numbers
  email: 'info@snehasambrama.org', // Replace with actual email
  address: 'Bhanuvalli, Haveri District, Karnataka, India' // Replace with actual address
}

const waysToJoin = [
  {
    title: 'Volunteer With Us',
    description: 'Join our team of dedicated volunteers and make a difference in your community. Share your skills and time to help those in need.',
    },
  // {
  //   title: 'Partner With Us',
  //   description: 'We welcome partnerships with organizations and businesses that share our vision of creating positive change in society.',
  // },
]

export function JoinUsAndContact() {
  // Note: Form submission and Razorpay integration backend logic is not included in this frontend code.
  // You would need to implement server-side handling for form submissions and payment processing.
  const handleSendMessage = (e) => {
    e.preventDefault()
    // Implement form submission logic here (e.g., sending data to a backend API)
    console.log('Form submitted!')
  }

  return (
    <section
      id="join-us-contact"
      aria-labelledby="join-us-contact-title"
      className="relative overflow-hidden bg-slate-50 pt-0 pb-32 sm:pb-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative z-10">
        {/* Add Contact Us heading at the top */}
        <h2 className="mb-12 text-center font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Contact Us
          </h2>

        {/* Increased max-w and added animated gradient border classes */}
        {/* Adjusted gradient colors for a more professional look */}
        <div className="mx-auto max-w-7xl rounded-2xl bg-white shadow-xl overflow-hidden md:flex relative p-0.5 before:absolute before:inset-0 before:bg-gradient-to-br before:from-emerald-600 before:via-green-500 before:to-teal-600 before:animate-gradient-spin before:rounded-[inherit]">

          {/* Content Wrapper to keep background white */}
          <div className="relative z-10 w-full rounded-[calc(0.875rem-1px)] bg-white md:flex">

            {/* Left Column: Contact Info, Ways to Join, Donate */}
            <div className="w-full md:w-1/2 p-8 border-b md:border-b-0 md:border-r border-gray-200">
              <h3 className="mb-6 text-2xl font-semibold text-slate-900">Get Involved</h3>

              {/* Contact Information */}
              <div className="mb-10 pt-6">
                <h4 className="mb-4 text-xl font-semibold text-slate-800">Contact Information</h4>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 mr-3 text-slate-500" />
                    <div>
                      {contactInfo.phone.map((number, index) => (
                        <p key={index}>{number}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-5 w-5 mr-3 text-slate-500" />
                    <p>{contactInfo.email}</p>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 mr-3 text-slate-500" />
                    <p>{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Ways to Join */}
              <div className="mb-10">
               <h4 className="mb-4 text-xl font-semibold text-slate-800">Ways to Join Us</h4>
                <div className="space-y-6">
                  {waysToJoin.map((way, index) => (
                    <div key={index}>
                      <h5 className="mb-2 text-lg font-semibold text-slate-900">{way.title}</h5>
                      <p className="text-slate-700">{way.description}</p>
              </div>
            ))}
                </div>
              </div>

              {/* Donate Button */}
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(34,197,94)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="text-center"
              >
                <Link href="/donate" passHref>
                  <Button
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Donate Now
                  </Button>
                </Link>
              </motion.div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="w-full md:w-1/2 p-8">
              <h3 className="mb-8 text-2xl font-semibold text-slate-900 text-center">Send us a message</h3>
              <form onSubmit={handleSendMessage} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    // Added improved focus styles and rounded corners
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    // Added improved focus styles and rounded corners
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700">Your Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    // Added improved focus styles and rounded corners
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    // Added improved focus styles and rounded corners
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  ></textarea>
                </div>
                <div className="text-right">
                  {/* Styled button for better integration */}
                  <Button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}
