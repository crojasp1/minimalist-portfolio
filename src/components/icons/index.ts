import Github from './Github.astro';
import Linkedin from './Linkedin.astro';
import Mail from './Mail.astro';
import Whatsapp from './Whatsapp.astro';
import World from './World.astro';
import Javascript from './Javascript.astro';
import React from './React.astro';

const icons = {
	github: Github,
	linkedin: Linkedin,
	mail: Mail,
	whatsapp: Whatsapp,
  world: World,
  javascript: Javascript,
  react: React
};



export default (id: string) => icons[id];
