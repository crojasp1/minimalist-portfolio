import Angular from './Angular.astro';
import CSS from './CSS.astro';
import Git from './Git.astro';
import Github from './Github.astro';
import HTML from './HTML.astro';
import Javascript from './Javascript.astro';
import Language from './Language.astro';
import Linkedin from './Linkedin.astro';
import Mail from './Mail.astro';
import NodeJs from './NodeJs.astro';
import React from './React.astro';
import Sass from './Sass.astro';
import Typescript from './Typescript.astro';
import Whatsapp from './Whatsapp.astro';
import World from './World.astro';

const icons = {
	angular: Angular,
	css: CSS,
	git: Git,
	github: Github,
	html: HTML,
	language: Language,
	linkedin: Linkedin,
	mail: Mail,
	nodejs: NodeJs,
	sass: Sass,
	typescript: Typescript,
	whatsapp: Whatsapp,
  javascript: Javascript,
  react: React,
  world: World,
};



export default (id: string) => icons[id];
