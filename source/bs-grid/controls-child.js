'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlsChild = ControlsChild;

var _PannelUltimateBgControl = require('../common/PannelUltimateBgControl.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /** @jsx wp.element.createElement */

function ControlsChild(args) {

  /* definitions */

  var props = args.propsObject;
  var atts = props.attributes;

  var __ = wp.i18n.__;
  var _wp$blockEditor = wp.blockEditor,
      MediaUpload = _wp$blockEditor.MediaUpload,
      MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
      MediaPlaceholder = _wp$blockEditor.MediaPlaceholder,
      MediaReplaceFlow = _wp$blockEditor.MediaReplaceFlow;
  var _wp$blockEditor2 = wp.blockEditor,
      BlockVerticalAlignmentToolbar = _wp$blockEditor2.BlockVerticalAlignmentToolbar,
      BlockControls = _wp$blockEditor2.BlockControls,
      InspectorControls = _wp$blockEditor2.InspectorControls,
      AlignmentToolbar = _wp$blockEditor2.AlignmentToolbar;
  var _wp$components = wp.components,
      Button = _wp$components.Button,
      ToolbarGroup = _wp$components.ToolbarGroup,
      Toolbar = _wp$components.Toolbar,
      ToolbarButton = _wp$components.ToolbarButton,
      Dashicon = _wp$components.Dashicon,
      SVG = _wp$components.SVG,
      Path = _wp$components.Path,
      PanelBody = _wp$components.PanelBody,
      PanelRow = _wp$components.PanelRow,
      SelectControl = _wp$components.SelectControl,
      RangeControl = _wp$components.RangeControl,
      Flex = _wp$components.Flex,
      FlexItem = _wp$components.FlexItem,
      FlexBlock = _wp$components.FlexBlock,
      Icon = _wp$components.Icon,
      CheckboxControl = _wp$components.CheckboxControl,
      Disabled = _wp$components.Disabled;
  var _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect,
      Fragment = _wp$element.Fragment;


  function BsBreakPoint(args) {
    var propName = args.attributeName;
    return wp.element.createElement(
      Flex,
      { style: { paddingLeft: '0.8rem', paddingRight: '0.8rem' } },
      wp.element.createElement(
        FlexItem,
        { style: { paddingTop: '0.5rem', paddingBottom: '0.5rem' } },
        wp.element.createElement(CheckboxControl, {
          label: args.label,
          checked: Boolean(props.attributes[propName]),
          onChange: function onChange(newvalue) {
            if (Boolean(props.attributes[propName])) props.setAttributes(_defineProperty({}, propName, 0));else props.setAttributes(_defineProperty({}, propName, 6));
          }
        })
      ),
      wp.element.createElement(
        FlexBlock,
        null,
        Boolean(props.attributes[propName]) && wp.element.createElement(RangeControl, {
          value: props.attributes[propName],
          onChange: function onChange(newvalue) {
            return props.setAttributes(_defineProperty({}, propName, newvalue));
          },
          min: 1,
          max: 12
        })
      )
    );
  }

  /* output */

  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(BlockControls, null),
    wp.element.createElement(
      InspectorControls,
      null,
      wp.element.createElement(
        PanelBody,
        { title: __('Grid') },
        wp.element.createElement(
          'div',
          { className: 'k-bs-grid-cols-controls' },
          wp.element.createElement(BsBreakPoint, { attributeName: 'colBreakpoint', label: 'XS' }),
          wp.element.createElement(BsBreakPoint, { attributeName: 'colSmBreakpoint', label: 'SM' }),
          wp.element.createElement(BsBreakPoint, { attributeName: 'colMdBreakpoint', label: 'MD' }),
          wp.element.createElement(BsBreakPoint, { attributeName: 'colLgBreakpoint', label: 'LG' }),
          wp.element.createElement(BsBreakPoint, { attributeName: 'colXlBreakpoint', label: 'XL' })
        )
      ),
      wp.element.createElement(_PannelUltimateBgControl.PannelUltimateBgControl
      // first toolbar: color block
      , { colorValue: atts.color,
        onColorChange: function onColorChange(newVal) {
          return props.setAttributes({ color: newVal });
        },
        bgColorValue: atts.bgColor,
        onBgColorChange: function onBgColorChange(newVal) {
          return props.setAttributes({ bgColor: newVal });
        }
        // second toolbar: image block
        , bgImgUrlValue: atts.bgImage,
        bgImgIdValue: atts.bgImageId,
        onBgImgSelect: function onBgImgSelect(newVal) {
          return props.setAttributes({ bgImage: newVal.url, bgImageId: newVal.id });
        },
        onSetDefaultClick: function onSetDefaultClick() {
          return props.setAttributes({ bgImage: "none", bgImageId: 0 });
        }
        // bg focal for second toolbar: optional
        , bgFocalValue: atts.bgImageFocal,
        onBgImageFocalChange: function onBgImageFocalChange(newVal) {
          return props.setAttributes({ bgImageFocal: newVal });
        }
        // bg style for second toolbar: optional
        , bgStyleValue: atts.bgImageType,
        onBgStyleChange: function onBgStyleChange(newVal) {
          return props.setAttributes({ bgImageType: newVal });
        }
        // third toolbar: gradient overlay block
        , gradientOvelayValue: atts.bgGradient,
        onGradientOverlayChange: function onGradientOverlayChange(newVal) {
          return props.setAttributes({ bgGradient: newVal });
        }
      })
    )
  );
}
//# sourceMappingURL=controls-child.js.map