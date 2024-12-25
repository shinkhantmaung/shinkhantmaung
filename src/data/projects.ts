export type Project = {
  title: string;
  link?: string;
  description?: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "GO Transit",
    description: "Mini app for Burma Train Transportion",
    link: "hhttps://www.facebook.com/gotransitapp/",
  },
  {
    title: "Laravel Nextui Starter",
    description: "A skeleton project for Laravel and Inertia.",
    link: "https://github.com/shinkhantmaung/laravel-inertia-react-nextui-starter",
  },
  {
    title: "Filament Myanmar Township Field",
    description: "Plugin for Myanmar Township Field",
    link: "https://github.com/shinkhantmaung/filament-myanmar-township-field",
  },
  {
    title: "Postage Stamp Template - Figma",
    description: "A customizable postage stamp template on Figma",
    link: "https://www.figma.com/community/file/1453255505992716593/postage-stamp-template",
  },
  {
    title: "Currency to MMK Converter",
    description: " a browser extension that converts currencies to Myanmar Kyat (MMK)",
    link: "https://github.com/shinkhantmaung/currency-to-mmk-converter",
  },
];

export default projects;
