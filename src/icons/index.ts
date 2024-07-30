import Github from './Github.astro';
import Linkedin from './Linkedin.astro';
import Mail from './Mail.astro';
import Whatsapp from './Whatsapp.astro';
import World from './World.astro';
import Javascript from './Javascript.astro';
import React from './React.astro';
import NodeJs from './NodeJs.astro';
import Angular from './Angular.astro';
import Sass from './Sass.astro';
import Typescript from './Typescript.astro';
import HTML from './HTML.astro';
import CSS from './CSS.astro';
import Git from './Git.astro';

const icons = {
	github: Github,
	linkedin: Linkedin,
	mail: Mail,
	whatsapp: Whatsapp,
  world: World,
  javascript: Javascript,
  react: React,
	nodejs: NodeJs,
	angular: Angular,
	sass: Sass,
	typescript: Typescript,
	html: HTML,
	css: CSS,
	git: Git
};



export default (id: string) => icons[id];
