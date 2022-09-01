'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlsChild = ControlsChild;

var _PannelUltimateBgControl = require('../common/PannelUltimateBgControl.js');

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
        { title: __('Breakpoints') },
        wp.element.createElement(
          'div',
          { className: 'k-bs-grid-cols-controls' },
          wp.element.createElement(
            Flex,
            { style: { paddingLeft: '0.8rem', paddingRight: '0.8rem' } },
            wp.element.createElement(
              FlexItem,
              { className: 'k-bs-grid-cols-selector', style: { paddingTop: '0.6rem', paddingBottom: '0.6rem' } },
              wp.element.createElement(CheckboxControl, { label: __('Def'), checked: Boolean(atts.colBreakpoint),
                onChange: function onChange() {
                  if (Boolean(atts.colBreakpoint)) props.setAttributes({ colBreakpoint: 0 });else props.setAttributes({ colBreakpoint: 6 });
                }
              })
            ),
            wp.element.createElement(
              FlexBlock,
              { className: 'k-bs-grid-cols-range' },
              Boolean(atts.colBreakpoint) && wp.element.createElement(RangeControl, { value: atts.colBreakpoint, min: 1, max: 12,
                onChange: function onChange(newvalue) {
                  return props.setAttributes({ colBreakpoint: newvalue });
                }
              })
            )
          ),
          wp.element.createElement(
            Flex,
            { style: { paddingLeft: '0.8rem', paddingRight: '0.8rem' } },
            wp.element.createElement(
              FlexItem,
              { className: 'k-bs-grid-cols-selector', style: { paddingTop: '0.6rem', paddingBottom: '0.6rem' } },
              wp.element.createElement(CheckboxControl, { label: "SM", checked: Boolean(atts.colSmBreakpoint),
                onChange: function onChange() {
                  if (Boolean(atts.colSmBreakpoint)) props.setAttributes({ colSmBreakpoint: 0 });else props.setAttributes({ colSmBreakpoint: 6 });
                }
              })
            ),
            wp.element.createElement(
              FlexBlock,
              { className: 'k-bs-grid-cols-range' },
              Boolean(atts.colSmBreakpoint) && wp.element.createElement(RangeControl, { value: atts.colSmBreakpoint, min: 1, max: 12,
                onChange: function onChange(newvalue) {
                  return props.setAttributes({ colSmBreakpoint: newvalue });
                }
              })
            )
          ),
          wp.element.createElement(
            Flex,
            { style: { paddingLeft: '0.8rem', paddingRight: '0.8rem' } },
            wp.element.createElement(
              FlexItem,
              { className: 'k-bs-grid-cols-selector', style: { paddingTop: '0.6rem', paddingBottom: '0.6rem' } },
              wp.element.createElement(CheckboxControl, { label: "MD", checked: Boolean(atts.colMdBreakpoint),
                onChange: function onChange() {
                  if (Boolean(atts.colMdBreakpoint)) props.setAttributes({ colMdBreakpoint: 0 });else props.setAttributes({ colMdBreakpoint: 6 });
                }
              })
            ),
            wp.element.createElement(
              FlexBlock,
              { className: 'k-bs-grid-cols-range' },
              Boolean(atts.colMdBreakpoint) && wp.element.createElement(RangeControl, { value: atts.colMdBreakpoint, min: 1, max: 12,
                onChange: function onChange(newvalue) {
                  return props.setAttributes({ colMdBreakpoint: newvalue });
                }
              })
            )
          ),
          wp.element.createElement(
            Flex,
            { style: { paddingLeft: '0.8rem', paddingRight: '0.8rem' } },
            wp.element.createElement(
              FlexItem,
              { className: 'k-bs-grid-cols-selector', style: { paddingTop: '0.6rem', paddingBottom: '0.6rem' } },
              wp.element.createElement(CheckboxControl, { label: "LG", checked: Boolean(atts.colLgBreakpoint),
                onChange: function onChange() {
                  if (Boolean(atts.colLgBreakpoint)) props.setAttributes({ colLgBreakpoint: 0 });else props.setAttributes({ colLgBreakpoint: 6 });
                }
              })
            ),
            wp.element.createElement(
              FlexBlock,
              { className: 'k-bs-grid-cols-range' },
              Boolean(atts.colLgBreakpoint) && wp.element.createElement(RangeControl, { value: atts.colLgBreakpoint, min: 1, max: 12,
                onChange: function onChange(newvalue) {
                  return props.setAttributes({ colLgBreakpoint: newvalue });
                }
              })
            )
          ),
          wp.element.createElement(
            Flex,
            { style: { paddingLeft: '0.8rem', paddingRight: '0.8rem' } },
            wp.element.createElement(
              FlexItem,
              { className: 'k-bs-grid-cols-selector', style: { paddingTop: '0.6rem', paddingBottom: '0.6rem' } },
              wp.element.createElement(CheckboxControl, { label: "XL", checked: Boolean(atts.colXlBreakpoint),
                onChange: function onChange() {
                  if (Boolean(atts.colXlBreakpoint)) props.setAttributes({ colXlBreakpoint: 0 });else props.setAttributes({ colXlBreakpoint: 6 });
                }
              })
            ),
            wp.element.createElement(
              FlexBlock,
              { className: 'k-bs-grid-cols-range' },
              Boolean(atts.colXlBreakpoint) && wp.element.createElement(RangeControl, { value: atts.colXlBreakpoint, min: 1, max: 12,
                onChange: function onChange(newvalue) {
                  return props.setAttributes({ colXlBreakpoint: newvalue });
                }
              })
            )
          )
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
} /** @jsx wp.element.createElement */
//# sourceMappingURL=controls-child.js.map