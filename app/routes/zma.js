import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { computed } from 'ember-decorators/object'; // eslint-disable-line
import updateSelectionMixin from '../mixins/update-selection';

export default Route.extend(updateSelectionMixin, {
  mainMap: service(),

  model(params) {
    return {
      taskInstance: this.store.findRecord('zma', params.ulurpno),
    };
  },

  setupController(controller, { taskInstance }) {
    this._super(controller, taskInstance);
  },

  actions: {
    didTransition() {
      this.set('mainMap.shouldFitBounds', true);
    },
  },
});
