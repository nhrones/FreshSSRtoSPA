# Simple SPA fresh project

This is a very simple Single Page App using fresh.   
Fresh `Server-Side-Renders` the /routes/index.tsx page,    
then runs the simple page and its code in the browser.   

I use a hidden island element to expose all content in the browser   
(see: /islands/HiddenRef.tsx)   
   
The UI is esentially pure html, no jsx required         (/routes/index.tsx)     
Styling is from a plain css file in the static folder   (/static/style.css)  
All client-side code is Typescript in the /app/ folder  (/app/dom.ts)   

So, a dynamic single page `fresh` web app using only html, css, typescript.

Think Front-End all written in pure Deno-Typescript, delivered by Deploy.

### Usage
Start the project:
```
deno task start
```
This will watch the project directory and restart as necessary.
  
Try it at https://fresh-ssr-spa.deno.dev/

For a more complex example see https://github.com/nhrones/FreshDiceRTC

