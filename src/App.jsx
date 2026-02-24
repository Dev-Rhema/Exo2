import React from "react";
import fintechDash from "./assets/fintechDash.jpeg";
import saas1 from "./assets/SaaS1.jpeg";
import saas2 from "./assets/saas2.jpeg";
import founder from "./assets/founder.jpeg";

// Reusable CTA Button Component
const CTAButton = ({ text = "Book a Free Strategy Call", className = "" }) => (
  <a
    href="https://booking.exodigital.org"
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block bg-accent text-white px-8 max-md:px-4 py-3.5 rounded-md font-semibold text-[15px] hover:bg-accent-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 ${className}`}
  >
    {text}
  </a>
);

// Navigation Component
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center max-md:px-4 gap-4">
        <div className="text-4xl max-md:text-2xl font-extrabold text-accent tracking-tight flex-shrink-0">
          Exodigital
        </div>
        <a
          href="https://booking.exodigital.org"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-white px-6 max-md:px-3 py-2.5 max-md:py-2 rounded-md font-semibold text-[15px] max-md:text-sm hover:bg-accent-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 whitespace-nowrap flex-shrink-0"
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="pt-40 max-md:pt-28 pb-24 max-md:pb-12 px-8  text-center bg-white max-md:px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl max-md:text-4xl font-black leading-[1.1] mb-6 tracking-tight text-primary">
          Turn Paid Ads Into a Predictable Customer Acquisition Engine
        </h1>
        <p className="text-2xl md:text-3xl max-md:text-xl font-bold mb-8 text-gray-700">
          Generate a 16x return on your ad spend or more, without burning
          through budget on campaigns that don't convert.
        </p>
        <div className="text-center mt-12 max-lg:mt-6">
          <CTAButton />
        </div>
        <p className="text-lg max-md:text-base text-gray-600 my-6">
          We'll review your product, your current ad setup, and your growth
          goals, and tell you honestly if this makes sense for your business.
        </p>
      </div>
    </section>
  );
};

// VSL Video Section
const VSLVideoSection = () => {
  return (
    <section className="py-20 max-md:py-10 px-8 max-md:px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold mb-6 tracking-tight text-primary">
            See How We Turn Ad Spend Into Real Customers
          </h2>
          <p className="text-lg max-md:text-sm text-gray-600 leading-relaxed">
            This short video walks through how we approach paid advertising,
            what we look for before launching campaigns, and how we think about
            turning ad spend into predictable revenue.
          </p>
        </div>
        <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg mb-12">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/tYZi9ugG7Gk?si=dS1b5yqtFKNryewz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

// Pain Points Section
const PainPoints = () => {
  const painPoints = [
    {
      number: 1,
      title: "You can't connect ad spend to real results",
      description:
        "You're spending money on ads, but you have no idea what's actually driving activations, transactions, or revenue.",
    },
    {
      number: 2,
      title: "You don't have a performance marketing system",
      description:
        "Just scattered campaigns with no clear testing framework, no optimization loop, and no way to know what's working.",
    },
    {
      number: 3,
      title: "You're relying on things that don't scale",
      description:
        "Organic growth, referrals, one-off influencer pushes. None of it is predictable and none of it compounds.",
    },
  ];

  return (
    <section className="py-20 max-md:py-10 px-8 max-md:px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold mb-6 tracking-tight text-primary">
            Stop Guessing Where Your Next Customer Is Coming From
          </h2>
          <p className="text-lg max-md:text-sm text-gray-600 leading-relaxed">
            There are 3 reasons why most founders and business owners can't
            scale their customer acquisition:
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {painPoints.map((point) => (
            <div
              key={point.number}
              className="border-2 border-gray-200 rounded-xl p-8 max-md:p-6 shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                  {point.number}
                </div>
                <div>
                  <h3 className="text-xl max-md:text-lg font-bold mb-2 text-primary">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg max-md:text-sm font-semibold text-primary">
            If any of this sounds familiar, you're not alone. And it's not a
            product problem. It's a customer acquisition problem.
          </p>
        </div>
      </div>
    </section>
  );
};

// Future Pace Section
const FuturePace = () => {
  return (
    <section className="py-20 max-md:py-10 px-8 max-md:px-4 bg-gradient-to-br from-accent/10 to-accent/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold mb-8 tracking-tight text-primary">
            Imagine Knowing Exactly Where Your Next 1,000 Customers Are Coming
            From
          </h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6 text-lg max-md:text-sm text-gray-700 leading-relaxed">
          <p>
            <span className="font-bold text-primary">Imagine</span> having a
            paid acquisition system that consistently delivers a 16x return on
            every dollar you spend on ads.
          </p>
          <p>
            <span className="font-bold text-primary">Imagine</span> knowing that
            for every $10,000 you put in, you're getting $160,000 back in
            customer value.
          </p>
          <p>
            <span className="font-bold text-primary">
              You wouldn't have to guess
            </span>{" "}
            whether this month's revenue will cover next month's runway. You
            wouldn't have to wonder which channels actually work. You'd have a
            system. A predictable one.
          </p>
          <p className="text-xl font-bold text-primary pt-4">
            How would that change the way you plan, hire, and grow?
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
            Is This Right for You?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {/* For You */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-10 shadow-md max-lg:p-6">
            <h3 className="text-3xl max-md:text-xl font-extrabold mb-8 text-accent">
              This is for you if:
            </h3>
            <ul className="space-y-0">
              <li className="flex items-start gap-4 py-4 border-b border-gray-200">
                <span className="text-accent font-bold text-xl flex-shrink-0">
                  ✓
                </span>
                <span className="text-[15px] leading-relaxed">
                  You have a real product or service that delivers value
                </span>
              </li>
              <li className="flex items-start gap-4 py-4 border-b border-gray-200">
                <span className="text-accent font-bold text-xl flex-shrink-0">
                  ✓
                </span>
                <span className="text-[15px] leading-relaxed">
                  You're tired of inconsistent, unpredictable revenue
                </span>
              </li>
              <li className="flex items-start gap-4 py-4 border-b border-gray-200">
                <span className="text-accent font-bold text-xl flex-shrink-0">
                  ✓
                </span>
                <span className="text-[15px] leading-relaxed">
                  You don't want to rely on referrals and organic to hit your
                  growth targets
                </span>
              </li>
              <li className="flex items-start gap-4 py-4 border-b border-gray-200">
                <span className="text-accent font-bold text-xl flex-shrink-0">
                  ✓
                </span>
                <span className="text-[15px] leading-relaxed">
                  You want customers on demand, not "when it happens"
                </span>
              </li>
              <li className="flex items-start gap-4 py-4">
                <span className="text-accent font-bold text-xl flex-shrink-0">
                  ✓
                </span>
                <span className="text-[15px] leading-relaxed">
                  You're a founder, owner, or marketing lead in the US, UK, EU,
                  or Canada
                </span>
              </li>
            </ul>
          </div>

          {/* Not For */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-10 shadow-md max-lg:p-6">
            <h3 className="text-3xl max-md:text-xl font-extrabold mb-8 text-accent">
              This is NOT for:
            </h3>
            <ul className="space-y-0">
              <li className="flex items-start gap-4 py-4 border-b border-gray-200">
                <span className="text-accent font-bold text-xl flex-shrink-0">
                  ✕
                </span>
                <span className="text-[15px] leading-relaxed">
                  Enterprise giants or mega-established companies
                </span>
              </li>
              <li className="flex items-start gap-4 py-4 border-b border-gray-200">
                <span className="text-accent font-bold text-xl flex-shrink-0">
                  ✕
                </span>
                <span className="text-[15px] leading-relaxed">
                  Startups with no offer, no product, and no customers yet
                </span>
              </li>
              <li className="flex items-start gap-4 py-4 border-b border-gray-200">
                <span className="text-accent font-bold text-xl flex-shrink-0">
                  ✕
                </span>
                <span className="text-[15px] leading-relaxed">
                  Crypto, betting, or gift card businesses
                </span>
              </li>
              <li className="flex items-start gap-4 py-4">
                <span className="text-accent font-bold text-xl flex-shrink-0">
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

// Social Proof / Results Section
const SocialProof = () => {
  return (
    <section className="py-20 max-md:py-10 px-8 max-md:px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold mb-6 tracking-tight text-primary">
            This Isn't Theory. These Are Real Numbers.
          </h2>
        </div>

        {/* PiggyVest Case Study */}
        <div className="mb-16">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-10 shadow-md max-lg:p-6">
            <h3 className="text-2xl max-md:text-xl font-bold mb-4 text-primary">
              Fintech Company
            </h3>
            <div className="mb-6 bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img
                src={fintechDash}
                alt="Fintech Dashboard Analytics"
                className="w-full h-auto"
              />
            </div>
            <ul className="space-y-3 text-lg max-md:text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>
                  $7.5 million in customer inflows from ~$190,000 in ad spend
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>40:1 average ROI across campaigns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>Some campaigns hitting as high as 73:1 ROI</span>
              </li>
            </ul>
          </div>
        </div>

        {/* TransferGO Case Study */}
        <div className="mb-16">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-10 shadow-md max-lg:p-6">
            <h3 className="text-2xl max-md:text-xl font-bold mb-4 text-primary">
              SaaS Company
            </h3>
            <div className="mb-6 grid md:grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <img
                  src={saas1}
                  alt="SaaS Meta Performance Dashboard"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <img
                  src={saas2}
                  alt="SaaS Google Performance Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <ul className="space-y-3 text-lg max-md:text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>
                  Managed over £3.3 million in ad spend across Meta and Google
                  in a single year
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>
                  15,900+ activations and 27,000 transactions on Meta at £22.30
                  cost per activation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>16.2x purchase ROAS on Meta</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>
                  533,000 conversions from 5.3 million clicks on Google at 56p
                  average CPC
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-10 shadow-md text-center max-lg:p-6">
          <p className="text-lg max-md:text-sm text-gray-600 leading-relaxed mb-4">
            Real platforms. Real ad spend. Real returns. Managed by the same
            team that'll be working on your campaigns.
          </p>
          <p className="text-lg max-md:text-sm font-semibold text-primary">
            Over the past 5 years, we've managed over $2.8 million in ad spend
            across fintech, edtech, real estate, SaaS, and healthcare.
          </p>
        </div>
      </div>
    </section>
  );
};

// Founder Section
const FounderSection = () => {
  return (
    <section className="py-20 max-md:py-10 px-8 max-md:px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold mb-6 tracking-tight text-primary">
            Who's Behind This?
          </h2>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-xl p-10 shadow-md max-lg:p-6">
          <div className="mb-8 bg-gray-100 rounded-lg overflow-hidden shadow-md max-w-md mx-auto">
            <img
              src={founder}
              alt="Ebuka Chidube, Founder of Exodigital"
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-4 text-lg max-md:text-sm text-gray-700 leading-relaxed">
            <p>
              <span className="font-bold text-primary">
                My name is Ebuka Chidube,
              </span>{" "}
              and I'm the founder of{" "}
              <span className="font-bold text-primary">Exodigital.</span>
            </p>
            <p>
              I've spent the last 5+ years deep in performance marketing. Not as
              a consultant watching from the sidelines, but hands-on inside the
              ad accounts, building the campaigns, running the tests, and
              optimizing for real revenue.
            </p>
            <p>
              I built Exodigital because I saw too many founders getting burned
              by agencies that don't understand their markets, their unit
              economics, or what a real conversion actually looks like.
            </p>
            <p>
              We work specifically with business owners and founders in the US,
              UK, EU, and Canada who have a real product, real customers, and
              are ready to scale acquisition with a system that works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Benefits Section
const Benefits = () => {
  const benefits = [
    {
      number: 1,
      title: "Predictable pipeline",
      description:
        "Your ad spend turns into a predictable pipeline of qualified leads, activated users, and paying customers.",
    },
    {
      number: 2,
      title: "Channel clarity",
      description:
        "You know exactly which channels and campaigns drive real revenue instead of guessing based on clicks and impressions.",
    },
    {
      number: 3,
      title: "Confident scaling",
      description:
        "You scale user acquisition with confidence, backed by data and tested frameworks, not gut feelings.",
    },
    {
      number: 4,
      title: "Focus on your business",
      description:
        "You free up your time to focus on product and operations while acquisition runs on a proven system.",
    },
    {
      number: 5,
      title: "Stop wasting money",
      description:
        "You stop wasting money on agencies and freelancers who deliver dashboards full of vanity metrics instead of real customers.",
    },
  ];

  return (
    <section className="py-20 max-md:py-10 px-8 max-md:px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold mb-6 tracking-tight text-primary">
            What Changes When You Work With Us
          </h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="border-2 border-gray-200 rounded-xl p-8 max-md:p-6 shadow-md"
            >
              <h3 className="text-xl max-md:text-lg font-bold mb-2 text-primary">
                {benefit.number}. {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Strategy & Offer Alignment",
      description:
        "We dig into your product, your market, your unit economics, and your growth goals. No campaign gets launched until we understand what a real customer looks like for you.",
    },
    {
      number: 2,
      title: "Campaign Build & Launch",
      description:
        "We design and launch paid ad campaigns across Meta, Google, or both, built specifically for conversions. Not traffic. Not impressions. Real activations and transactions.",
    },
    {
      number: 3,
      title: "Testing & Optimization",
      description:
        "Every campaign goes through rigorous testing. We optimize based on performance data and real feedback, not gut feelings. This is where the ROAS compounds.",
    },
    {
      number: 4,
      title: "Scale & Lead Flow",
      description:
        "Once we find what works, we scale it. You focus on closing and serving customers. We focus on making sure they keep coming in the door.",
    },
  ];

  return (
    <section className="py-20 max-md:py-10 px-8 max-md:px-4 bg-gray-50">
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
              className="flex items-start gap-8 max-md:gap-4 border-b border-black/10 pb-10"
            >
              <div className="w-20 h-20 max-md:w-14 max-md:h-14 bg-accent rounded-full flex items-center justify-center text-white text-4xl max-md:text-2xl font-black flex-shrink-0">
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
  return (
    <section className="py-20 max-md:py-10 px-8 max-md:px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold mb-6 tracking-tight text-primary">
            Why Paid Ads?
          </h2>
          <p className="text-lg max-md:text-sm text-gray-600 leading-relaxed mb-8">
            Referrals are unpredictable. Organic growth takes time. Neither one
            gives you a system you can control.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white border-2 border-gray-200 rounded-xl p-10 shadow-md max-lg:p-6">
          <p className="text-lg max-md:text-sm text-gray-700 leading-relaxed mb-6">
            Paid ads, when done properly, give you three things nothing else
            can:
          </p>
          <ul className="space-y-4 text-lg max-md:text-sm text-gray-700 mb-8">
            <li className="flex items-start gap-3">
              <span className="font-bold text-accent flex-shrink-0">1.</span>
              <div>
                <span className="font-bold text-primary">Control</span> over who
                sees your offer
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-accent flex-shrink-0">2.</span>
              <div>
                <span className="font-bold text-primary">Speed</span> to test
                and validate what works
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-accent flex-shrink-0">3.</span>
              <div>
                <span className="font-bold text-primary">Scalability</span> to
                grow when you're ready
              </div>
            </li>
          </ul>
          <p className="text-lg max-md:text-sm font-semibold text-primary">
            When done right, ads stop being an expense and start becoming a
            growth engine. That's exactly what we build.
          </p>
        </div>
      </div>
    </section>
  );
};

// Cost of Inaction Section
const CostOfInaction = () => {
  const costs = [
    "Keep burning ad budget on campaigns that generate clicks but not customers",
    "Keep relying on referrals and organic to hit growth targets that keep moving",
    "Keep watching competitors with worse products outscale you because they figured out acquisition first",
    "Keep hiring agencies and freelancers who don't understand your market and waste your runway",
    "Keep pitching investors or planning growth with revenue numbers that fluctuate every month",
  ];

  return (
    <section className="py-20 max-md:py-10 px-8 max-md:px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl max-md:text-2xl font-extrabold mb-6 tracking-tight text-primary">
            The Alternative Is Staying Where You Are
          </h2>
          <p className="text-lg max-md:text-sm text-gray-600 leading-relaxed">
            Think about the true cost of not having a proven acquisition system
            behind your product:
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {costs.map((cost, index) => (
            <div
              key={index}
              className="border-l-4 border-accent bg-white rounded-r-lg p-6 shadow-md"
            >
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-primary">•</span> {cost}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg max-md:text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto font-semibold">
            You now know there's another way. The system works. The question is
            whether you're ready to plug it into your business.
          </p>
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
          Ready to Stop Guessing?
        </h2>
        <p className="text-xl max-md:text-base text-gray-600 mb-8">
          The next step is simple. Book a free strategy call with us.
        </p>
        <p className="text-lg max-md:text-sm text-gray-600 mb-10 leading-relaxed">
          We'll review your product, your current ad setup, and your growth
          goals, and tell you honestly if this makes sense for your business.
        </p>
        <CTAButton />
        <p className="text-base max-md:text-sm text-gray-500 italic mt-8">
          There's zero obligation to work with us after the call. At the very
          least, you'll walk away with a clear picture of where your ad spend is
          leaking and what a real acquisition system looks like for your
          product.
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
      <VSLVideoSection />
      <PainPoints />
      <FuturePace />
      <ForNotFor />
      <SocialProof />
      <FounderSection />
      <Benefits />
      <HowItWorks />
      <WhyPaidAds />
      <CostOfInaction />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
