import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import updateSelectionMixin from '../mixins/update-selection';
import { computed } from 'ember-decorators/object'; // eslint-disable-line

export default Route.extend(updateSelectionMixin, {
  mainMap: service(),
  model(params) {
    return {
      taskInstance: this.store.findRecord('special-purpose-subdistrict', params.id),
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
