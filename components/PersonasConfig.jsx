// Shared personas configuration for DemoModal and how-to-prompt pages

export const personas = {
  freelancer: {
    name: 'Solo Consultant',
    title: 'Solo Consultant', // For how-to-prompt page compatibility
    description: 'Pitch your services to new clients',
    prompt: 'My name is Anabel. Write a warm, confident email to {{Name}}, a {{Role}} at {{Company}}. Say I recently helped a similar company increase inbound leads by 40% in 2 months. Mention I specialize in marketing growth and would love to explore if we could collaborate.',
    csvContent: 'Name,Email,Company,Role\nGrace Miller,grace@midnightventures.com,Midnight Ventures,Partner\nTom Jacobs,tom@foundryanalytics.io,Foundry Analytics,CTO\nSarah Chen,sarah@techstartup.co,TechStartup,Marketing Director'
  },
  founder: {
    name: 'Startup Founder',
    title: 'SaaS Founder', // For how-to-prompt page compatibility
    description: 'Talk to early users and partners',
    prompt: 'My name is Anabel. Write a short, friendly email to {{Name}}, a {{Role}} at {{Company}}. Say I’m the founder of a scheduling tool that cut coordination time by 60% for early users. Ask if they’d be open to a quick chat to see if this could help their team too.',
    csvContent: 'Name,Email,Company,Role\nEmma Wilson,emma@growthco.com,GrowthCo,Operations Manager\nJames Lee,james@scaleup.io,ScaleUp,CEO\nLisa Park,lisa@startupz.com,StartupZ,COO'
  },
  creator: {
    name: 'Content Creator',
    title: 'Content Creator',
    description: 'Reach out for collabs or newsletter swaps',
    prompt: 'My name is Anabel. Write a short and upbeat email to {{Name}}, a {{Role}} at {{Company}}. Say I run a growing newsletter in the creator space and think we’d be a great fit for a collab or swap. Mention I admire their work and would love to explore ideas.',
    csvContent: 'Name,Email,Company,Role\nNina Bell,nina@creatorsunited.com,Creators United,Community Manager\nDerek Shaw,derek@dailydrops.co,Daily Drops,Editor\nJasmine Wu,jasmine@contentlab.io,ContentLab,Founder'
  },
  coldmarketer: {
    name: 'Cold Outreach Marketer',
    title: 'Cold Outreach Marketer',
    description: 'Run smart outbound without the bloat',
    prompt: 'My name is Anabel. Write a crisp, direct email to {{Name}}, a {{Role}} at {{Company}}. Say I help B2B teams improve outbound reply rates with better targeting and messaging. Mention I saw something interesting in their work and would love to share ideas.',
    csvContent: 'Name,Email,Company,Role\nVictor Stone,victor@leadgenius.com,LeadGenius,VP Sales\nOlivia Trent,olivia@demandlift.io,DemandLift,Growth Lead\nJake Patel,jake@b2bscale.com,B2BScale,Founder'
  }
};

// Helper function to get persona icons for how-to-prompt page
export const getPersonaIcon = (key) => {
  const icons = {
    freelancer: '🚀',
    founder: '🧑‍💻',
    creator: '📝',
    coldmarketer: '📧'
  };
  return icons[key] || '💼';
}; 