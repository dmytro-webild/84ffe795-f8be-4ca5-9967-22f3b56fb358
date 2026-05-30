"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Sparkles, Star, Award } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="mediumSizeLargeTitles"
      background="grid"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Sakthi Ganga Tiles"
          navItems={[
            { name: "Home", id: "#home" },
            { name: "About Us", id: "#about" },
            { name: "Products", id: "#products" },
            { name: "Pricing", id: "#pricing" },
            { name: "Testimonials", id: "#testimonials" },
            { name: "FAQ", id: "#faq" },
            { name: "Contact", id: "#contact" }
          ]}
          logoSrc="http://img.b2bpic.net/free-photo/cozy-home-decoration_169016-1808.jpg"
          logoAlt="Sakthi Ganga Tiles Logo"
          button={{
            text: "Get a Quote",            href: "#contact"
          }}
        />
      </div>

      <div id="home" data-section="home">
        <HeroLogo
          logoText="Sakthi Ganga Tiles"
          description="Transform your spaces with our exquisite collection of tiles and premium sanitary wares. Quality, variety, and expert advice for your perfect home."
          buttons={[
            { text: "Explore Tiles", href: "#products" },
            { text: "Get a Quote", href: "#contact" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/mirror-white-luxury-modern-real_1203-4046.jpg"
          imageAlt="Luxurious tile showroom interior"
          showDimOverlay={true}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          title="Your Trusted Partner in Home Aesthetics"
          description="For years, Sakthi Ganga Tiles & Sanitary Wares has been a cornerstone in Polur, providing unparalleled quality and service. We believe in helping you create spaces that reflect your style and stand the test of time."
          metrics={[
            { value: "25+", title: "Years of Experience" },
            { value: "1000+", title: "Happy Customers" },
            { value: "500+", title: "Projects Completed" }
          ]}
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-photo/tiler-working-renovation-apartment_23-2149278581.jpg"
          imageAlt="Showroom with customer and consultant"
          mediaAnimation="blur-reveal"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardMedia
          title="Discover Our Extensive Product Range"
          description="From elegant flooring to stylish bathroom solutions, our collection is curated to meet diverse tastes and functional needs."
          features={[
            {
              id: "1",              title: "Premium Ceramic Tiles",              description: "Durable and versatile, our ceramic tiles come in a vast array of colors, patterns, and sizes, perfect for any interior space.",              tag: "Flooring & Walls",              imageSrc: "http://img.b2bpic.net/free-photo/tiles-textured-background_53876-18304.jpg",              imageAlt: "Close-up of ceramic tiles"
            },
            {
              id: "2",              title: "Elegant Porcelain Tiles",              description: "Experience superior strength and sophistication with our porcelain tiles, ideal for high-traffic areas and outdoor applications.",              tag: "High Durability",              imageSrc: "http://img.b2bpic.net/free-photo/oxide-steel-texture_1194-8436.jpg",              imageAlt: "Close-up of porcelain tiles"
            },
            {
              id: "3",              title: "Modern Sanitary Wares",              description: "Complete your bathroom with our collection of contemporary sanitary wares, blending innovative design with optimal functionality.",              tag: "Bathroom Solutions",              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-male-self-care-setting-still-life_23-2150326544.jpg",              imageAlt: "Modern sanitary ware display"
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Bestselling Tiles & Wares"
          description="Explore our most popular selections that combine aesthetic appeal with exceptional performance, loved by homeowners and designers alike."
          products={[
            {
              id: "p1",              brand: "Sakthi Ganga",              name: "Grey Marble Effect Tile",              price: "₹650 / sqft",              rating: 5,
              reviewCount: "89 Reviews",              imageSrc: "http://img.b2bpic.net/free-photo/stone-rock-background-texture_1194-607456.jpg",              imageAlt: "Grey marble effect ceramic tile"
            },
            {
              id: "p2",              brand: "Sakthi Ganga",              name: "Classic White Subway Tile",              price: "₹320 / sqft",              rating: 4,
              reviewCount: "120 Reviews",              imageSrc: "http://img.b2bpic.net/free-photo/domestic-cleaning-concept-with-wipers-frame_23-2147700612.jpg",              imageAlt: "Classic white subway tile"
            },
            {
              id: "p3",              brand: "Sakthi Ganga",              name: "Wood Grain Porcelain Tile",              price: "₹780 / sqft",              rating: 5,
              reviewCount: "75 Reviews",              imageSrc: "http://img.b2bpic.net/free-photo/toast-with-boiled-eggs-marble-table_114579-39517.jpg",              imageAlt: "Wood grain effect porcelain tile"
            },
            {
              id: "p4",              brand: "AquaFlow",              name: "Countertop Wash Basin",              price: "₹4,500",              rating: 4,
              reviewCount: "55 Reviews",              imageSrc: "http://img.b2bpic.net/free-photo/faucet-sink_1203-2339.jpg",              imageAlt: "Elegant white ceramic wash basin"
            },
            {
              id: "p5",              brand: "HygienePro",              name: "Wall-Hung Commode",              price: "₹12,000",              rating: 5,
              reviewCount: "42 Reviews",              imageSrc: "http://img.b2bpic.net/free-photo/girl-holding-soap-while-washing-hand-washbasin_23-2147824094.jpg",              imageAlt: "Contemporary wall hung toilet"
            },
            {
              id: "p6",              brand: "SparkleFaucets",              name: "Chrome Mixer Tap",              price: "₹2,800",              rating: 4,
              reviewCount: "68 Reviews",              imageSrc: "http://img.b2bpic.net/free-photo/pro-kitchen-sprayer-sleek-sink-stone-backsplash_169016-69285.jpg",              imageAlt: "Chrome finish bathroom mixer tap"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Value for Every Style & Budget"
          description="We offer flexible packages and competitive pricing for bulk orders and complete bathroom solutions. Get the best value for your investment."
          plans={[
            {
              id: "p-standard",              badge: "Popular",              badgeIcon: Sparkles,
              price: "Starting ₹250",              name: "Standard Tile Range",              buttons: [{ text: "View Collection", href: "#products" }],
              features: [
                "Standard Ceramic & Vitrified Tiles",                "Wide variety of colors & finishes",                "Suitable for residential use",                "Basic installation guidance"
              ]
            },
            {
              id: "p-premium",              badge: "Best Value",              badgeIcon: Star,
              price: "Starting ₹500",              name: "Premium Tile & Sanitary",              buttons: [{ text: "Get a Quote", href: "#contact" }],
              features: [
                "Porcelain & Designer Tiles",                "High-end Sanitary Wares",                "Commercial & Residential suitability",                "Expert design consultation"
              ]
            },
            {
              id: "p-luxury",              badge: "Exclusive",              badgeIcon: Award,
              price: "Custom Quote",              name: "Luxury & Project Solutions",              buttons: [{ text: "Enquire Now", href: "#contact" }],
              features: [
                "Exotic Natural Stone & Imported Tiles",                "Smart Sanitary Wares & Accessories",                "Tailored project solutions",                "Full installation & after-sales support"
              ]
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Hear From Our Happy Customers"
          description="Our clients consistently praise our product quality, wide selection, and exceptional customer service. Your satisfaction is our priority."
          testimonials={[
            {
              id: "t1",              title: "Exceptional Quality Tiles!",              quote: "Sakthi Ganga provided us with the most beautiful tiles for our new home. The quality is outstanding, and they look even better in person!",              name: "Priya Sharma",              role: "Homeowner",              imageSrc: "http://img.b2bpic.net/free-photo/attractive-salesman-pretty-woman-her-20s-are-store-looking-wall-full-frame-samples_662251-250.jpg",              imageAlt: "Priya Sharma"
            },
            {
              id: "t2",              title: "Fantastic Sanitary Ware Collection",              quote: "The range of sanitary wares at Sakthi Ganga is impressive. We found everything we needed for our bathroom renovation, perfectly matching our style.",              name: "Ramesh Kumar",              role: "Interior Designer",              imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-owner-working_23-2148828358.jpg",              imageAlt: "Ramesh Kumar"
            },
            {
              id: "t3",              title: "Great Service & Value",              quote: "The team at Sakthi Ganga was incredibly helpful from selection to delivery. Excellent products and unmatched customer service.",              name: "Anjali Devi",              role: "Property Developer",              imageSrc: "http://img.b2bpic.net/free-photo/woman-bathrobe-applying-cream_23-2148389861.jpg",              imageAlt: "Anjali Devi"
            },
            {
              id: "t4",              title: "The Best Tile Shop in Polur!",              quote: "Always my go-to for all tiling needs. Their variety and quality are consistent, and their staff truly understands client needs.",              name: "Vikram Singh",              role: "Contractor",              imageSrc: "http://img.b2bpic.net/free-photo/two-happy-man-having-morning-breakfast-kitchen_23-2148195297.jpg",              imageAlt: "Vikram Singh"
            },
            {
              id: "t5",              title: "Transformed My Home",              quote: "Thanks to Sakthi Ganga, my living room now has stunning new flooring. The tiles are beautiful and have completely transformed the space.",              name: "Deepa Menon",              role: "Resident",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-women-with-clothes-donations_23-2149196124.jpg",              imageAlt: "Deepa Menon"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common queries about our products, services, and policies."
          faqs={[
            {
              id: "q1",              title: "What types of tiles do you offer?",              content: "We offer a wide range including ceramic, porcelain, vitrified, digital, and natural stone tiles, suitable for floors and walls across residential and commercial projects."
            },
            {
              id: "q2",              title: "Do you provide installation services?",              content: "While we primarily supply materials, we can connect you with trusted local installers. We also offer guidance on proper installation techniques and product care."
            },
            {
              id: "q3",              title: "Can I get a custom quote for a large project?",              content: "Absolutely! We welcome bulk orders and large-scale projects. Please contact us directly with your requirements for a personalized quote and potential discounts."
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/high-angle-smiley-woman-work_23-2149636257.jpg"
          imageAlt="Customer asking questions"
          mediaAnimation="blur-reveal"
          mediaPosition="right"
          faqsAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get in Touch"
          title="Visit Our Showroom Today!"
          description="Experience our collections firsthand. Our expert team is ready to assist you in selecting the perfect tiles and sanitary wares for your project."
          buttons={[
            { text: "Contact Us", href: "tel:+919876543210" },
            { text: "View Location", href: "https://maps.app.goo.gl/YourLocation" }
          ]}
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Sakthi Ganga Tiles"
          columns={[
            {
              title: "Products",              items: [
                { label: "Tiles", href: "#products" },
                { label: "Sanitary Wares", href: "#products" },
                { label: "Adhesives", href: "#" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact Us", href: "#contact" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "FAQ", href: "#faq" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2024 Sakthi Ganga Tiles. All rights reserved."
          logoSrc="http://img.b2bpic.net/free-photo/cozy-home-decoration_169016-1808.jpg"
          logoAlt="Sakthi Ganga Tiles Logo"
        />
      </div>
    </ThemeProvider>
  );
}
