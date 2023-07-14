'use strict';

var _commonFunctions = require('../common/common-functions.js');

var _PannelUltimateBgControl = require('../common/PannelUltimateBgControl.js');

var _controls = require('./controls.js');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    arrows: { type: 'boolean', default: true },
    dots: { type: 'boolean', default: false },
    infinite: { type: 'boolean', default: false },
    autoplay: { type: 'boolean', default: false },
    centerMode: { type: 'boolean', default: false },
    adaptiveHeight: { type: 'boolean', default: false },
    variableWidth: { type: 'boolean', default: false },
    pauseOnHover: { type: 'boolean', default: false },
    fade: { type: 'boolean', default: false },
    sliderImageSize: { type: 'string', default: 'LARGE' },
    openInModal: { type: 'boolean', default: false },
    modalImageSize: { type: 'string', default: 'FULL' },
    showCaption: { type: 'boolean', default: false },
    captionAsUrl: { type: 'boolean', default: false },
    /* breakponts */
    slidesToShow: { type: 'number', default: 3 },
    slidesToScroll: { type: 'number', default: 1 },
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
    /* controlls classes */
    arrowsColorClass: { type: 'string', default: '' },
    arrowsSizeClass: { type: 'string', default: '' },
    arrowsPositionClass: { type: 'string', default: '' },
    dotsColorClass: { type: 'string', default: '' },
    dotsSizeClass: { type: 'string', default: '' },
    dotsPositionClass: { type: 'string', default: '' },
    isControlsCustom: { type: 'string', default: '' },
    /* slides padding */
    slidePadding: { type: 'number', default: 0 },
    isSlidePaddingAlign: { type: 'boolean', default: false }
  },

  /*=============================================================================*/
  /*                                    EDIT                                     */
  /*=============================================================================*/

  edit: function edit(props) {

    var att = props.attributes;

    if (att.blockID != props.clientId) props.setAttributes({ blockID: props.clientId });

    /* items spaces */
    var dynamicStyle = getDynamicStyle(props);

    return wp.element.createElement(
      'div',
      { className: "img-gallery-wrapper img-gallery-wrapper-" + att.blockID + " " + att.className + " " + controlClasses(props) },
      wp.element.createElement(_controls.Controls, { propsObject: props }),
      att.mediaID == 0 && wp.element.createElement(
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
        className: 'k-slider',
        id: "img-gallery-" + props.clientId, dangerouslySetInnerHTML: { __html: sliderInnerContent(props, true) }
      }),
      wp.element.createElement('style', { dangerouslySetInnerHTML: { __html: dynamicStyle } })
    );
  },


  /*===========================================================================*/
  /*                                   SAVE                                    */
  /*===========================================================================*/

  save: function save(props) {

    var att = props.attributes;

    var responsiveOptionsRaw = '';
    if (att.isUnsilkOnMobile) responsiveOptionsRaw += '\n          { breakpoint: 1, settings: \'unslick\' },\n          { breakpoint: 480, settings: { slidesToShow: ' + att.slidesToShow + ', slidesToScroll: ' + att.slidesToScroll + ', } },';
    if (att.responsiveSM) responsiveOptionsRaw += '\n          { breakpoint: 576, settings: { slidesToShow: ' + att.slidesToShowSM + ', slidesToScroll: ' + att.slidesToScrollSM + ', } },';
    if (att.responsiveMD) responsiveOptionsRaw += '\n          { breakpoint: 768, settings: { slidesToShow: ' + att.slidesToShowMD + ', slidesToScroll: ' + att.slidesToScrollMD + ', } },';
    if (att.responsiveLG) responsiveOptionsRaw += '\n          { breakpoint: 992, settings: { slidesToShow: ' + att.slidesToShowLG + ', slidesToScroll: ' + att.slidesToScrollLG + ', } },';
    if (att.responsiveXL) responsiveOptionsRaw += '\n          { breakpoint: 1200, settings: { slidesToShow: ' + att.slidesToShowXL + ', slidesToScroll: ' + att.slidesToScrollXL + ', } },';
    if (att.responsiveXXL) responsiveOptionsRaw += '\n          { breakpoint: 1400, settings: { slidesToShow: ' + att.slidesToShowXXL + ', slidesToScroll: ' + att.slidesToScrollXXL + ', } },';

    var frontEndScript = '\n          jQuery(document).ready(function($) {\n            var options = {\n              slidesToShow: ' + att.slidesToShow + ',\n              slidesToScroll: ' + att.slidesToScroll + ',\n              arrows: ' + att.arrows + ',\n              dots: ' + att.dots + ',\n              infinite: ' + att.infinite + ',\n              autoplay: ' + att.autoplay + ',\n              centerMode: ' + att.centerMode + ',\n              adaptiveHeight: ' + att.adaptiveHeight + ',\n              pauseOnHover: ' + att.pauseOnHover + ',\n              variableWidth: ' + att.variableWidth + ',\n              fade: ' + att.fade + ',\n              mobileFirst: true,\n              responsive: [' + responsiveOptionsRaw + ']\n            };\n            $(\'#img-gallery-' + att.blockID + '\').not(\'.slick-initialized\').slick(options);\n            $(window).on( \'resize\', function() {\n              $(\'#img-gallery-' + att.blockID + '\').not(\'.slick-initialized\').slick(options);\n            } );\n          });\n        ';

    var dynamicStyle = getDynamicStyle(props);

    return wp.element.createElement(
      'div',
      { className: "img-gallery-wrapper img-gallery-wrapper-" + att.blockID + " " + controlClasses(props) },
      wp.element.createElement('style', { dangerouslySetInnerHTML: { __html: dynamicStyle } }),
      wp.element.createElement('div', {
        className: 'k-slider',
        id: "img-gallery-" + att.blockID, dangerouslySetInnerHTML: { __html: sliderInnerContent(props) }
      }),
      wp.element.createElement('script', { dangerouslySetInnerHTML: { __html: frontEndScript } })
    );
  }
});

