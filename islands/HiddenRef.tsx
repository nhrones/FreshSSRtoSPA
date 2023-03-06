import { useEffect, useRef } from 'preact/hooks'
import * as DomEvents from '../app/dom.ts'

// This island is used to expose the rendered dom in index.tsx
export default function HiddenRef() {
    // create a reference to our dummy element
    const hiddenElementRef = useRef(null);
    
    // on mount
    useEffect(() => {
        // I like to think of this as 'domContentLoaded'
        if (hiddenElementRef.current) DomEvents.init()
    },[]);
    
    // a dom reference element that is never rendered       
    return <p ref={hiddenElementRef} hidden/>
}
