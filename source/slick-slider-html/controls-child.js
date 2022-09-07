"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlsSetChild = ControlsSetChild;

var _PannelUltimateBgControl = require("../common/PannelUltimateBgControl.js");

function ControlsSetChild(args) {

  /* definitions */

  var props = args.propsObject;
  var atts = args.propsObject.attributes;

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
      IconButton = _wp$components.IconButton,
      DropdownMenu = _wp$components.DropdownMenu,
      MenuGroup = _wp$components.MenuGroup,
      MenuItem = _wp$components.MenuItem,
      MenuItemsChoice = _wp$components.MenuItemsChoice;
  var _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect,
      Fragment = _wp$element.Fragment;
  var useSelect = wp.data.useSelect;


  var SectionBlockButtonWide = function SectionBlockButtonWide() {
    return wp.element.createElement(
      "svg",
      { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      wp.element.createElement("rect", { x: "1", y: "5", width: "3", height: "10", fill: "#3498DB" }),
      wp.element.createElement("rect", { x: "16", y: "5", width: "3", height: "10", fill: "#3498DB" }),
      wp.element.createElement("path", { d: "M5 10L8.75 7.40192V12.5981L5 10Z", fill: "#555555" }),
      wp.element.createElement("path", { d: "M15 10L11.25 12.5981L11.25 7.40192L15 10Z", fill: "#555555" })
    );
  };
  var SectionBlockButtonVertical = function SectionBlockButtonVertical() {
    return wp.element.createElement(
      "svg",
      { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      wp.element.createElement("rect", { x: "3", y: "11", width: "2", height: "14", transform: "rotate(-90 3 11)", fill: "#3498DB" }),
      wp.element.createElement("path", { d: "M10 17L7.40192 13.25H12.5981L10 17Z", fill: "#555555" }),
      wp.element.createElement("path", { d: "M10 3L12.5981 6.75L7.40192 6.75L10 3Z", fill: "#555555" })
    );
  };
  var SectionBlockButtonHorizontal = function SectionBlockButtonHorizontal() {
    return wp.element.createElement(
      "svg",
      { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      wp.element.createElement("rect", { x: "9", y: "3", width: "2", height: "14", fill: "#3498DB" }),
      wp.element.createElement("path", { d: "M17 10L13.25 12.5981V7.40192L17 10Z", fill: "#555555" }),
      wp.element.createElement("path", { d: "M3 10L6.75 7.40192L6.75 12.5981L3 10Z", fill: "#555555" })
    );
  };

  var innerColumnsCount = useSelect(function (select) {
    return select('core/block-editor').getBlocks(props.clientId).length;
  }, [props.clientId]);

  function addEmptyColumn() {
    var block = wp.blocks.createBlock('k-blocks-bs-grid-child/k-blocks', {});
    wp.data.dispatch('core/block-editor').insertBlocks(block, innerColumnsCount, props.clientId);
  }

  /* output */

  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      BlockControls,
      null,
      wp.element.createElement(
        Toolbar,
        null,
        wp.element.createElement(ToolbarButton, {
          icon: SectionBlockButtonWide,
          label: __("Make content conteiner full width"),
          onClick: function onClick() {
            props.setAttributes({ isSectionWide: !atts.isSectionWide });
          },
          isActive: !atts.isSectionWide
        })
      ),
      wp.element.createElement(
        Toolbar,
        null,
        wp.element.createElement(
          DropdownMenu,
          { icon: SectionBlockButtonHorizontal, label: "Select a direction" },
          function (_ref) {
            var onClose = _ref.onClose;
            return wp.element.createElement(
              MenuGroup,
              { label: "Horizontal Align Colums" },
              wp.element.createElement(MenuItemsChoice, {
                choices: [{ value: 'justify-content-start', label: 'Start (default)' }, { value: 'justify-content-center', label: 'Center' }, { value: 'justify-content-end', label: 'End' }, { value: 'justify-content-between', label: 'Beetween' }, { value: 'justify-content-around', label: 'Around' }],
                value: props.attributes.halign,
                onSelect: function onSelect(mode) {
                  return props.setAttributes({ halign: mode });
                }

              })
            );
          }
        )
      ),
      wp.element.createElement(
        Toolbar,
        null,
        wp.element.createElement(
          DropdownMenu,
          { icon: SectionBlockButtonVertical, label: "Select a direction" },
          function (_ref2) {
            var onClose = _ref2.onClose;
            return wp.element.createElement(
              MenuGroup,
              { label: "Vertical Align Colums" },
              wp.element.createElement(MenuItemsChoice, {
                choices: [{ value: 'align-items-stretch', label: 'Stretch (default)' }, { value: 'align-items-start', label: 'Top' }, { value: 'align-items-center', label: 'Center' }, { value: 'align-items-end', label: 'Bottom' }],
                value: props.attributes.valign,
                onSelect: function onSelect(mode) {
                  return props.setAttributes({ valign: mode });
                }

              })
            );
          }
        )
      ),
      wp.element.createElement(
        Toolbar,
        null,
        wp.element.createElement(ToolbarButton, {
          icon: "plus-alt2",
          title: "Add new column",
          onClick: addEmptyColumn
        })
      )
    ),
    wp.element.createElement(
      InspectorControls,
      null,
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