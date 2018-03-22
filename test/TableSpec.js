import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import Table from '../src/Table';

describe('Table', () => {
  it('Should be a table', () => {
    let instance = ReactTestUtils.renderIntoDocument(<Table />);
    assert.equal(ReactDOM.findDOMNode(instance).nodeName, 'TABLE');
    assert.ok(ReactDOM.findDOMNode(instance).className.match(/\btable\b/));
  });

  it('Should have correct class when striped', () => {
    let instance = ReactTestUtils.renderIntoDocument(<Table striped />);
    assert.ok(
      ReactDOM.findDOMNode(instance).className.match(/\btable-striped\b/)
    );
  });

  it('Should have correct class when hover', () => {
    let instance = ReactTestUtils.renderIntoDocument(<Table hover />);
    assert.ok(
      ReactDOM.findDOMNode(instance).className.match(/\btable-hover\b/)
    );
  });

  it('Should have correct class when bordered', () => {
    let instance = ReactTestUtils.renderIntoDocument(<Table bordered />);
    assert.ok(
      ReactDOM.findDOMNode(instance).className.match(/\btable-bordered\b/)
    );
  });

  it('Should have correct class when small', () => {
    let instance = ReactTestUtils.renderIntoDocument(<Table size="sm" />);
    assert.ok(ReactDOM.findDOMNode(instance).className.match(/\btable-sm\b/));
  });

  it('Should have correct class when dark', () => {
    let instance = ReactTestUtils.renderIntoDocument(<Table variant="dark" />);
    assert.ok(ReactDOM.findDOMNode(instance).className.match(/\btable-dark\b/));
  });

  it('Should have responsive wrapper', () => {
    let instance = ReactTestUtils.renderIntoDocument(<Table responsive />);
    assert.ok(
      ReactDOM.findDOMNode(instance).className.match(/\btable-responsive\b/)
    );
    assert.ok(
      ReactDOM.findDOMNode(instance).firstChild.className.match(/\btable\b/)
    );
  });

  it('Should have responsive breakpoints', () => {
    let instance = ReactTestUtils.renderIntoDocument(<Table responsive="sm" />);
    assert.ok(
      ReactDOM.findDOMNode(instance).className.match(/\btable-responsive-sm\b/)
    );
  });
});
