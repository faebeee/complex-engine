'use strict';

import System from '../System';
import Entity from '../Entity';
import World from '../World';

/**
 * This systems renders only entities that match the required components.
 * @abstract
 */
class EntitySystem extends System {

    /**
     * Define required components
     * @param {Function[]} components
     */
    constructor(components = []) {
        super();
        /** @var {Function[]}  */
        this.components = components;
    }

    /**
     * Process all entities matching the required components
     * @param {Entity[]} entities
     */
    processEntities(entities) {
        for (let i = 0; i < entities.length; i++) {
            this.update(entities[i]);
        }
    }

    /**
     * Get list of components to work with this system
     * @returns {Function[]}
     */
    getComponents() {
        return this.components;
    }

    /**
     * @param {Entity} entity
     */
    update(entity) {

    };
}

export default EntitySystem;
