import{w as t}from"./index.1ab2fff7.js";import{A as e,B as o,b as r}from"./state.5fda79de.js";const l=e(t({isDark:!1}),o(),"themeStore"),n=new Set(["dark","synthwave","halloween","aqua","forest","luxury","black","dracula"]),f=s=>{s.includes(" ")&&(s=s.split(" ")[1].trim());const a=n.has(s);console.log("Setting theme",s),l.set({theme:s,isDark:a}),r("themeChange",{theme:s,isDark:a})};export{f as s,l as t};