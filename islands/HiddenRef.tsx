import { useEffect, useRef } from 'preact/hooks'
import * as DomEvents from '../app/dom.ts'

/** 
 * The following island creates a simple hidden <p/> element.
 * It is added to the /routes/index.tsx.
 *   
 * I use the useRef hook to tell when it has been mounted in the DOM.
 * This is like listening for `domContentLoaded`~ 
 * 
 * In the useEffect hook, I test if it is current(mounted), is so, 
 * I know I can call my clientside code `/app/dom.ts :: DomEvents.init().
*/

// This island is used to expose the rendered dom in index.tsx
export default function HiddenRef() {
   
    // first, create a dom-reference to our dummy element
    const hiddenElementRef = useRef(null);
    
    // on mount
    useEffect(() => {
        // I like to think of this as 'domContentLoaded'
        if (hiddenElementRef.current) DomEvents.init()
    },[]);
    
    // a dom reference element that is never rendered       
    return <p ref={hiddenElementRef} hidden/>
}
