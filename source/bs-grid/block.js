'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _attributes;

var _commonFunctions = require('../common/common-functions.js');

var _PannelUltimateBgControl = require('../common/PannelUltimateBgControl.js');

var _controlsChild = require('./controls-child.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsx wp.element.createElement */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockEdit = _wp$blockEditor.BlockEdit;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    Fragment = _wp$element.Fragment,
    useEffect = _wp$element.useEffect;
var useSelect = wp.data.useSelect;
var Button = wp.components.Button;


var ColBlockIcon = function ColBlockIcon() {
  return wp.element.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    wp.element.createElement('path', { d: 'M19 2H1V18H19V2Z', fill: '#C4C4C4' }),
    wp.element.createElement('path', { d: 'M13 3H7V17H13V3Z', fill: 'white', stroke: '#3498DB', 'stroke-width': '2' })
  );
};

function addBlockClass(props) {
  return props.attributes.className ? " " + props.attributes.className : "";
};
function addCenterClass(props) {
  return props.attributes.halign ? " " + props.attributes.halign : "";
};
function addValignClass(props) {
  return props.attributes.valign ? " " + props.attributes.valign : "";
};

/*-----------------------------------------------------------------------------*/
/*                              CHILD BLOCK BEGIN                              */
/*-----------------------------------------------------------------------------*/

/* common functions */
function bsGetColClasses(props) {
  var classes = "";
  if (props.attributes.colBreakpoint != 0) classes += " col-" + props.attributes.colBreakpoint;
  if (props.attributes.colSmBreakpoint != 0) classes += " col-sm-" + props.attributes.colSmBreakpoint;
  if (props.attributes.colMdBreakpoint != 0) classes += " col-md-" + props.attributes.colMdBreakpoint;
  if (props.attributes.colLgBreakpoint != 0) classes += " col-lg-" + props.attributes.colLgBreakpoint;
  if (props.attributes.colXlBreakpoint != 0) classes += " col-xl-" + props.attributes.colXlBreakpoint;
  if (classes == "") classes = " col";
  return classes;
}

registerBlockType('k-blocks-bs-grid-child/k-blocks', {
  title: __('Bootstrap Column'),
  icon: ColBlockIcon,
  category: 'k-common-blocks',
  parent: ['k-blocks-bs-grid-child'],
  supports: { html: false, className: false },
  attributes: (_attributes = {
    className: { type: 'string', default: '' },
    /* breakpoints */
    colBreakpoint: { type: 'number', default: 0 },
    colSmBreakpoint: { type: 'number', default: 0 }
  }, _defineProperty(_attributes, 'colSmBreakpoint', { type: 'number', default: 0 }), _defineProperty(_attributes, 'colMdBreakpoint', { type: 'number', default: 0 }), _defineProperty(_attributes, 'colLgBreakpoint', { type: 'number', default: 0 }), _defineProperty(_attributes, 'colXlBreakpoint', { type: 'number', default: 0 }), _defineProperty(_attributes, 'color', { type: 'string', default: 'initial' }), _defineProperty(_attributes, 'bgColor', { type: 'string', default: 'transparent' }), _defineProperty(_attributes, 'bgGradient', { type: 'string', default: false }), _defineProperty(_attributes, 'bgImage', { type: 'string' }), _defineProperty(_attributes, 'bgImageId', { type: 'integer', default: 0 }), _defineProperty(_attributes, 'bgImageType', { type: 'string', default: 'cover' }), _defineProperty(_attributes, 'bgImageFocal', { type: 'object', default: { x: '0.5', y: '0.5' } }), _attributes),

  /*-----------------------------------------------------------------------------*/
  /*                                EDIT CHILD                                   */
  /*-----------------------------------------------------------------------------*/

  edit: function edit(props) {

    var hasInnerBlocks = useSelect(function (select) {
      return select('core/block-editor').getBlocks(props.clientId).length > 0;
    }, [props.clientId]);
    var atts = props.attributes;

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(_controlsChild.ControlsChild, { propsObject: props }),
      wp.element.createElement('div', {
        'class': 'k-bs-grid-admin-color-wrapper',
        style: {
          color: atts.color,
          backgroundColor: atts.bgColor,
          backgroundImage: (atts.bgGradient ? atts.bgGradient : 'none') + ',' + (atts.bgImage ? "url('" + atts.bgImage + "')" : 'none'),
          backgroundSize: atts.bgImageType == 'cover' ? 'auto, cover' : atts.bgImageType == 'contain' ? 'auto, contain' : 'auto, auto',
          backgroundRepeat: atts.bgImageType != 'repeat' ? 'no-repeat,no-repeat' : 'no-repeat,repeat',
          backgroundPosition: atts.bgImageType != 'repeat' ? 'center,' + atts.bgImageFocal.x * 100 + '% ' + atts.bgImageFocal.y * 100 + '%' : 'center,center',
          position: 'absolute',
          top: '0', left: '0', right: '0', bottom: '0'
        }
      }),
      wp.element.createElement(
        'span',
        { style: { color: atts.color } },
        wp.element.createElement(InnerBlocks, {
          renderAppender: hasInnerBlocks ? undefined : function () {
            return wp.element.createElement(InnerBlocks.ButtonBlockAppender, null);
          }
        })
      )
    );
  },


  /*-----------------------------------------------------------------------------*/
  /*                                SAVE CHILD                                   */
  /*-----------------------------------------------------------------------------*/

  save: function save(props) {

    var atts = props.attributes;

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(
        'div',
        {
          className: "k-bs-grid-col position-relative" + addBlockClass(props) + bsGetColClasses(props),
          style: {
            color: atts.color,
            backgroundColor: atts.bgColor,
            backgroundImage: (atts.bgGradient ? atts.bgGradient : 'none') + ',' + (atts.bgImage ? "url('" + atts.bgImage + "')" : 'none'),
            backgroundSize: atts.bgImageType == 'cover' ? 'auto, cover' : atts.bgImageType == 'contain' ? 'auto, contain' : 'auto, auto',
            backgroundRepeat: atts.bgImageType != 'repeat' ? 'no-repeat,no-repeat' : 'no-repeat,repeat',
            backgroundPosition: atts.bgImageType != 'repeat' ? 'center,' + atts.bgImageFocal.x * 100 + '% ' + atts.bgImageFocal.y * 100 + '%' : 'center,center'
          }
        },
        wp.element.createElement(InnerBlocks.Content, null)
      )
    );
  }
});

/*=============================================================================*/
/*                ADD CLASS TO NESTED BLOCK WRAPPER WITH FILTER                */
/*=============================================================================*/

var withCustomClassName = wp.compose.createHigherOrderComponent(function (BlockListBlock) {
  return function (props) {
    if (props.name !== 'k-blocks-bs-grid-child/k-blocks') return wp.element.createElement(BlockListBlock, props);
    var atts = props.attributes;
    return wp.element.createElement(BlockListBlock, _extends({}, props, { className: "k-bs-grid-admin-col mx-0" + bsGetColClasses(props) + addBlockClass(props) }));
  };
}, 'withClientIdClassName');

wp.hooks.addFilter('editor.BlockListBlock', 'column/filter-blocks', withCustomClassName);
//# sourceMappingURL=block.js.map