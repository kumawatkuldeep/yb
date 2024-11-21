import React from 'react';

const BoltIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

const CogIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M12 2v2" />
    <path d="M12 22v-2" />
    <path d="m17 20.66-1-1.73" />
    <path d="M11 10.27 7 3.34" />
    <path d="m20.66 17-1.73-1" />
    <path d="m3.34 7 1.73 1" />
    <path d="M14 12h8" />
    <path d="M2 12h2" />
    <path d="m20.66 7-1.73 1" />
    <path d="m3.34 17 1.73-1" />
    <path d="m17 3.34-1 1.73" />
    <path d="m11 13.73-4 6.93" />
  </svg>
);

const ShieldIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
);

const AspectCard = ({ icon, title, description }) => (
  <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
    <div className="flex items-center gap-4 mb-4">
      <div className="rounded-full bg-gray-800 p-3">{icon}</div>
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

const KeyAspects = () => {
  const aspects = [
    {
      icon: <BoltIcon className="h-6 w-6 text-primary" />,
      title: '24/7 Availability',
      description: '24/7 Availability: Our chatbots are available round the clock, ensuring customer queries are addressed promptly'
    },
    {
      icon: <CogIcon className="h-6 w-6 text-primary" />,
      title: 'Instant Responses',
      description: 'Instant Responses: With AI-driven automation, responses are delivered instantly, enhancing customer satisfaction'
    },
    {
      icon: <ShieldIcon className="h-6 w-6 text-primary" />,
      title: 'Personalized Interactions',
      description: 'Personalized Interactions: Through AI algorithms, our chatbots provide personalized recommendations and solutions based on individual customer preferences.'
    }
  ];

  return (
    <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
      {aspects.map((aspect, index) => (
        <AspectCard key={index} icon={aspect.icon} title={aspect.title} description={aspect.description} />
      ))}
    </div>
  );
};

const HeaderSection = () => (
  <div className="flex flex-col items-center justify-center space-y-4 text-center">
    <div className="space-y-2">
      <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">Key Aspects</div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">WhatsApp AI-Powered Chatbot Services
      </h2>
      <p className="max-w-2xl text-gray-400 md:text-xl px-5 lg:text-lg">
      Harnessing the power of AI, our WhatsApp chatbot services provide businesses with a multitude of advantages:
      </p>
    </div>
  </div>
);

const Component = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
    <div className="container mx-auto space-y-12 px-6">
      <HeaderSection />
      <KeyAspects />
    </div>
  </section>
);

export default Component;
