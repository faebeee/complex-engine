'use strict';

import System from '../../types/System';
import Entity from '../Entity';
import World from '../World';

/**
 * This System only renders once per update and is decoupled from the entities. This can be used to
 * update some data or clear the canvas on the screen
 */
class VoidSystem extends System {

    /**
     * update System
     */
    update() {

    };

}
export default VoidSystem;