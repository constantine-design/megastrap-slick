'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _commonFunctions = require('../common/common-functions.js');

var _PannelUltimateBgControl = require('../common/PannelUltimateBgControl.js');

var _controlsParent = require('./controls-parent.js');

var _controlsChild = require('./controls-child.js');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/** @jsx wp.element.createElement */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var _wp = wp,
    serverSideRender = _wp.serverSideRender;
var _wp$blockEditor = wp.blockEditor,
    BlockVerticalAlignmentToolbar = _wp$blockEditor.BlockVerticalAlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
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
    Placeholder = _wp$components.Placeholder,
    IsolatedEventContainer = _wp$components.IsolatedEventContainer;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect,
    Fragment = _wp$element.Fragment;
var useSelect = wp.data.useSelect;


var BlockIcon = function BlockIcon() {
  return wp.element.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    wp.element.createElement('path', { d: 'M7 6H1V12H7V6Z', fill: 'white', stroke: '#3498DB', 'stroke-width': '2' }),
    wp.element.createElement('path', { d: 'M20 5H9V7H20V5Z', fill: '#C4C4C4' }),
    wp.element.createElement('path', { d: 'M20 11H9V13H20V11Z', fill: '#C4C4C4' }),
    wp.element.createElement('path', { d: 'M20 8H9V10H20V8Z', fill: '#C4C4C4' }),
    wp.element.createElement('path', { d: 'M14 16L11 17.7321V14.2679L14 16Z', fill: '#1E1E1E' }),
    wp.element.createElement('path', { d: 'M6 16L9 14.2679V17.7321L6 16Z', fill: '#1E1E1E' })
  );
};
var ChildBlockIcon = function ChildBlockIcon() {
  return wp.element.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    wp.element.createElement('path', { d: 'M19 3H1V17H19V3Z', fill: 'white', stroke: '#3498DB', 'stroke-width': '2' }),
    wp.element.createElement('path', { d: 'M13 12H7V14H13V12Z', fill: '#C4C4C4' }),
    wp.element.createElement('path', { d: 'M14 6H6V8H14V6Z', fill: '#C4C4C4' }),
    wp.element.createElement('path', { d: 'M16 9H4V11H16V9Z', fill: '#C4C4C4' })
  );
};

/*============================================================================*/
/*                              PARENTBLOCK BEGIN                             */
/*============================================================================*/

var withCustomClassName = wp.compose.createHigherOrderComponent(function (BlockListBlock) {
  return function (props) {
    if (props.name !== 'k-blocks-slick-html-child/k-blocks') {
      return wp.element.createElement(BlockListBlock, props);
    }
    return wp.element.createElement(
      'div',
      { 'class': 'k-blocks-slick-html-slide-content d-block' },
      wp.element.createElement(BlockListBlock, _extends({}, props, { className: "d-block" }))
    );
  };
}, 'withClientIdClassName');
wp.hooks.addFilter('editor.BlockListBlock', 'example/filter-blocks', withCustomClassName);

