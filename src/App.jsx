import React from "react";

// Navigation Component
const Navigation = () => {
  const scrollToCTA = (e) => {
    e.preventDefault();
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-8  py-5 flex justify-between items-center max-md:px-4">
        <div className="text-4xl max-md:text-2xl font-extrabold text-accent tracking-tight">
          Exodigital
        </div>
        <a
          href="#"
          className="bg-accent text-white px-8  max-md:px-4 py-3.5 rounded-md font-semibold text-[15px] hover:bg-accent-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
        >
          Book a Free Strategy Call
        </a>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  const scrollToCTA = (e) => {
    e.preventDefault();
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-40 max-md:pt-28 pb-24 max-md:pb-12 px-8  text-center bg-white max-md:px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl max-md:text-4xl font-black leading-[1.1] mb-6 tracking-tight text-primary">
          Turn Paid Ads Into a Predictable Customer Pipeline
        </h1>

        {/* <a
          href="#"
          className="inline-block bg-accent text-white px-8 max-md:px-4 max-md:px-4 py-3.5 rounded-md font-semibold text-[15px] hover:bg-accent-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
        >
          Book a Free Strategy Call
        </a> */}
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold mb-6 tracking-tight text-primary">
            How Exodigital Approaches Paid Ads
          </h2>
          <p className="text-lg max-md:text-sm text-gray-600 leading-relaxed">
            If you want to understand how we think about customer acquisition,
            ad testing, and scaling, watch this short breakdown.
          </p>
        </div>
        <div className="max-w-4xl mx-auto border-[3px] border-dashed border-gray-300 rounded-xl p-2 text-center bg-white shadow-md">
          <iframe
            className="w-full rounded-xl h-[400px] max-md:h-[300px]"
            width=""
            src="https://www.youtube.com/embed/tYZi9ugG7Gk?si=dS1b5yqtFKNryewz"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-accent text-white px-8 max-md:px-4 py-3.5 rounded-md font-semibold text-[15px] hover:bg-accent-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
          >
            Book a Free Strategy Call
          </a>
        </div>
        <p className="text-xl max-md:text-base  text-gray-600 mb-10">
          We'll review your offer and see if this makes sense.
        </p>
      </div>
    </section>
  );
};

// Stop Guessing Section
const StopGuessing = () => {
  const scrollToCTA = (e) => {
    e.preventDefault();
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 max-md:py-10 px-8 max-md:px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold mb-6 tracking-tight text-primary">
            Stop Guessing Where Your Next Customer Is Coming From
          </h2>
          <p className="text-lg max-md:text-sm text-gray-600 leading-relaxed mb-6">
            If you have a solid product but your revenue still feels
            unpredictable, the problem isn't your offer, it's how customers find
            you.
          </p>
          <p className="text-lg max-md:text-sm text-gray-600 leading-relaxed">
            Exodigital helps business owners turn paid ads into a reliable
            stream of leads, users, and sales, without relying on referrals or
            hope.
          </p>
        </div>
        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-accent text-white px-8 max-md:px-4 py-3.5 rounded-md font-semibold text-[15px] hover:bg-accent-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
          >
            Book a Free Strategy Call
          </a>
          <p className="text-sm text-gray-500 italic mt-6">
            For founders, owners, and marketing leads in the US, UK, EU & Canada
            <br />
            (Not for startups with no offer or enterprise giants)
          </p>
        </div>
      </div>
    </section>
  );
};

// For/Not For Section
const ForNotFor = () => {
  return (
    <section className="py-20 max-md:py-10 px-8 max-md:px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold tracking-tight text-primary">
            Who This Is For / Not For
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {/* For You */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-10 shadow-md max-lg:p-6">
            <h3 className="text-3xl max-md:text-xl font-extrabold mb-8 text-green-600">
              This is for you if:
            </h3>
            <ul className="space-y-0">
              <li className="flex items-start gap-4 py-4 border-b border-gray-200">
                <span className="text-green-600 font-bold text-xl flex-shrink-0">
                  ✓
                </span>
                <span className="text-[15px] leading-relaxed">
                  You have a real product or service that delivers value
                </span>
              </li>
              <li className="flex items-start gap-4 py-4 border-b border-gray-200">
                <span className="text-green-600 font-bold text-xl flex-shrink-0">
                  ✓
                </span>
                <span className="text-[15px] leading-relaxed">
                  You're tired of inconsistent revenue
                </span>
              </li>
              <li className="flex items-start gap-4 py-4 border-b border-gray-200">
                <span className="text-green-600 font-bold text-xl flex-shrink-0">
                  ✓
                </span>
                <span className="text-[15px] leading-relaxed">
                  You don't want to rely on referrals to survive
                </span>
              </li>
              <li className="flex items-start gap-4 py-4">
                <span className="text-green-600 font-bold text-xl flex-shrink-0">
                  ✓
                </span>
                <span className="text-[15px] leading-relaxed">
                  You want customers and users on demand — not "when it happens"
                </span>
              </li>
            </ul>
          </div>

          {/* Not For */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-10 shadow-md max-lg:p-6">
            <h3 className="text-3xl max-md:text-xl font-extrabold mb-8 text-red-500">
              This is NOT for:
            </h3>
            <ul className="space-y-0">
              <li className="flex items-start gap-4 py-4 border-b border-gray-200">
                <span className="text-red-500 font-bold text-xl flex-shrink-0">
                  ✕
                </span>
                <span className="text-[15px] leading-relaxed">
                  Mega established companies
                </span>
              </li>
              <li className="flex items-start gap-4 py-4 border-b border-gray-200">
                <span className="text-red-500 font-bold text-xl flex-shrink-0">
                  ✕
                </span>
                <span className="text-[15px] leading-relaxed">
                  Crypto, betting, or gift card businesses
                </span>
              </li>
              <li className="flex items-start gap-4 py-4">
                <span className="text-red-500 font-bold text-xl flex-shrink-0">
                  ✕
                </span>
                <span className="text-[15px] leading-relaxed">
                  People looking for quick hacks instead of real execution
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Core Problem Section
const CoreProblem = () => {
  return (
    <section className="py-20 max-md:py-10 px-8 max-md:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold mb-6 tracking-tight text-primary">
            The Core Problem
          </h2>
          <p className="text-lg max-md:text-sm text-gray-600 leading-relaxed mb-4">
            Most business owners don't actually have a product problem.
          </p>
          <p className="text-lg max-md:text-sm font-semibold text-primary">
            They have a customer acquisition problem.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-2 border-gray-200 rounded-xl p-8 max-md:p-6 shadow-md">
            <h4 className="text-xl max-md:text-base font-bold mb-4 text-primary">
              You may already have:
            </h4>
            <p className="text-gray-600 leading-relaxed">
              A solid offer
              <br />
              A working service
              <br />
              Happy past clients
            </p>
          </div>
          <div className="border-2 border-gray-200 rounded-xl p-8 max-md:p-6 shadow-md">
            <h4 className="text-xl max-md:text-base font-bold mb-4 text-primary">
              Yet:
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Leads aren't consistent
              <br />
              Sales fluctuate month to month
              <br />
              Growth feels reactive instead of planned
            </p>
          </div>
          <div className="border-2 border-gray-200 rounded-xl p-8 max-md:p-6 shadow-md">
            <h4 className="text-xl max-md:text-base font-bold mb-4 text-primary">
              The Result:
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Without a reliable acquisition system, revenue becomes
              unpredictable and that uncertainty slows everything down.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Approach Section
const Approach = () => {
  return (
    <section className="py-20 max-md:py-10 px-8 max-md:px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold mb-6 tracking-tight text-primary">
            The Exodigital Approach
          </h2>
          <p className="text-xl max-md:text-base font-semibold text-primary mb-6">
            Paid Ads Built for Real Customers
          </p>
        </div>
        <p className="text-center text-lg max-md:text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
          Exodigital runs paid advertising systems designed to bring in hot
          leads, active users, and paying customers. Instead of hoping people
          find you, we place your offer directly in front of the right audience
          using ads built to convert, not just generate clicks.
        </p>
        <p className="text-center text-lg max-md:text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto">
          This isn't just theory. It's execution, testing, and optimization.
        </p>
      </div>
    </section>
  );
};

// What Clients Get Section
const WhatClientsGet = () => {
  return (
    <section className="py-20 max-md:py-10 px-8 max-md:px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold mb-6 tracking-tight text-primary">
            What Clients Get
          </h2>
          <p className="text-lg max-md:text-sm text-gray-600">
            When you work with Exodigital, clients typically see:
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="border-2 border-gray-200 rounded-xl p-10 max-md:p-6 hover:border-accent transition-all duration-300 hover:shadow-md shadow-md">
            <h3 className="text-2xl max-md:text-lg font-bold mb-3 text-primary">
              Hot leads
            </h3>
            <p className="text-gray-600 leading-relaxed">
              people actively interested in what you offer
            </p>
          </div>
          <div className="border-2 border-gray-200 rounded-xl p-10 max-md:p-6 hover:border-accent transition-all duration-300 hover:shadow-md shadow-md">
            <h3 className="text-2xl max-md:text-lg font-bold mb-3 text-primary">
              More users and loyal customers
            </h3>
            <p className="text-gray-600 leading-relaxed">not just traffic</p>
          </div>
          <div className="border-2 border-gray-200 rounded-xl p-10 max-md:p-6 hover:border-accent transition-all duration-300 hover:shadow-md shadow-md">
            <h3 className="text-2xl max-md:text-lg font-bold mb-3 text-primary">
              More sales and engagement
            </h3>
            <p className="text-gray-600 leading-relaxed">
              driven by ads that actually convert
            </p>
          </div>
        </div>
        <p className="text-center mt-12 text-lg max-md:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
          No inflated promises.
          <br />
          No fake guarantees.
          <br />
          <br />
          Just a system designed to create real opportunities in your pipeline.
        </p>
      </div>
    </section>
  );
};

// Video Section
// const VideoSection = () => {
//   const scrollToCTA = (e) => {
//     e.preventDefault();
//     document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section className="py-20 max-md:py-10 px-8 max-md:px-4 bg-gray-50">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center mb-14">
//           <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold mb-6 tracking-tight text-primary">
//             How Exodigital Approaches Paid Ads
//           </h2>
//           <p className="text-lg max-md:text-sm text-gray-600 leading-relaxed">
//             If you want to understand how we think about customer acquisition,
//             ad testing, and scaling, watch this short breakdown.
//           </p>
//         </div>
//         <div className="max-w-4xl mx-auto border-[3px] border-dashed border-gray-300 rounded-xl p-2 text-center bg-white shadow-md">
//           <iframe
//             className="w-full rounded-xl h-[400px] max-md:h-[300px]"
//             width=""
//             src="https://www.youtube.com/embed/tYZi9ugG7Gk?si=dS1b5yqtFKNryewz"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           ></iframe>
//         </div>
//         <div className="text-center mt-12">
//           <a
//             href="#cta"
//             onClick={scrollToCTA}
//             className="inline-block bg-accent text-white px-8 max-md:px-4 py-3.5 rounded-md font-semibold text-[15px] hover:bg-accent-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
//           >
//             Book a Free Strategy Call
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// How It Works Section
const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Strategy & Offer Alignment",
      description: "We understand your product, market, and growth goals.",
    },
    {
      number: 2,
      title: "Campaign Setup",
      description:
        "We design and launch paid ad campaigns built for conversions — not vanity metrics.",
    },
    {
      number: 3,
      title: "Testing & Optimization",
      description:
        "Ads are refined based on performance, data, and real feedback.",
    },
    {
      number: 4,
      title: "Lead Flow & Sales Calls",
      description:
        "You focus on closing. We focus on bringing you people worth speaking to.",
    },
  ];

  return (
    <section className="py-20 max-md:py-10 px-8 max-md:px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold tracking-tight text-primary">
            How It Works
          </h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-8 border-b border-black/10 pb-10"
            >
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-4xl font-black flex-shrink-0">
                {step.number}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl max-md:text-lg font-bold mb-3 text-primary">
                  {step.title}
                </h3>
                <p className="text-lg max-md:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Paid Ads Section
const WhyPaidAds = () => {
  const benefits = [
    {
      letter: "C",
      title: "Control",
      description:
        "Decide when and where your message appears to your ideal customers.",
    },
    {
      letter: "S",
      title: "Speed",
      description:
        "Get in front of customers immediately, not months from now.",
    },
    {
      letter: "S",
      title: "Scalability",
      description:
        "When something works, you can scale it predictably and profitably.",
    },
  ];

  return (
    <section className="py-20 max-md:py-10 px-8 max-md:px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold mb-6 tracking-tight text-primary">
            Why Paid Ads?
          </h2>
          <p className="text-lg max-md:text-sm text-gray-600">
            Referrals are unpredictable. Organic growth takes time.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-xl p-8 max-md:p-6 shadow-md flex flex-col"
            >
              <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-left text-white text-5xl font-black  mb-6">
                {benefit.letter}
              </div>
              <h3 className="text-2xl max-md:text-lg font-bold mb-4 text-primary">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-xl max-md:text-base font-semibold text-primary max-w-3xl mx-auto">
          When done properly, ads stop being an expense — and start becoming a
          growth engine.
        </p>
      </div>
    </section>
  );
};

// Case Studies Section
const CaseStudies = () => {
  const scrollToCTA = (e) => {
    e.preventDefault();
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  const CASES = [
    {
      id: 1,
      title: "Case 1",
      sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequatur illo ratione dolor distinctio! Recusandae repellendus aliquam cumque.",
    },
    {
      id: 2,
      title: "Case 2",
      sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequatur illo ratione dolor distinctio! Recusandae repellendus aliquam cumque.",
    },
    {
      id: 3,
      title: "Case 3",
      sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequatur illo ratione dolor distinctio! Recusandae repellendus aliquam cumque.",
    },
    {
      id: 4,
      title: "Case 4",
      sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequatur illo ratione dolor distinctio! Recusandae repellendus aliquam cumque.",
    },
  ];

  return (
    <section className="py-20 max-md:py-10 px-8 max-md:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold mb-6 tracking-tight text-primary">
            Results Depend on the Business
          </h2>
          <p className="text-lg max-md:text-sm text-gray-600 mb-12">
            Every business is different. We don't believe in copy-paste outcomes
            or blanket promises.
          </p>
        </div>
        <div className="max-w-3xl mx-auto text-left mb-14">
          <h3 className="text-xl max-md:text-base font-bold mb-6 text-primary">
            What we focus on:
          </h3>
          <ul className="space-y-3 text-lg max-md:text-sm text-gray-600 list-inside list-disc">
            <li>Bringing in hot leads</li>
            <li>Increasing user adoption</li>
            <li>Improving sales and engagement through paid ads</li>
          </ul>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {CASES.map((casee, index) => (
            <div
              key={casee.id}
              className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-md"
            >
              <div className="bg-gradient-to-br from-accent to-accent-dark h-56 flex items-center justify-center text-white text-2xl max-md:text-lg font-bold">
                {casee.title}
              </div>
              <div className="p-8">
                <p className="text-gray-600 italic leading-relaxed">
                  {casee.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-accent text-white px-8 max-md:px-4 py-3.5 rounded-md font-semibold text-[15px] hover:bg-accent-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTA = () => {
  return (
    <section
      id="cta"
      className="py-28 max-md:py-14 px-8 max-md:px-4 bg-gray-50 border-t-4 border-accent"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold mb-6 tracking-tight text-primary">
          Are you ready to stop guessing?
        </h2>
        <p className="text-xl max-md:text-base text-gray-600 mb-10">
          If you're done with unpredictable revenue and want a clearer path to
          customers:
        </p>
        <a
          href="#"
          className="inline-block bg-accent text-white px-8 max-md:px-4 py-3.5 rounded-md font-semibold text-[15px] hover:bg-accent-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
        >
          Book a Free Strategy Call
        </a>
        <p className="text-base max-md:text-sm text-gray-500 italic mt-6">
          We'll review your offer, your goals, and see if this makes sense
          before anything else.
        </p>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 max-md:py-8 px-8 max-md:px-4 text-center">
      <div className="text-3xl max-md:text-xl font-extrabold mb-3">
        Exodigital
      </div>
      <div className="text-base opacity-80 mb-2">
        Paid Advertising & Customer Acquisition
      </div>
      <div className="text-sm opacity-60">
        Serving clients in the US, UK, EU & Canada.
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      {/* <VideoSection /> */}
      <StopGuessing />
      <ForNotFor />
      <CoreProblem />
      <Approach />
      <WhatClientsGet />
      <HowItWorks />
      <WhyPaidAds />
      <CaseStudies />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