/*===========================================================================*/
/*                            SLIDE CONTENT OUTPUT                           */
/*===========================================================================*/

var isValidUrl = function isValidUrl(urlString) {
  var urlPattern = new RegExp('^https?:\\/\\/' + // validate protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
  '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
  return !!urlPattern.test(urlString);
};

function sliderInnerContent(props) {
  var edit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var att = props.attributes;
  var output = '';
  for (var i = 0; i < att.mediaID.length; i++) {
    output += '<div class="img-gallery-item"><figure class="k-block-slick-classic-item ' + (att.showCaption ? 'with-caption' : 'no-caption') + '">';
    var imgUrl = att.mediaTHUMB[i];
    switch (att.sliderImageSize) {
      case 'FULL':
        imgUrl = att.mediaURL[i];break;
      case 'MEDIUM':
        imgUrl = att.mediaMEDIUM[i];break;
      case 'LARGE':
        imgUrl = att.mediaLARGE[i];break;
    }
    if (att.mediaCAPTION[i] && isValidUrl(att.mediaCAPTION[i]) && att.captionAsUrl) {
      output += '<a href="' + (edit ? 'javascript:void(0)' : att.mediaCAPTION[i]) + '">';
    }
    output += '<img class="k-block-slick-classic-image" src="' + imgUrl + '" alt="' + att.mediaALT[i] + '">';
    if (att.mediaCAPTION[i] && att.showCaption) {
      output += '<figcaption class="k-block-slick-classic-caption">' + att.mediaCAPTION[i] + '</figcaption>';
    }
    if (att.mediaCAPTION[i] && isValidUrl(att.mediaCAPTION[i]) && att.captionAsUrl) {
      output += '</a>';
    }
    output += '</figure></div>';
  }
  return output;
}

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

function getDynamicStyle(props) {
  var att = props.attributes;
  var dynamicStyle = '\n    #img-gallery-' + att.blockID + ' .img-gallery-item {\n      padding-left: ' + att.slidePadding / 2 + 'rem;\n      padding-right: ' + att.slidePadding / 2 + 'rem;\n    }';
  if (att.isSlidePaddingAlign) dynamicStyle += '\n    #img-gallery-' + att.blockID + ':not(.slick-initialized),\n    #img-gallery-' + att.blockID + ' .slick-list {\n      margin-left: -' + att.slidePadding / 2 + 'rem;\n      margin-right: -' + att.slidePadding / 2 + 'rem;\n    }';
  /* not initialized galley show */
  dynamicStyle += '\n    #img-gallery-' + att.blockID + ':not(.slick-initialized) { display:flex; overflow-x:hidden; }\n    #img-gallery-' + att.blockID + ':not(.slick-initialized) .img-gallery-item {\n      width:calc(100%/' + att.slidesToShow + '); flex-shrink: 0; flex-grow: 0;\n    }';
  if (att.isUnsilkOnMobile) dynamicStyle += '\n    @media (max-width: 480px) {\n      #img-gallery-' + att.blockID + ':not(.slick-initialized) { overflow-x:auto; }\n    }';
  if (att.responsiveSM) dynamicStyle += '\n    @media (min-width: 576px) {\n      #img-gallery-' + att.blockID + ':not(.slick-initialized) .img-gallery-item { width:calc(100%/' + att.slidesToShowSM + '); }\n    }';
  if (att.responsiveMD) dynamicStyle += '\n    @media (min-width: 768px) {\n      #img-gallery-' + att.blockID + ':not(.slick-initialized) .img-gallery-item { width:calc(100%/' + att.slidesToShowMD + '); }\n    }';
  if (att.responsiveLG) dynamicStyle += '\n    @media (min-width: 992px) {\n      #img-gallery-' + att.blockID + ':not(.slick-initialized) .img-gallery-item { width:calc(100%/' + att.slidesToShowLG + '); }\n    }';
  if (att.responsiveXL) dynamicStyle += '\n    @media (min-width: 1200px) {\n      #img-gallery-' + att.blockID + ':not(.slick-initialized) .img-gallery-item { width:calc(100%/' + att.slidesToShowXL + '); }\n    }';
  if (att.responsiveXXL) dynamicStyle += '\n    @media (min-width: 1400px) {\n      #img-gallery-' + att.blockID + ':not(.slick-initialized) .img-gallery-item { width:calc(100%/' + att.slidesToShowXXL + '); }\n    }';
  return dynamicStyle;
}
//# sourceMappingURL=block.js.map