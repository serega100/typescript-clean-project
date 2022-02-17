import {suite, test} from "@testdeck/mocha";
import * as _chai from 'chai';
import {returnArgument} from "../src/app";

_chai.should()

@suite class AppUnitTests {
    @test 'should be 5'() {
        let value = returnArgument(5);
        value.should.equal(5);
    }
}