import { library, dom } from '@fortawesome/fontawesome-svg-core'
import {faArrowUp, faInfo, faTimes, faArrowRight, faArrowLeft, faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import {faCheckSquare as farCheckSquare} from '@fortawesome/free-regular-svg-icons'

library.add(
    faArrowUp, faInfo, faTimes, faArrowRight, faArrowLeft, faCheckSquare,
    farCheckSquare,
);
dom.i2svg();
dom.watch();
