'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderControlsPannel = SliderControlsPannel;
function SliderControlsPannel(_ref) {
  var arrows = _ref.arrows,
      arrowsColorClass = _ref.arrowsColorClass,
      setArrowsColorClass = _ref.setArrowsColorClass,
      arrowsSizeClass = _ref.arrowsSizeClass,
      setArrowsSizeClass = _ref.setArrowsSizeClass,
      arrowsPositionClass = _ref.arrowsPositionClass,
      setArrowsPositionClass = _ref.setArrowsPositionClass,
      dots = _ref.dots,
      dotsColorClass = _ref.dotsColorClass,
      setDotsColorClass = _ref.setDotsColorClass,
      dotsSizeClass = _ref.dotsSizeClass,
      setDotsSizeClass = _ref.setDotsSizeClass,
      dotsPositionClass = _ref.dotsPositionClass,
      setDotsPositionClass = _ref.setDotsPositionClass,
      isControlsCustom = _ref.isControlsCustom,
      setIsControlsCustom = _ref.setIsControlsCustom;
  var __ = wp.i18n.__;
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
      Notice = _wp$components.Notice,
      ToggleControl = _wp$components.ToggleControl,
      __experimentalRadioGroup = _wp$components.__experimentalRadioGroup,
      __experimentalRadio = _wp$components.__experimentalRadio;
  var Fragment = wp.element.Fragment;


  return React.createElement(
    PanelBody,
    { title: __('Control style options'), initialOpen: false },
    arrows && !isControlsCustom && React.createElement(
      Fragment,
      null,
      React.createElement(
        Flex,
        { style: { 'marginBottom': '1rem', 'marginTop': '8px' } },
        React.createElement(
          FlexItem,
          null,
          React.createElement(
            'label',
            { className: 'k-sliderlabel' },
            React.createElement(
              'span',
              { className: 'k-sliderlabel-text' },
              'Arrows Color'
            ),
            React.createElement(ColorIndicator, { colorValue: arrowsColorClass ? "#ffffff" : "#1e1e1e" })
          )
        ),
        React.createElement(
          FlexItem,
          null,
          React.createElement(
            ButtonGroup,
            null,
            React.createElement(
              Button,
              { isSmall: true, className: arrowsColorClass == '' ? 'is-primary' : '', onClick: function onClick() {
                  return setArrowsColorClass("");
                } },
              'Dark'
            ),
            React.createElement(
              Button,
              { isSmall: true, className: arrowsColorClass == 'light-arrows' ? 'is-primary' : '', onClick: function onClick() {
                  return setArrowsColorClass("light-arrows");
                } },
              'Light'
            )
          )
        )
      ),
      React.createElement(
        Flex,
        { style: { 'marginBottom': '8px' } },
        React.createElement(
          FlexItem,
          null,
          React.createElement(
            'label',
            null,
            'Arrow Size'
          )
        ),
        React.createElement(
          FlexItem,
          { style: { width: '78px' } },
          React.createElement(SelectControl, {
            value: arrowsSizeClass,
            options: [{ label: 'Big', value: 'big-arrows' }, { label: 'Medium', value: '' }, { label: 'Small', value: 'small-arrows' }],
            onChange: function onChange(size) {
              return setArrowsSizeClass(size);
            }
          })
        )
      ),
      React.createElement(
        Flex,
        { style: { 'marginBottom': '24px' } },
        React.createElement(
          FlexItem,
          null,
          React.createElement(
            'label',
            null,
            'Arrow Position'
          )
        ),
        React.createElement(
          FlexItem,
          { style: { width: '78px' } },
          React.createElement(SelectControl, {
            value: arrowsPositionClass,
            options: [{ label: 'Outside', value: 'arrows-outer' }, { label: 'Inside', value: 'arrows-inner' }, { label: 'Bottom', value: 'arrows-bottom' }],
            onChange: function onChange(pos) {
              return setArrowsPositionClass(pos);
            }
          })
        )
      )
    ),
    dots && !isControlsCustom && React.createElement(
      Fragment,
      null,
      React.createElement(
        Flex,
        { style: { 'marginBottom': '1rem', 'marginTop': '8px' } },
        React.createElement(
          FlexItem,
          null,
          React.createElement(
            'label',
            { className: 'k-sliderlabel' },
            React.createElement(
              'span',
              { className: 'k-sliderlabel-text' },
              'Dots Color'
            ),
            React.createElement(ColorIndicator, { colorValue: dotsColorClass ? "#ffffff" : "#1e1e1e" })
          )
        ),
        React.createElement(
          FlexItem,
          null,
          React.createElement(
            ButtonGroup,
            null,
            React.createElement(
              Button,
              { isSmall: true, className: dotsColorClass == '' ? 'is-primary' : '', onClick: function onClick() {
                  return setDotsColorClass("");
                } },
              'Dark'
            ),
            React.createElement(
              Button,
              { isSmall: true, className: dotsColorClass == 'light-dots' ? 'is-primary' : '', onClick: function onClick() {
                  return setDotsColorClass("light-dots");
                } },
              'Light'
            )
          )
        )
      ),
      React.createElement(
        Flex,
        { style: { 'marginBottom': '8px' } },
        React.createElement(
          FlexItem,
          null,
          React.createElement(
            'label',
            null,
            'Dots Size'
          )
        ),
        React.createElement(
          FlexItem,
          { style: { width: '78px' } },
          React.createElement(SelectControl, {
            value: dotsSizeClass,
            options: [{ label: 'Big', value: 'big-dots' }, { label: 'Medium', value: '' }, { label: 'Small', value: 'small-dots' }],
            onChange: function onChange(size) {
              return setDotsSizeClass(size);
            }
          })
        )
      ),
      React.createElement(
        Flex,
        { style: { 'marginBottom': '18px' } },
        React.createElement(
          FlexItem,
          { className: 'css-wdf2ti-Wrapper' },
          React.createElement(
            'label',
            null,
            'Dots Position'
          )
        ),
        React.createElement(
          FlexItem,
          { style: { width: '78px' } },
          React.createElement(SelectControl, {
            value: dotsPositionClass,
            options: [{ label: 'Outer', value: '' }, { label: 'Inner', value: 'dots-inner' }],
            onChange: function onChange(pos) {
              return setDotsPositionClass(pos);
            }
          })
        )
      )
    ),
    (dots || arrows) && React.createElement(
      Fragment,
      null,
      isControlsCustom && React.createElement(
        'div',
        { className: 'k-slider-custom-controls' },
        React.createElement(SelectControl, {
          value: isControlsCustom,
          options: [{ label: 'Custom style 1', value: 'custom-controls-1' }, { label: 'Custom style 2', value: 'custom-controls-2' }, { label: 'Custom style 3', value: 'custom-controls-3' }],
          onChange: function onChange(pos) {
            return setIsControlsCustom(pos);
          }
        }),
        React.createElement(
          Notice,
          { status: 'warning', isDismissible: false },
          React.createElement(
            'p',
            null,
            React.createElement(
              'p',
              null,
              React.createElement(
                'u',
                null,
                'Use folowing CSS for styling:'
              )
            ),
            React.createElement(
              'div',
              { style: { fontSize: '12px' } },
              React.createElement(
                'p',
                null,
                React.createElement(
                  'b',
                  null,
                  '.',
                  isControlsCustom,
                  ' .slick-next/.slick-prev'
                ),
                ' - arrows position'
              ),
              React.createElement(
                'p',
                null,
                React.createElement(
                  'b',
                  null,
                  '.',
                  isControlsCustom,
                  ' .slick-next:before/.slick-prev:before'
                ),
                ' - arrows content'
              ),
              React.createElement(
                'p',
                null,
                React.createElement(
                  'b',
                  null,
                  '.',
                  isControlsCustom,
                  ' .slick-dots li button'
                ),
                ' - dots position'
              ),
              React.createElement(
                'p',
                null,
                React.createElement(
                  'b',
                  null,
                  '.',
                  isControlsCustom,
                  ' .slick-dots li button:before'
                ),
                ' - dots content'
              )
            )
          )
        )
      ),
      React.createElement(CheckboxControl, {
        label: 'Custom slider controls',
        checked: isControlsCustom,
        onChange: function onChange() {
          if (isControlsCustom) setIsControlsCustom('');else setIsControlsCustom("custom-controls-1");
        }
      })
    )
  );
}
//# sourceMappingURL=SliderControlsPannel.js.map