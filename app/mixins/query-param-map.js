import Mixin from '@ember/object/mixin';
import { alias } from '@ember/object/computed';

export default Mixin.create({
  init(...args) {
    this._super(...args);

    const qps = this.qps;
    const queryParam = this['query-param'];
    const queryParamBoundKey = this.queryParamBoundKey;

    if (qps) {
      this.set(
        queryParamBoundKey,
        alias(`qps.${queryParam}`),
      );
    }
  },
});
