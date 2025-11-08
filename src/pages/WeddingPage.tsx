import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Heart,
  Calendar,
  MapPin,
  Clock,
  ChevronDown,
  Camera,
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animated Section Component
const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hero Section
const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 parallax-bg bg-hero-image">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 top-[25%]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="font-serif text-4xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-wide">
            Ashiq <span className="text-wedding-brown-light">&</span> Aswathi
          </h1>
          <motion.p
            className="text-xl md:text-2xl font-light mb-8 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            November 16, 2025
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white opacity-70" />
        </motion.div>
      </div>
    </section>
  );
};

// Our Story Section
const OurStorySection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-wedding-brown mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative mb-8">
              <img
                src="/ourstory1.jpg"
                alt="Couple"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-wedding-brown rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200 cursor-pointer">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                We began our journey in college, where two hearts from different
                worlds found each other. What started as friendship soon
                blossomed into a love that faced every challenge—different
                religions, family worries, and society’s doubts. Yet, through it
                all, our bond only grew stronger.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Distance tested us for 2.5 long years, with miles and time zones
                between us, but love always found its way back. Every call,
                every memory, and every promise kept us connected.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Now, after all the waiting and growing together, we’re ready to
                begin the most beautiful chapter of our lives—as husband and
                wife. We can’t wait to celebrate this special day with all those
                who believed in us and our love.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

// Event Details Section
const EventDetailsSection: React.FC = () => {
  const events = [
    {
      title: "Wedding Ceremony",
      date: "November 16, 2025",
      time: "4:30 PM - 9:30 PM",
      venue: "Renai Kappad Beach Resort",
      address: "Chemancherry, PO, Thoovappara, Kappad, Kerala",
      mapLink: "https://maps.app.goo.gl/KbEvGeNEdPxDShRm8",
      icon: Heart,
      color: "bg-wedding-brown text-white",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Event Details
            </h2>
            <div className="w-24 h-1 bg-wedding-brown mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="flex justify-center">
          <motion.div
            className="w-full max-w-md"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Header */}
                <div className={`${event.color} p-8 text-center`}>
                  <div className="flex justify-center items-center mb-4">
                    <event.icon className="w-12 h-12" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold">
                    {event.title}
                  </h3>
                </div>

                {/* Details */}
                <div className="p-8">
                  <ul className="space-y-4">
                    <li className="grid grid-cols-[24px,1fr] gap-x-3">
                      <Calendar className="w-5 h-5 text-wedding-brown self-start" />
                      <span className="text-gray-800 text-base font-medium leading-relaxed">
                        {event.date}
                      </span>
                    </li>

                    <li className="grid grid-cols-[24px,1fr] gap-x-3">
                      <Clock className="w-5 h-5 text-wedding-brown self-start" />
                      <span className="text-gray-800 text-base font-medium leading-relaxed">
                        {event.time}
                      </span>
                    </li>

                    <li className="grid grid-cols-[24px,1fr] gap-x-3">
                      <MapPin className="w-5 h-5 text-wedding-brown self-start" />
                      <div className="min-w-0">
                        <p className="text-gray-900 font-semibold text-base leading-tight">
                          {event.venue}
                        </p>
                        <p className="text-gray-600 text-sm leading-snug mt-1">
                          {event.address}
                        </p>
                        <a
                          href={event.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-sm font-medium text-wedding-brown underline underline-offset-4 hover:opacity-80"
                        >
                          View on Google Maps →
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const DressCodeSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Static Rounded Card */}
        <div
          className="relative rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] p-8 px-10 py-14 overflow-hidden mx-auto"
          style={{
            backgroundColor: "#D6BFA3",
            maxWidth: "700px",
          }}
        >
          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
            Dress Code
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8 opacity-90 rounded-full"></div>

          {/* Message */}
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto">
            We invite our guests to dress in{" "}
            <span className="font-semibold text-black">Black attire</span> for
            the celebration.
          </p>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-700 italic mt-6">
            Still, your presence means the most.
          </p>
        </div>
      </motion.div>
    </section>
  );
};




// Gallery Section
const GallerySection: React.FC = () => {
  const images = [
    "/galary1.jpg",
    "/galery2.jpg",
    "/galery3.jpg",
    "/galery4.jpg",
    "/galery5.jpg",
    "/galery7.jpg",
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-wedding-brown mx-auto"></div>
          </div>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Footer Section
const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="font-serif text-3xl font-bold mb-4">
            Ashiq & Aswathi
          </h3>
          <p className="text-gray-300 mb-6">
            Thank you for being part of our journey
          </p>


        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400">
            © 2025 Ashiq & Aswathi. Made with ♥ for our special day.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Wedding Page Component
const WeddingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <OurStorySection />
      <EventDetailsSection />
      <DressCodeSection />
      <GallerySection />
      {/* <RSVPSection /> */}
      <FooterSection />
    </div>
  );
};

export default WeddingPage;