registerBlockType('k-blocks-slick-html-parent/k-blocks', {
  title: __('HTML Slick Slider'),
  icon: BlockIcon,
  category: 'k-common-blocks',
  //parent: [ 'core/post-content' ], // only root block
  supports: { anchor: true, html: false },
  attributes: {
    className: { type: 'string', default: '' },
    anchor: { type: 'string' },
    blockID: { type: 'string', default: '' },
    minHeight: { type: 'integer', default: 7 },
    /* slider */
    slidesToShow: { type: 'integer', default: 1 },
    slidesToScroll: { type: 'integer', default: 1 },
    arrows: { type: 'boolean', default: true },
    dots: { type: 'boolean', default: false },
    infinite: { type: 'boolean', default: false },
    autoplay: { type: 'boolean', default: false },
    fade: { type: 'boolean', default: false },
    pauseOnHover: { type: 'boolean', default: false },
    pauseOnFocus: { type: 'boolean', default: false },
    /* controls */
    arrowsColorClass: { type: 'string', default: '' },
    arrowsSizeClass: { type: 'string', default: '' },
    arrowsPositionClass: { type: 'string', default: '' },
    dotsColorClass: { type: 'string', default: '' },
    dotsSizeClass: { type: 'string', default: '' },
    dotsPositionClass: { type: 'string', default: '' },
    centerMode: { type: 'boolean', default: false },
    adaptiveHeight: { type: 'boolean', default: false },
    variableWidth: { type: 'boolean', default: false },
    isControlsCustom: { type: 'string', default: '' },
    /* responsive */
    responsiveSM: { type: 'boolean', default: false },
    slidesToShowSM: { type: 'number', default: 1 },
    slidesToScrollSM: { type: 'number', default: 1 },
    responsiveMD: { type: 'boolean', default: false },
    slidesToShowMD: { type: 'number', default: 1 },
    slidesToScrollMD: { type: 'number', default: 1 },
    responsiveLG: { type: 'boolean', default: false },
    slidesToShowLG: { type: 'number', default: 1 },
    slidesToScrollLG: { type: 'number', default: 1 },
    responsiveXL: { type: 'boolean', default: false },
    slidesToShowXL: { type: 'number', default: 1 },
    slidesToScrollXL: { type: 'number', default: 1 },
    responsiveXXL: { type: 'boolean', default: false },
    slidesToShowXXL: { type: 'number', default: 1 },
    slidesToScrollXXL: { type: 'number', default: 1 },
    isUnsilkOnMobile: { type: 'boolean', default: false },
    /* slides padding */
    slidePadding: { type: 'number', default: 0 },
    isSlidePaddingAlign: { type: 'boolean', default: false }
  },

  /*=============================================================================*/
  /*                                    EDIT                                     */
  /*=============================================================================*/

  edit: function edit(props) {

    var att = props.attributes;

    var _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        editMode = _useState2[0],
        setEditMode = _useState2[1];

    var innerBlockCount = useSelect(function (select) {
      return select('core/block-editor').getBlocks(props.clientId).length;
    }, [props.clientId]);
    if (props.attributes.blockID != props.clientId) props.setAttributes({ blockID: props.clientId });
    props.editMode = editMode;
    props.toggleEditMode = function () {
      setEditMode(!editMode);
    };
    props.setEditMode = function (par) {
      setEditMode(par);
    };

    var allInnerBlocks = wp.data.select('core/block-editor').getBlocks(props.clientId);
    var sliderHtml = "";
    allInnerBlocks.forEach(function (el) {
      return sliderHtml += wp.blocks.getBlockContent(el);
    });

    var styleHtml = '\n      #html-gallery-' + att.blockID + ' .k-blocks-slick-html-slide .k-blocks-slick-html-inner-content.row,\n      .slider-edit-' + att.blockID + ' .k-blocks-slick-html-slide>div>.k-bs-grid>.block-editor-inner-blocks>.block-editor-block-list__layout,\n      .slider-edit-' + att.blockID + ' .k-blocks-slick-html-slide>.k-bs-grid>.block-editor-inner-blocks>.block-editor-block-list__layout {\n        min-height: ' + att.minHeight + 'rem;\n      }\n    ';
    styleHtml += getDynamicStyleHtml(props);

    var styleHtmlEdit = '\n      .slider-edit-' + att.blockID + '>div>.block-editor-block-list__layout {\n      \tdisplay: flex;\n        flex-wrap: wrap;\n        justify-content: start;\n        padding-left: 8px;\n        padding-right: 8px;\n      }\n      .slider-edit-' + att.blockID + '>div>div>.k-blocks-slick-html-slide-content.d-block {\n        flex: 0 0 calc( 100% / ' + att.slidesToShow + ' - 16px );\n        max-width: calc( 100% / ' + att.slidesToShow + ' - 16px );\n        margin-left: 8px;\n        margin-right: 8px;\n      }\n      .slider-edit-' + att.blockID + '>div>div>.block-list-appender.wp-block {\n        width: calc( 100% - 16px );\n        margin-left: 8px;\n        margin-right: 8px;\n      }\n    ';

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(_controlsParent.ControlsSetParent, { propsObject: props }),
      wp.element.createElement(
        'div',
        { className: "k-blocks-slick-html-parent backend " + att.className + " " + (editMode ? "editmode" : "viewmode") + " " + controlClasses(props) },
        !innerBlockCount && wp.element.createElement(Placeholder, {
          icon: BlockIcon,
          className: editMode ? "slick-placeholder-edit" : "",
          label: 'Add new slide',
          style: { minHeight: att.minHeight + 'Rem' }
        }),
        editMode && wp.element.createElement(
          Fragment,
          null,
          wp.element.createElement(
            'div',
            { className: "slider-edit-" + att.blockID },
            wp.element.createElement(InnerBlocks, {
              allowedBlocks: ['k-blocks-slick-html-child/k-blocks'],
              orientation: att.slidesToShow != 1 ? "horizontal" : "vertiсal" // horizontal/vertiсal
              , renderAppender: editMode ? function () {
                return wp.element.createElement(InnerBlocks.ButtonBlockAppender, null);
              } : false
            })
          ),
          wp.element.createElement('style', { dangerouslySetInnerHTML: { __html: styleHtml } }),
          wp.element.createElement('style', { dangerouslySetInnerHTML: { __html: styleHtmlEdit } })
        ),
        !editMode && wp.element.createElement(
          Fragment,
          null,
          wp.element.createElement('div', {
            className: "k-slider",
            id: "html-gallery-" + att.blockID,
            dangerouslySetInnerHTML: { __html: sliderHtml }
          }),
          wp.element.createElement('style', { dangerouslySetInnerHTML: { __html: styleHtml } })
        )
      )
    );
  },


  /*===========================================================================*/
  /*                                   SAVE                                    */
  /*===========================================================================*/

  save: function save(props) {

    var att = props.attributes;

    var responsiveOptionsRaw = '';
    if (att.isUnsilkOnMobile) responsiveOptionsRaw += '\n      { breakpoint: 1, settings: \'unslick\' },\n      { breakpoint: 480, settings: { slidesToShow: ' + att.slidesToShow + ', slidesToScroll: ' + att.slidesToScroll + ', } },';
    if (att.responsiveSM) responsiveOptionsRaw += '\n      { breakpoint: 576, settings: { slidesToShow: ' + att.slidesToShowSM + ', slidesToScroll: ' + att.slidesToScrollSM + ', } },';
    if (att.responsiveMD) responsiveOptionsRaw += '\n      { breakpoint: 768, settings: { slidesToShow: ' + att.slidesToShowMD + ', slidesToScroll: ' + att.slidesToScrollMD + ', } },';
    if (att.responsiveLG) responsiveOptionsRaw += '\n      { breakpoint: 992, settings: { slidesToShow: ' + att.slidesToShowLG + ', slidesToScroll: ' + att.slidesToScrollLG + ', } },';
    if (att.responsiveXL) responsiveOptionsRaw += '\n      { breakpoint: 1200, settings: { slidesToShow: ' + att.slidesToShowXL + ', slidesToScroll: ' + att.slidesToScrollXL + ', } },';
    if (att.responsiveXXL) responsiveOptionsRaw += '\n      { breakpoint: 1400, settings: { slidesToShow: ' + att.slidesToShowXXL + ', slidesToScroll: ' + att.slidesToScrollXXL + ', } },';

    var frontEndScript = '\n    jQuery(document).ready(function($) {\n      var options = {\n        slidesToShow: ' + props.attributes.slidesToShow + ',\n        slidesToScroll: ' + props.attributes.slidesToScroll + ',\n        arrows: ' + props.attributes.arrows + ',\n        dots: ' + props.attributes.dots + ',\n        infinite: ' + props.attributes.infinite + ',\n        autoplay: ' + props.attributes.autoplay + ',\n        centerMode: ' + att.centerMode + ',\n        pauseOnHover: ' + props.attributes.pauseOnHover + ',\n        adaptiveHeight: ' + att.adaptiveHeight + ',\n        fade: ' + props.attributes.fade + ',\n        mobileFirst: true,\n        responsive: [' + responsiveOptionsRaw + ']\n      }\n      $("#html-gallery-' + att.blockID + '").not(\'.slick-initialized\').slick(options);\n      $(window).on( \'resize\', function() {\n        $("#html-gallery-' + att.blockID + '").not(\'.slick-initialized\').slick(options);\n      } );\n    });';

    return wp.element.createElement(
      'div',
      { className: "k-blocks-slick-html-parent html-gallery " + controlClasses(props) },
      wp.element.createElement('style', { dangerouslySetInnerHTML: { __html: "#html-gallery-" + att.blockID + " .k-blocks-slick-html-inner-content.row { min-height: " + att.minHeight + "rem }" } }),
      wp.element.createElement('style', { dangerouslySetInnerHTML: { __html: getDynamicStyleHtml(props) } }),
      wp.element.createElement(
        'div',
        { className: 'k-slider', id: "html-gallery-" + att.blockID },
        wp.element.createElement(InnerBlocks.Content, null)
      ),
      wp.element.createElement('script', { dangerouslySetInnerHTML: { __html: frontEndScript } })
    );
  }
});

