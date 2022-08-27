'use strict';

var _commonFunctions = require('../common/common-functions.js');

var _PannelUltimateBgControl = require('../common/PannelUltimateBgControl.js');

var _controls = require('./controls.js');

/** @jsx wp.element.createElement */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var _wp$blockEditor2 = wp.blockEditor,
    BlockControls = _wp$blockEditor2.BlockControls,
    InspectorControls = _wp$blockEditor2.InspectorControls;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect,
    Fragment = _wp$element.Fragment;
var Button = wp.components.Button;


//import { Slider }  from "../react-slick.min.js";


var SectionBlockIcon = function SectionBlockIcon() {
  return wp.element.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    wp.element.createElement('path', { d: 'M20 2H0V5H20V2Z', fill: '#C4C4C4' }),
    wp.element.createElement('path', { d: 'M20 15H0V18H20V15Z', fill: '#C4C4C4' }),
    wp.element.createElement('path', { d: 'M5 7H1V13H5V7Z', fill: 'white', stroke: '#3498DB', 'stroke-width': '2' }),
    wp.element.createElement('path', { d: 'M12 7H8V13H12V7Z', fill: 'white', stroke: '#3498DB', 'stroke-width': '2' }),
    wp.element.createElement('path', { d: 'M19 7H15V13H19V7Z', fill: 'white', stroke: '#3498DB', 'stroke-width': '2' })
  );
};

/*============================================================================*/
/*                          Classik Slick Block Begin                         */
/*============================================================================*/

registerBlockType('k-blocks-sclick-slider-classic/k-blocks', {
  title: __('Slic Slider Classic'),
  icon: SectionBlockIcon,
  category: 'k-common-blocks',
  //parent: [ 'core/post-content' ], // only root block
  supports: { align: ['full'], anchor: true, html: false },
  attributes: {
    align: { type: 'string', default: '' },
    valign: { type: 'string', default: 'center' },
    className: { type: 'string', default: '' },
    anchor: { type: 'string' },
    /* data */
    mediaID: { type: 'array', default: [] },
    mediaURL: { type: 'array', default: [] },
    mediaTHUMB: { type: 'array', default: [] },
    mediaMEDIUM: { type: 'array', default: [] },
    mediaLARGE: { type: 'array', default: [] },
    mediaCAPTION: { type: 'array', default: [] },
    mediaALT: { type: 'array', default: [] },
    blockID: { type: 'string', default: '' },
    /* options */
    slidesToShow: { type: 'number', default: 3 },
    slidesToScroll: { type: 'number', default: 1 },
    arrows: { type: 'boolean', default: true },
    dots: { type: 'boolean', default: false },
    infinite: { type: 'boolean', default: false },
    autoplay: { type: 'boolean', default: false },
    centerMode: { type: 'boolean', default: false },
    adaptiveHeight: { type: 'boolean', default: false },
    variableWidth: { type: 'boolean', default: false },
    fade: { type: 'boolean', default: false },
    sliderImageSize: { type: 'string', default: 'LARGE' },
    openInModal: { type: 'boolean', default: false },
    modalImageSize: { type: 'string', default: 'FULL' },
    showCaption: { type: 'boolean', default: false },
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
    /* controlls classes */
    arrowsColorClass: { type: 'string', default: '' },
    arrowsSizeClass: { type: 'string', default: '' },
    arrowsPositionClass: { type: 'string', default: '' },
    dotsColorClass: { type: 'string', default: '' },
    dotsSizeClass: { type: 'string', default: '' },
    dotsPositionClass: { type: 'string', default: 'arrows-inner' },
    slidePadding: { type: 'number', default: 0 }
  },

  /*=============================================================================*/
  /*                                    EDIT                                     */
  /*=============================================================================*/

  edit: function edit(props) {

    if (props.attributes.blockID != props.clientId) props.setAttributes({ blockID: props.clientId });

    var dynamicStyle = '\n      .img-gallery-wrapper-' + props.attributes.blockID + ' .slick-slide {\n        padding-left: ' + props.attributes.slidePadding / 2 + 'rem;\n        padding-right: ' + props.attributes.slidePadding / 2 + 'rem;\n      }\n      .img-gallery-wrapper-' + props.attributes.blockID + ' .slick-slider {\n        padding-left: ' + props.attributes.slidePadding / 2 + 'rem;\n        padding-right: ' + props.attributes.slidePadding / 2 + 'rem;\n      }\n    ';

    return wp.element.createElement(
      'div',
      { className: "img-gallery-wrapper-" + props.attributes.blockID + " " + props.attributes.className + " " + controlClasses(props) },
      wp.element.createElement(_controls.Controls, { propsObject: props }),
      props.attributes.mediaID == 0 && wp.element.createElement(
        'div',
        { className: 'components-placeholder is-large' },
        wp.element.createElement(
          'div',
          { className: 'components-placeholder__label' },
          ' ',
          __('Slick Slider Gallery'),
          ' '
        ),
        wp.element.createElement(
          'div',
          { className: 'components-placeholder__instructions' },
          __('Select gallery items by pressing "Edit Gallery" button.')
        )
      ),
      wp.element.createElement('div', {
        className: props.attributes.arrows ? 'slick-arrows' : '',
        id: "img-gallery-" + props.clientId, dangerouslySetInnerHTML: { __html: sliderInnerContent(props, true) }
      }),
      wp.element.createElement('style', { dangerouslySetInnerHTML: { __html: dynamicStyle } })
    );
  },


  /*===========================================================================*/
  /*                                   SAVE                                    */
  /*===========================================================================*/

  save: function save(props) {
    var responsiveOptionsRaw = '';
    if (props.attributes.responsiveSM) {
      responsiveOptionsRaw += '\n          {\n            breakpoint: 576,\n            settings: {\n              slidesToShow: ' + props.attributes.slidesToShowSM + ',\n              slidesToScroll: ' + props.attributes.slidesToScrollSM + ',\n            }\n          },';
    }
    if (props.attributes.responsiveMD) {
      responsiveOptionsRaw += '\n          {\n            breakpoint: 768,\n            settings: {\n              slidesToShow: ' + props.attributes.slidesToShowMD + ',\n              slidesToScroll: ' + props.attributes.slidesToScrollMD + ',\n            }\n          },';
    }
    if (props.attributes.responsiveLG) {
      responsiveOptionsRaw += '\n          {\n            breakpoint: 960,\n            settings: {\n              slidesToShow: ' + props.attributes.slidesToShowLG + ',\n              slidesToScroll: ' + props.attributes.slidesToScrollLG + ',\n            }\n          },';
    }
    if (props.attributes.responsiveXL) {
      responsiveOptionsRaw += '\n          {\n            breakpoint: 1140,\n            settings: {\n              slidesToShow: ' + props.attributes.slidesToShowXL + ',\n              slidesToScroll: ' + props.attributes.slidesToScrollXL + ',\n            }\n          },';
    }
    var frontEndScript = '\n          jQuery(document).ready(function($) {\n            jQuery(document).on(\'click\', \'#img-gallery-' + props.attributes.blockID + ' [data-toggle="lightbox"]\', function(event) {\n                event.preventDefault();\n                jQuery(this).ekkoLightbox();\n            });\n            $(\'#img-gallery-' + props.attributes.blockID + '\').not(\'.slick-initialized\').slick({\n              slidesToShow: ' + props.attributes.slidesToShow + ',\n              slidesToScroll: ' + props.attributes.slidesToScroll + ',\n              arrows: ' + props.attributes.arrows + ',\n              dots: ' + props.attributes.dots + ',\n              infinite: ' + props.attributes.infinite + ',\n              autoplay: ' + props.attributes.autoplay + ',\n              centerMode: ' + props.attributes.centerMode + ',\n              adaptiveHeight: ' + props.attributes.adaptiveHeight + ',\n              variableWidth: ' + props.attributes.variableWidth + ',\n              fade: ' + props.attributes.fade + ',\n              responsive: [\n                ' + responsiveOptionsRaw + '\n              ]\n            });\n          });\n        ';

    var dynamicStyle = '\n          .img-gallery-wrapper-' + props.attributes.blockID + ' .slick-slide {\n            padding-left: ' + props.attributes.slidePadding / 2 + 'rem;\n            padding-right: ' + props.attributes.slidePadding / 2 + 'rem;\n          }\n          .img-gallery-wrapper-' + props.attributes.blockID + ' .slick-slider {\n            padding-left: ' + props.attributes.slidePadding / 2 + 'rem;\n            padding-right: ' + props.attributes.slidePadding / 2 + 'rem;\n          }\n        ';

    return wp.element.createElement(
      'div',
      { className: "img-gallery-wrapper-" + props.attributes.blockID + " " + controlClasses(props) },
      wp.element.createElement('div', {
        className: props.attributes.arrows ? 'slick-arrows' : '',
        id: "img-gallery-" + props.attributes.blockID, dangerouslySetInnerHTML: { __html: sliderInnerContent(props) }
      }),
      wp.element.createElement('script', { dangerouslySetInnerHTML: { __html: frontEndScript } }),
      wp.element.createElement('style', { dangerouslySetInnerHTML: { __html: dynamicStyle } })
    );
  }
});

