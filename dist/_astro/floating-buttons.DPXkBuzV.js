import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as t}from"./index.WFquGv8Z.js";import{c as s}from"./createLucideIcon.H8DUYhgo.js";/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],h=s("arrow-up",d);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],r=s("message-circle",p);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],x=s("phone",m);function f(){const[l,n]=t.useState(!1),[o,i]=t.useState(!1);t.useEffect(()=>{const a=()=>{n(window.scrollY>500)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const c=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs("div",{className:"fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3",children:[l&&e.jsx("button",{onClick:c,className:"p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all animate-fade-in","aria-label":"Scroll to top",children:e.jsx(h,{className:"w-5 h-5"})}),o&&e.jsxs("div",{className:"flex flex-col gap-2 animate-slide-up",children:[e.jsxs("a",{href:"https://line.me/ti/p/~clubsbybo",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 px-4 py-3 rounded-full bg-[#06C755] text-white hover:scale-105 transition-transform",children:[e.jsx(r,{className:"w-5 h-5"}),e.jsx("span",{className:"font-medium",children:"Line"})]}),e.jsxs("a",{href:"tel:+66651234416",className:"flex items-center gap-3 px-4 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all",children:[e.jsx(x,{className:"w-5 h-5"}),e.jsx("span",{className:"font-medium",children:"Call"})]})]}),e.jsx("button",{onClick:()=>i(!o),className:`p-4 rounded-full transition-all duration-300 ${o?"bg-white/20 border border-white/30 rotate-45":"bg-[--color-primary] hover:scale-110 hover-glow"}`,style:{backgroundColor:o?void 0:"#FF6B35"},"aria-label":"Contact options",children:e.jsx(r,{className:"w-6 h-6 text-white"})})]})}export{f as default};