/*============================================================================*/
/*                             CHILD BLOCK BEGIN                              */
/*============================================================================*/

function addBlockClass(props) {
  return props.attributes.className ? " " + props.attributes.className : "";
};
function addCenterClass(props) {
  return props.attributes.halign ? " " + props.attributes.halign : "";
};
function addValignClass(props) {
  return props.attributes.valign ? " " + props.attributes.valign : "";
};
var ConditionalWrapper = function ConditionalWrapper(_ref) {
  var condition = _ref.condition,
      wrapper = _ref.wrapper,
      children = _ref.children;
  return condition ? wrapper(children) : children;
};

registerBlockType('k-blocks-slick-html-child/k-blocks', {
  title: __('Slide'),
  icon: ChildBlockIcon,
  category: 'k-common-blocks',
  parent: ['k-blocks-slick-html-parent'],
  supports: { html: false, className: true, anchor: true },
  attributes: {
    className: { type: 'string', default: '' },
    anchor: { type: 'string', default: '' },
    /* positioning */
    minHeight: { type: 'integer', default: 10 },
    halign: { type: 'boolean', default: 'justify-content-center' },
    valign: { type: 'string', default: 'align-items-center' },
    noGutters: { type: 'boolean', default: true },
    isSectionWide: { type: 'boolean', default: true },
    /* color */
    color: { type: 'string', default: '' },
    bgColor: { type: 'string', default: '' },
    bgGradient: { type: 'string', default: false },
    bgImage: { type: 'string' },
    bgImageId: { type: 'integer', default: 0 },
    bgImageType: { type: 'string', default: 'cover' },
    bgImageFocal: { type: 'object', default: { x: '0.5', y: '0.5' } }
  },

  /*=============================================================================*/
  /*                                    EDIT                                     */
  /*=============================================================================*/

  edit: function edit(props) {

    var atts = props.attributes;
    var innerBlockCount = useSelect(function (select) {
      return select('core/block-editor').getBlocks(props.clientId).length;
    }, [props.clientId]);

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(_controlsChild.ControlsSetChild, { propsObject: props }),
      wp.element.createElement(
        'div',
        {
          className: "k-blocks-slick-html-slide",
          style: {
            color: atts.color ? atts.color : 'inherit',
            backgroundColor: atts.bgColor ? atts.bgColor : 'transparent',
            backgroundImage: (atts.bgGradient ? atts.bgGradient : 'none') + ',' + (atts.bgImage ? "url('" + atts.bgImage + "')" : 'none'),
            backgroundSize: atts.bgImageType == 'cover' ? 'auto, cover' : 'auto, contain',
            backgroundRepeat: atts.bgImageType != 'repeat' ? 'no-repeat,no-repeat' : 'no-repeat,repeat',
            backgroundPosition: atts.bgImageType != 'repeat' ? 'center,' + atts.bgImageFocal.x * 100 + '% ' + atts.bgImageFocal.y * 100 + '%' : 'center,center'
          }
        },
        wp.element.createElement(
          'div',
          { 'class': atts.isSectionWide ? "k-bs-slider-block-no-container" : "k-bs-slider-block-container container" },
          wp.element.createElement(
            'div',
            { className: "k-bs-grid g-0" + addBlockClass(props) + " grid-align-" + props.attributes.valign + (props.attributes.halign ? " has-" + props.attributes.halign : "") },
            wp.element.createElement(InnerBlocks, {
              allowedBlocks: ['k-blocks-bs-grid-child/k-blocks'],
              renderAppender: false,
              orientation: 'horizontal',
              template: [['k-blocks-bs-grid-child/k-blocks', {}]]
            })
          )
        )
      )
    );
  },


  /*===========================================================================*/
  /*                                   SAVE                                    */
  /*===========================================================================*/

  save: function save(props) {

    var atts = props.attributes;
    var addClass = props.attributes.className ? " " + props.attributes.className : "";
    var guttersClass = props.attributes.noGutters ? " no-gutters" : "";

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(
        'div',
        {
          className: "k-blocks-slick-html-slide" + addBlockClass(props),
          style: {
            color: atts.color ? atts.color : 'inherit',
            backgroundColor: atts.bgColor ? atts.bgColor : 'transparent',
            backgroundImage: (atts.bgGradient ? atts.bgGradient : 'none') + ',' + (atts.bgImage ? "url('" + atts.bgImage + "')" : 'none'),
            backgroundSize: atts.bgImageType == 'cover' ? 'auto, cover' : 'auto, contain',
            backgroundRepeat: atts.bgImageType != 'repeat' ? 'no-repeat,no-repeat' : 'no-repeat,repeat',
            backgroundPosition: atts.bgImageType != 'repeat' ? 'center,' + atts.bgImageFocal.x * 100 + '% ' + atts.bgImageFocal.y * 100 + '%' : 'center,center'
          }
        },
        wp.element.createElement(
          ConditionalWrapper,
          {
            condition: !atts.isSectionWide,
            wrapper: function wrapper(children) {
              return wp.element.createElement(
                'div',
                { className: "k-bs-slider-block-container container clearfix" },
                ' ',
                children,
                ' '
              );
            }
          },
          wp.element.createElement(
            'div',
            { className: "k-blocks-slick-html-inner-content row g-0" + addCenterClass(props) + addValignClass(props) },
            wp.element.createElement(InnerBlocks.Content, null)
          )
        )
      )
    );
  }
});

