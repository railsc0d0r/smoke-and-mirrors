import Ember from 'ember';
import layout from './template';
import getOwner from 'ember-getowner-polyfill';
import scheduler from '../../-private/scheduler';

const {
  Component
  } = Ember;

/*
 A vertical-item is one that intelligently removes
 its content when scrolled off the screen vertically.

 @class vertical-item
 @extends Ember.Component
 @namespace Ember
 **/
export default Component.extend({
  layout,
  tagName: 'vertical-item',
  itemTagName: 'vertical-item',

  alwaysRemeasure: false,

  classNames: ['vertical-item'],

  next() {
    const element = this.element.nextElementSibling;

    return element ? this.registry[element.id] : null;
  },

  prev() {
    const element = this.element.previousElementSibling;

    return element ? this.registry[element.id] : null;
  },

  contentInserted: false,
  _contentInserted: false,

  /*
   * Reveal the Element
   *
   */
  show() {
    if (this._contentInserted) {
      return;
    }

    this._contentInserted = true;
    this.set('contentInserted', true);
    if (this.alwaysRemeasure) {
      this.element.style.height = undefined;
    }
    scheduler.schedule('measure', () => {
      // this.updateHeight();
    });
  },

  /*
   * Destroy the View/Element
   *
   * Unlike the other methods, this method
   * can be called from any state. It is still not valid
   * to transition to it directly, but willDestroy uses it
   * to teardown the instance.
   */
  cull() {
    if (!this._contentInserted) {
      return;
    }

    // this.updateHeight();
    if (this.alwaysRemeasure && this.element) {
      if (this.setHeightProp) {
        this.element.style.height = `${this.satellite.geography.height}px`;
      }
      let defaultHeight = this.get('defaultHeight');

      if (typeof defaultHeight === 'number') {
        defaultHeight = `${defaultHeight}px`;
      }

      this.element.style.minHeight = defaultHeight;
    }

    this._contentInserted = false;
    this.set('contentInserted', false);
  },

  _hasRealHeight: false,
  updateHeight() {
    const needsRealHeight = this.alwaysRemeasure;

    if (needsRealHeight) {
      this.satellite.resize();
    }
  },

  defaultHeight: 75,
  index: undefined,
  content: undefined,
  setHeightProp: false,

  radar: undefined,
  satellite: undefined,
  registry: undefined,
  registerSatellite(satellite) {
    this.satellite = satellite;
  },
  unregisterSatellite() {
    this.satellite = undefined;
  },

  _height: 0,

  didInsertElement() {
    this.radar.register(this);
  },

  willInsertElement() {
    this._super();
    const _height = this.get('_height');
    let defaultHeight = this.get('defaultHeight');

    if (typeof defaultHeight === 'number') {
      defaultHeight = `${defaultHeight}px`;
    }

    let height = _height ? `${_height}px` : defaultHeight;

    this.element.style.minHeight = defaultHeight;

    if (this.setHeightProp) {
      this.element.style.height = height;
    }
  },

  willDestroyElement() {
    this._super();
    this.set('contentInserted', false);
    this._contentInserted = false;

    if (this.radar) {
      this.radar.unregister(this);
    }
    this.satellite = undefined;
  },

  willDestroy() {
    this._super(...arguments);
    this.unregister(this);

    if (this.radar) {
      this.radar.unregister(this);
    }
    this.satellite = undefined;
    this.registry = undefined;
  },

  init() {
    this._super();
    this.registry = getOwner(this).lookup('-view-registry:main');
    let tag = this.get('itemTagName');

    this.set('tagName', tag);
    tag = tag.toLowerCase();

    const isTableChild = tag === 'tr' || tag === 'td' || tag === 'th';

    // table children don't respect min-height :'(
    this.setHeightProp = isTableChild || !this.alwaysRemeasure;
    this.register(this);
  }
});
