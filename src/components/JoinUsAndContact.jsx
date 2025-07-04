export function JoinUsAndContact() {
  const handleSendMessage = (e) => {
    e.preventDefault()
    console.log('Form submitted!')
  }

  return (
    <section
      id="join-us-contact"
      aria-labelledby="join-us-contact-title"
      className="relative overflow-hidden bg-slate-50 pt-0 pb-16 sm:pb-32"
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
        <h2 className="mb-8 sm:mb-12 text-center font-display text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Contact Us
        </h2>

        {/* Increased max-w and added animated gradient border classes */}
        <div className="mx-auto max-w-7xl rounded-xl sm:rounded-2xl bg-white shadow-xl overflow-hidden md:flex relative p-0.5 before:absolute before:inset-0 before:bg-gradient-to-br before:from-emerald-600 before:via-green-500 before:to-teal-600 before:animate-gradient-spin before:rounded-[inherit]">

          {/* Content Wrapper to keep background white */}
          <div className="relative z-10 w-full rounded-[calc(0.875rem-1px)] bg-white md:flex">

            {/* Left Column: Contact Info, Ways to Join, Donate */}
            <div className="w-full md:w-1/2 p-4 sm:p-8 border-b md:border-b-0 md:border-r border-gray-200">
              <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-semibold text-slate-900 text-center md:text-left">Get Involved</h3>

              {/* Contact Information */}
              <div className="mb-8 sm:mb-10 pt-4 sm:pt-6">
                <h4 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-slate-800 text-center md:text-left">Contact Information</h4>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-center justify-center md:justify-start">
                    <PhoneIcon className="h-5 w-5 mr-3 text-slate-500" />
                    <div className="text-center md:text-left">
                      {contactInfo.phone.map((number, index) => (
                        <p key={index}>{number}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <EnvelopeIcon className="h-5 w-5 mr-3 text-slate-500" />
                    <p>{contactInfo.email}</p>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <MapPinIcon className="h-5 w-5 mr-3 text-slate-500" />
                    <p className="text-center md:text-left">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Ways to Join */}
              <div className="mb-8 sm:mb-10">
                <h4 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-slate-800 text-center md:text-left">Ways to Join Us</h4>
                <div className="space-y-4 sm:space-y-6">
                  {waysToJoin.map((way, index) => (
                    <div key={index} className="text-center md:text-left">
                      <h5 className="mb-2 text-base sm:text-lg font-semibold text-slate-900">{way.title}</h5>
                      <p className="text-sm sm:text-base text-slate-700">{way.description}</p>
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
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Donate Now
                  </Button>
                </Link>
              </motion.div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="w-full md:w-1/2 p-4 sm:p-8">
              <h3 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-semibold text-slate-900 text-center">Send us a message</h3>
              <form onSubmit={handleSendMessage} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700">Your Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                  ></textarea>
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    className="inline-flex justify-center py-2 px-6 sm:px-8 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
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