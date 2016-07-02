import Ember from 'ember';
import ControllerSupport from 'ember-anchor/mixins/controller-support';

const { Controller } = Ember;

export default Controller.extend(ControllerSupport, {
  anchorQueryParam: 'custom',
  queryParams: ['custom'],
  custom: 'first'
});
