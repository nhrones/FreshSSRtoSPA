/// <reference lib="dom" />


let logger: HTMLPreElement

export const log = (msg: string) => {
    logger.textContent += '\n' + msg
}
let count = 0


/**
 * This init function is called from the HiddenRef island.
 * It is called only after the island has mounted in the dom.
 * Since the island was added to the index.tsx, that tells me 
 * that all the elements in index.tsx are mounted in the dom.
 * 
 * The code on this page will have been bundled by esbuild and 
 * will now be loaded in the browser as javaacsript.  
 * 
 * This shows we can write Typescript client code, and let Fresh  
 * handle the transpilation and bundling to the browser. 
 */
export const init = () => {
    logger = document.getElementById('logger') as HTMLPreElement;

    const testBtn = document.getElementById('testbtn') as HTMLButtonElement;
    testBtn.onclick = () => {
        count++
        log(`You clicked the non-island-button ${count} times!`)
    };

    const howBtn = document.getElementById('howbtn') as HTMLButtonElement;
    howBtn.onclick = () => {
        logger.textContent =''
        log('One hidden island element (HiddenRef) provides the needed DOM reference!')
        log('After it loads, it brings along any module(s) it imports to the browser!')
        log('Since it\'s sent to the browser (transpiled/bundled), anything goes!')
        log('And this client-side code is always pure Typescript in your Fresh project!')
    };
    
    log('DomContentLoaded - Initialized!')
};