function controlClasses(props) {
  var att = props.attributes;
  var allClasses = [];
  if (!att.isControlsCustom) {
    if (att.arrows) allClasses = [].concat(_toConsumableArray(allClasses), ['has-arrows', att.arrowsColorClass, att.arrowsPositionClass, att.arrowsSizeClass]);
    if (att.dots) allClasses = [].concat(_toConsumableArray(allClasses), ['has-dots', att.dotsColorClass, att.dotsSizeClass, att.dotsPositionClass]);
  } else {
    allClasses = ['custom-controls', att.isControlsCustom];
  }
  return allClasses.filter(function (e) {
    return e !== '';
  }).join(' ');
}

function getDynamicStyleHtml(props) {
  var att = props.attributes;
  var dynamicStyle = '\n    #html-gallery-' + att.blockID + ' .k-blocks-slick-html-slide {\n      margin-left: ' + att.slidePadding / 2 + 'rem;\n      margin-right: ' + att.slidePadding / 2 + 'rem;\n    }';
  if (att.isSlidePaddingAlign) dynamicStyle += '\n    #html-gallery-' + att.blockID + ':not(.slick-initialized),\n    #html-gallery-' + att.blockID + ' .slick-list {\n      margin-left: -' + att.slidePadding / 2 + 'rem;\n      margin-right: -' + att.slidePadding / 2 + 'rem;\n    }';
  /* not initialized galley show */
  dynamicStyle += '\n    #html-gallery-' + att.blockID + ':not(.slick-initialized) { display:flex; overflow-x:hidden; }\n    #html-gallery-' + att.blockID + ':not(.slick-initialized) .k-blocks-slick-html-slide {\n      width:calc(100%/' + att.slidesToShow + ' - ' + att.slidePadding + 'rem); flex-shrink: 0; flex-grow: 0;\n    }';
  if (att.isUnsilkOnMobile) dynamicStyle += '\n    @media (max-width: 480px) {\n      #html-gallery-' + att.blockID + ':not(.slick-initialized) { overflow-x:auto; }\n    }';
  if (att.responsiveSM) dynamicStyle += '\n    @media (min-width: 576px) {\n      #html-gallery-' + att.blockID + ':not(.slick-initialized) .k-blocks-slick-html-slide { width:calc(100%/' + att.slidesToShowSM + ' - ' + att.slidePadding + 'rem); }\n    }';
  if (att.responsiveMD) dynamicStyle += '\n    @media (min-width: 768px) {\n      #html-gallery-' + att.blockID + ':not(.slick-initialized) .k-blocks-slick-html-slide { width:calc(100%/' + att.slidesToShowMD + ' - ' + att.slidePadding + 'rem); }\n    }';
  if (att.responsiveLG) dynamicStyle += '\n    @media (min-width: 992px) {\n      #html-gallery-' + att.blockID + ':not(.slick-initialized) .k-blocks-slick-html-slide { width:calc(100%/' + att.slidesToShowLG + ' - ' + att.slidePadding + 'rem); }\n    }';
  if (att.responsiveXL) dynamicStyle += '\n    @media (min-width: 1200px) {\n      #html-gallery-' + att.blockID + ':not(.slick-initialized) .k-blocks-slick-html-slide { width:calc(100%/' + att.slidesToShowXL + ' - ' + att.slidePadding + 'rem); }\n    }';
  if (att.responsiveXXL) dynamicStyle += '\n    @media (min-width: 1400px) {\n      #html-gallery-' + att.blockID + ':not(.slick-initialized) .k-blocks-slick-html-slide { width:calc(100%/' + att.slidesToShowXXL + ' - ' + att.slidePadding + 'rem); }\n    }';
  return dynamicStyle;
}
//# sourceMappingURL=block.js.map