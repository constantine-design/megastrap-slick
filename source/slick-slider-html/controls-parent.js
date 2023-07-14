'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlsSetParent = ControlsSetParent;

var _PannelUltimateBgControl = require('../common/PannelUltimateBgControl.js');

var _SliderControlsPannel = require('../common/SliderControlsPannel.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /** @jsx wp.element.createElement */

function ControlsSetParent(args) {

  /* definitions */

  var props = args.propsObject;
  var att = args.propsObject.attributes;

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
      ButtonGroup = _wp$components.ButtonGroup,
      ToolbarGroup = _wp$components.ToolbarGroup,
      Toolbar = _wp$components.Toolbar,
      ToolbarButton = _wp$components.ToolbarButton,
      Dashicon = _wp$components.Dashicon,
      SVG = _wp$components.SVG,
      Path = _wp$components.Path,
      PanelBody = _wp$components.PanelBody,
      PanelRow = _wp$components.PanelRow,
      SelectControl = _wp$components.SelectControl,
      ColorIndicator = _wp$components.ColorIndicator,
      RangeControl = _wp$components.RangeControl,
      Flex = _wp$components.Flex,
      FlexItem = _wp$components.FlexItem,
      FlexBlock = _wp$components.FlexBlock,
      Icon = _wp$components.Icon,
      CheckboxControl = _wp$components.CheckboxControl,
      Disabled = _wp$components.Disabled,
      ToggleControl = _wp$components.ToggleControl,
      __experimentalRadioGroup = _wp$components.__experimentalRadioGroup,
      __experimentalRadio = _wp$components.__experimentalRadio;
  var _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect,
      Fragment = _wp$element.Fragment;
  var useSelect = wp.data.useSelect;


  var slickPath = "#html-gallery-" + att.blockID;
  function stop() {
    jQuery(slickPath + ".slick-initialized").slick('unslick');
  }

  var responsiveOptions = [];
  if (props.attributes.isUnsilkOnMobile) {
    responsiveOptions.push({ breakpoint: 1, settings: 'unslick' });
    responsiveOptions.push({ breakpoint: 480, settings: { slidesToShow: props.attributes.slidesToShow, slidesToScroll: props.attributes.slidesToScroll } });
  }
  if (att.responsiveSM) responsiveOptions.push({ breakpoint: 576, settings: { slidesToShow: att.slidesToShowSM, slidesToScroll: att.slidesToScrollSM } });
  if (att.responsiveMD) responsiveOptions.push({ breakpoint: 768, settings: { slidesToShow: att.slidesToShowMD, slidesToScroll: att.slidesToScrollMD } });
  if (att.responsiveLG) responsiveOptions.push({ breakpoint: 992, settings: { slidesToShow: att.slidesToShowLG, slidesToScroll: att.slidesToScrollLG } });
  if (att.responsiveXL) responsiveOptions.push({ breakpoint: 1200, settings: { slidesToShow: att.slidesToShowXL, slidesToScroll: att.slidesToScrollXL } });
  if (att.responsiveXXL) responsiveOptions.push({ breakpoint: 1400, settings: { slidesToShow: att.slidesToShowXXL, slidesToScroll: att.slidesToScrollXXL } });

  function start() {
    jQuery(slickPath).not('.slick-initialized').slick({
      slidesToShow: att.slidesToShow,
      slidesToScroll: 1,
      arrows: att.arrows,
      dots: att.dots,
      infinite: att.infinite,
      autoplay: att.autoplay,
      fade: att.fade,
      pauseOnHover: att.pauseOnHover,
      pauseOnFocus: att.pauseOnFocus,
      touchMove: false,
      swipeToSlide: false,
      mobileFirst: true,
      responsive: responsiveOptions,
      centerMode: att.centerMode,
      adaptiveHeight: att.adaptiveHeight,
      variableWidth: att.variableWidth
    });
  }
  function prevSlide() {
    jQuery(slickPath).slick('slickPrev');
  }
  function nextSlide() {
    jQuery(slickPath).slick('slickNext');
  }
  function addEmptySlide() {
    var slideProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var block = wp.blocks.createBlock('k-blocks-slick-html-child/k-blocks', slideProps);
    wp.data.dispatch('core/block-editor').insertBlocks(block, 0, props.clientId);
  }
  function setSliderAttribute(attribute, newcontent) {
    props.setAttributes(_defineProperty({}, attribute, newcontent));
    jQuery(slickPath + ".slick-initialized").slick('slickSetOption', _defineProperty({}, attribute, newcontent), true);
  }
  function setRestartAttribute(attribute, newcontent) {
    stop();
    props.setAttributes(_defineProperty({}, attribute, newcontent));
  }

  useEffect(function () {
    if (props.editMode) stop();else start();
  });
  window.addEventListener("resize", function () {
    if (props.editMode) stop();else start();
  });

  /* output */

  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      BlockControls,
      null,
      !props.editMode && wp.element.createElement(
        Toolbar,
        null,
        wp.element.createElement(ToolbarButton, {
          icon: 'arrow-left-alt2',
          title: 'Previous Slide',
          onClick: prevSlide
        }),
        wp.element.createElement(ToolbarButton, {
          icon: 'arrow-right-alt2',
          title: 'Next Slide',
          onClick: nextSlide
        })
      ),
      false && wp.element.createElement(
        Toolbar,
        null,
        wp.element.createElement(ToolbarButton, {
          icon: 'plus-alt2',
          title: 'Add new slide before',
          onClick: addEmptySlide
        })
      ),
      wp.element.createElement(
        Toolbar,
        null,
        wp.element.createElement(
          ToolbarButton,
          {
            icon: 'edit',
            title: 'Edit mode',
            onClick: props.toggleEditMode
          },
          !props.editMode ? __('Edit mode') : __('Preview mode')
        )
      )
    ),
    wp.element.createElement(
      InspectorControls,
      null,
      wp.element.createElement(
        PanelBody,
        { title: __('Slides options'), initialOpen: true },
        wp.element.createElement(
          Button,
          {
            icon: 'edit',
            title: 'Edit mode',
            isSecondary: true,
            style: { marginTop: '0.5rem', marginBottom: '1.5rem', padding: '6px 12px 6px 6px' },
            onClick: props.toggleEditMode,
            isActive: props.editMode
          },
          props.editMode && __('Preview mode'),
          ' ',
          !props.editMode && __('Edit mode')
        ),
        wp.element.createElement(RangeControl, {
          value: att.slidesToShow,
          onChange: function onChange(newval) {
            if (newval != 1) props.setAttributes({ fade: false });
            setSliderAttribute('slidesToShow', newval);
          },
          min: 1,
          max: 12,
          label: __('Default slides to show')
        }),
        wp.element.createElement(RangeControl, {
          value: att.slidesToScroll,
          onChange: function onChange(newval) {
            return setSliderAttribute('slidesToScroll', newval);
          },
          min: 1,
          max: 12,
          label: __('Default slides to scroll')
        }),
        wp.element.createElement(ToggleControl, {
          label: __('Disable slider on mobile'),
          checked: props.attributes.isUnsilkOnMobile,
          onChange: function onChange() {
            return setRestartAttribute('isUnsilkOnMobile', !props.attributes.isUnsilkOnMobile);
          }
        }),
        wp.element.createElement(CheckboxControl, {
          label: __('Add breakpoint' + ' SM'),
          checked: att.responsiveSM,
          onChange: function onChange() {
            if (att.responsiveSM) props.setAttributes({ fade: false });
            setRestartAttribute('responsiveSM', !att.responsiveSM);
          }
        }),
        att.responsiveSM && wp.element.createElement(
          Fragment,
          null,
          wp.element.createElement(RangeControl, {
            beforeIcon: 'columns',
            label: __('Slides to show'),
            value: att.slidesToShowSM,
            onChange: function onChange(newcontent) {
              return setRestartAttribute('slidesToShowSM', newcontent);
            },
            min: 1,
            max: 12
          }),
          wp.element.createElement(RangeControl, {
            beforeIcon: 'share-alt2',
            label: __('Slides to scroll'),
            value: att.slidesToScrollSM,
            onChange: function onChange(newcontent) {
              return setRestartAttribute('slidesToScrollSM', newcontent);
            },
            min: 1,
            max: 12
          })
        ),
        wp.element.createElement(CheckboxControl, {
          label: __('Add breakpoint' + ' MD'),
          checked: att.responsiveMD,
          onChange: function onChange() {
            if (att.responsiveSM) props.setAttributes({ fade: false });
            setRestartAttribute('responsiveMD', !att.responsiveMD);
          }
        }),
        att.responsiveMD && wp.element.createElement(
          Fragment,
          null,
          wp.element.createElement(RangeControl, {
            beforeIcon: 'columns',
            label: __('Slides to show'),
            value: att.slidesToShowMD,
            onChange: function onChange(newcontent) {
              if (att.responsiveSM) props.setAttributes({ fade: false });
              setRestartAttribute('slidesToShowMD', newcontent);
            },
            min: 1,
            max: 12
          }),
          wp.element.createElement(RangeControl, {
            beforeIcon: 'share-alt2',
            label: __('Slides to scroll'),
            value: att.slidesToScrollMD,
            onChange: function onChange(newcontent) {
              return setRestartAttribute('slidesToScrollMD', newcontent);
            },
            min: 1,
            max: 12
          })
        ),
        wp.element.createElement(CheckboxControl, {
          label: __('Add breakpoint' + ' LG'),
          checked: att.responsiveLG,
          onChange: function onChange() {
            if (att.responsiveSM) props.setAttributes({ fade: false });
            setRestartAttribute('responsiveLG', !att.responsiveLG);
          }
        }),
        att.responsiveLG && wp.element.createElement(
          Fragment,
          null,
          wp.element.createElement(RangeControl, {
            beforeIcon: 'columns',
            label: __('Slides to show'),
            value: att.slidesToShowLG,
            onChange: function onChange(newcontent) {
              return setRestartAttribute('slidesToShowLG', newcontent);
            },
            min: 1,
            max: 12
          }),
          wp.element.createElement(RangeControl, {
            beforeIcon: 'share-alt2',
            label: __('Slides to scroll'),
            value: att.slidesToScrollLG,
            onChange: function onChange(newcontent) {
              return setRestartAttribute('slidesToScrollLG', newcontent);
            },
            min: 1,
            max: 12
          })
        ),
        wp.element.createElement(CheckboxControl, {
          label: __('Add breakpoint' + ' XL'),
          checked: att.responsiveXL,
          onChange: function onChange() {
            if (att.responsiveSM) props.setAttributes({ fade: false });
            setRestartAttribute('responsiveXL', !att.responsiveXL);
          }
        }),
        att.responsiveXL && wp.element.createElement(
          Fragment,
          null,
          wp.element.createElement(RangeControl, {
            beforeIcon: 'columns',
            label: __('Slides to show'),
            value: att.slidesToShowXL,
            onChange: function onChange(newcontent) {
              return setRestartAttribute('slidesToShowXL', newcontent);
            },
            min: 1,
            max: 12
          }),
          wp.element.createElement(RangeControl, {
            beforeIcon: 'share-alt2',
            label: __('Slides to scroll'),
            value: att.slidesToScrollXL,
            onChange: function onChange(newcontent) {
              return setRestartAttribute('slidesToScrollXL', newcontent);
            },
            min: 1,
            max: 12
          })
        ),
        wp.element.createElement(CheckboxControl, {
          label: __('Add breakpoint' + ' XXL'),
          checked: att.responsiveXXL,
          onChange: function onChange() {
            if (att.responsiveSM) props.setAttributes({ fade: false });
            setRestartAttribute('responsiveXXL', !att.responsiveXXL);
          }
        }),
        att.responsiveXXL && wp.element.createElement(
          Fragment,
          null,
          wp.element.createElement(RangeControl, {
            beforeIcon: 'columns',
            label: __('Slides to show'),
            value: att.slidesToShowXXL,
            onChange: function onChange(newcontent) {
              return setRestartAttribute('slidesToShowXXL', newcontent);
            },
            min: 1,
            max: 12
          }),
          wp.element.createElement(RangeControl, {
            beforeIcon: 'share-alt2',
            label: __('Slides to scroll'),
            value: att.slidesToScrollXXL,
            onChange: function onChange(newcontent) {
              return setRestartAttribute('slidesToScrollXXL', newcontent);
            },
            min: 1,
            max: 12
          })
        )
      ),
      wp.element.createElement(
        PanelBody,
        { title: __('Slider options'), initialOpen: true },
        wp.element.createElement(
          Fragment,
          null,
          wp.element.createElement(ToggleControl, {
            label: __('Arrows'),
            checked: att.arrows,
            onChange: function onChange() {
              return setSliderAttribute('arrows', !att.arrows);
            }
          }),
          wp.element.createElement(ToggleControl, {
            label: __('Dots'),
            checked: att.dots,
            onChange: function onChange() {
              return setSliderAttribute('dots', !att.dots);
            }
          }),
          wp.element.createElement(ToggleControl, {
            label: __('Infinite'),
            checked: att.infinite,
            onChange: function onChange() {
              return setRestartAttribute('infinite', !att.infinite);
            }
          }),
          wp.element.createElement(ToggleControl, {
            label: __('Autoplay'),
            checked: att.autoplay,
            onChange: function onChange() {
              return setSliderAttribute('autoplay', !att.autoplay);
            }
          }),
          props.attributes.autoplay && wp.element.createElement(
            Fragment,
            null,
            wp.element.createElement(ToggleControl, {
              label: __('Pause Autoplay on Hover'),
              checked: att.pauseOnHover,
              onChange: function onChange() {
                return setSliderAttribute('pauseOnHover', !att.pauseOnHover);
              }
            }),
            wp.element.createElement(ToggleControl, {
              label: __('Pause Autoplay on Focus'),
              checked: att.pauseOnFocus,
              onChange: function onChange() {
                return setSliderAttribute('pauseOnFocus', !att.pauseOnFocus);
              }
            })
          ),
          wp.element.createElement(ToggleControl, {
            label: __('Center Mode'),
            checked: att.centerMode,
            onChange: function onChange() {
              return setRestartAttribute('centerMode', !att.centerMode);
            }
          }),
          wp.element.createElement(ToggleControl, {
            label: __('Adaptive Height'),
            checked: att.adaptiveHeight,
            onChange: function onChange() {
              return setRestartAttribute('adaptiveHeight', !att.adaptiveHeight);
            }
          }),
          wp.element.createElement(ToggleControl, {
            label: __('Fade'),
            checked: att.fade,
            onChange: function onChange() {
              props.setAttributes({ responsiveSM: false, responsiveMD: false, responsiveLG: false, responsiveXL: false, slidesToShow: 1, slidesToScroll: 1 });
              setRestartAttribute('fade', !att.fade);
            }
          })
        )
      ),
      wp.element.createElement(
        PanelBody,
        { title: __('Style options'), initialOpen: false },
        wp.element.createElement(RangeControl, {
          value: att.minHeight,
          onChange: function onChange(newvalue) {
            return props.setAttributes({ minHeight: newvalue });
          },
          min: 0,
          max: 50,
          label: __('Slide body min height' + ' (Rem)'),
          type: 'Rem'
        }),
        wp.element.createElement(RangeControl, {
          value: props.attributes.slidePadding,
          onChange: function onChange(newvalue) {
            return setRestartAttribute('slidePadding', newvalue);
          },
          min: 0,
          max: 12,
          step: 0.01,
          label: __('Margin beetweeen slides (0.01 Rem)')
        }),
        props.attributes.slidePadding != 0 && wp.element.createElement(CheckboxControl, {
          label: __('Align slide padding to edjes'),
          checked: props.attributes.isSlidePaddingAlign,
          onChange: function onChange() {
            return setRestartAttribute('isSlidePaddingAlign', !props.attributes.isSlidePaddingAlign);
          }
        })
      ),
      wp.element.createElement(_SliderControlsPannel.SliderControlsPannel, {
        arrows: att.arrows,
        arrowsColorClass: att.arrowsColorClass,
        setArrowsColorClass: function setArrowsColorClass(val) {
          return props.setAttributes({ arrowsColorClass: val });
        },
        arrowsSizeClass: att.arrowsSizeClass,
        setArrowsSizeClass: function setArrowsSizeClass(size) {
          return props.setAttributes({ arrowsSizeClass: size });
        },
        arrowsPositionClass: att.arrowsPositionClass,
        setArrowsPositionClass: function setArrowsPositionClass(pos) {
          return props.setAttributes({ arrowsPositionClass: pos });
        },
        dots: att.dots,
        dotsColorClass: att.dotsColorClass,
        setDotsColorClass: function setDotsColorClass(val) {
          return props.setAttributes({ dotsColorClass: val });
        },
        dotsSizeClass: att.dotsSizeClass,
        setDotsSizeClass: function setDotsSizeClass(size) {
          return props.setAttributes({ dotsSizeClass: size });
        },
        dotsPositionClass: att.dotsPositionClass,
        setDotsPositionClass: function setDotsPositionClass(pos) {
          return props.setAttributes({ dotsPositionClass: pos });
        },
        isControlsCustom: att.isControlsCustom,
        setIsControlsCustom: function setIsControlsCustom(val) {
          return props.setAttributes({ isControlsCustom: val });
        }
      })
    )
  );
}
//# sourceMappingURL=controls-parent.js.map