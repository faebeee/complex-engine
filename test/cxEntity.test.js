'use strict';

let test = require('unit.js');

describe('cxEntity', function(){
    it('addComponent', function(){
        let cxEntity = require('../Complex').cxEntity;
        let MockComponent = require('./Mock/MockComponent');

        let entity = new cxEntity();
        entity.addComponent( new MockComponent() );

        test.array(entity.components).hasLength(1);
    });

    it('addComponent multiple', function(){
        let cxEntity = require('../Complex').cxEntity;
        let MockComponent = require('./Mock/MockComponent');

        let entity = new cxEntity();
        entity.addComponent( new MockComponent() );
        entity.addComponent( new MockComponent() );
        entity.addComponent( new MockComponent() );

        test.array(entity.components).hasLength(3);
    });

    it('addComponent', function(){
        let cxEntity = require('../Complex').cxEntity;
        class MockComponent{

        }
        let entity = new cxEntity();
        test.exception(function() {
            entity.addComponent( new MockComponent() );
        });
    });

    it('getComponents single', function(){
        let cxEntity = require('../Complex').cxEntity;
        let MockComponent = require('./Mock/MockComponent');

        let entity = new cxEntity();
        entity.addComponent( new MockComponent() );
        let comp = entity.getComponents('mock.component');
        test.array(comp).hasLength(1);
    });


    it('getComponents multiple components', function(){
        let cxEntity = require('../Complex').cxEntity;
        let MockComponent = require('./Mock/MockComponent');

        let entity = new cxEntity();
        entity.addComponent( new MockComponent() );
        entity.addComponent( new MockComponent() );
        entity.addComponent( new MockComponent() );
        let comp = entity.getComponents('mock.component');
        test.array(comp).hasLength(3);
    });

    it('getComponent non existent component', function(){
        let cxEntity = require('../Complex').cxEntity;
        let entity = new cxEntity();
        let comp = entity.getComponents('mock.component');
        test.array(comp).isEmpty();
    });

    it('hasComponent', function(){
        let cxEntity = require('../Complex').cxEntity;
        let MockComponent = require('./Mock/MockComponent');

        let entity = new cxEntity();
        entity.addComponent( new MockComponent() );
        let comp = entity.hasComponent('mock.component');
        test.bool(comp).isTrue();
    });

    it('hasComponent non existent', function(){
        let cxEntity = require('../Complex').cxEntity;
        let entity = new cxEntity();
        let comp = entity.hasComponent('mock.component');
        test.bool(comp).isFalse();
    });

    it('removeComponent', function(){
        let cxEntity = require('../Complex').cxEntity;
        let MockComponent = require('./Mock/MockComponent');

        let entity = new cxEntity();
        entity.addComponent( new MockComponent() );
        entity.removeComponent('mock.component');
        test.array(entity.components).hasLength(0);
    });

    it('getAllComponents', function(){
        let cxEntity = require('../Complex').cxEntity;
        let MockComponent = require('./Mock/MockComponent');

        let entity = new cxEntity();
        entity.addComponent( new MockComponent() );
        entity.addComponent( new MockComponent() );

        test.array(entity.getAllComponents()).hasLength(2);
    });


    it('destroy', function(){
        let cxEntity = require('../Complex').cxEntity;
        let MockComponent = require('./Mock/MockComponent');

        let entity = new cxEntity();
        entity.destroy();

        test.bool(entity.alive).isFalse();
        test.bool(entity.remove).isTrue();
    });
});