/*===========================================================================*/
/*                            SLIDE CONTENT OUTPUT                           */
/*===========================================================================*/

function sliderInnerContent(props) {
  var edit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var output = '';
  for (var i = 0; i < props.attributes.mediaID.length; i++) {
    output += '<div><figure class="k-block-slick-classic-item ' + (props.attributes.showCaption ? 'with-caption' : 'no-caption') + '">';
    var imgUrl = props.attributes.mediaTHUMB[i];
    switch (props.attributes.sliderImageSize) {
      case 'FULL':
        imgUrl = props.attributes.mediaURL[i];break;
      case 'MEDIUM':
        imgUrl = props.attributes.mediaMEDIUM[i];break;
      case 'LARGE':
        imgUrl = props.attributes.mediaLARGE[i];break;
    }
    if (props.attributes.openInModal && !edit) {
      var imgModalUrl = props.attributes.mediaURL[i];
      switch (props.attributes.modalImageSize) {
        case 'THUMB':
          imgModalUrl = props.attributes.mediaTHUMB[i];break;
        case 'MEDIUM':
          imgModalUrl = props.attributes.mediaMEDIUM[i];break;
        case 'LARGE':
          imgModalUrl = props.attributes.mediaLARGE[i];break;
      }
      output += '<a href="' + imgModalUrl + '" data-toggle="lightbox" data-gallery="k-block-slider-gallery">';
    }
    output += '<img class="k-block-slick-classic-image" src="' + imgUrl + '" alt="' + props.attributes.mediaALT[i] + '">';
    if (props.attributes.mediaCAPTION[i] && props.attributes.showCaption) {
      output += '<figcaption class="k-block-slick-classic-caption">' + props.attributes.mediaCAPTION[i] + '</figcaption>';
    }
    if (props.attributes.openInModal && !edit) {
      output += '</a>';
    }
    output += '</figure></div>';
  }
  return output;
}

function controlClasses(props) {
  var att = props.attributes;
  var allClasses = [att.arrowsColorClass, att.arrowsSizeClass, att.arrowsPositionClass, att.dotsColorClass, att.dotsSizeClass, att.dotsPositionClass];
  return allClasses.filter(function (e) {
    return e !== '';
  }).join(' ');
}
//# sourceMappingURL=block.js.map