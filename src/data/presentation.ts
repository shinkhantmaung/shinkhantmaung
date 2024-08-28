type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "shinkhantmaungs@gmail.com",
  title: "Mingalarbar!",
  // profile: "/profile.webp",
  description:
  "I'm Shin Khant, *a web developer* who started my career in Dec 2020. I'm currently working with *Laravel* and *Node.js*, and learning *TypeScript* and *Next.js*. Outside of work, I enjoy train spotting and contributing to Wikipedia.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/shinkhantmaungs",
    },
    {
      label: "Bento",
      link: "https://bento.me/shinkhantmaung",
    },
    {
      label: "Github",
      link: "https://github.com/shinkhantmaung",
    },
  ],
};

export default presentation;
