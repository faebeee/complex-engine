'use strict';

let cxEntitySystem = require('../../').cxEntitySystem;

module.exports = class EntitySystem extends cxEntitySystem {
    constructor() {
        super();
        this.tag = 'mock.system.entity';
    }
};
