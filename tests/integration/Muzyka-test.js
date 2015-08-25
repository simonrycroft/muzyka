'use strict';

import {assert, expect} from 'chai';

import Muzyka from '../../src/Muzyka';

describe('The Muzyka class', function () {

    describe('allows us to create note objects', function () {

        it('creates a valid A0 note object using a0', function (){
            let muzyka = new Muzyka();
            let a0 = muzyka.note('a0');
            assert.equal(a0.name, 'A0');
        });

    });

});

