"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.LinkToolbar = LinkToolbar;
/** @jsx wp.element.createElement */

/* LINK TOOLBAR
-----------------------------------------------------*/

/* usage all arguments required

// required attributes for toolbar: LinkToolbar
url: { type: 'string', default: '#', },
opensInNewTab: { type: 'boolean', default: false, },

//Link toolber for BlockControls use it as a pattern
<LinkToolbar
	value={ { url: props.attributes.url, opensInNewTab: props.attributes.opensInNewTab } }
	onChange={ ( nextValue ) => {
		if ( nextValue.url != undefined ) props.setAttributes( { url : nextValue.url} );
		if ( nextValue.opensInNewTab != undefined ) props.setAttributes( { opensInNewTab: nextValue.opensInNewTab} );
	} }
/>

*/

function LinkToolbar(args) {
	var __ = wp.i18n.__;
	var _wp$components = wp.components,
	    Toolbar = _wp$components.Toolbar,
	    ToolbarButton = _wp$components.ToolbarButton,
	    Popover = _wp$components.Popover;
	var _wp$blockEditor = wp.blockEditor,
	    __experimentalLinkControl = _wp$blockEditor.__experimentalLinkControl,
	    URLPicker = _wp$blockEditor.URLPicker;

	var LinkControl = __experimentalLinkControl;
	var _wp$element = wp.element,
	    useState = _wp$element.useState,
	    Fragment = _wp$element.Fragment;

	var _useState = useState(false),
	    _useState2 = _slicedToArray(_useState, 2),
	    isPoupoverOpen = _useState2[0],
	    setPoupoverOpen = _useState2[1];

	var ImgLink = function ImgLink() {
		return wp.element.createElement(
			"svg",
			{ width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true", focusable: "false" },
			wp.element.createElement("path", { d: "M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z" })
		);
	};
	return wp.element.createElement(
		Fragment,
		null,
		wp.element.createElement(ToolbarButton, {
			icon: ImgLink // dashicons analog is "admin-links"
			, label: __("Link"),
			onClick: function onClick() {
				setPoupoverOpen(true);
			}
		}),
		isPoupoverOpen && wp.element.createElement(
			Popover,
			{ onClose: function onClose() {
					setPoupoverOpen(false);
				}, position: "bottom center" },
			wp.element.createElement(__experimentalLinkControl, {
				className: "wp-block-navigation-link__inline-link-input",
				value: args.value,
				onChange: args.onChange
			})
		)
	);
}